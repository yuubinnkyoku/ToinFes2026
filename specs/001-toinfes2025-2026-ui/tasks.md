# Tasks: ToinFes2026 Website (TCA Games)

Branch: 001-toinfes2025-2026-ui  
Feature Dir: D:\GitHub_yuubinnkyoku\ToinFes2026\specs\001-toinfes2025-2026-ui  
Context: Implement minimal 2026 site with shadcn/ui, JP-only, no contact form, optional game search, publish at festival; include only "ねこまうすらんらんrun" as test game.

## Parallel Execution Notes
- [P] は他の [P] と並列実行可（異なるファイル/ディレクトリに限定）
- 同じファイルを編集するタスクは [P] を付けない

## Numbered Tasks

- T001 Setup repo structure [frontend]  
  - Create `frontend/` skeleton (or confirm static path)  
  - Structure per plan: `src/components`, `src/pages`, `public`  
  - Dep: —

- T002 Add tooling & deps (if Next.js)  
  - Init Next.js + Tailwind + shadcn/ui baseline  
  - Or mark as N/A if static approach chosen  
  - Dep: T001

- T003 Research decision lock-in  
  - Decide implementation base: Static vs Next.js  
  - Update `research.md` and `plan.md` (Technical Context)  
  - Dep: T001

- T004 [P] Prepare assets for "ねこまうすらんらんrun"  
  - Copy required HTML and screenshots into `public/`  
  - Paths consistent with 2026 routing  
  - Dep: T001

- T005 Write contract tests for UI flows [P]  
  - From `contracts/ui-flows.md`: Top→Games, Search, Detail→Play  
  - Choose E2E tool (Playwright/Cypress) and scaffold failing tests  
  - Dep: T001

- T006 Implement Header/Footer with shadcn/ui  
  - Include SNS links (Twitter/Instagram/official)  
  - Mobile-first, a11y considerations  
  - Dep: T002, T005

- T007 Implement Top page  
  - Show logo/event name and CTA to Games  
  - Dep: T006

- T008 Implement Game Card component [P]  
  - Props: title, screenshot, description, difficulty  
  - a11y: alt text, focus states  
  - Dep: T006

- T009 Implement Games list page  
  - Renders Game Card(s)  
  - JP-only copy  
  - Dep: T007, T008

- T010 Implement optional Search  
  - Client-side filter by title  
  - Show no-hit message  
  - Dep: T009

- T011 Implement Game detail/play page  
  - Content for "ねこまうすらんらんrun"  
  - Include controls and play link (or embed)  
  - Dep: T009

- T012 Accessibility pass [P]  
  - Alt texts, contrast, keyboard navigation  
  - Dep: T010, T011

- T013 OGP and metadata [P]  
  - Title/description/OG tags for Top/Games/Detail  
  - Dep: T010, T011

- T014 Performance polish [P]  
  - Image sizing, lazy loading, preconnect  
  - Dep: T010, T011

- T015 Update quickstart & docs [P]  
  - Document how to run/build/deploy  
  - Note: publish at festival  
  - Dep: T010, T011

- T016 E2E test run and fixes  
  - Make failing tests pass  
  - Dep: T006–T011, T012–T015

- T017 Review gates  
  - Constitution checks, a11y checklists, final content pass  
  - Dep: T016

- T018 Staging/publish prep  
  - Configure deployment target (static hosting or Next.js)  
  - Keep private until festival  
  - Dep: T017
