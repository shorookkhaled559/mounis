# مؤنس | Mounis

<div align="center">

![Mounis Logo](public/brand/mounis-mark.png)

**رفيقك اليومي للتدبّر والمعرفة الإسلامية**

*Your daily companion for Islamic reflection and knowledge*

[![Next.js](https://img.shields.io/badge/Next.js-15.5.24-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 🌟 نظرة عامة | Overview

**مؤنس** منصة عربية عصرية توفر تجربة روحية هادئة وعملية للمسلمين، تجمع بين التدبر اليومي والأدوات الإسلامية المفيدة في واجهة نظيفة وسهلة الاستخدام.

**Mounis** is a modern Arabic platform that provides a calm and practical spiritual experience for Muslims, combining daily reflection with useful Islamic tools in a clean, user-friendly interface.

### ✨ الميزات الرئيسية | Key Features

- 📖 **مقالات التدبر** - مواد روحية هادئة وعملية
- 🕐 **مواقيت الصلاة** - أوقات دقيقة حسب الموقع  
- 💰 **حاسبة الزكاة** - حساب سهل ودقيق للزكاة
- 📚 **أحاديث يومية** - أحاديث منتقاة مع شرح
- 📅 **في مثل هذا اليوم** - أحداث تاريخية إسلامية
- ⚖️ **فتاوى** - استشارات شرعية موثوقة
- 🌐 **دعم كامل للعربية والإنجليزية** مع RTL/LTR
- 📱 **تصميم متجاوب** يعمل على جميع الأجهزة

---

## 🏗️ هيكل المشروع | Project Structure

```
mounis/
├── 📁 public/                    # الملفات الثابتة
│   ├── 📁 brand/                 # الشعارات والهوية البصرية
│   ├── 📁 articles/              # صور المقالات (SVG)
│   └── 📄 manifest.json          # PWA manifest
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📁 [locale]/          # الصفحات متعددة اللغات
│   │   │   ├── 📁 articles/      # صفحات المقالات
│   │   │   ├── 📁 about/         # صفحة عن المشروع
│   │   │   ├── 📁 contact/       # صفحة التواصل
│   │   │   ├── 📁 prayer/        # أوقات الصلاة
│   │   │   ├── 📁 zakat/         # حاسبة الزكاة
│   │   │   ├── 📁 hadith/        # الأحاديث
│   │   │   ├── 📁 this-day/      # في مثل هذا اليوم
│   │   │   └── 📁 fatwas/        # الفتاوى
│   │   ├── 📄 layout.tsx         # Layout رئيسي
│   │   ├── 📄 globals.css        # الأنماط العامة
│   │   ├── 📄 robots.ts          # SEO robots
│   │   └── 📄 sitemap.ts         # خريطة الموقع
│   │
│   ├── 📁 components/            # المكونات القابلة لإعادة الاستخدام
│   │   ├── 📁 layout/            # مكونات التخطيط
│   │   │   ├── 📁 navbar/        # شريط التنقل
│   │   │   ├── 📄 Header.tsx     # الرأس
│   │   │   ├── 📄 Footer.tsx     # التذييل
│   │   │   └── 📄 SiteShell.tsx  # الغلاف الرئيسي
│   │   ├── 📁 article/           # مكونات المقالات
│   │   ├── 📁 seo/               # مكونات SEO
│   │   ├── 📁 search/            # البحث
│   │   ├── 📁 theme/             # تبديل الوضع المظلم
│   │   └── 📁 locale/            # تبديل اللغة
│   │
│   ├── 📁 lib/                   # المكتبات والمساعدات
│   │   ├── 📁 i18n/              # نظام الترجمة
│   │   ├── 📁 seo/               # مساعدات SEO
│   │   ├── 📁 data/              # معالجة البيانات
│   │   └── 📄 site.ts            # إعدادات الموقع
│   │
│   ├── 📁 data/                  # بيانات JSON
│   │   ├── 📄 articles.json      # محتوى المقالات
│   │   ├── 📄 navigation.json    # بنية التنقل
│   │   └── 📄 daily-content.json # المحتوى اليومي
│   │
│   ├── 📁 locales/               # ملفات الترجمة
│   │   ├── 📁 ar/                # الترجمات العربية
│   │   └── 📁 en/                # الترجمات الإنجليزية
│   │
│   └── 📁 types/                 # تعريفات TypeScript
│
├── 📄 tailwind.config.js         # إعدادات Tailwind
├── 📄 next.config.ts             # إعدادات Next.js + Security
├── 📄 tsconfig.json              # إعدادات TypeScript
├── 📄 prettier.config.js         # إعدادات Prettier  
├── 📄 eslint.config.mjs          # إعدادات ESLint
├── 📄 middleware.ts              # Middleware للغات
└── 📄 package.json               # تبعيات المشروع
```

---

## 🛠️ التقنيات المستخدمة | Tech Stack

### 🏗️ Frontend Framework
- **Next.js 15.5.24** - React framework مع App Router
- **React 19.1.0** - مكتبة UI الحديثة
- **TypeScript 5** - مع إعدادات strict شاملة

### 🎨 Styling & Design
- **Tailwind CSS 4** - CSS utility-first framework
- **CSS Custom Properties** - متغيرات CSS لنظام الألوان
- **Responsive Design** - يعمل على جميع الشاشات
- **Dark Mode** - وضع مظلم مدمج

### 🌐 Internationalization
- **Next.js i18n** - دعم متعدد اللغات
- **RTL/LTR Support** - دعم كامل للعربية والإنجليزية
- **JSON-based Translations** - ملفات ترجمة منظمة

### 🔧 Development Tools
- **ESLint** - فحص جودة الكود
- **Prettier** - تنسيق الكود التلقائي
- **Husky** - Git hooks للجودة
- **Lint-staged** - فحص الملفات المرحلية

### 📦 Enterprise Libraries
- **React Hook Form** - إدارة النماذج
- **Zod** - التحقق من البيانات
- **Zustand** - إدارة الحالة
- **Bundle Analyzer** - تحليل حجم التطبيق

### 🔒 Security & SEO
- **Security Headers** - 7 رؤوس أمنية شاملة
- **PWA Support** - دعم تطبيقات الويب التدريجية
- **Open Graph** - بيانات وصفية للشبكات الاجتماعية
- **Structured Data** - بيانات منظمة لمحركات البحث

---

## 🔄 تدفق البيانات | Data Flow

### 📊 مصادر البيانات | Data Sources

```typescript
// 1. Static JSON Data
src/data/
├── articles.json      // المقالات مع المحتوى ثنائي اللغة
├── navigation.json    // بنية القوائم
└── daily-content.json // المحتوى اليومي

// 2. Internationalization Files  
src/locales/
├── ar/               // العربية
│   ├── common.json   // نصوص عامة
│   ├── articles.json // نصوص المقالات  
│   ├── forms.json    // نصوص النماذج
│   └── tools.json    // نصوص الأدوات
└── en/               // الإنجليزية
    └── ... // نفس الهيكل
```

### 🔀 معالجة البيانات | Data Processing

```typescript
// 1. مساعدات البيانات
src/lib/data/
├── articles.ts    // تحميل ومعالجة المقالات
├── navigation.ts  // بناء القوائم حسب اللغة
└── uns.ts         // محتوى "في مثل هذا اليوم"

// 2. نظام الترجمة
src/lib/i18n/
├── config.ts      // إعدادات اللغات
└── messages.ts    // دالة الترجمة t()

// 3. مساعدات SEO
src/lib/seo/
├── metadata.ts    // بناء بيانات وصفية
└── jsonld.ts      // بيانات منظمة
```

### 🌊 تدفق التطبيق | Application Flow

```mermaid
graph TD
    A[User Request] --> B[Middleware]
    B --> C[Language Detection]
    C --> D[Route to [locale]]
    D --> E[Load Page Component]
    E --> F[Fetch Data]
    F --> G[Apply Translations]
    G --> H[Generate Metadata]
    H --> I[Render Page]
```

---

## 🚀 البدء السريع | Quick Start

### 📋 المتطلبات | Prerequisites

- **Node.js** 18+ 
- **npm** أو **yarn**
- **Git**

### ⚡ التثبيت | Installation

```bash
# 1. استنساخ المستودع
git clone https://github.com/your-username/mounis.git
cd mounis

# 2. تثبيت التبعيات
npm install

# 3. تشغيل السيرفر المحلي
npm run dev

# 4. فتح المتصفح
# http://localhost:3000
```

### 🔧 أوامر التطوير | Development Commands

```bash
# 🚀 التطوير
npm run dev          # تشغيل سيرفر التطوير

# 🏗️ البناء والإنتاج  
npm run build        # بناء للإنتاج
npm start            # تشغيل الإنتاج
npm run analyze      # تحليل حجم التطبيق

# 🧹 جودة الكود
npm run lint         # فحص الكود
npm run lint:fix     # إصلاح مشاكل الكود
npm run format       # تنسيق الكود
npm run format:check # فحص التنسيق

# 🔧 Git Hooks
npm run prepare      # تحضير Husky hooks
```

---

## 📄 الصفحات المتاحة | Available Pages

### 🏠 الصفحة الرئيسية | Home
- **المسار:** `/ar` أو `/en`
- **الوصف:** الصفحة الرئيسية مع مقدمة المشروع والأدوات

### 📖 المقالات | Articles
- **المسار:** `/ar/articles` 
- **المقالة:** `/ar/articles/[slug]`
- **الوصف:** مقالات التدبر والتأمل الروحي

### 🕐 مواقيت الصلاة | Prayer Times
- **المسار:** `/ar/prayer`
- **الوصف:** أوقات الصلاة حسب الموقع الجغرافي

### 💰 حاسبة الزكاة | Zakat Calculator  
- **المسار:** `/ar/zakat`
- **الوصف:** حساب الزكاة للمال والذهب والفضة

### 📚 الأحاديث | Hadith
- **المسار:** `/ar/hadith`
- **الوصف:** أحاديث نبوية مختارة مع الشرح

### 📅 في مثل هذا اليوم | This Day in History
- **المسار:** `/ar/this-day`
- **الوصف:** أحداث تاريخية إسلامية مهمة

### ⚖️ الفتاوى | Fatwas
- **المسار:** `/ar/fatwas`  
- **الوصف:** فتاوى واستشارات شرعية

### ℹ️ صفحات إضافية | Additional Pages
- `/ar/about` - عن المشروع
- `/ar/contact` - التواصل
- `/ar/privacy` - سياسة الخصوصية
- `/ar/terms` - شروط الاستخدام
- `/ar/cookies` - سياسة ملفات تعريف الارتباط

---

## 🎨 نظام التصميم | Design System

### 🎨 الألوان | Colors

```css
/* الألوان الأساسية */
--primary: #4f9d2f        /* الأخضر الرئيسي */
--primary-deep: #287a38   /* أخضر داكن */
--primary-light: #78b82a  /* أخضر فاتح */
--primary-subtle: #e8f3df /* أخضر باهت */

/* الألوان المساعدة */
--accent: #8fbd24         /* أخضر ليموني */
--surface-cream: #f7f9f3  /* الخلفية الكريمية */
--ink: #18321f            /* النص الرئيسي */
--muted: #68766b          /* النص الثانوي */
```

### 📏 التخطيط | Layout

```css
/* الأبعاد */
--header-h: 4.5rem        /* ارتفاع الرأس */
--sidebar-w: 17.5rem      /* عرض الشريط الجانبي */
--reading: 40rem          /* عرض القراءة المثالي */
--page: 72rem             /* الحد الأقصى للصفحة */
```

### 📱 النقاط الحرجة | Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px   /* أجهزة لوحية صغيرة */
md: 768px   /* أجهزة لوحية */
lg: 1024px  /* أجهزة مكتبية صغيرة */
xl: 1280px  /* أجهزة مكتبية كبيرة */
```

---

## 🔧 التخصيص | Customization

### 🌍 إضافة لغة جديدة | Adding New Language

```typescript
// 1. إضافة اللغة إلى config
// src/lib/i18n/config.ts
export const locales: Locale[] = ["ar", "en", "fr"]; // إضافة فرنسي

// 2. إنشاء مجلد الترجمات
src/locales/fr/
├── common.json
├── articles.json  
├── forms.json
└── tools.json

// 3. تحديث middleware
// middleware.ts - سيتعرف تلقائياً على اللغة الجديدة
```

### 📝 إضافة مقال جديد | Adding New Article

```json
// src/data/articles.json
{
  "articles": [
    {
      "slug": "new-article",
      "title": {
        "ar": "عنوان المقال بالعربية",
        "en": "Article Title in English"
      },
      "excerpt": {
        "ar": "مقتطف قصير...",
        "en": "Short excerpt..."
      },
      "body": [
        {
          "ar": "محتوى الفقرة الأولى...",
          "en": "First paragraph content..."
        }
      ],
      "category": "tadabbur",
      "readingMinutes": 5,
      "publishedAt": "2026-12-01",
      "image": "/articles/new-article.svg"
    }
  ]
}
```

### 🎨 تخصيص الألوان | Customizing Colors

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#your-color", // لونك المفضل
          // ... باقي التدرجات
        }
      }
    }
  }
}
```

---

## 📈 الأداء والأمان | Performance & Security

### ⚡ الأداء | Performance
- **Bundle Size:** 103-117 kB first load
- **Static Generation:** 39 صفحة مُحضرة مسبقاً
- **Code Splitting:** تقسيم تلقائي للكود
- **Image Optimization:** تحسين الصور
- **Turbopack:** بناء سريع للتطوير

### 🔒 الأمان | Security
- **Content Security Policy** - منع XSS attacks
- **X-Frame-Options** - منع Clickjacking  
- **HSTS** - إجبار HTTPS
- **Permissions Policy** - تقييد APIs المتصفح
- **Input Validation** - مع Zod schemas

### ♿ إمكانية الوصول | Accessibility  
- **WCAG AA Compliance** - متوافق مع معايير الإتاحة
- **Screen Reader Support** - دعم قارئ الشاشة
- **Keyboard Navigation** - تنقل بلوحة المفاتيح
- **Focus Management** - إدارة التركيز
- **ARIA Labels** - تسميات ARIA شاملة

---

## 🚀 النشر | Deployment

### 🌐 Vercel (موصى به)

```bash
# 1. ربط المستودع بـ Vercel
# 2. النشر التلقائي عند push إلى main
# 3. معاينة فورية للفروع

# متغيرات البيئة المطلوبة
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 📦 Docker

```dockerfile
# Dockerfile متوفر لـ containerization
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 🔧 متغيرات البيئة | Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

---

## 🤝 المساهمة | Contributing

### 📋 إرشادات المساهمة

1. **Fork** المستودع
2. **إنشاء فرع** جديد: `git checkout -b feature/amazing-feature`
3. **Commit** التغييرات: `git commit -m 'Add amazing feature'`
4. **Push** للفرع: `git push origin feature/amazing-feature`  
5. **إنشاء Pull Request**

### ✅ معايير الكود | Code Standards

- **TypeScript** مع strict mode
- **ESLint + Prettier** للتنسيق
- **Tests** للميزات الجديدة (اختياري)
- **Semantic Commits** مفضل

---

## 📞 الدعم والتواصل | Support & Contact

### 🐛 تقرير مشكلة | Report Bug
- **GitHub Issues:** [إنشاء مشكلة جديدة](https://github.com/your-username/mounis/issues)

### 💡 اقتراح ميزة | Feature Request  
- **GitHub Discussions:** مناقشة الأفكار الجديدة

### 📧 تواصل مباشر | Direct Contact
- **Email:** contact@mounis.app
- **Twitter:** [@mounis_app](https://twitter.com/mounis_app)

---

## 📄 الرخصة | License

هذا المشروع مرخص تحت [MIT License](LICENSE) - انظر الملف للتفاصيل.

---

## 🙏 الشكر والتقدير | Acknowledgments

- **Next.js Team** - إطار العمل الرائع
- **Tailwind CSS** - نظام التصميم المرن  
- **Vercel** - منصة النشر السلسة
- **المجتمع الإسلامي** - الإلهام والمحتوى

---

<div align="center">

**صُنع بـ ❤️ للمجتمع الإسلامي**

*Made with ❤️ for the Islamic community*

---

**مؤنس © 2026 - جميع الحقوق محفوظة**

</div>