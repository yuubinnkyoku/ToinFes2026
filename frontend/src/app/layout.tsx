import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import "./globals.css";
// 画像は各ページで個別に読み込みます

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "ToinFes2026 - 桐陰祭2026",
  description: "TCA（Toin Computer Association）による桐陰祭2026のゲーム展示サイト",
  keywords: ["桐陰祭", "ToinFes", "2026", "ゲーム", "筑波大学附属高校", "TCA"],
  openGraph: {
    title: "ToinFes2026 - 桐陰祭2026",
    description: "TCA（Toin Computer Association）による桐陰祭2026のゲーム展示サイト",
    images: ["/logo.png"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
