"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Transformed our shipping process, huge impact on our business.",
    author: "TechCorp",
    image: "https://framerusercontent.com/images/gvhFBMsq7CqzGkGuVh2v7bOU4CE.jpg?scale-down-to=2048&width=5464&height=3640",
  },
  {
    quote: "Their logistics solutions revolutionized how we handle global deliveries.",
    author: "Global Retail Co",
    image: "https://framerusercontent.com/images/qkMQq9Zs1gGZaibDwwhw42dog.jpg?scale-down-to=2048&width=3000&height=2248",
  },
  {
    quote: "Exceptional service and unmatched reliability in every shipment.",
    author: "GreenLeaf Organics",
    image: "https://framerusercontent.com/images/ttsW2lp4NVYHyV30luZYHR1UMg.jpg?scale-down-to=2048&width=3936&height=2214",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial.author}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.author}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <div className="max-w-xl">
              <p className="text-2xl md:text-4xl lg:text-5xl font-sans font-light text-white leading-tight mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <span className="text-white/80 font-sans text-sm md:text-base tracking-wide">
                {testimonial.author}
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows - bottom left */}
      <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-1">
        <button
          type="button"
          onClick={prevSlide}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Previous testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="w-10 h-10 bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
          aria-label="Next testimonial"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M9 18L15 12L9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
