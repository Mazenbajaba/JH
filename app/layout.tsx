import type { Metadata } from 'next';
import { Inter, Playfair_Display, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
});

export const metadata: Metadata = {
  title: 'أوريليا | معرض مجوهرات فاخرة',
  description: 'اختبر قمة الحرفية في صناعة المجوهرات مع أوريليا.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <html lang="ar" dir="rtl" className={`${inter.variable} ${playfair.variable} ${notoArabic.variable}`}>
        <body className="font-sans antialiased bg-[#FDFCFB] text-[#1A1A1A]" suppressHydrationWarning>
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
