"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";

export default function CTASection() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 min-h-[500px] flex flex-col items-center justify-center text-center overflow-hidden bg-gray-800"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/cdkra1msE338pRZAmYqBqbSgQ.jpg?scale-down-to=2048&width=3000&height=1999')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs tracking-wider text-white mb-8">
          <span className="text-base">+</span>
          <span>LET'S GET TO WORK</span>
        </div>

        {/* Headline */}
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-normal leading-[1.15] mb-10">
          Moving Your Business<br />Forward
        </h2>

        {/* CTA Button */}
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-sans text-sm hover:bg-white/20 transition-all"
        >
          Contact Us
        </button>
      </div>
    </section>
    <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
