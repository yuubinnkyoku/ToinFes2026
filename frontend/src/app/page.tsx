import OfficialLinks from "@/components/common/official-links";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-tca/40">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="inline-flex items-center">
                <Image src="/logo.png" alt="TCA ロゴ" width={120} height={32} priority className="h-8 w-auto" />
                <span className="sr-only">ToinFes2026</span>
              </Link>
              <ModeToggle />
            </div>
            <OfficialLinks />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Logo and Title */}
          <div className="space-y-4">
            <div className="mb-4 flex justify-center">
              <Image src="/logo_2.png" alt="TCA ロゴ" width={400} height={120} priority className="h-auto w-auto max-w-full" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">
              桐陰祭2026
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              TCA（Toin Computer Association）による展示ゲームのご紹介
            </p>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">ゲームを体験しよう</h3>
                <p className="text-muted-foreground mb-6">
                  部員が制作したゲームをお楽しみください
                </p>
                <Button asChild size="lg" variant="tca" className="w-full">
                  <Link href="/games">ゲーム一覧を見る</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Event Info */}
          <div className="text-center space-y-2 text-muted-foreground">
            <p>筑波大学附属高校 桐陰祭にて開催</p>
            <p>TCA（Toin Computer Association）展示</p>
          </div>
        </div>
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
