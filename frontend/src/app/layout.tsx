import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ToinFes2026 - 桐蔭祭2026",
  description: "桐蔭コンピュータ部による桐蔭祭2026のゲーム展示サイト",
  keywords: ["桐蔭祭", "ToinFes", "2026", "ゲーム", "桐蔭学園"],
  openGraph: {
    title: "ToinFes2026 - 桐蔭祭2026",
    description: "桐蔭コンピュータ部による桐蔭祭2026のゲーム展示サイト",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const ls = localStorage.getItem('theme'); const sys = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; const t = ls ?? sys; const root = document.documentElement; if (t === 'dark') root.classList.add('dark'); else root.classList.remove('dark'); } catch(_) {} })();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <TooltipProvider delayDuration={200}>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
