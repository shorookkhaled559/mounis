# CSS Migration Analysis

## Overview
- **Total CSS lines:** 1050+ lines
- **Custom CSS classes:** ~40 semantic classes
- **Current Tailwind usage:** ~5 utility classes only

## Categories

### ✅ CAN MIGRATE TO TAILWIND (80% of CSS)

#### 1. Layout & Spacing
- `.page-wrap` - max-width, margin, padding ✅
- `.page-narrow` - max-width, margin, padding ✅
- `.page-article main` - max-width ✅
- `.content-with-sidebar` - grid layout ✅
- `.sidebar-sticky` - sticky positioning ✅

#### 2. Flexbox Patterns (Heavy repetition)
- `display: flex/inline-flex` - Used 50+ times ✅
- `align-items: center` - Used 40+ times ✅
- `justify-content` variations - Used 30+ times ✅
- `gap` variations - All can use Tailwind ✅

#### 3. Typography
- Font sizes (clamp, rem) - Tailwind responsive ✅
- Font weights - Tailwind utilities ✅
- Line heights - Tailwind utilities ✅
- Letter spacing - Tailwind utilities ✅

#### 4. Colors
- All color applications from CSS variables ✅
- Can use arbitrary values: `text-[var(--primary)]` ✅

#### 5. Spacing (Margin/Padding)
- All spacing values can use Tailwind scale ✅
- Gaps, margins, padding throughout ✅

#### 6. Borders & Radius
- `border-radius: var(--radius)` - Tailwind ✅
- Border styles - Tailwind ✅
- `border-inline-start` - Tailwind logical properties ✅

#### 7. Shadows
- Box shadows - Can use arbitrary or config ✅

#### 8. Transitions
- Simple transitions - Tailwind utilities ✅
- Hover states - Tailwind hover: prefix ✅

#### 9. Responsive Design
- All @media queries - Tailwind breakpoints ✅
- Mobile-first approach matches Tailwind ✅

#### 10. Common Patterns
- `.section-head` - flex layout ✅
- `.section-title` - typography ✅
- `.meta-row` - flex + gap ✅
- `.meta-dot` - w/h + rounded ✅
- `.stack-lg` - grid gap ✅

### ⚠️ KEEP AS CUSTOM CSS (20% of CSS)

#### 1. Global Resets & Base Styles
```css
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { padding-top: var(--header-h); }
::selection { ... }
:focus-visible { ... }
```
**Why:** Global styles, better in one place

#### 2. CSS Custom Properties (Design Tokens)
```css
:root {
  --primary: #4f9d2f;
  --header-h: 4.5rem;
  /* ... all variables */
}
.dark { /* dark mode overrides */ }
```
**Why:** Design system foundation, used across components

#### 3. Complex Gradients
```css
.site-header {
  background: linear-gradient(135deg, #287a38 0%, #4f9d2f 50%, #91c83a 100%);
}
```
**Why:** Complex gradients easier to read as CSS, reusable

#### 4. RTL-Specific Behavior
```css
html[dir="rtl"] .breadcrumbs li:not(:last-child)::after {
  content: "‹";
}
```
**Why:** Content changes based on direction

#### 5. Print Styles
```css
@media print { ... }
```
**Why:** Large block, keep separate

#### 6. Reduced Motion
```css
@media (prefers-reduced-motion: reduce) { ... }
```
**Why:** Accessibility, global override

#### 7. Pseudo-Elements with Complex Content
```css
.breadcrumbs li:not(:last-child)::after {
  content: "/";
  margin-inline-start: 0.5rem;
}
```
**Why:** Content property requires CSS

#### 8. Ad Slot Pattern
```css
.ad-slot-frame {
  background: repeating-linear-gradient(-45deg, ...);
}
```
**Why:** Complex repeating gradient pattern

#### 9. Search Overlay Backdrop
```css
.search-overlay {
  backdrop-filter: blur(4px);
}
```
**Why:** Simple enough, but combined with specific positioning

## Migration Strategy

### Phase 1: Configure Tailwind Theme
Add custom design tokens to Tailwind config:
- Colors (primary, accent, semantic)
- Spacing scale (if needed beyond default)
- Custom shadows
- Custom border radius values

### Phase 2: Component-by-Component Migration

**Priority Order:**
1. Simple utility components (icons, buttons)
2. Layout components (header, footer, sidebar)
3. Article components
4. Home components
5. Form components
6. Complex interactive components (search, mobile menu)

### Phase 3: Cleanup
- Remove migrated CSS from globals.css
- Keep only essential custom CSS
- Organize remaining CSS with comments

## Estimated Results

**Before:**
- globals.css: ~1050 lines
- Custom classes: ~40

**After:**
- globals.css: ~250-300 lines (70-75% reduction)
- Custom CSS kept:
  - CSS variables: ~100 lines
  - Global resets: ~30 lines
  - Complex patterns: ~80 lines
  - Print/accessibility: ~40 lines

**Migrated to Tailwind:**
- All layout utilities
- All flexbox patterns
- All spacing
- All typography
- All simple borders/shadows
- All transitions
- All responsive styles
