"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    number: "1",
    title: "Community",
    description: "We connect people globally through logistics solutions that drive economic growth and empower businesses worldwide.",
    image: "https://framerusercontent.com/images/ZYX74OGfgMItW1hW5UEHBon9ic.jpg?scale-down-to=1024&width=1999&height=3000",
    offset: 0,
  },
  {
    number: "2",
    title: "Innovation",
    description: "Our cutting-edge technology and creative problem-solving transform supply chains, shaping the future of global commerce.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    offset: 80,
  },
  {
    number: "3",
    title: "Sustainability",
    description: "We're committed to reducing our environmental footprint, promoting eco-friendly practices that contribute to a more responsible logistics industry.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop",
    offset: 160,
  },
];

export default function ValuesSection() {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 0 when section top enters viewport bottom, 1 when section bottom leaves viewport top
      const progress = Math.max(0, Math.min(1, (windowHeight - sectionRect.top) / (windowHeight + sectionRect.height)));

      contentRefs.current.forEach((content, index) => {
        if (!content) return;
        const container = content.parentElement;
        if (!container) return;
        const containerHeight = container.clientHeight;
        const contentHeight = content.clientHeight;
        const maxTravel = containerHeight - contentHeight - 32;
        // All reach bottom, but at different rates — Community leads, Sustainability trails
        const delay = [0, 0.15, 0.3][index];
        const adjustedProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
        const translateY = maxTravel * adjustedProgress;
        content.style.transform = `translateY(${translateY}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {values.map((value, index) => (
        <div
          key={value.number}
          className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex flex-col justify-start p-6 md:p-8 overflow-hidden"
        >
          {/* Background Image - fixed, no transform */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url('${value.image}')` }}
          />
          <div className="absolute inset-0 bg-black/50" />

          {/* Content - moves with parallax */}
          <div
            ref={(el) => { contentRefs.current[index] = el; }}
            className="relative z-10 will-change-transform"
          >
            {/* Number Badge */}
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white text-sm mb-6">
              {value.number}
            </div>

            <h3 className="text-white text-xl md:text-2xl font-sans font-normal mb-4">{value.title}</h3>
            <p className="text-white/70 font-sans text-sm leading-relaxed max-w-xs">{value.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
