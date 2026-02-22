'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

type SkinTone = 'light' | 'medium' | 'deep';

export default function FeaturedProducts() {
  const [selectedTone, setSelectedTone] = useState<SkinTone>('light');
  const { t, isRTL } = useLanguage();

  const skinTones: { id: SkinTone; color: string; label: string }[] = [
    { id: 'light', color: '#F9E4D4', label: isRTL ? 'فاتحة' : 'Light' },
    { id: 'medium', color: '#D2A181', label: isRTL ? 'متوسطة' : 'Medium' },
    { id: 'deep', color: '#634433', label: isRTL ? 'داكنة' : 'Deep' },
  ];

  const products = [
    {
      id: 1,
      name: isRTL ? 'سوار ملكي من الزركون الفضي' : 'Royal Zircon Silver Bangle',
      description: isRTL ? 'سوار من الفضة الإسترليني يتميز بترتيب مهيب من أحجار الزركون المقطوعة بدقة.' : 'An intricate sterling silver bangle featuring a majestic arrangement of baguette and round-cut zircon stones.',
      images: {
        light: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
        medium: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
        deep: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
      },
    },
    {
      id: 2,
      name: isRTL ? 'عقد أوراق الشجر المهيب' : 'Majestic V-Leaf Necklace',
      description: isRTL ? 'عقد فضي مذهل على شكل حرف V مزين بأنماط الزركون المتلألئة المستوحاة من أوراق الشجر الرقيقة.' : 'A breathtaking V-shaped silver necklace adorned with shimmering zircon patterns inspired by delicate leaves.',
      images: {
        light: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
        medium: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
        deep: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
      },
    },
    {
      id: 3,
      name: isRTL ? 'خاتم هالة الياقوت الأحمر' : 'Ruby Red Halo Ring',
      description: isRTL ? 'خاتم مذهل بحجر أحمر مقطوع على شكل زمرد محاط بهالة مزدوجة من الزركون اللامع في إطار فضي.' : 'A stunning emerald-cut red stone ring surrounded by a double halo of brilliant zircons in a silver setting.',
      images: {
        light: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
        medium: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
        deep: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
      },
    },
    {
      id: 4,
      name: isRTL ? 'أقراط هالة الياقوت الأحمر' : 'Ruby Red Halo Earrings',
      description: isRTL ? 'أقراط فضية رائعة تتميز بأحجار حمراء نابضة بالحياة وهالة من لمسات الزركون المتلألئة.' : 'Exquisite silver drop earrings featuring vibrant red stones and a halo of shimmering zircon accents.',
      images: {
        light: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
        medium: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
        deep: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
      },
    },
  ];

  return (
    <section className={cn(
      "py-32 bg-luxury-gradient",
      isRTL ? "font-arabic" : "font-cormorant"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream mb-6">
            {t('featuredTitle')}
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
          <p className="text-cream-muted max-w-xl mx-auto font-light text-lg leading-relaxed">
            {t('featuredDescription')}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-luxury-charcoal rounded-2xl border border-gold/10 group-hover:border-gold/30 transition-all duration-500">
                <motion.div
                  key={`${product.id}-${selectedTone}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={product.images[selectedTone]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
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
                    onClick={() => {
                      const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                      if (chatBtn) chatBtn.click();
                    }}
                    className="bg-gold text-luxury-black px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] font-semibold hover:bg-gold-light transition-all mt-2"
                  >
                    {t('inquireNow')}
                  </button>
                </div>
              </div>
              <h3 className="font-display text-xl text-cream mb-2">{product.name}</h3>
              <p className="text-cream-muted text-sm mb-4 leading-relaxed line-clamp-2">
                {product.description}
              </p>
              <button 
                onClick={() => {
                  const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                  if (chatBtn) chatBtn.click();
                }}
                className="text-gold text-xs uppercase tracking-[0.2em] font-medium border-b border-gold/30 pb-1 hover:border-gold transition-colors"
              >
                {t('inquireNow')}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/collections"
            className="btn-outline-gold px-10 py-4 rounded-full text-xs tracking-[0.2em] inline-flex items-center gap-3"
          >
            <ArrowLeft className={cn("w-4 h-4", isRTL ? "rotate-180" : "")} />
            {t('showAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
