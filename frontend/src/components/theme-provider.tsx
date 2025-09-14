"use client";

import * as React from "react";

type Theme = "light" | "dark";

function getSystemPreference(): Theme {
    if (typeof window === "undefined") return "light";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyThemeClass(theme: Theme) {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
}

export const ThemeContext = React.createContext<{
    theme: Theme;
    setTheme: (t: Theme) => void;
}>({ theme: "light", setTheme: () => { } });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = React.useState<Theme>("light");

    React.useEffect(() => {
        const saved = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) as Theme | null;
        const initial = saved ?? getSystemPreference();
        setThemeState(initial);
        applyThemeClass(initial);

        // 変更時のスムーズさのためにトランジション抑制を短時間で適用
        const style = document.createElement("style");
        style.appendChild(
            document.createTextNode("*{transition: none !important}")
        );
        document.head.appendChild(style);
        const timeout = setTimeout(() => {
            document.head.removeChild(style);
        }, 50);
        return () => clearTimeout(timeout);
    }, []);

    const setTheme = React.useCallback((t: Theme) => {
        setThemeState(t);
        if (typeof localStorage !== "undefined") localStorage.setItem("theme", t);
        applyThemeClass(t);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return React.useContext(ThemeContext);
}
