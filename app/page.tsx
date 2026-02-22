'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Home() {
  const { t, isRTL } = useLanguage();

  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      
      <Hero />
      
      <FeaturedProducts />
      
      <section className="py-32 bg-luxury-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={cn(
              "bg-gradient-to-br from-luxury-charcoal to-luxury-dark rounded-[3rem] p-12 md:p-20 text-center border border-gold/10 relative overflow-hidden",
              isRTL ? "font-arabic" : "font-cormorant"
            )}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3 blur-[80px]" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs uppercase tracking-[0.3em]">
                  {t('concierge')}
                </span>
              </div>
              
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-cream mb-8 leading-tight">
                {t('journeyTitle')}
              </h2>
              
              <p className="text-cream-muted text-lg md:text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                {t('journeyDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button 
                  onClick={() => {
                    const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                    if (chatBtn) chatBtn.click();
                  }}
                  className="btn-gold px-10 py-4 rounded-full text-xs tracking-[0.2em] inline-flex items-center gap-3"
                >
                  <span>{t('inquireNow')}</span>
                  <ArrowRight className={cn("w-4 h-4", isRTL && "rotate-180")} />
                </button>
                <Link 
                  href="/contact"
                  className="btn-outline-gold px-10 py-4 rounded-full text-xs tracking-[0.2em]"
                >
                  {t('visitShowroom')}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
}
