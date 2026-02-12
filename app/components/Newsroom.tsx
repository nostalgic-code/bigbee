"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const articles = [
  {
    date: "10.31.25",
    title: "Overcoming Global Logistics Challenges",
    category: "INSIGHTS",
    image: "https://framerusercontent.com/images/cdkra1msE338pRZAmYqBqbSgQ.jpg?scale-down-to=1024&width=3000&height=1999",
  },
  {
    date: "10.02.25",
    title: "E-Commerce Delivery Excellence",
    category: "INSIGHTS", 
    image: "https://framerusercontent.com/images/VwHCLdxNIeTIUpNRcVkneH3p68.jpg?scale-down-to=1024&width=3000&height=2071",
  },
  {
    date: "9.27.25",
    title: "Transparency Through Real-Time Tracking",
    category: "NEWS",
    image: "https://framerusercontent.com/images/gtxhO5eQb8zTp6csYDNAsGA9k.jpg?scale-down-to=1024&width=3000&height=2000",
  },
  {
    date: "9.17.25",
    title: "Optimize Your Global Supply Chain Today",
    category: "INSIGHTS",
    image: "https://framerusercontent.com/images/qerU0u7MgBoEnXdijYtcgsdtMTk.jpg?scale-down-to=2048&width=2000&height=3000",
  },
  {
    date: "9.05.25",
    title: "How Tech Transforms The Future Of Shipping",
    category: "NEWS",
    image: "https://framerusercontent.com/images/dIpxXeu2nK0wcdN1Ri0jBE0Aw.jpg?scale-down-to=1024&width=5464&height=3640",
  },
];

// Double the articles for infinite scroll illusion
const loopedArticles = [...articles, ...articles];

export default function Newsroom() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll continuously to the right every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 567;
      const gap = 16;
      const singleSetWidth = articles.length * (cardWidth + gap);

      setCurrentIndex((prev) => {
        const next = prev + 1;
        container.scrollTo({ left: next * (cardWidth + gap), behavior: "smooth" });

        // When we've scrolled past the first set, silently jump back
        if (next >= articles.length) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
          }, 500);
          return 0;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth || 567;
    const gap = 16;

    if (direction === "right") {
      const next = currentIndex + 1;
      container.scrollTo({ left: next * (cardWidth + gap), behavior: "smooth" });
      if (next >= articles.length) {
        setTimeout(() => {
          container.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
          setCurrentIndex(0);
        }, 500);
      } else {
        setCurrentIndex(next);
      }
    } else {
      const prev = currentIndex - 1;
      if (prev < 0) {
        // Jump to end of first set silently then scroll back
        container.scrollTo({ left: (articles.length - 1) * (cardWidth + gap), behavior: "instant" as ScrollBehavior });
        setCurrentIndex(articles.length - 1);
      } else {
        container.scrollTo({ left: prev * (cardWidth + gap), behavior: "smooth" });
        setCurrentIndex(prev);
      }
    }
  };

  return (
    <section id="newsroom" className="py-20 md:py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-dark mb-4">
              <span className="text-base">+</span>
              <span>RECENT ARTICLES</span>
            </div>
            <h2 className="text-dark text-4xl md:text-5xl font-sans font-normal">Newsroom</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-lg border border-dark/20 flex items-center justify-center hover:bg-dark/5 transition-colors"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-lg border border-dark/20 flex items-center justify-center hover:bg-dark/5 transition-colors"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopedArticles.map((article, i) => (
            <Link
              key={`${article.title}-${i}`}
              href="#"
              className="group flex-shrink-0 w-[280px] sm:w-[350px] md:w-[450px] lg:w-[567px] snap-start"
            >
              <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[680px] rounded-lg overflow-hidden mb-4 bg-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-dark/80 text-white font-mono text-[10px] tracking-wider rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="font-mono text-xs text-dark/50 mb-2">{article.date}</div>
              <h3 className="text-dark font-sans text-base group-hover:text-dark/70 transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = (scrollRef.current.children[0] as HTMLElement)?.offsetWidth || 567;
                  scrollRef.current.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
                  setCurrentIndex(index);
                }
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex % articles.length ? "bg-dark" : "bg-dark/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
