import OfficialLinks from "@/components/common/official-links";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, Twitter as TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SNSPage() {
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
        <div className="space-y-8">
          {/* Page Title */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">公式SNS</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              桐陰祭とTCAの最新情報をチェックしよう
            </p>
          </div>

          {/* SNS Cards Grid */}
          <div className="grid gap-8 max-w-4xl mx-auto md:grid-cols-2">
            {/* 桐陰祭 公式SNS */}
            <Card className="border-2 border-toinfes/30 bg-toinfes/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-toinfes">桐陰祭 公式SNS</CardTitle>
                <p className="text-muted-foreground">
                  筑波大学附属高校 桐陰祭の最新情報
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-toinfes/60 hover:border-toinfes hover:text-toinfes focus-visible:ring-toinfes/40"
                  >
                    <a
                      href="https://www.toinfes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-5 h-5 text-toinfes" />
                      桐陰祭 公式サイト
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-toinfes/60 hover:border-toinfes hover:text-toinfes focus-visible:ring-toinfes/40"
                  >
                    <a
                      href="https://twitter.com/toin_fes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="w-5 h-5 text-toinfes" />
                      桐陰祭 公式 Twitter
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-toinfes/60 hover:border-toinfes hover:text-toinfes focus-visible:ring-toinfes/40"
                  >
                    <a
                      href="https://www.instagram.com/toin_fes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 text-toinfes" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      桐陰祭 公式 Instagram
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <p>イベント情報・タイムテーブル・当日の様子をお届け</p>
                </div>
              </CardContent>
            </Card>

            {/* TCA 公式SNS */}
            <Card className="border-2 border-tca/30 bg-tca/10">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-tca">TCA 公式SNS</CardTitle>
                <p className="text-muted-foreground">Toin Computer Association の活動情報</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-tca/60 hover:border-tca hover:text-tca focus-visible:ring-tca/40"
                  >
                    <a
                      href="https://toincomputerassociation.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe className="w-5 h-5 text-tca" />
                      TCA 公式サイト
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-tca/60 hover:border-tca hover:text-tca focus-visible:ring-tca/40"
                  >
                    <a
                      href="https://twitter.com/toincomputer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="w-5 h-5 text-tca" />
                      TCA 公式 Twitter
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start gap-3 h-12 border-tca/60 hover:border-tca hover:text-tca focus-visible:ring-tca/40"
                  >
                    <a
                      href="https://www.youtube.com/@toincomputerassociation4379"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5 text-tca" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0.5 7.939 0.5 12 0.5 12s0 4.061.574 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C23.5 16.061 23.5 12 23.5 12s0-4.061-.002-5.814zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                      </svg>
                      TCA 公式 Youtube
                      <ExternalLink className="w-4 h-4 ml-auto opacity-70" />
                    </a>
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <p>ゲーム制作・部活動・技術情報をお届け</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/">ホームに戻る</Link>
            </Button>
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