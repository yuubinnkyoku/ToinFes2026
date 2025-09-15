
import type { NextConfig } from "next";

const repoName = "ToinFes2026"; // GitHubリポジトリ名
const isProd = process.env.NODE_ENV === "production";
const base = `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  // 開発時は空、本番（Pages）では "/ToinFes2026" を付与
  basePath: isProd ? base : undefined,
  assetPrefix: isProd ? `${base}/` : undefined,
  // GitHub Pagesで拡張子なしURLを有効にするため
  trailingSlash: true,
  images: {
    // export時は最適化サーバが使えないため、静的配信にする
    unoptimized: true,
  },
  // 他の設定があればここに追加
};

export default nextConfig;
