import OfficialLinks from "@/components/common/official-links";
import GamesContent from "@/components/games-content";
import { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/utils";
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
              <Link href="/" className="inline-flex items-center hover:opacity-80">
                <Image src={asset("/logo.png")} alt="TCA ロゴ" width={120} height={32} priority className="h-8 w-auto" />
                <span className="sr-only">ToinFes2026</span>
              </Link>
            </div>
            <OfficialLinks />
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
            <OfficialLinks layout="footer" />
            <p className="text-sm text-muted-foreground">
              © 2026 TCA（Toin Computer Association） All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}