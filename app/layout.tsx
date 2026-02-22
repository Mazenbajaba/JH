import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Aurelia | Luxury Jewelry Showroom',
  description: 'Experience the pinnacle of jewelry craftsmanship with Aurelia.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FDFCFB] text-[#1A1A1A]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
