"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Game data - in a real app this would come from an API or database
const games = [
  {
    id: "nekomouth-ranran-run",
    title: "ねこまうすらんらんrun",
    description: "猫のキャラクターが駆け回るエンドレスランナーゲーム。障害物を避けながらできるだけ遠くまで走りましょう！",
    difficulty: "普通",
    thumbnail: "/games/nekomouth-thumbnail.png", // We'll add this later
    tags: ["アクション", "エンドレス", "猫"]
  }
];

export default function GamesContent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">ゲーム一覧</h1>
        <p className="text-lg text-muted-foreground">
          TCA（Toin Computer Association）が制作したゲームをお楽しみください
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                type="text"
                placeholder="ゲームを検索..."
                className="pl-10 focus:animate-jelly"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </TooltipTrigger>
            <TooltipContent>キーワードでタイトル・説明・タグを検索できます</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Search Results Count */}
      {searchTerm && (
        <div className="text-center text-muted-foreground">
          {filteredGames.length > 0
            ? `${filteredGames.length}件のゲームが見つかりました`
            : "該当するゲームが見つかりませんでした"
          }
        </div>
      )}

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game) => (
          <Card key={game.id} className="hover:shadow-lg transition-shadow hover:animate-jelly">
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">ゲーム画像</span>
              </div>
              <CardTitle className="text-xl">{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">難易度:</span>
                  <span className="font-medium">{game.difficulty}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag) => (
                    <Tooltip key={tag}>
                      <TooltipTrigger asChild>
                        <span
                          className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground hover:animate-jelly"
                        >
                          {tag}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{`タグ: ${tag}`}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <Button asChild className="w-full hover:animate-jelly active:animate-jelly">
                  <Link href={`/games/${game.id}`}>詳細を見る</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results Message */}
      {searchTerm && filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">ゲームが見つかりませんでした</h3>
          <p className="text-muted-foreground mb-4">
            検索キーワードを変更して再度お試しください
          </p>
          <Button
            variant="outline"
            onClick={() => setSearchTerm("")}
          >
            検索をクリア
          </Button>
        </div>
      )}

      {/* Back to Top */}
      <div className="text-center">
        <Button asChild variant="outline">
          <Link href="/">トップページに戻る</Link>
        </Button>
      </div>
    </div>
  );
}