# UI Contracts: ToinFes2026 (TCA Games)

## Top → Games
- Input: none
- Output: Games list view
- Success: First paint shows heading and entry to Games within 1 click

## Games → Filter/Search
- Input: query: string (optional)
- Output: filtered list of Game cards
- Errors: no match → show "該当するゲームがありません"

## Games → Game Detail
- Input: gameId
- Output: Game detail with description, controls, screenshots, Play CTA

## Game Detail → Play
- Input: playLink or embed
- Output: Game play page or embedded canvas
- Note: Mobile guidance for sleep/volume
