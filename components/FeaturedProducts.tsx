'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

type SkinTone = 'light' | 'medium' | 'deep';

const skinTones: { id: SkinTone; color: string; label: string }[] = [
  { id: 'light', color: '#F9E4D4', label: 'Light' },
  { id: 'medium', color: '#D2A181', label: 'Medium' },
  { id: 'deep', color: '#634433', label: 'Deep' },
];

const products = [
  {
    id: 1,
    name: 'Royal Zircon Silver Bangle',
    description: 'An intricate sterling silver bangle featuring a majestic arrangement of baguette and round-cut zircon stones.',
    images: {
      light: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
      medium: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
      deep: 'https://drive.google.com/uc?id=1QOZUeogRlLmV7Qyrc1WUdbj6rWM3ijLe',
    },
  },
  {
    id: 2,
    name: 'Majestic V-Leaf Necklace',
    description: 'A breathtaking V-shaped silver necklace adorned with shimmering zircon patterns inspired by delicate leaves.',
    images: {
      light: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
      medium: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
      deep: 'https://drive.google.com/uc?id=1PhoUeMyFv45gNqR2m3bi2HjFxgn5Tiwk',
    },
  },
  {
    id: 3,
    name: 'Ruby Red Halo Ring',
    description: 'A stunning emerald-cut red stone ring surrounded by a double halo of brilliant zircons in a silver setting.',
    images: {
      light: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
      medium: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
      deep: 'https://drive.google.com/uc?id=11E7xpPkhehyzRi6M5T-Lf8gPA5ppaxPK',
    },
  },
  {
    id: 4,
    name: 'Ruby Red Halo Earrings',
    description: 'Exquisite silver drop earrings featuring vibrant red stones and a halo of shimmering zircon accents.',
    images: {
      light: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
      medium: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
      deep: 'https://drive.google.com/uc?id=1u75uYzf2HDjAXGR52Yu8yTyOZRLZMO_H',
    },
  },
];

export default function FeaturedProducts() {
  const [selectedTone, setSelectedTone] = useState<SkinTone>('light');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Featured Masterpieces</h2>
          <div className="w-20 h-[1px] bg-black/20 mx-auto mb-6" />
          <p className="text-black/50 max-w-xl mx-auto font-light mb-8">
            Each piece in our featured collection is a testament to our dedication to artistry and quality.
          </p>

          {/* Skin Tone Selector */}
          <div className="flex flex-col items-center space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-black/40">Select Skin Tone to Preview</span>
            <div className="flex items-center space-x-4">
              {skinTones.map((tone) => (
                <button
                  key={tone.id}
                  onClick={() => setSelectedTone(tone.id)}
                  className={`group relative flex flex-col items-center space-y-2 transition-all ${selectedTone === tone.id ? 'scale-110' : 'opacity-50 hover:opacity-100'}`}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-50 rounded-2xl group">
                <Image
                  src={product.images[selectedTone]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Overlay for Skin Tone Quick Select */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
                  <span className="text-[10px] text-white uppercase tracking-widest font-bold">Preview on Skin Tone</span>
                  <div className="flex space-x-3">
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
                </div>
              </div>
              <h3 className="font-serif text-xl mb-2">{product.name}</h3>
              <p className="text-black/60 text-sm mb-6 leading-relaxed font-light">
                {product.description}
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => {
                    // Trigger n8n chat for inquiry
                    const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                    if (chatBtn) chatBtn.click();
                  }}
                  className="text-xs uppercase tracking-[0.2em] font-bold border-b border-black/20 pb-1 hover:border-black transition-colors"
                >
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/collections"
            className="inline-block border border-black px-12 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-white transition-all"
          >
            Show All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
