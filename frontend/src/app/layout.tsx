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
    <html lang="ja">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
