
import type { NextConfig } from "next";

const repoName = "ToinFes2026"; // GitHubリポジトリ名
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/" + repoName,
  assetPrefix: "/" + repoName + "/",
  // 他の設定があればここに追加
};

export default nextConfig;
