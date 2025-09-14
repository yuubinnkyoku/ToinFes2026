import GamesContent from "@/components/games-content";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ゲーム一覧 - ToinFes2026",
  description: "TCA（Toin Computer Association）が制作したゲームの一覧ページ。桐陰祭2026で展示されるゲームをご覧ください。",
  openGraph: {
    title: "ゲーム一覧 - ToinFes2026",
    description: "TCA（Toin Computer Association）が制作したゲームの一覧ページ。桐陰祭2026で展示されるゲームをご覧ください。",
    type: "website",
  },
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80">
                ToinFes2026
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://toinfes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                公式サイト
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <GamesContent />
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                Instagram
              </a>
              <a
                href="https://toinfes.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                公式サイト
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2026 TCA（Toin Computer Association） All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}