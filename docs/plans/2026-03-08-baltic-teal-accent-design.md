# Color Palette Redesign — Baltic Teal Accent
**Date:** 2026-03-08
**Decision-maker:** JG Marine Creative Direction

---

## Problem

The existing `--accent` color Gold `#CDAA6A` reads as decorative luxury rather than institutional authority. Research confirmed that no top-tier maritime classification society (Lloyd's Register, Bureau Veritas, DNV) uses gold. Gold signals goods/fashion luxury — the antithesis of marine survey credibility.

## Decision

Replace Gold with **Baltic Teal `#006E73`** — following the Lloyd's Register / DNV model.

## Rationale

- Lloyd's Register (world's oldest classification society) uses deep teal as their rebrand accent — specifically chosen to signal "precision and expertise" over "decorative wealth"
- DNV's design system documents teal/green as the "authority action color" in maritime institutional branding
- `#006E73` achieves WCAG AA contrast ratio of 5.5:1 on white — both as button bg (white text on teal) and as inline color (teal on white)

## Color System

### Fixed base (unchanged)

| Token | Value | Purpose |
|-------|-------|---------|
| `--background` | `oklch(0.97 0.006 230)` — Bone `#F5F7F9` | Page background |
| `--foreground` | `oklch(0.205 0.048 234)` — Navy `#0B1F2A` | Primary text |
| `--primary` | `oklch(0.365 0.085 225)` — Ocean `#0E4F6B` | Interactive / headings |
| `--secondary` | `oklch(0.91 0.022 230)` — Fog `#DDE7EE` | Alt section bg |
| `--card` | `oklch(1 0 0)` — White | Card surfaces |

### Changed tokens

| Token | Before (Gold) | After (Baltic Teal) |
|-------|--------------|---------------------|
| `--accent` | `oklch(0.73 0.095 68)` #CDAA6A | `oklch(0.42 0.085 192)` #006E73 |
| `--accent-foreground` | Navy (dark on gold) | White (light on teal) |
| `--ring` | Gold focus ring | Baltic Teal focus ring |
| `--sidebar-ring` | Gold | Baltic Teal |

### site.config.ts brand colors

| Before | After |
|--------|-------|
| `gold: "#CDAA6A"` | `teal: "#006E73"` |

## Accessibility

- Teal on white: 5.5:1 ✓ WCAG AA
- White on teal: 5.5:1 ✓ WCAG AA
- Teal on Bone `#F5F7F9`: ~5.0:1 ✓ WCAG AA

## Scope

Only `--accent`, `--accent-foreground`, `--ring`, `--sidebar-ring` change.
No layout, component structure, typography, or spacing changes.
