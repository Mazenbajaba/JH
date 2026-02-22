'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h1>
            <p className="text-black/50 max-w-2xl mx-auto font-light">
              Our concierge team is available to assist you with any inquiries, private viewings, or custom design requests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-3xl mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Phone</h4>
                      <p className="text-black/60 font-light">+44 20 7946 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Email</h4>
                      <p className="text-black/60 font-light">concierge@aurelia.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Showroom</h4>
                      <p className="text-black/60 font-light">123 Luxury Lane, Mayfair<br />London, W1J 7JZ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold mb-1">Hours</h4>
                      <p className="text-black/60 font-light">Mon - Sat: 10:00 AM - 6:00 PM<br />Sun: By Appointment Only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-[#F8F7F5] rounded-3xl">
                <h3 className="font-serif text-xl mb-4">Private Viewings</h3>
                <p className="text-black/50 text-sm font-light leading-relaxed mb-6">
                  We offer private, one-on-one consultations in our Mayfair showroom or via secure video call. Please use the chatbot or call us to schedule your appointment.
                </p>
                <button 
                  onClick={() => {
                    // The n8n chat widget has its own trigger
                  }}
                  className="text-xs uppercase tracking-widest font-bold border-b border-black pb-1"
                >
                  Schedule Now
                </button>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-sm"
            >
              <h2 className="font-serif text-3xl mb-8">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">First Name</label>
                    <input type="text" className="w-full bg-black/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-black/10 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Last Name</label>
                    <input type="text" className="w-full bg-black/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-black/10 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Email Address</label>
                  <input type="email" className="w-full bg-black/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-black/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Subject</label>
                  <select className="w-full bg-black/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-black/10 transition-all appearance-none">
                    <option>Product Inquiry</option>
                    <option>Custom Design</option>
                    <option>Appointment Request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black/40">Message</label>
                  <textarea rows={4} className="w-full bg-black/5 border-none rounded-xl py-4 px-6 focus:ring-1 focus:ring-black/10 transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-black text-white py-5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-black/80 transition-all">
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
