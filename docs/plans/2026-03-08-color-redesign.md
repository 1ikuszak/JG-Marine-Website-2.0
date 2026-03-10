# Color Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current JG Marine color palette with exactly 4 brand colors, applied correctly across every section in light theme, with verified WCAG contrast ratios.

**Architecture:** Update CSS design tokens first, then audit and fix each component that uses hardcoded colors or semantic tokens incorrectly for the new palette. Dark sections (Hero overlay, FinalCTA, Footer, Contact Hero) use `#21383D`; light sections use `#F4F9F6`.

**Tech Stack:** Next.js 15, Tailwind CSS v4, `@theme inline` token system in `globals.css`

---

## Color Reference

| Role | Hex | Usage |
|---|---|---|
| Background / Light | `#F4F9F6` | Page bg, light section bg, primary-foreground, secondary-foreground |
| Foreground / Black | `#0D0D0D` | Body text, footer bg |
| Primary / Blue | `#005E8E` | Buttons, links, interactive, accent |
| Secondary / Dark Teal | `#21383D` | Dark section bg (FinalCTA, Contact Hero), Hero overlay |

### Contrast Ratios (pre-verified)
- `#F4F9F6` on `#0D0D0D`: ~19:1 ✅
- `#F4F9F6` on `#005E8E`: 6.8:1 ✅
- `#F4F9F6` on `#21383D`: 11.6:1 ✅
- `#0D0D0D` on `#F4F9F6`: ~19:1 ✅
- `#005E8E` on `#F4F9F6`: 6.8:1 ✅
- `#005E8E` on `#21383D`: 1.7:1 ❌ — NEVER use blue text/icons on dark teal bg
- `#005E8E` on `#0D0D0D`: 2.9:1 ❌ — NEVER use blue text on near-black bg

### Rule for dark sections
On `bg-secondary` (#21383D) or `bg-foreground` (#0D0D0D):
- Body text → `text-white` or `text-white/70`
- Headings → `text-white`
- Accent highlights → `text-white` (NOT `text-accent` or `text-primary`)
- Buttons with blue bg → `text-white` or `text-primary-foreground` ✅
- Decorative lines → `bg-white/30` or `bg-white/60`

---

## Task 1: Update CSS Tokens — `globals.css`

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace `:root` block**

Replace the entire `:root { ... }` block with:

```css
:root {
  /* JG Marine 4-Color Palette */
  --background:           oklch(0.975 0.009 160);    /* #F4F9F6 - light mint */
  --foreground:           oklch(0.08 0 0);            /* #0D0D0D - near black */
  --card:                 oklch(0.975 0.009 160);     /* #F4F9F6 - same as bg, separated by border */
  --card-foreground:      oklch(0.08 0 0);            /* #0D0D0D */
  --popover:              oklch(0.975 0.009 160);
  --popover-foreground:   oklch(0.08 0 0);
  --primary:              oklch(0.39 0.085 222);      /* #005E8E - ocean blue */
  --primary-foreground:   oklch(0.975 0.009 160);     /* #F4F9F6 on blue: 6.8:1 ✅ */
  --secondary:            oklch(0.22 0.028 193);      /* #21383D - dark teal */
  --secondary-foreground: oklch(0.975 0.009 160);     /* #F4F9F6 on dark teal: 11.6:1 ✅ */
  --muted:                oklch(0.22 0.028 193 / 0.08); /* #21383D very faint — subtle section tints */
  --muted-foreground:     oklch(0.08 0 0 / 0.55);    /* #0D0D0D 55% — secondary text */
  --accent:               oklch(0.39 0.085 222);      /* #005E8E - same as primary */
  --accent-foreground:    oklch(0.975 0.009 160);     /* #F4F9F6 */
  --destructive:          oklch(0.5126 0.2081 26.89); /* keep red for emergency */
  --destructive-foreground: oklch(0.975 0.009 160);
  --border:               oklch(0.22 0.028 193 / 0.15); /* #21383D 15% */
  --input:                oklch(0.22 0.028 193 / 0.15);
  --ring:                 oklch(0.39 0.085 222);      /* #005E8E */
  --radius:               0.5rem;
  --chart-1: oklch(0.39 0.085 222);
  --chart-2: oklch(0.22 0.028 193);
  --chart-3: oklch(0.5126 0.2081 26.89);
  --chart-4: oklch(0.975 0.009 160);
  --chart-5: oklch(0.08 0 0);
  --sidebar: oklch(0.975 0.009 160);
  --sidebar-foreground: oklch(0.08 0 0);
  --sidebar-primary: oklch(0.39 0.085 222);
  --sidebar-primary-foreground: oklch(0.975 0.009 160);
  --sidebar-accent: oklch(0.22 0.028 193 / 0.08);
  --sidebar-accent-foreground: oklch(0.08 0 0);
  --sidebar-border: oklch(0.22 0.028 193 / 0.15);
  --sidebar-ring: oklch(0.39 0.085 222);
}
```

**Step 2: Remove the `.dark { ... }` block entirely** (we're light-theme only, no dark mode)

**Step 3: Commit**
```bash
git add app/globals.css
git commit -m "feat(colors): remap design tokens to 4-color palette"
```

---

## Task 2: Update site.config.ts Brand Colors

**Files:**
- Modify: `lib/site.config.ts`

**Step 1: Replace `colors` object**

```ts
colors: {
  background: "#F4F9F6",
  foreground: "#0D0D0D",
  primary: "#005E8E",
  secondary: "#21383D",
},
```

**Step 2: Commit**
```bash
git add lib/site.config.ts
git commit -m "feat(colors): update brand color constants"
```

---

## Task 3: Fix Header — `components/layout/header.tsx`

**Problem:** Header uses hardcoded `rgba(255, 255, 255, ...)` for scrolled background. Should use `#F4F9F6`.

**Files:**
- Modify: `components/layout/header.tsx`

**Step 1: Update scrolled background color**

Change (line ~88-89):
```tsx
backgroundColor: isTransparent
  ? `rgba(255, 255, 255, ${bgOpacity})`
  : "rgba(255, 255, 255, 0.95)",
```

To:
```tsx
backgroundColor: isTransparent
  ? `rgba(244, 249, 246, ${bgOpacity})`
  : "rgba(244, 249, 246, 0.97)",
```

**Step 2: Update border color**

Change (line ~93-95):
```tsx
borderBottomColor: isTransparent
  ? "rgba(255, 255, 255, 0.1)"
  : "rgba(0, 0, 0, 0.1)",
```

To:
```tsx
borderBottomColor: isTransparent
  ? "rgba(244, 249, 246, 0.15)"
  : "rgba(33, 56, 61, 0.15)",
```

**Step 3: Commit**
```bash
git add components/layout/header.tsx
git commit -m "fix(header): update hardcoded rgba colors to new palette"
```

---

## Task 4: Fix Hero Overlay — `components/home/hero.tsx`

**Problem:** Hero uses `from-black/70 to-transparent` gradient overlay. Should use `#21383D` (secondary) tint.

**Files:**
- Modify: `components/home/hero.tsx`

**Step 1: Replace overlay gradient**

Change (line ~110):
```tsx
<div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
```

To:
```tsx
<div className="absolute inset-0 bg-gradient-to-r from-secondary/85 to-secondary/20" />
```

**Step 2: Fix primary CTA button**

The `bg-accent` button currently uses `text-accent-foreground`. With new tokens, `accent` = `#005E8E` and `accent-foreground` = `#F4F9F6`. Contrast is 6.8:1 ✅ — no change needed.

**Step 3: Commit**
```bash
git add components/home/hero.tsx
git commit -m "fix(hero): replace black overlay with secondary color"
```

---

## Task 5: Fix Service Tiers — `components/home/service-tiers.tsx`

**Problem:** The deliverables list box uses `bg-secondary` which is now `#21383D` (dark teal). Text inside uses `text-foreground` = `#0D0D0D`. That's dark text on dark bg — FAIL.

**Files:**
- Modify: `components/home/service-tiers.tsx`

**Step 1: Change deliverables box background**

Change (line ~223):
```tsx
<div className="bg-secondary border border-border rounded-lg p-5 sm:p-6 md:p-7">
```

To:
```tsx
<div className="bg-background border border-border rounded-lg p-5 sm:p-6 md:p-7">
```

This keeps it light (F4F9F6) with text-foreground (#0D0D0D) — contrast 19:1 ✅.

**Step 2: Commit**
```bash
git add components/home/service-tiers.tsx
git commit -m "fix(service-tiers): use bg-background for deliverables box"
```

---

## Task 6: Fix Team Section — `components/home/team-section.tsx`

**Assessment:** `bg-secondary/30` with new dark teal at 30% opacity on `#F4F9F6` page = very subtle teal-gray tint (~RGB 186,195,196). Acceptable as section separator. No contrast issues since it's a bg-only element.

Card profile image bg: `from-primary/15 via-secondary/10 to-primary/5` — secondary at 10% is negligible. Fine.

**No changes needed.** Token inheritance handles this correctly.

---

## Task 7: Fix FinalCTA — `components/home/final-cta.tsx`

**Problem:** Uses `bg-primary` (now blue #005E8E). Should use `bg-secondary` (dark teal #21383D). Also, `text-accent` icons on dark bg = FAIL.

**Files:**
- Modify: `components/home/final-cta.tsx`

**Step 1: Change section background**

Change (line ~30):
```tsx
<section className="relative py-24 md:py-32 bg-primary overflow-hidden">
```

To:
```tsx
<section className="relative py-24 md:py-32 bg-secondary overflow-hidden">
```

**Step 2: Fix overlay gradients** (lines ~41-42):

Change:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/75" />
```

To:
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/85 to-secondary/75" />
```

**Step 3: Fix glow blobs** (lines ~43-44):

Change:
```tsx
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[130px]" />
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
```

To (use primary/white for subtle glow on dark teal):
```tsx
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[130px]" />
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px]" />
```

**Step 4: Fix "Available 24/7" text** (line ~70):

Change:
```tsx
<span className="text-accent">Available 24/7.</span>
```

To:
```tsx
<span className="text-white">Available 24/7.</span>
```

**Step 5: Fix trust bullet icons** (line ~76-78):

Change:
```tsx
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center">
  <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
</div>
```

To:
```tsx
<div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
  <Icon className="h-4 w-4 text-white" strokeWidth={1.5} />
</div>
```

**Step 6: Fix CTA card border** (line ~92):

Change:
```tsx
<div className="rounded-2xl border border-accent/40 bg-white/[0.08] backdrop-blur-sm p-8 md:p-10 shadow-2xl">
```

To:
```tsx
<div className="rounded-2xl border border-white/20 bg-white/[0.08] backdrop-blur-sm p-8 md:p-10 shadow-2xl">
```

**Step 7: Fix decorative line** (line ~59):

Change:
```tsx
<div className="h-[2px] w-8 bg-white/60" />
```

Keep as-is — already uses white. ✅

**Step 8: Primary CTA button** — `bg-accent hover:bg-accent/90 text-accent-foreground` → accent = #005E8E, accent-foreground = #F4F9F6, contrast 6.8:1 ✅. No change needed.

**Step 9: Commit**
```bash
git add components/home/final-cta.tsx
git commit -m "fix(final-cta): switch to secondary bg, fix icon/text colors for contrast"
```

---

## Task 8: Fix Footer — `components/layout/footer.tsx`

**Problem:** `text-accent` used for section headings and hover states. With `accent` = #005E8E on `bg-foreground` = #0D0D0D, contrast is 2.9:1 — FAIL.

**Files:**
- Modify: `components/layout/footer.tsx`

**Step 1: Fix section heading colors** (lines ~47, ~95, ~118):

Change all:
```tsx
<h3 className="text-sm font-semibold text-accent mb-4">
```

To:
```tsx
<h3 className="text-sm font-semibold text-white mb-4">
```

**Step 2: Fix hover colors on links** — change all `hover:text-accent` to `hover:text-white`:

```tsx
className="text-white/60 hover:text-white transition-colors"
```

Apply to all `<Link>` and `<a>` elements inside the footer that currently have `hover:text-accent`.

**Step 3: Fix phone number link** (line ~128):

Change:
```tsx
className="text-white hover:text-accent transition-colors hover:underline"
```

To:
```tsx
className="text-white hover:text-white/80 transition-colors hover:underline"
```

**Step 4: Fix bottom bar hover** (lines ~161-167):

Change:
```tsx
className="hover:text-accent transition-colors"
```

To:
```tsx
className="hover:text-white transition-colors"
```

**Step 5: Commit**
```bash
git add components/layout/footer.tsx
git commit -m "fix(footer): replace text-accent with text-white for contrast on dark bg"
```

---

## Task 9: Fix Contact Hero — `components/contact/contact-hero.tsx`

**Problem:** Uses `bg-foreground` (#0D0D0D) as bg. Inside, `text-accent` decorations and `hover:border-accent/50` + `hover:text-accent` on white text links. Blue (#005E8E) on near-black (#0D0D0D) = 2.9:1 FAIL.

**Files:**
- Modify: `components/contact/contact-hero.tsx`

**Step 1: Change section background to secondary**

Change (line ~10):
```tsx
<section className="relative pt-24 pb-12 md:py-24 bg-foreground overflow-hidden">
```

To:
```tsx
<section className="relative pt-24 pb-12 md:py-24 bg-secondary overflow-hidden">
```

**Step 2: Fix overline accent** (lines ~27-31):

Change:
```tsx
<div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-accent" />
<p className="font-mono text-xs font-bold text-accent tracking-[0.3em] uppercase">
  CONTACT
</p>
<div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-accent" />
```

To:
```tsx
<div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-white/50" />
<p className="font-mono text-xs font-bold text-white/70 tracking-[0.3em] uppercase">
  CONTACT
</p>
<div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-white/50" />
```

**Step 3: Fix contact card hover states** (lines ~70-71, ~85-86):

Change `hover:border-accent/50` to `hover:border-white/30` and `hover:text-accent` to `hover:text-white`:

```tsx
className="flex flex-col items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 rounded-lg p-4 transition-all duration-300 group min-h-[90px]"
```

And the phone/email text inside (lines ~75-76, ~90-91):
```tsx
className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors"
```

**Step 4: Fix icon colors** (lines ~72, ~87, ~98):

Change `text-accent` to `text-white/70` for icons:
```tsx
<Phone className="h-5 w-5 text-white/70 group-hover:scale-110 transition-transform" />
```

**Step 5: Fix glow blobs** (lines ~13-15):

Change:
```tsx
<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[120px]" />
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[150px]" />
```

To (decorative glows that work on dark teal):
```tsx
<div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px]" />
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
```

**Step 6: Commit**
```bash
git add components/contact/contact-hero.tsx
git commit -m "fix(contact-hero): switch to secondary bg, fix accent colors for contrast"
```

---

## Task 10: Fix About Heritage CTA — `components/about/heritage-cta.tsx`

**Files:**
- Modify: `components/about/heritage-cta.tsx`

**Step 1: Read the file first**, then apply the same pattern:
- Dark section bg → `bg-secondary`
- `text-accent` on dark bg → `text-white`
- `hover:text-accent` on dark bg → `hover:text-white`
- Blue glows/decorations on dark teal → use `bg-primary/20` or `bg-white/5`

**Step 2: Commit**
```bash
git add components/about/heritage-cta.tsx
git commit -m "fix(heritage-cta): apply new color palette"
```

---

## Task 11: Final Verification

**Step 1: Start dev server**
```bash
npm run dev
```

**Step 2: Visit each page and verify**
- `/` — Home: Hero, Services, Team, Offices, FinalCTA, Footer
- `/contact` — Contact: Hero, Emergency Card, Form, Footer
- `/about` (if accessible)

**Step 3: Contrast checklist per section**

| Section | Bg | Text | Ratio | ✅/❌ |
|---|---|---|---|---|
| Hero content | `#21383D/85` overlay | `#FFFFFF` | >11:1 | ✅ |
| Hero CTA button | `#005E8E` | `#F4F9F6` | 6.8:1 | ✅ |
| ServiceTiers | `#F4F9F6` | `#0D0D0D` | 19:1 | ✅ |
| ServiceTiers accent | `#F4F9F6` | `#005E8E` | 6.8:1 | ✅ |
| Team | `#F4F9F6` | `#0D0D0D` | 19:1 | ✅ |
| FinalCTA | `#21383D` | `#FFFFFF` | 11.6:1 | ✅ |
| FinalCTA button | `#005E8E` | `#F4F9F6` | 6.8:1 | ✅ |
| Footer | `#0D0D0D` | `#FFFFFF` | 19:1 | ✅ |
| Contact Hero | `#21383D` | `#FFFFFF` | 11.6:1 | ✅ |
| Header scrolled | `#F4F9F6` | `#0D0D0D` | 19:1 | ✅ |

**Step 4: Final commit**
```bash
git add -A
git commit -m "feat: complete 4-color palette redesign with verified contrast ratios"
```
