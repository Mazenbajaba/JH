'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Diamond, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t, isRTL } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('collections'), href: '/collections' },
    { name: t('about'), href: '/about' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-luxury-black/95 backdrop-blur-xl border-b border-gold/10 py-3" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-3">
            <Diamond className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-12" />
            <span className="font-display text-2xl tracking-[0.3em] font-bold text-cream">
              AURELIA
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative font-medium tracking-wider text-sm transition-colors duration-300 link-underline",
                  pathname === item.href ? "text-gold" : "text-cream-muted hover:text-cream"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-gold-muted hover:text-gold transition-colors"
            >
              <Globe size={14} />
              {t('switchLanguage')}
            </button>

            <Link
              href="/contact"
              className="btn-gold px-8 py-3 rounded-full text-xs tracking-[0.15em]"
            >
              {t('contact')}
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream p-2 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-luxury-charcoal/98 backdrop-blur-xl border-t border-gold/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block text-lg tracking-wider py-3 border-b border-gold/5",
                    pathname === item.href ? "text-gold" : "text-cream-muted"
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
                className="flex items-center gap-3 text-gold-muted py-3"
              >
                <Globe size={16} />
                {t('switchLanguage')}
              </button>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block btn-gold px-8 py-4 rounded-full text-center text-sm tracking-[0.15em] mt-6"
              >
                {t('contact')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
