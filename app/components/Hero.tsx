"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const videos = [
  "https://www.pexels.com/download/video/18370456/",
  "https://www.pexels.com/download/video/10472290/",
  "https://www.pexels.com/download/video/2942803/",
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Title fade-in-up animation
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 px-6 md:px-12 overflow-hidden bg-gray-800">
      {/* Background Videos */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/80 font-mono text-xs tracking-wider mb-4">
          <span className="text-lg">+</span>
          <span>HOME</span>
        </div>

        {/* Horizontal Line with curved ends */}
        <div className="w-full h-[1px] bg-white/30 rounded-full mb-8" />

        {/* Bottom row: Title left, Subtitle + CTA right */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-normal leading-[1.15] max-w-3xl"
            style={{ opacity: 0 }}
          >
            Delivering Excellence,<br />
            Delivering Tomorrow
          </h1>

          {/* Right side: Subtitle + Button */}
          <div className="flex flex-col items-start md:items-start gap-6">
            <div className="flex items-start gap-2">
              <span className="text-white text-sm leading-none">↳</span>
              <p className="text-white font-sans text-base md:text-lg max-w-sm">
                We understand the complexities<br />
                of modern logistics.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-sans text-sm hover:bg-white/20 transition-all"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
