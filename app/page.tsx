'use client';

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export default function Home() {
  const { t, isRTL } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      <FeaturedProducts />
      
      {/* Inquiry Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            "bg-black rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden",
            isRTL ? "font-arabic" : "font-sans"
          )}>
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-4xl md:text-6xl mb-8">{t('journeyTitle')}</h2>
              <p className="text-white/60 text-lg mb-12 font-light leading-relaxed">
                {t('journeyDescription')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button 
                  onClick={() => {
                    const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                    if (chatBtn) chatBtn.click();
                  }}
                  className="w-full sm:w-auto bg-white text-black px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-3"
                >
                  <span>{t('inquireNow')}</span>
                  <ArrowRight size={16} className={cn(isRTL && "rotate-180")} />
                </button>
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto border border-white/20 px-12 py-5 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white/10 transition-all"
                >
                  {t('visitShowroom')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </main>
  );
}
