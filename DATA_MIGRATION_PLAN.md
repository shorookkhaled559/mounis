# خطة نقل البيانات من TypeScript إلى JSON

## 📊 المشكلة الحالية (C2)

**البيانات مكتوبة في ملفات TypeScript:**
- `src/lib/data/articles.ts` - 4 مقالات (~200 سطر)
- `src/lib/data/navigation.ts` - Navigation computed with functions
- `src/lib/data/uns.ts` - محتوى اليوم hardcoded
- `src/lib/i18n/messages.ts` - 300+ سطر من الترجمات

**المشاكل:**
1. ❌ تغيير المحتوى يتطلب deployment
2. ❌ صعب على غير المطورين التعديل
3. ❌ الترجمات مدفونة في الكود
4. ❌ مافيش طريقة لتحديث "محتوى اليوم" ديناميكيًا

---

## 🎯 الحل المقترح

### المرحلة 1: نقل البيانات الثابتة لـ JSON

#### 1.1 Articles → JSON
**الملف الجديد:** `src/data/articles.json`

```json
{
  "articles": [
    {
      "slug": "sakinah-in-remembrance",
      "title": {
        "ar": "السكينة التي تأتي من الذكر لا من الضجيج",
        "en": "The stillness that comes from remembrance, not from noise"
      },
      "excerpt": {...},
      "body": [...],
      "category": "tadabbur",
      "readingMinutes": 6,
      "publishedAt": "2026-08-24",
      "image": "/articles/sakinah.svg",
      "imageAlt": {...},
      "quote": {...}
    }
  ]
}
```

**الفوائد:**
- ✅ سهل التعديل
- ✅ يمكن إضافة مقالات جديدة بدون كود
- ✅ يمكن ربطه بـ CMS لاحقاً

---

#### 1.2 Navigation → JSON
**الملف الجديد:** `src/data/navigation.json`

```json
{
  "main": [
    { "id": "home", "path": "/", "labelKey": "nav.home" },
    { "id": "prayer", "path": "/prayer", "labelKey": "nav.prayer" },
    { "id": "zakat", "path": "/zakat", "labelKey": "nav.zakat" }
  ],
  "footer": [
    { "id": "about", "path": "/about", "labelKey": "footer.about" },
    { "id": "contact", "path": "/contact", "labelKey": "footer.contact" }
  ]
}
```

**الفوائد:**
- ✅ Navigation structure واضح
- ✅ سهل إضافة/حذف items
- ✅ لا يحتاج computed functions

---

#### 1.3 Daily Content (UNS) → JSON
**الملف الجديد:** `src/data/daily-content.json`

```json
{
  "current": {
    "dateIso": "2026-08-26",
    "kind": "hadith",
    "title": {
      "ar": "حديث اليوم",
      "en": "Today's hadith"
    },
    "body": {
      "ar": "إن الرفق لا يكون في شيء إلا زانه...",
      "en": "Gentleness is not found in anything..."
    },
    "source": {
      "ar": "رواه مسلم",
      "en": "Narrated by Muslim"
    }
  },
  "archive": []
}
```

**الفوائد:**
- ✅ يمكن تحديثه يومياً
- ✅ يمكن عمل archive للمحتوى السابق
- ✅ جاهز للربط بـ API لاحقاً

---

#### 1.4 Translations → JSON Files
**المجلد الجديد:** `src/locales/`

```
src/locales/
├── ar/
│   ├── common.json      (nav, footer, buttons)
│   ├── articles.json    (article-related text)
│   ├── forms.json       (subscribe, comments)
│   └── tools.json       (prayer, zakat, etc.)
└── en/
    ├── common.json
    ├── articles.json
    ├── forms.json
    └── tools.json
```

**مثال:** `src/locales/ar/common.json`
```json
{
  "nav": {
    "home": "الرئيسية",
    "prayer": "أوقات الصلاة",
    "search": "بحث",
    "menu": "القائمة"
  },
  "chrome": {
    "skip": "انتقل إلى المحتوى",
    "language": "EN",
    "themeDark": "الوضع الداكن",
    "themeLight": "الوضع الفاتح"
  }
}
```

**الفوائد:**
- ✅ منظم حسب الـ namespace
- ✅ سهل على المترجمين
- ✅ يمكن استخدام Crowdin/Lokalise
- ✅ أصغر حجماً (يتم تحميل اللغة المطلوبة فقط)

---

## 🔧 التنفيذ

### الخطوات:

1. ✅ إنشاء مجلد `src/data/` للبيانات
2. ✅ نقل المقالات لـ `articles.json`
3. ✅ نقل Navigation لـ `navigation.json`
4. ✅ نقل Daily Content لـ `daily-content.json`
5. ✅ تقسيم الترجمات لملفات JSON منفصلة
6. ✅ تحديث الـ helper functions لقراءة JSON
7. ✅ تحديث الـ components للاستخدام الجديد
8. ✅ اختبار كل الصفحات
9. ✅ حذف الملفات القديمة (.ts)

---

## 📝 الملفات اللي هتتغير

### ملفات جديدة:
- `src/data/articles.json`
- `src/data/navigation.json`
- `src/data/daily-content.json`
- `src/locales/ar/*.json` (4 files)
- `src/locales/en/*.json` (4 files)

### ملفات هتتعدل:
- `src/lib/data/articles.ts` (قراءة من JSON)
- `src/lib/data/navigation.ts` (قراءة من JSON)
- `src/lib/data/uns.ts` (قراءة من JSON)
- `src/lib/i18n/messages.ts` (قراءة من JSON files)

### ملفات هتتحذف (بعد التأكد):
- لا شيء (نحتفظ بالـ helper functions)

---

## ⚠️ ملاحظات مهمة

1. **Type Safety:** هنحتفظ بالـ TypeScript types
2. **Performance:** JSON files هتتحمل مرة واحدة في build time
3. **Hot Reload:** التغييرات في JSON تحتاج server restart في dev mode
4. **Future CMS:** البنية الجديدة جاهزة للربط بـ CMS

---

## 🎯 الفائدة النهائية

**قبل:**
```typescript
// تعديل المحتوى = تعديل كود
export const articles: Article[] = [...]
```

**بعد:**
```json
// تعديل المحتوى = تعديل JSON فقط
{ "articles": [...] }
```

✅ **أسهل في الصيانة**  
✅ **أسهل للمحررين**  
✅ **جاهز للتطوير المستقبلي**  
✅ **أفضل تنظيم**
