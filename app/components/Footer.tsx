"use client";

import { useState } from "react";
import Link from "next/link";
import QuoteModal from "./QuoteModal";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

const supportLinks = [
  { label: "404", href: "/404" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
  </svg>
);

const socialLinks = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export default function Footer() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
    <footer className="bg-dark text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top border */}
        <div className="border-t border-white/10 pt-12 mb-12" />

        {/* Main Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 mb-6">
          {/* Contact Section - left */}
          <div className="md:flex-1">
            <div className="font-mono text-[10px] tracking-wider text-white/50 mb-4">CONTACT</div>
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-xl font-sans">Let's Get Started</span>
              <span className="text-white/30 hidden md:inline">|</span>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-5 py-2.5 bg-white/10 border border-white/20 font-sans text-sm hover:bg-white/20 transition-colors"
              >
                Request A Quote
              </button>
            </div>
          </div>

          {/* Right side: Address | Main | Support */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {/* Address */}
            <div>
              <div className="font-mono text-[10px] tracking-wider text-white/50 mb-4">ADDRESS</div>
              <p className="font-mono text-xs tracking-wider">
                Kempton Park,<br />
                Gauteng,<br />
                South Africa
              </p>
            </div>

            {/* Main Links */}
            <div>
              <div className="font-mono text-[10px] tracking-wider text-white/50 mb-4">MAIN</div>
              <nav className="space-y-2">
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-mono text-xs tracking-wider hover:text-white/70 transition-colors"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Support Links */}
            <div>
              <div className="font-mono text-[10px] tracking-wider text-white/50 mb-4">SUPPORT</div>
              <nav className="space-y-2">
                {supportLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block font-mono text-xs tracking-wider hover:text-white/70 transition-colors"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-16">
          <div className="font-mono text-[10px] tracking-wider text-white/50 mb-4">QUICK CONTACT</div>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                aria-label={social.label}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] tracking-wider text-white/50">
            <span>©2026. ALL RIGHTS RESERVED</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <Link href="https://flowit.supply" className="hover:text-white/70 transition-colors">
              BY ASTROTECHNOLOGIES
            </Link>
          </div>
        </div>

        {/* Large Big Bee Logistics Logo */}
        <div className="mt-2 overflow-hidden">
          <div className="flex items-center justify-center">
            <h2 className="text-[40px] md:text-[60px] lg:text-[100px] font-mono font-bold tracking-tighter leading-none select-none">
              <span className="text-white/10">Big </span>
              <span className="text-[#fedb5b]">Bee</span>
              <span className="text-white/10"> Logistics</span>
              <sup className="text-xl md:text-3xl lg:text-5xl text-white/20">®</sup>
            </h2>
          </div>
        </div>
      </div>
    </footer>
    <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
