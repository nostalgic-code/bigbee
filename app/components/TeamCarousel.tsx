"use client";

import { useState } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Mossier",
    role: "CEO",
    image: "https://ext.same-assets.com/1640754018/3030426104.png",
  },
  {
    name: "Stacy Freed",
    role: "CTO",
    image: "https://ext.same-assets.com/1640754018/3884297763.png",
  },
  {
    name: "Matt Longst",
    role: "CLO",
    image: "https://ext.same-assets.com/1640754018/1889253383.png",
  },
  {
    name: "Nicole Sue",
    role: "CFO",
    image: "https://ext.same-assets.com/1640754018/3030426104.png",
  },
  {
    name: "Melanie Lumon",
    role: "CSO",
    image: "https://ext.same-assets.com/1640754018/3884297763.png",
  },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#121312]/60 flex items-center gap-2 mb-2">
            <span className="text-sm">+</span> Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-light text-[#121312]">Leadership</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prevSlide}
            className="w-10 h-10 border border-[#121312]/20 flex items-center justify-center hover:bg-[#121312] hover:text-white transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-10 h-10 border border-[#121312]/20 flex items-center justify-center hover:bg-[#121312] hover:text-white transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {getVisibleMembers().map((member, index) => (
          <div
            key={`${member.name}-${index}`}
            className="relative group overflow-hidden"
          >
            <div className="border-l-4 border-[#121312]/10 pl-4 mb-4">
              <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#121312]">
                {member.name}
              </span>
              <br />
              <span className="font-mono text-xs tracking-[0.1em] uppercase text-[#121312]/50">
                {member.role}
              </span>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-[#f0f0f1]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
