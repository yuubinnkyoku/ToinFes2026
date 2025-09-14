"use client";

import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            type="button"
            aria-label="テーマ切替"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </button>
    );
}
