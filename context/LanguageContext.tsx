'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    home: 'الرئيسية',
    collections: 'المجموعات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    heroTitle: 'صُنعت للمتميزين',
    heroSubtitle: 'أناقة خالدة',
    heroDescription: 'اكتشف مجموعة مختارة من المجوهرات الراقية التي تتجاوز الصيحات وتحتفي بقصتك الفريدة.',
    exploreCollections: 'استكشف المجموعات',
    scrollDown: 'اسحب للأسفل',
    featuredTitle: 'روائع مختارة',
    featuredDescription: 'كل قطعة في مجموعتنا المختارة هي شهادة على تفانينا في الفن والجودة.',
    selectSkinTone: 'اختر لون البشرة للمعاينة',
    previewOnSkin: 'معاينة على لون البشرة',
    inquireNow: 'استفسر الآن',
    showAll: 'عرض جميع المنتجات',
    footerDescription: 'إرث من الحرفية والأناقة. نحن نصنع أكثر من مجرد مجوهرات؛ نحن نصنع قطعاً تتوارثها الأجيال القادمة.',
    navigation: 'التنقل',
    concierge: 'خدمة العملاء',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    copyright: '© 2026 أوريليا للمجوهرات الفاخرة. جميع الحقوق محفوظة.',
    ourStory: 'قصتنا',
    necklaces: 'القلائد',
    earrings: 'الأقراط',
    bracelets: 'الأساور',
    rings: 'الخواتم',
    switchLanguage: 'English',
    journeyTitle: 'ابدأ رحلتك',
    journeyDescription: 'سواء كنت تبحث عن ابتكار مخصص أو ترغب في عرض مجموعتنا الخاصة، فإن خدمة العملاء لدينا هنا لإرشادك عبر عالم أوريليا.',
    visitShowroom: 'زيارة المعرض',
    aboutLegacy: 'إرثنا',
    aboutTitle: 'تقليد من <br /> التميز',
    aboutP1: 'تأسست أوريليا في قلب لندن، وبدأت كورشة صغيرة مكرسة للسعي وراء الكمال. آمن مؤسسونا بأن المجوهرات يجب أن تكون أكثر من مجرد إكسسوار - يجب أن تكون تحفة فنية تلتقط لحظة من الزمن.',
    aboutP2: 'اليوم، نواصل هذا الإرث من خلال مزج تقنيات صياغة الذهب التقليدية مع أحاسيس التصميم الحديثة. يتم الحصول على كل ماسة بشكل أخلاقي، ويتم تشطيب كل قطعة يدوياً من قبل حرفيينا المهرة.',
    aboutP3: 'التزامنا بالجودة لا يتزعزع. نحن لا نبيع المجوهرات فحسب؛ بل نبني علاقات تدوم طويلاً مثل إبداعاتنا.',
    value1Title: 'الفن',
    value1Desc: 'يبدأ كل تصميم كرسم يدوي، يتطور عبر ساعات من الحرفية الدقيقة.',
    value2Title: 'النزاهة',
    value2Desc: 'نحن نلتزم بأعلى المعايير الأخلاقية، مما يضمن الحصول على كل حجر كريم بمسؤولية.',
    value3Title: 'الحصرية',
    value3Desc: 'مجموعاتنا منسقة ومحدودة، مما يضمن أن تظل قطعتك فريدة مثلك تماماً.',
    collectionsTitle: 'المجموعات',
    collectionsDesc: 'استكشف مجموعتنا الكاملة من المجوهرات المصنوعة يدوياً. كل قطعة هي تعبير فريد عن الفخامة والفن.',
    all: 'الكل',
  },
  en: {
    home: 'Home',
    collections: 'Collections',
    about: 'About',
    contact: 'Contact Us',
    heroTitle: 'Crafted for the Extraordinary',
    heroSubtitle: 'Timeless Elegance',
    heroDescription: 'Discover a curated collection of fine jewelry that transcends trends and celebrates your unique story.',
    exploreCollections: 'Explore Collections',
    scrollDown: 'Scroll',
    featuredTitle: 'Featured Masterpieces',
    featuredDescription: 'Each piece in our featured collection is a testament to our dedication to artistry and quality.',
    selectSkinTone: 'Select Skin Tone to Preview',
    previewOnSkin: 'Preview on Skin Tone',
    inquireNow: 'Inquire Now',
    showAll: 'Show All Products',
    footerDescription: 'A legacy of craftsmanship and elegance. We create more than jewelry; we create heirlooms for generations to come.',
    navigation: 'Navigation',
    concierge: 'Concierge',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    copyright: '© 2026 Aurelia Luxury Jewelry. All Rights Reserved.',
    ourStory: 'Our Story',
    necklaces: 'Necklaces',
    earrings: 'Earrings',
    bracelets: 'Bracelets',
    rings: 'Rings',
    switchLanguage: 'العربية',
    journeyTitle: 'Begin Your Journey',
    journeyDescription: 'Whether you seek a custom creation or wish to view our private collection, our concierge is here to guide you through the world of Aurelia.',
    visitShowroom: 'Visit Showroom',
    aboutLegacy: 'Our Legacy',
    aboutTitle: 'A Tradition of <br /> Excellence',
    aboutP1: 'Founded in the heart of London, Aurelia began as a small atelier dedicated to the pursuit of perfection. Our founders believed that jewelry should be more than an accessory—it should be a masterpiece that captures a moment in time.',
    aboutP2: 'Today, we continue that legacy by blending traditional goldsmithing techniques with modern design sensibilities. Every diamond is ethically sourced, and every setting is hand-finished by our master artisans.',
    aboutP3: 'Our commitment to quality is unwavering. We don\'t just sell jewelry; we build relationships that last as long as our creations.',
    value1Title: 'Artistry',
    value1Desc: 'Every design begins as a hand-drawn sketch, evolving through hours of meticulous craftsmanship.',
    value2Title: 'Integrity',
    value2Desc: 'We adhere to the highest ethical standards, ensuring every gemstone is responsibly sourced.',
    value3Title: 'Exclusivity',
    value3Desc: 'Our collections are curated and limited, ensuring your piece remains as unique as you are.',
    collectionsTitle: 'The Collections',
    collectionsDesc: 'Explore our complete range of handcrafted jewelry. Each piece is a unique expression of luxury and artistry.',
    all: 'All',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
