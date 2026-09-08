# Component Structure Documentation

## Overview
This document outlines the improved, modular component architecture. Components are organized by feature and responsibility for better maintainability and reusability.

---

## 📁 Component Organization

### `/src/components/layout/`
Layout components that structure the page.

#### **Header.tsx**
- Wrapper component for the main navbar
- Delegates to `Navbar` component

#### **Footer.tsx**
- Main footer wrapper
- Composes footer sub-components

#### **Sidebar.tsx**
- Sidebar layout for content pages
- Contains widgets and ads

#### **SiteShell.tsx**
- Main layout wrapper for pages

---

### `/src/components/layout/navbar/`
Navbar components - modular and focused.

#### **Navbar.tsx** (Main Component)
- Central navbar orchestrator
- Manages mobile menu state
- Coordinates all navbar sub-components

#### **NavbarBrand.tsx**
- Logo and brand link
- Homepage navigation

#### **DesktopNav.tsx**
- Desktop navigation menu
- Active link highlighting
- Uses pathname for state

#### **MobileNav.tsx**
- Mobile navigation drawer
- Conditional rendering based on open state
- Click handler for menu items

#### **MobileMenuToggle.tsx**
- Hamburger/close menu button
- Icon toggle logic
- Accessibility labels

#### **NavbarActions.tsx**
- Right-side action buttons
- Language switcher
- Theme toggle
- Search dialog
- Mobile menu toggle

**Import Usage:**
```typescript
import { Navbar } from "@/components/layout/navbar";
```

---

### `/src/components/footer/`
Footer sub-components.

#### **FooterBrand.tsx**
- Logo and brand information
- Site name and tagline

#### **FooterNav.tsx**
- Reusable navigation section
- Accepts title and items
- Aria labels for accessibility

#### **FooterNote.tsx**
- Copyright/rights message
- Bottom footer text

**Import Usage:**
```typescript
import { FooterBrand, FooterNav, FooterNote } from "@/components/footer";
```

---

### `/src/components/home/`
Homepage-specific components.

#### **HomeHero.tsx**
- Main hero section
- Composes date and tools sub-components

#### `/src/components/home/hero/`

##### **HeroDate.tsx**
- Displays Gregorian and Hijri dates
- Formatted time element

##### **HeroTools.tsx**
- Quick action links (Prayer, Zakat, This Day)
- Reusable link list

**Import Usage:**
```typescript
import { HomeHero } from "@/components/home/HomeHero";
import { HeroDate, HeroTools } from "@/components/home/hero";
```

---

### `/src/components/article/`
Article-related components.

#### **FeaturedArticle.tsx**
- Main featured article wrapper
- Orchestrates article sub-components

#### **ArticleList.tsx**
- Grid of article cards
- Section heading

#### **ArticleCard.tsx**
- Individual article card
- Link to article page

#### **QuoteBlock.tsx**
- Quote display component
- Citation formatting

#### **ShareActions.tsx**
- Social sharing buttons
- Copy link functionality

#### `/src/components/article/featured/`

##### **ArticleHeader.tsx**
- Article title, excerpt, metadata
- Reading time, category, publish date
- Properly typed category prop

##### **ArticleVisual.tsx**
- Featured image display
- Optimized Next.js Image

##### **ArticleBody.tsx**
- Article content paragraphs
- Prose styling

**Import Usage:**
```typescript
import { FeaturedArticle } from "@/components/article/FeaturedArticle";
import { ArticleHeader, ArticleVisual, ArticleBody } from "@/components/article/featured";
```

---

### `/src/components/brand/`
Brand identity components.

#### **BrandMark.tsx**
- Logo image component
- Configurable size
- Uses full logo (`logo.png`)
- Maintains aspect ratio (2.22:1)

**Import Usage:**
```typescript
import { BrandMark } from "@/components/brand/BrandMark";
```

---

### Other Component Directories

#### `/src/components/ads/`
- **AdSlot.tsx** - Advertisement placeholders

#### `/src/components/comments/`
- **CommentsSection.tsx** - Comments display and form

#### `/src/components/locale/`
- **LanguageSwitcher.tsx** - Language toggle (AR/EN)

#### `/src/components/promo/`
- **AppAnnouncement.tsx** - App promotion banner

#### `/src/components/search/`
- **SearchDialog.tsx** - Search modal/overlay

#### `/src/components/seo/`
- **Breadcrumbs.tsx** - Breadcrumb navigation
- **JsonLd.tsx** - Structured data

#### `/src/components/subscribe/`
- **SubscribeForm.tsx** - Email subscription form

#### `/src/components/theme/`
- **ThemeToggle.tsx** - Light/dark mode toggle

#### `/src/components/uns/`
- **UnsWidget.tsx** - "Utterance of the day" widget

#### `/src/components/pages/`
- **PageIntro.tsx** - Page introduction sections

---

## 🎯 Component Design Principles

### 1. **Single Responsibility**
Each component has one clear purpose and does it well.

### 2. **Composability**
Larger components are built from smaller, reusable pieces.

### 3. **Logical Organization**
- Features grouped in folders (navbar/, footer/, hero/)
- Related components stay together
- Index files for clean imports

### 4. **Type Safety**
- All props properly typed
- Uses TypeScript interfaces
- Imports shared types from `@/types`

### 5. **Avoid Over-Fragmentation**
- Not every element needs a component
- Balance between modularity and complexity
- Small static elements stay inline

---

## 🔄 Component Hierarchy

```
Page (e.g., HomePage)
├── Header
│   └── Navbar
│       ├── NavbarBrand
│       ├── DesktopNav
│       ├── MobileNav
│       └── NavbarActions
│           ├── LanguageSwitcher
│           ├── ThemeToggle
│           ├── SearchDialog
│           └── MobileMenuToggle
│
├── Main Content
│   ├── HomeHero
│   │   ├── HeroDate
│   │   └── HeroTools
│   │
│   ├── FeaturedArticle
│   │   ├── ArticleHeader
│   │   ├── ArticleVisual
│   │   ├── ArticleBody
│   │   ├── QuoteBlock
│   │   └── ShareActions
│   │
│   └── ArticleList
│       └── ArticleCard (multiple)
│
├── Sidebar
│   ├── UnsWidget
│   └── AdSlot
│
└── Footer
    ├── FooterBrand
    ├── FooterNav (Explore)
    ├── FooterNav (About)
    └── FooterNote
```

---

## 📦 Import Patterns

### Barrel Exports (index.ts)
Use index files for clean imports:

```typescript
// Good ✅
import { Navbar } from "@/components/layout/navbar";
import { FooterBrand, FooterNav } from "@/components/footer";

// Avoid ❌
import { Navbar } from "@/components/layout/navbar/Navbar";
import { FooterBrand } from "@/components/footer/FooterBrand";
```

### Direct Imports for Main Components
```typescript
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeHero } from "@/components/home/HomeHero";
```

---

## 🚀 Benefits of This Structure

1. **Easy to Navigate**: Related components are grouped together
2. **Maintainable**: Small, focused files are easier to update
3. **Testable**: Individual components can be tested in isolation
4. **Reusable**: Components like `FooterNav` can be used multiple times
5. **Scalable**: Easy to add new features without cluttering existing code
6. **Type-Safe**: TypeScript catches errors at compile time
7. **Clear Intent**: File names and folder structure explain purpose

---

## 📝 Adding New Components

### When to Create a New Component:
1. Logic is reused in multiple places
2. Component has distinct responsibility
3. File is getting too large (>150 lines)
4. Testing would benefit from isolation

### When to Keep Code Inline:
1. Used only once
2. Very simple (< 10 lines)
3. Tightly coupled to parent logic
4. No reuse potential

### Example: Adding a New Section

```typescript
// 1. Create component file
// src/components/testimonials/TestimonialCard.tsx

export interface TestimonialCardProps {
  author: string;
  text: string;
  role: string;
}

export function TestimonialCard({ author, text, role }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <p>{text}</p>
      <cite>
        <strong>{author}</strong>
        <span>{role}</span>
      </cite>
    </div>
  );
}

// 2. Create index.ts
// src/components/testimonials/index.ts
export { TestimonialCard } from "./TestimonialCard";

// 3. Use in page
import { TestimonialCard } from "@/components/testimonials";
```

---

## 🔍 Quick Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| Navbar | `layout/navbar/Navbar.tsx` | Main navigation |
| Header | `layout/Header.tsx` | Header wrapper |
| Footer | `layout/Footer.tsx` | Footer wrapper |
| HomeHero | `home/HomeHero.tsx` | Homepage hero section |
| FeaturedArticle | `article/FeaturedArticle.tsx` | Featured article display |
| ArticleCard | `article/ArticleCard.tsx` | Article preview card |
| BrandMark | `brand/BrandMark.tsx` | Logo component |
| Sidebar | `layout/Sidebar.tsx` | Sidebar layout |

---

## ✅ Best Practices

1. **Use TypeScript interfaces** for all props
2. **Export components explicitly** from index files
3. **Keep components pure** when possible
4. **Use semantic HTML** elements
5. **Add accessibility attributes** (aria-label, etc.)
6. **Follow naming conventions**: PascalCase for components
7. **Group related state** in parent components
8. **Lift state up** when shared between siblings
9. **Use composition** over complex props
10. **Document complex logic** with comments

---

**Last Updated**: 2026-09-04
**Version**: 1.0
