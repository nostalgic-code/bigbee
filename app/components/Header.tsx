"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import QuoteModal from "./QuoteModal";

interface HeaderProps {
  darkText?: boolean;
}

export default function Header({ darkText = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const bottomSectionRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && overlayRef.current) {
      const tl = gsap.timeline();
      
      // Fade in overlay
      tl.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate MAIN section label and links
      if (mainSectionRef.current) {
        const mainLabel = mainSectionRef.current.querySelector('p');
        const mainLinks = mainSectionRef.current.querySelectorAll('a');
        
        tl.fromTo(mainLabel,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          "-=0.1"
        );
        
        tl.fromTo(mainLinks,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" },
          "-=0.3"
        );
      }

      // Animate CONTACT section
      if (contactSectionRef.current) {
        const contactLabel = contactSectionRef.current.querySelector('p');
        const contactButtons = contactSectionRef.current.querySelectorAll('a');
        
        tl.fromTo(contactLabel,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          "-=0.4"
        );
        
        tl.fromTo(contactButtons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
      }

      // Animate divider
      if (dividerRef.current) {
        tl.fromTo(dividerRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.3"
        );
      }

      // Animate bottom section
      if (bottomSectionRef.current) {
        const bottomChildren = bottomSectionRef.current.children;
        tl.fromTo(bottomChildren,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        );
      }
    }
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-5 flex items-center justify-between transition-all duration-300 ${
        scrolled && !menuOpen ? 'bg-[#f5f5f5] backdrop-blur-md shadow-lg' : ''
      }`}>
        <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
          <Image
            src="/BigBeeLogistics-03.png"
            alt="BigBeeLogistics"
            width={280}
            height={100}
            className="h-16 sm:h-20 md:h-24 w-auto"
            priority
          />
        </Link>

        {/* Hamburger Menu / Close Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute left-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-4 flex flex-col justify-center items-center">
            <span 
              className={`absolute w-5 h-[1.5px] transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? 'bg-dark rotate-45 translate-y-0' 
                  : scrolled || darkText
                    ? 'bg-dark rotate-0 -translate-y-1.5'
                    : 'bg-white rotate-0 -translate-y-1.5'
              }`} 
            />
            <span 
              className={`absolute w-5 h-[1.5px] transition-all duration-300 ease-in-out ${
                menuOpen 
                  ? 'bg-dark -rotate-45 translate-y-0' 
                  : scrolled || darkText
                    ? 'bg-dark rotate-0 translate-y-1.5'
                    : 'bg-white rotate-0 translate-y-1.5'
              }`} 
            />
          </div>
        </button>

        <button
          onClick={() => setQuoteModalOpen(true)}
          className={`font-mono text-[10px] tracking-[0.15em] uppercase hover:opacity-80 transition-all duration-300 ${menuOpen || scrolled || darkText ? 'text-dark' : 'text-white'}`}
        >
          Request a Quote
        </button>
      </header>

      {/* Full Page Menu Overlay */}
      {menuOpen && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-[#f5f5f5] z-40 pt-24 px-6 md:px-12 overflow-auto"
          style={{ opacity: 0 }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Main Navigation Area */}
            <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0 py-12">
              {/* MAIN Section - Two columns */}
              <div ref={mainSectionRef}>
                <p className="font-mono text-[10px] tracking-[0.15em] text-dark/60 mb-6">MAIN</p>
                <div className="flex gap-24 md:gap-32">
                  <div className="flex flex-col gap-4">
                    <Link href="/" className="group relative text-dark text-2xl md:text-3xl font-sans transition-all duration-300 hover:translate-x-2" onClick={() => setMenuOpen(false)}>
                      Home
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-dark transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <Link href="/about" className="group relative text-dark text-2xl md:text-3xl font-sans transition-all duration-300 hover:translate-x-2" onClick={() => setMenuOpen(false)}>
                      About
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-dark transition-all duration-300 group-hover:w-full" />
                    </Link>
                    <Link href="/services" className="group relative text-dark text-2xl md:text-3xl font-sans transition-all duration-300 hover:translate-x-2" onClick={() => setMenuOpen(false)}>
                      Services
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-dark transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CONTACT Section */}
              <div ref={contactSectionRef}>
                <p className="font-mono text-[10px] tracking-[0.15em] text-dark/60 mb-6">CONTACT</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:info@bigbeelogistics.co.za"
                    className="inline-flex items-center justify-center px-6 py-3 bg-dark text-white font-sans text-sm hover:bg-dark/90 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    Send Us A Message
                  </a>
                  <button
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#fedb5b] text-dark font-sans text-sm hover:bg-[#fedb5b]/80 transition-all"
                    onClick={() => { setMenuOpen(false); setQuoteModalOpen(true); }}
                  >
                    Request A Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div ref={dividerRef} className="w-full h-[1px] bg-dark/15 origin-left" />

            {/* Bottom Section */}
            <div ref={bottomSectionRef} className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 py-12">
              {/* Quick Contact */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-dark/60 mb-4">QUICK CONTACT</p>
                <div className="flex gap-2">
                  <a href="#" className="w-10 h-10 border border-dark/20 flex items-center justify-center hover:bg-dark/5 transition-colors" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-dark/20 flex items-center justify-center hover:bg-dark/5 transition-colors" aria-label="X/Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-dark">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 border border-dark/20 flex items-center justify-center hover:bg-dark/5 transition-colors" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="18" cy="6" r="1" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="font-mono text-[10px] tracking-[0.15em] text-dark/60 mb-4">ADDRESS</p>
                <p className="text-dark font-sans text-sm leading-relaxed">
                  Kempton Park,<br />
                  Gauteng,<br />
                  South Africa
                </p>
              </div>

              {/* BigBeeLogistics Logo */}
              <div className="md:self-center">
                <Image
                  src="/BigBeeLogistics-03.png"
                  alt="BigBeeLogistics"
                  width={360}
                  height={120}
                  className="h-28 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
