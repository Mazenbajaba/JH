'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1920)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className={cn(
        "relative z-10 text-center px-4 max-w-4xl mx-auto",
        isRTL ? "font-arabic" : "font-sans"
      )}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-white/80 uppercase tracking-[0.3em] text-sm mb-6 font-medium"
        >
          {t('heroSubtitle')}
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-8xl text-white mb-8 leading-tight"
        >
          {t('heroTitle')}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light tracking-wide"
        >
          {t('heroDescription')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/collections"
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-white/90 transition-all shadow-2xl"
          >
            {t('exploreCollections')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
