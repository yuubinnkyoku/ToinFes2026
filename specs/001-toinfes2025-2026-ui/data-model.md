# Data Model: ToinFes2026 (TCA Games)

## Entities

### Game
- id: string
- title: string
- summary: string
- description: string
- difficulty: 1..5 (int)
- controls: string
- screenshots: string[] (URL)
- playLink: string (URL or relative path) | embed: boolean
- tags: string[]

### Tag
- id: string
- name: string

### MediaAsset
- id: string
- type: image | icon
- url: string
- altText: string

### ExternalLink
- id: string
- kind: twitter | instagram | official
- url: string
- label: string

## Validation Rules
- title: required, 1..100 chars
- summary: optional, 0..200 chars
- difficulty: 1..5 inclusive
- screenshots: each must be valid URL/path
- playLink: required if embed=false
- altText: required for all images
