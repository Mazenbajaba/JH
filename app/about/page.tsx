'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32">
        {/* Story Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-black/40 mb-6 block">Our Legacy</span>
              <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">A Tradition of <br /> Excellence</h1>
              <div className="space-y-6 text-black/60 font-light leading-relaxed text-lg">
                <p>
                  Founded in the heart of London, Aurelia began as a small atelier dedicated to the pursuit of perfection. Our founders believed that jewelry should be more than an accessory—it should be a masterpiece that captures a moment in time.
                </p>
                <p>
                  Today, we continue that legacy by blending traditional goldsmithing techniques with modern design sensibilities. Every diamond is ethically sourced, and every setting is hand-finished by our master artisans.
                </p>
                <p>
                  Our commitment to quality is unwavering. We don&apos;t just sell jewelry; we build relationships that last as long as our creations.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-[#F8F7F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: 'Artistry', desc: 'Every design begins as a hand-drawn sketch, evolving through hours of meticulous craftsmanship.' },
                { title: 'Integrity', desc: 'We adhere to the highest ethical standards, ensuring every gemstone is responsibly sourced.' },
                { title: 'Exclusivity', desc: 'Our collections are curated and limited, ensuring your piece remains as unique as you are.' },
              ].map((value, index) => (
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
