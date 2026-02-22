'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2072)',
            filter: 'brightness(0.35) saturate(1.2)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/60 via-transparent to-luxury-black/60" />
        
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-[80px]" />
        </div>
      </div>

      <div className={cn(
        "relative z-10 text-center px-4 max-w-5xl mx-auto",
        isRTL ? "font-arabic" : "font-cormorant"
      )}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-medium">
            {t('heroSubtitle')}
          </span>
          <Sparkles className="w-4 h-4 text-gold" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-cream mb-8 leading-[0.9]"
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-cream-muted text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
        >
          {t('heroDescription')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/collections"
            className="btn-gold px-10 py-4 rounded-full text-xs tracking-[0.2em] inline-flex items-center gap-3"
          >
            {t('exploreCollections')}
            <ArrowDown className={cn("w-4 h-4", isRTL ? "rotate-180" : "")} />
          </Link>
          
          <Link
            href="/about"
            className="btn-outline-gold px-10 py-4 rounded-full text-xs tracking-[0.2em]"
          >
            {t('ourStory')}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-gold-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">{t('scrollDown')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
