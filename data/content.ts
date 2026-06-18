/**
 * BahiTech Solutions — ALL editable site content (EN + AR).
 * Edit this file only for copy, images, contact, projects, and services.
 */

export type Locale = "en" | "ar";
export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export type BadgeStyle = "amber" | "sand" | "sand-dimmed";

export interface Company {
  name: LocalizedString;
  domain: string;
  edgeLabel: LocalizedString;
  tagline: LocalizedString;
  heroLine1: LocalizedString;
  heroLine2: LocalizedString;
  description: LocalizedString;
  aboutHighlight: LocalizedString;
  aboutParagraph: LocalizedString;
  location: LocalizedString;
  locationBadge: LocalizedString;
  email: string;
  whatsapp: string;
  socials: Array<{
    id: string;
    label: LocalizedString;
    url: string;
  }>;
}

export interface Stat {
  value: string;
  label: LocalizedString;
}

export interface Service {
  id: string;
  icon: "smartphone" | "globe" | "nfc" | "booking";
  title: LocalizedString;
  description: LocalizedString;
  badge: LocalizedString;
  badgeStyle: BadgeStyle;
  badgeColor?: BadgeStyle;
  caseStudyLink?: boolean;
  placeholderNote?: LocalizedString;
  availabilityNote?: LocalizedString;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  details?: LocalizedStringArray;
  tags: LocalizedStringArray;
  /** Path under /public — update when photo is ready */
  image: string;
  /** Shown inside ImagePlaceholder when usePlaceholder is true */
  imageFilename: string;
  usePlaceholder: boolean;
  link?: string;
}

export interface NfcProduct {
  title: LocalizedString;
  description: LocalizedString;
  ctaLabel: LocalizedString;
}

export interface SectionTitles {
  about: LocalizedString;
  services: LocalizedString;
  servicesSubtitle: LocalizedString;
  servicesMark: LocalizedString;
  projects: LocalizedString;
  projectsSubtitle: LocalizedString;
  contact: LocalizedString;
  contactSubtitle: LocalizedString;
}

export const company: Company = {
  name: { en: "BahiTech Solutions", ar: "باهي تك للحلول" },
  domain: "BahiTech.sa",
  edgeLabel: { en: "BAHITECH.SA", ar: "BAHITECH.SA" },
  tagline: {
    en: "Smart tech solutions for modern Saudi businesses.",
    ar: "حلول تقنية ذكية للأعمال السعودية الحديثة.",
  },
  heroLine1: {
    en: "Smart Tech Solutions",
    ar: "حلول تقنية ذكية",
  },
  heroLine2: {
    en: "for Modern Businesses",
    ar: "للأعمال الحديثة",
  },
  description: {
    en: "We build custom apps, bilingual websites, and NFC review tools that help Saudi businesses grow.",
    ar: "نبني تطبيقات مخصصة ومواقع ثنائية اللغة وأدوات تقييم NFC لمساعدة الأعمال السعودية على النمو.",
  },
  aboutHighlight: {
    en: "We partner with local businesses to ship fast, reliable digital products customers actually use.",
    ar: "نتعاون مع الشركات المحلية لتسليم منتجات رقمية سريعة وموثوقة يستخدمها العملاء فعلياً.",
  },
  aboutParagraph: {
    en: "BahiTech Solutions is a Saudi technology studio focused on practical digital products — from real-time business apps to bilingual websites and NFC-powered review tools.",
    ar: "باهي تك للحلول استوديو تقني سعودي يركز على منتجات رقمية عملية — من تطبيقات الأعمال الفورية إلى المواقع ثنائية اللغة وأدوات التقييم عبر NFC.",
  },
  location: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
  locationBadge: {
    en: "Based in Saudi Arabia 🇸🇦",
    ar: "مقرنا في المملكة العربية السعودية 🇸🇦",
  },
  email: "obadasmb@gmail.com",
  whatsapp: "+966500000000",
  socials: [
    {
      id: "instagram",
      label: { en: "Instagram", ar: "إنستغرام" },
      url: "https://instagram.com/",
    },
    {
      id: "linkedin",
      label: { en: "LinkedIn", ar: "لينكدإن" },
      url: "https://linkedin.com/",
    },
    {
      id: "twitter",
      label: { en: "X (Twitter)", ar: "X (تويتر)" },
      url: "https://twitter.com/",
    },
  ],
};

export const stats: Stat[] = [
  {
    value: "3",
    label: { en: "Products Built", ar: "منتجات مبنية" },
  },
  {
    value: "1",
    label: { en: "Live App", ar: "تطبيق حي" },
  },
  {
    value: "∞",
    label: { en: "Custom NFC Solutions", ar: "حلول NFC مخصصة" },
  },
];

export const services: Service[] = [
  {
    id: "custom-apps",
    icon: "smartphone",
    title: {
      en: "Custom App Development",
      ar: "تطوير تطبيقات مخصصة",
    },
    description: {
      en: "We build real-time mobile and web apps tailored to your business. Featured project: Waqti — a live client queue and appointment management system that reduces wait times and organizes walk-in and booked clients in real time. Used by service businesses like salons and clinics.",
      ar: "نبني تطبيقات جوال وويب فورية مخصصة لعملك. المشروع المميز: وقتي — نظام حي لإدارة الطوابير والمواعيد يقلل أوقات الانتظار وينظم الزيارات والحجوزات في الوقت الفعلي. يُستخدم في الصالونات والعيادات وقطاع الخدمات.",
    },
    badge: { en: "Live Product", ar: "منتج حي" },
    badgeStyle: "amber",
    badgeColor: "amber",
    caseStudyLink: true,
  },
  {
    id: "websites",
    icon: "globe",
    title: {
      en: "Business Website Development",
      ar: "تطوير مواقع الأعمال",
    },
    description: {
      en: "Fast, bilingual (AR/EN), mobile-first websites for Saudi businesses. Professional design, built to convert visitors into customers.",
      ar: "مواقع سريعة وثنائية اللغة (عربي/إنجليزي) ومتجاوبة للأعمال السعودية. تصميم احترافي يحوّل الزوار إلى عملاء.",
    },
    badge: { en: "Launching Soon", ar: "قريباً" },
    badgeStyle: "sand-dimmed",
    placeholderNote: {
      en: "New client projects will appear here — add them in content.ts",
      ar: "ستظهر مشاريع العملاء الجديدة هنا — أضفها في content.ts",
    },
  },
  {
    id: "nfc-tags",
    icon: "nfc",
    title: {
      en: "Custom NFC Review Tags",
      ar: "بطاقات NFC للتقييمات",
    },
    description: {
      en: "Branded NFC tags for your store. Customers tap their phone — your Google Review page opens instantly. No app needed. More reviews, zero friction.",
      ar: "بطاقات NFC بعلامتك التجارية. يقرّب العميل هاتفه — تفتح صفحة تقييم Google فوراً. بدون تطبيق. تقييمات أكثر بجهد أقل.",
    },
    badge: { en: "Physical Product", ar: "منتج مادي" },
    badgeStyle: "sand",
    badgeColor: "sand",
  },
  {
    id: "booking",
    icon: "booking",
    title: {
      en: "Booking & Scheduling App",
      ar: "تطبيق الحجوزات والمواعيد",
    },
    description: {
      en: "A full booking platform for Saudi service businesses — salons, spas, massage centers, nail studios, and more. Clients browse services, pick a time, and book instantly. Similar to Booksy, built for the Saudi market.",
      ar: "منصة حجوزات متكاملة لقطاع الخدمات السعودي — الصالونات والسبا ومراكز المساج واستديوهات الأظافر وغيرها. يتصفح العميل الخدمات ويختار الوقت ويحجز فوراً. مشابهة لـ Booksy ومصممة للسوق السعودي.",
    },
    badge: { en: "Live Product", ar: "منتج حي" },
    badgeStyle: "amber",
    badgeColor: "amber",
    availabilityNote: {
      en: "Available for businesses in Saudi Arabia",
      ar: "متاح للأعمال داخل المملكة العربية السعودية",
    },
  },
];

export const projects: Project[] = [
  {
    id: "waqti",
    title: {
      en: "Waqti — Queue & Appointment Manager",
      ar: "وقتي — إدارة الطوابير والمواعيد",
    },
    description: {
      en: "Real-time client management app for service businesses. Reduces wait times, manages walk-ins and bookings, sends live queue updates.",
      ar: "تطبيق إدارة عملاء فوري لقطاع الخدمات. يقلل الانتظار ويدير الزيارات والحجوزات ويرسل تحديثات الطابور مباشرة.",
    },
    tags: {
      en: ["React Native", "Real-time", "Mobile App", "SaaS"],
      ar: ["React Native", "فوري", "تطبيق جوال", "SaaS"],
    },
    image: "/images/project-waqti-screenshot.jpg",
    imageFilename: "project-waqti-screenshot.jpg",
    usePlaceholder: false,
    link: "https://waqti-client.web.app/",
    details: {
      en: [
        "Real-time queue board for walk-in customers",
        "Appointment booking with live status updates",
        "Staff dashboard to manage clients and wait times",
        "Built with React Native for iOS and Android",
      ],
      ar: [
        "لوحة طابور فورية للعملاء بدون موعد",
        "حجز مواعيد مع تحديثات حالة مباشرة",
        "لوحة تحكم للموظفين لإدارة العملاء وأوقات الانتظار",
        "مبني بـ React Native لنظامي iOS و Android",
      ],
    },
  },
  {
    id: "website-soon",
    title: {
      en: "Client Website — Coming Soon",
      ar: "موقع عميل — قريباً",
    },
    description: {
      en: "First business website project launching soon. Check back for the full case study.",
      ar: "أول مشروع موقع أعمال قيد الإطلاق. عد قريباً لدراسة الحالة الكاملة.",
    },
    tags: {
      en: ["Next.js", "Bilingual", "Web"],
      ar: ["Next.js", "ثنائي اللغة", "ويب"],
    },
    image: "/images/client-website.jpg",
    imageFilename: "project-client-website.jpg",
    usePlaceholder: true,
    details: {
      en: [
        "Bilingual EN/AR business website",
        "Mobile-first responsive design",
        "SEO-ready structure and fast performance",
        "Full case study publishing soon",
      ],
      ar: [
        "موقع أعمال ثنائي اللغة عربي/إنجليزي",
        "تصميم متجاوب يبدأ من الجوال",
        "بنية جاهزة لمحركات البحث وأداء سريع",
        "دراسة الحالة الكاملة قريباً",
      ],
    },
  },
  {
    id: "next-project",
    title: {
      en: "Add Your Next Project",
      ar: "أضف مشروعك التالي",
    },
    description: {
      en: "Drop a new object into the projects array in content.ts to add a card here.",
      ar: "أضف كائنًا جديدًا إلى مصفوفة projects في content.ts لإضافة بطاقة هنا.",
    },
    tags: {
      en: ["Your tags here"],
      ar: ["وسومك هنا"],
    },
    image: "/images/next-project.jpg",
    imageFilename: "project-your-next.jpg",
    usePlaceholder: true,
    details: {
      en: [
        "Add a title, description, tags, and image path",
        "Set usePlaceholder to false when your screenshot is ready",
        "Optional link opens in a new tab from the expanded panel",
      ],
      ar: [
        "أضف العنوان والوصف والوسوم ومسار الصورة",
        "عيّن usePlaceholder إلى false عند جاهزية لقطة الشاشة",
        "رابط اختياري يفتح في تبويب جديد من اللوحة الموسّعة",
      ],
    },
  },
];

export const nfcProduct: NfcProduct = {
  title: {
    en: "NFC Google Review Tags",
    ar: "بطاقات NFC لتقييمات Google",
  },
  description: {
    en: "Custom-branded NFC tags for your business. One tap opens your Google Review page — no app, no friction. Watch your review count grow passively while you focus on service.",
    ar: "بطاقات NFC مخصصة بعلامتك. نقرة واحدة تفتح صفحة تقييم Google — بدون تطبيق وبدون تعقيد. زِد تقييماتك بينما تركز على خدمة عملائك.",
  },
  ctaLabel: {
    en: "Order Custom Tags",
    ar: "اطلب بطاقات مخصصة",
  },
};

export const sections: SectionTitles = {
  about: { en: "About Us", ar: "من نحن" },
  services: { en: "Our Services", ar: "خدماتنا" },
  servicesSubtitle: {
    en: "End-to-end digital solutions for Saudi businesses",
    ar: "حلول رقمية متكاملة للأعمال السعودية",
  },
  servicesMark: { en: "•", ar: "•" },
  projects: { en: "Our Work", ar: "أعمالنا" },
  projectsSubtitle: {
    en: "Selected projects — add more in content.ts",
    ar: "مشاريع مختارة — أضف المزيد في content.ts",
  },
  contact: { en: "Let's Build Something", ar: "لنبني شيئاً مميزاً" },
  contactSubtitle: {
    en: "Tell us about your project — we typically respond within 24 hours.",
    ar: "أخبرنا عن مشروعك — نرد عادة خلال 24 ساعة.",
  },
};

export function t(localized: LocalizedString, locale: Locale): string {
  return localized[locale] ?? localized.en;
}

export function tArray(
  localized: LocalizedStringArray,
  locale: Locale
): string[] {
  return localized[locale] ?? localized.en;
}

export function getWhatsAppLink(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}
