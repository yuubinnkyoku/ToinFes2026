# Implementation Plan: ToinFes2026 Website (TCA Games)

**Branch**: `001-toinfes2025-2026-ui` | **Date**: 2025-09-13 | **Spec**: D:\GitHub_yuubinnkyoku\ToinFes2026\specs\001-toinfes2025-2026-ui\spec.md
**Input**: Feature specification from `/specs/001-toinfes2025-2026-ui/spec.md`

## Execution Flow (/plan command scope)
```
1. Load feature spec from Input path
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
3. Evaluate Constitution Check section below
4. Execute Phase 0 → research.md
5. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific file
6. Re-evaluate Constitution Check section
7. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
8. STOP - Ready for /tasks command
```

## Summary
TCA の2025年版ゲームサイトを踏襲し、2026年版の最小機能（トップ、ゲーム一覧、ゲーム詳細/実行）を提供する。UIは shadcn/ui を基本要件（同等UI/UX達成なら代替可）。テスト移行として「ねこまうすらんらんrun」のみ掲載。日本語のみ、問い合わせフォーム無し。公開は桐蔭祭開催時。

## Technical Context
**Language/Version**: Node.js LTS + TypeScript（Next.js 15, App Router）  
**Primary Dependencies**: next, react, tailwindcss, shadcn/ui（UIコンポーネント）  
**Storage**: N/A（静的配信前提。データはビルド時/静的JSONで十分）  
**Testing**: Playwright（E2E）＋ Vitest/RTL（任意、スモーク中心）  
**Target Platform**: Web（モバイル/デスクトップ対応）  
**Project Type**: web frontend（Option 2）  
**Performance Goals**: 目標例: LCP ≤ 2.5s（中級4G端末）, 画像遅延読込・軽量初回ペイント  
**Constraints**: 低帯域・端末でも閲覧可能、画像最適化、操作説明の可視性  
**Scale/Scope**: 小規模（ゲーム1本の掲載で検証、今後拡張）

**Theming**: CSS 変数（:root と .dark）によるライト/ダーク切替。初期はシステム設定に追従し、ユーザー選択は localStorage に保存。ヘッダーにトグル（Sun/Moon）を配置し、レイアウト配下で ThemeProvider により `document.documentElement` の class を制御。

## Constitution Check
Simplicity/Architecture/Testing の原則を守る。現時点で複雑性は低く、単一プロジェクト構成を優先。

## Project Structure

### Documentation (this feature)
```
specs/001-toinfes2025-2026-ui/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)
```
frontend/
  ├─ src/
  │  ├─ components/
  │  ├─ pages/
  │  └─ services/
  └─ tests/
```

**Structure Decision**: Web application（Option 2, Next.js + Tailwind + shadcn/ui 固定）。

## Phase 0: Outline & Research
- Unknowns: 実装基盤（静的/Next.js）、検索方式（クライアント側 filter かビルド時生成）、ゲーム埋め込み形態（iframe/同一HTML遷移）
- Best Practices: shadcn/ui の導入手順、アクセシビリティ、OGP整備、モバイル配慮（スリープ/音量注意）
- Output: research.md に決定・根拠・代替案を整理

## Phase 1: Design & Contracts
- data-model.md に Game/Tag/MediaAsset/ExternalLink を記載（検証ルール含む）
- contracts/ にはページ間の入出力契約（検索入力→一覧フィルタ結果、詳細→実行導線）をテキストで定義（今回はAPIなし想定）
- quickstart.md にローカル起動とビルド/デプロイの最小手順（NEEDS CLARIFICATION）
- update-agent-context.ps1 は存在するため、必要技術を追記（shadcn/ui など）

## Phase 2: Task Planning Approach
- テンプレに従い、後続コマンドで tasks.md を生成予定

## Complexity Tracking
（現時点なし）

## Progress Tracking
**Phase Status**:
- [x] Phase 0: Research complete (/plan command)
- [x] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:
- [x] Initial Constitution Check: PASS
- [x] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented
