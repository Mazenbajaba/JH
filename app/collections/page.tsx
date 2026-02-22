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
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className={cn(
        "pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
        isRTL ? "font-arabic" : "font-sans"
      )}>
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">{t('collectionsTitle')}</h1>
          <p className="text-black/50 max-w-2xl mx-auto font-light mb-8">
            {t('collectionsDesc')}
          </p>

          {/* Skin Tone Selector */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">{t('selectSkinTone')}</span>
            <div className="flex items-center gap-4">
              {skinTones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`group relative flex flex-col items-center gap-2 transition-all ${selectedTone === tone.id ? 'scale-110' : 'opacity-50 hover:opacity-100'}`}
                >
                  <div 
                    className="w-10 h-10 rounded-full border border-black/5 shadow-sm flex items-center justify-center"
                    style={{ backgroundColor: tone.color }}
                  >
                    {selectedTone === tone.id && <Check size={14} className="text-black/40" />}
                  </div>
                  <span className="text-[9px] uppercase tracking-tighter font-bold">{tone.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-8 py-2 rounded-full border text-xs uppercase tracking-widest font-bold transition-all",
                selectedCategory === cat.id 
                  ? "bg-black text-white border-black" 
                  : "border-black/5 hover:bg-black hover:text-white"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-50 rounded-2xl group">
                <Image
                  src={product.images[selectedTone]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay for Skin Tone Quick Select */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <span className="text-[10px] text-white uppercase tracking-widest font-bold">{t('previewOnSkin')}</span>
                  <div className="flex gap-3">
                    {skinTones.map((tone) => (
                      <button
                        key={tone.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTone(tone.id);
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${selectedTone === tone.id ? 'border-white' : 'border-transparent'}`}
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
                    className="bg-white text-black px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all shadow-xl"
                  >
                    {t('inquireNow')}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-lg mb-1">{product.name}</h3>
                  <p className="text-black/40 text-xs uppercase tracking-widest font-medium">{product.category}</p>
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
