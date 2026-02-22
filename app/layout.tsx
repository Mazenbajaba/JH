import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Amiri, Tajawal } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aurelia | Luxury Jewelry',
  description: 'Experience the pinnacle of jewelry craftsmanship with Aurelia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <html lang="ar" dir="rtl" className={`${playfair.variable} ${cormorant.variable} ${amiri.variable} ${tajawal.variable}`}>
        <body className="font-cormorant antialiased bg-luxury-black text-cream min-h-screen" suppressHydrationWarning>
          <div className="grain-overlay" />
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
