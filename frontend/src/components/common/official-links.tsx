import Link from "next/link";

export type OfficialLinksProps = {
    className?: string;
    layout?: "header" | "footer";
};

/**
 * ヘッダー/フッターで使う公式リンク群の共通コンポーネント
 * - 公式SNS（/sns への内部リンク）
 * - 桐陰祭 公式サイト（https://www.toinfes.com/）
 * - TCA 公式サイト（https://toincomputerassociation.github.io/）
 */
export function OfficialLinks({ className = "", layout = "header" }: OfficialLinksProps) {
    const baseClass = layout === "footer" ? "flex justify-center space-x-6" : "flex items-center space-x-4";
    return (
        <div className={`${baseClass} ${className}`.trim()}>
            <Link href="/sns" className="text-muted-foreground hover:text-tca">
                公式SNS
            </Link>
            <a
                href="https://www.toinfes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tca"
            >
                桐陰祭 公式サイト
            </a>
            <a
                href="https://toincomputerassociation.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-tca"
            >
                TCA 公式サイト
            </a>
        </div>
    );
}

export default OfficialLinks;
