'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Image from 'next/image';
import { motion } from 'motion/react';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function About() {
  const { t, isRTL } = useLanguage();

  const values = [
    { title: t('value1Title'), desc: t('value1Desc') },
    { title: t('value2Title'), desc: t('value2Desc') },
    { title: t('value3Title'), desc: t('value3Desc') },
  ];

  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      
      <div className={cn(
        "pt-40",
        isRTL ? "font-arabic" : "font-cormorant"
      )}>
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/10"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/20 to-transparent z-10" />
              <Image
                src="https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe"
                alt="Craftsmanship"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">
                {t('aboutLegacy')}
              </span>
              <h1 
                className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: t('aboutTitle') }}
              />
              <div className="space-y-6 text-cream-muted font-light leading-relaxed text-lg">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
                <p>{t('aboutP3')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-luxury-charcoal/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <motion.div 
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-center p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold font-display text-xl">
                    0{index + 1}
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-4">{value.title}</h3>
                  <p className="text-cream-muted font-light leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
