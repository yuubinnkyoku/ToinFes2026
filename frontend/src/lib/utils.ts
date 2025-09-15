import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// GitHub Pages など basePath 配下での配信に対応するためのヘルパー
// 例: asset('/logo.png') -> '/ToinFes2026/logo.png' (本番) / '/logo.png' (開発)
export function asset(path: string): string {
  if (!path) return path;
  // 先頭のスラッシュを強制して正規化
  const p = path.startsWith("/") ? path : `/${path}`;
  // NEXT_PUBLIC_BASE_PATH があればそれを優先、なければ本番はリポジトリ名を既定
  const defaultBase = process.env.NODE_ENV === "production" ? "/ToinFes2026" : "";
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? defaultBase;
  // base が空 or '/' の場合はそのまま返す
  if (!base || base === "/") return p;
  // 末尾/除去して結合（重複スラッシュ防止）
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${normalizedBase}${p}`;
}


