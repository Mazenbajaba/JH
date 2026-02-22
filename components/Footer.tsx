'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className={cn(
      "bg-black text-white py-20",
      isRTL ? "font-arabic" : "font-sans"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-serif text-3xl tracking-widest font-bold mb-6 block">
              AURELIA
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              {t('footerDescription')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">{t('navigation')}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="hover:text-white/70 transition-colors">{t('home')}</Link></li>
              <li><Link href="/collections" className="hover:text-white/70 transition-colors">{t('collections')}</Link></li>
              <li><Link href="/about" className="hover:text-white/70 transition-colors">{t('ourStory')}</Link></li>
              <li><Link href="/contact" className="hover:text-white/70 transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">{t('collections')}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/collections?cat=necklaces" className="hover:text-white/70 transition-colors">{t('necklaces')}</Link></li>
              <li><Link href="/collections?cat=earrings" className="hover:text-white/70 transition-colors">{t('earrings')}</Link></li>
              <li><Link href="/collections?cat=bracelets" className="hover:text-white/70 transition-colors">{t('bracelets')}</Link></li>
              <li><Link href="/collections?cat=rings" className="hover:text-white/70 transition-colors">{t('rings')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">{t('concierge')}</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={16} />
                <span dir="ltr">+44 20 7946 0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={16} />
                <span>concierge@aurelia.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="mt-1" />
                <span>123 Luxury Lane, Mayfair<br />London, W1J 7JZ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            {t('copyright')}
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
