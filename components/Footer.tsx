'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Diamond } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className={cn(
      "bg-luxury-black border-t border-gold/10",
      isRTL ? "font-arabic" : "font-cormorant"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-8 group">
                <Diamond className="w-6 h-6 text-gold transition-transform duration-500 group-hover:rotate-12" />
                <span className="font-display text-2xl tracking-[0.3em] font-bold text-cream">
                  AURELIA
                </span>
              </Link>
              <p className="text-cream-muted text-sm font-light leading-relaxed mb-8">
                {t('footerDescription')}
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-gold-muted hover:text-gold transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gold-muted hover:text-gold transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gold-muted hover:text-gold transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">
                {t('navigation')}
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <Link href="/" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('home')}
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('collections')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('ourStory')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">
                {t('collections')}
              </h4>
              <ul className="space-y-4 text-sm font-light">
                <li>
                  <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('necklaces')}
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('earrings')}
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('bracelets')}
                  </Link>
                </li>
                <li>
                  <Link href="/collections" className="text-cream-muted hover:text-gold transition-colors duration-300">
                    {t('rings')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-semibold mb-8 text-gold">
                {t('concierge')}
              </h4>
              <ul className="space-y-5 text-sm font-light">
                <li className="flex items-center gap-3 text-cream-muted">
                  <Phone size={16} className="text-gold-muted" />
                  <span dir="ltr">+44 20 7946 0000</span>
                </li>
                <li className="flex items-center gap-3 text-cream-muted">
                  <Mail size={16} className="text-gold-muted" />
                  <span>concierge@aurelia.com</span>
                </li>
                <li className="flex items-start gap-3 text-cream-muted">
                  <MapPin size={16} className="text-gold-muted mt-1" />
                  <span>123 Luxury Lane, Mayfair<br />London, W1J 7JZ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gold-muted/50">
              {t('copyright')}
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
              <a href="#" className="text-gold-muted/50 hover:text-gold transition-colors duration-300">
                {t('privacyPolicy')}
              </a>
              <a href="#" className="text-gold-muted/50 hover:text-gold transition-colors duration-300">
                {t('termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
