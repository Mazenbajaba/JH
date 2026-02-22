'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('collections'), href: '/collections' },
    { name: t('about'), href: '/about' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5",
      isRTL ? "font-arabic" : "font-sans"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-black">
              AURELIA
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:text-black/60",
                  pathname === item.href ? "text-black font-semibold" : "text-black/40"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-black/60 hover:text-black transition-colors"
            >
              <Globe size={14} />
              {t('switchLanguage')}
            </button>

            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-black/80 transition-all"
            >
              {t('contact')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "md:hidden bg-white border-b border-black/5 px-4 pt-2 pb-6 space-y-4",
            isRTL ? "font-arabic" : "font-sans"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-sm uppercase tracking-widest py-2",
                pathname === item.href ? "text-black font-semibold" : "text-black/40"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <button
            onClick={() => {
              setLanguage(language === 'ar' ? 'en' : 'ar');
              setIsOpen(false);
            }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-black/60 py-2"
          >
            <Globe size={14} />
            {t('switchLanguage')}
          </button>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-black text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest font-medium text-center"
          >
            {t('contact')}
          </Link>
        </motion.div>
      )}
    </header>
  );
}
