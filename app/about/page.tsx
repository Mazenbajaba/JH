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
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className={cn(
        "pt-32",
        isRTL ? "font-arabic" : "font-sans"
      )}>
        {/* Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
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
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-black/40 mb-6 block">{t('aboutLegacy')}</span>
              <h1 
                className="font-serif text-5xl md:text-6xl mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: t('aboutTitle') }}
              />
              <div className="space-y-6 text-black/60 font-light leading-relaxed text-lg">
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
                <p>{t('aboutP3')}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#F8F7F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={value.title} className="text-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                  <p className="text-black/50 font-light leading-relaxed">{value.desc}</p>
                </div>
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
