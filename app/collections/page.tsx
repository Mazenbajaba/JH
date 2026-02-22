'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type SkinTone = 'light' | 'medium' | 'deep';

export default function Collections() {
  const [selectedTone, setSelectedTone] = useState<SkinTone>('light');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t, isRTL } = useLanguage();

  const skinTones: { id: SkinTone; color: string; label: string }[] = [
    { id: 'light', color: '#F9E4D4', label: isRTL ? 'فاتحة' : 'Light' },
    { id: 'medium', color: '#D2A181', label: isRTL ? 'متوسطة' : 'Medium' },
    { id: 'deep', color: '#634433', label: isRTL ? 'داكنة' : 'Deep' },
  ];

  const allProducts = [
    { 
      id: 1, 
      name: isRTL ? 'عقد أوراق الشجر المهيب' : 'Majestic V-Leaf Necklace', 
      category: t('necklaces'), 
      catId: 'necklaces',
      images: {
        light: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
        medium: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
        deep: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
      }
    },
    { 
      id: 2, 
      name: isRTL ? 'أقراط هالة الياقوت الأحمر' : 'Ruby Red Halo Earrings', 
      category: t('earrings'), 
      catId: 'earrings',
      images: {
        light: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
        medium: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
        deep: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
      }
    },
    { 
      id: 3, 
      name: isRTL ? 'سوار ملكي من الزركون الفضي' : 'Royal Zircon Silver Bangle', 
      category: t('bracelets'), 
      catId: 'bracelets',
      images: {
        light: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
        medium: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
        deep: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
      }
    },
    { 
      id: 4, 
      name: isRTL ? 'خاتم هالة الياقوت الأحمر' : 'Ruby Red Halo Ring', 
      category: t('rings'), 
      catId: 'rings',
      images: {
        light: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
        medium: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
        deep: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
      }
    },
  ];

  const categories = [
    { name: t('all'), id: 'all' },
    { name: t('necklaces'), id: 'necklaces' },
    { name: t('earrings'), id: 'earrings' },
    { name: t('bracelets'), id: 'bracelets' },
    { name: t('rings'), id: 'rings' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.catId === selectedCategory);

  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      
      <div className={cn(
        "pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
        isRTL ? "font-arabic" : "font-cormorant"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6">
            {t('collectionsTitle')}
          </h1>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-cream-muted max-w-2xl mx-auto font-light text-lg leading-relaxed">
            {t('collectionsDesc')}
          </p>

          <div className="flex flex-col items-center gap-6 mt-12">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gold-muted">
              {t('selectSkinTone')}
            </span>
            <div className="flex items-center gap-5">
              {skinTones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={cn(
                    "group relative flex flex-col items-center gap-3 transition-all duration-300",
                    selectedTone === tone.id ? 'scale-110' : 'opacity-40 hover:opacity-80'
                  )}
                >
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                      selectedTone === tone.id ? 'border-gold shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'border-gold/20'
                    )}
                    style={{ backgroundColor: tone.color }}
                  >
                    {selectedTone === tone.id && <Check size={16} className="text-luxury-black" />}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-medium text-gold-muted">
                    {tone.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-8 py-3 rounded-full border text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300",
                selectedCategory === cat.id 
                  ? "bg-gold text-luxury-black border-gold" 
                  : "border-gold/20 text-gold-muted hover:border-gold hover:text-gold"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-luxury-charcoal rounded-2xl border border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <Image
                  src={product.images[selectedTone]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-luxury-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-5">
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium">
                    {t('previewOnSkin')}
                  </span>
                  <div className="flex gap-4">
                    {skinTones.map((tone) => (
                      <button
                        key={tone.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTone(tone.id);
                        }}
                        className={cn(
                          "w-10 h-10 rounded-full border-2 transition-all duration-300 hover:scale-110",
                          selectedTone === tone.id ? 'border-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'border-white/20 hover:border-white/50'
                        )}
                        style={{ backgroundColor: tone.color }}
                        title={tone.label}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                      if (chatBtn) chatBtn.click();
                    }}
                    className="bg-gold text-luxury-black px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-gold-light transition-all mt-2"
                  >
                    {t('inquireNow')}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl text-cream mb-1">{product.name}</h3>
                  <p className="text-gold-muted text-xs uppercase tracking-widest font-medium">{product.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
