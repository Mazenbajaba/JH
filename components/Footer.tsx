'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-serif text-3xl tracking-widest font-bold mb-6 block">
              AURELIA
            </Link>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              A legacy of craftsmanship and elegance. We create more than jewelry; we create heirlooms for generations to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">Navigation</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li><Link href="/collections" className="hover:text-white/70 transition-colors">Collections</Link></li>
              <li><Link href="/about" className="hover:text-white/70 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">Collections</h4>
            <ul className="space-y-4 text-sm font-light">
              <li><Link href="/collections?cat=necklaces" className="hover:text-white/70 transition-colors">Necklaces</Link></li>
              <li><Link href="/collections?cat=earrings" className="hover:text-white/70 transition-colors">Earrings</Link></li>
              <li><Link href="/collections?cat=bracelets" className="hover:text-white/70 transition-colors">Bracelets</Link></li>
              <li><Link href="/collections?cat=rings" className="hover:text-white/70 transition-colors">Rings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/40">Concierge</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-center space-x-3 text-white/60">
                <Phone size={16} />
                <span>+44 20 7946 0000</span>
              </li>
              <li className="flex items-center space-x-3 text-white/60">
                <Mail size={16} />
                <span>concierge@aurelia.com</span>
              </li>
              <li className="flex items-start space-x-3 text-white/60">
                <MapPin size={16} className="mt-1" />
                <span>123 Luxury Lane, Mayfair<br />London, W1J 7JZ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © 2026 Aurelia Luxury Jewelry. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
