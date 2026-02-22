'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-luxury-black">
      <Header />
      
      <div className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-6">
              {t('contact')}
            </h1>
            <div className="w-24 h-[1px] bg-gold mx-auto mb-6" />
            <p className="text-cream-muted max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Our concierge team is available to assist you with any inquiries, private viewings, or custom design requests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-display text-3xl text-cream mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-2">Phone</h4>
                      <p className="text-cream-muted font-light">+44 20 7946 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-2">Email</h4>
                      <p className="text-cream-muted font-light">concierge@aurelia.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-2">Showroom</h4>
                      <p className="text-cream-muted font-light">123 Luxury Lane, Mayfair<br />London, W1J 7JZ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 border border-gold/20">
                      <Clock size={20} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold mb-2">Hours</h4>
                      <p className="text-cream-muted font-light">Mon - Sat: 10:00 AM - 6:00 PM<br />Sun: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-luxury-charcoal rounded-3xl border border-gold/10">
                <h3 className="font-display text-xl text-cream mb-4">Private Viewings</h3>
                <p className="text-cream-muted text-sm font-light leading-relaxed mb-6">
                  We offer private, one-on-one consultations in our Mayfair showroom or via secure video call. Please use the chatbot or call us to schedule your appointment.
                </p>
                <button 
                  onClick={() => {
                    const chatBtn = document.querySelector('.n8n-chat-button') as HTMLElement;
                    if (chatBtn) chatBtn.click();
                  }}
                  className="text-gold text-xs uppercase tracking-[0.2em] font-semibold border-b border-gold pb-1 hover:text-gold-light transition-colors"
                >
                  Schedule Now
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-luxury-charcoal border border-gold/10 rounded-3xl p-8 md:p-12"
            >
              <h2 className="font-display text-3xl text-cream mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-muted">First Name</label>
                    <input type="text" className="w-full bg-luxury-dark border border-gold/20 rounded-xl py-4 px-6 text-cream focus:border-gold transition-colors outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-muted">Last Name</label>
                    <input type="text" className="w-full bg-luxury-dark border border-gold/20 rounded-xl py-4 px-6 text-cream focus:border-gold transition-colors outline-none" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-muted">Email Address</label>
                  <input type="email" className="w-full bg-luxury-dark border border-gold/20 rounded-xl py-4 px-6 text-cream focus:border-gold transition-colors outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-muted">Subject</label>
                  <select className="w-full bg-luxury-dark border border-gold/20 rounded-xl py-4 px-6 text-cream focus:border-gold transition-colors outline-none appearance-none">
                    <option>Product Inquiry</option>
                    <option>Custom Design</option>
                    <option>Appointment Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-muted">Message</label>
                  <textarea rows={4} className="w-full bg-luxury-dark border border-gold/20 rounded-xl py-4 px-6 text-cream focus:border-gold transition-colors outline-none resize-none"></textarea>
                </div>
                <button className="btn-gold w-full py-4 rounded-full text-xs tracking-[0.2em]">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </main>
  );
}
