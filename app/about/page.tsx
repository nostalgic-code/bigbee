"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import TeamCarousel from "@/components/TeamCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Globe from "@/components/Globe";
import Link from "next/link";

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax scroll effect for cards
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      
      // Left column cards (move up when scrolling down)
      const leftCards = document.querySelectorAll('.parallax-left');
      leftCards.forEach((card) => {
        const currentTransform = parseFloat((card as HTMLElement).dataset.translateY || '0');
        let newTransform = currentTransform - scrollDelta * 0.05;
        // Limit the movement range
        newTransform = Math.max(-30, Math.min(30, newTransform));
        (card as HTMLElement).dataset.translateY = String(newTransform);
        (card as HTMLElement).style.transform = `translateY(${newTransform}px)`;
      });
      
      // Right column cards (move down when scrolling down)
      const rightCards = document.querySelectorAll('.parallax-right');
      rightCards.forEach((card) => {
        const currentTransform = parseFloat((card as HTMLElement).dataset.translateY || '0');
        let newTransform = currentTransform + scrollDelta * 0.05;
        // Limit the movement range
        newTransform = Math.max(-30, Math.min(30, newTransform));
        (card as HTMLElement).dataset.translateY = String(newTransform);
        (card as HTMLElement).style.transform = `translateY(${newTransform}px)`;
      });
      
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={`page-transition ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header darkText />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-6 md:px-10 bg-[#f0f0f1]">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-[#121312] flex items-center gap-4 flex-wrap">
            <span>Learn About Big<span className="text-[#fedb5b]">Bee</span>Logistics</span>
            <svg
              className="w-12 h-12 md:w-16 md:h-16 text-[#121312]/30 animate-bounce-slow"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h1>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://ext.same-assets.com/1640754018/724080026.jpeg"
          alt="Warehouse logistics"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* Who We Are Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#f0f0f1]">
        <div className="border-t border-[#121312]/10 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ScrollAnimation className="lg:col-span-3" animation="fadeInUp">
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#121312]/60 flex items-center gap-2">
                <span className="text-sm">+</span> Who We Are
              </span>
            </ScrollAnimation>

            <ScrollAnimation className="lg:col-span-9" animation="fadeInUp" delay={0.2}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans font-light text-[#121312] leading-relaxed mb-12">
                Our expert team is dedicated to providing tailored solutions that meet your unique needs, ensuring timely delivery, and exceeding your expectations.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-[#121312]/70 leading-relaxed font-sans">
                  Our leadership team brings together decades of experience in innovation, technology, and industry expertise. They guide our mission to deliver cutting-edge solutions that transform businesses and drive growth.
                </p>
                <p className="text-[#121312]/70 leading-relaxed font-sans">
                  With a passion for innovation and a commitment to excellence, our leaders inspire and empower our teams to push boundaries and achieve exceptional results.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Reach - Dark Section with Globe */}
      <section className="bg-[#121312] py-20 md:py-32 px-6 md:px-10">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/60 flex items-center justify-center gap-2 mb-4">
              <span className="text-sm">+</span> Our Reach
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-light text-white">
              Based in the USA,<br />
              Serving Businesses<br />
              Across the Globe
            </h2>
          </div>
        </ScrollAnimation>

        {/* Location Cities - Marquee */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className="mb-16 overflow-hidden">
            <Marquee speed={30} direction="left">
              {[
                { country: "France", city: "Paris" },
                { country: "UK", city: "London" },
                { country: "China", city: "Shanghai" },
                { country: "USA", city: "Los Angeles" },
                { country: "Germany", city: "Berlin" },
                { country: "Japan", city: "Tokyo" },
                { country: "Australia", city: "Sydney" },
                { country: "Brazil", city: "São Paulo" },
              ].map((location) => (
                <div key={location.city} className="text-center mx-12">
                  <span className="font-mono text-xs tracking-[0.15em] uppercase text-white/50 block mb-1">
                    {location.country}
                  </span>
                  <span className="font-mono text-sm tracking-[0.1em] uppercase text-white">
                    {location.city}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </ScrollAnimation>

        {/* Globe */}
        <ScrollAnimation animation="scaleIn" delay={0.3}>
          <Globe />
        </ScrollAnimation>
      </section>

      {/* Key Metrics Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#f0f0f1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <ScrollAnimation animation="fadeInUp">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#121312]/60 flex items-center gap-2 mb-4">
                <span className="text-sm">+</span> Key Metrics
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-light text-[#121312] mb-20">
                Freight&apos;s innovation shines<br />
                through Transforming<br />
                Logistics Key Performance<br />
                Metrics.
              </h2>

              <div className="flex gap-6 items-center">
                <div className="relative shrink-0 overflow-hidden rounded-lg" style={{ width: '181px', height: '227px' }}>
                  <Image
                    src="https://ext.same-assets.com/1640754018/639788878.jpeg"
                    alt="Office meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#121312]/70 leading-relaxed font-sans">
                  Big<span className="text-[#fedb5b]">Bee</span>Logistics innovation excels<br />
                  in Transforming Logistics Key<br />
                  Performance Metrics, echoing<br />
                  your creative vision for impactful<br />
                  brands.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Stats - 2x2 Grid with Parallax */}
          <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <ScrollAnimation animation="fadeInUp" delay={0.1}>
              <div 
                className="bg-[#121312] text-white p-6 md:p-8 flex flex-col justify-between parallax-left w-full"
                style={{ height: '320px', transition: 'transform 0.05s linear' }}
                data-translate-y="0"
              >
                <span className="text-4xl md:text-6xl font-sans font-light">
                  <Counter end={10} suffix="+" />
                </span>
                <div className="border-t border-white/20 pt-4 mt-auto">
                  <span className="text-white/70 font-sans text-sm">Years Experience</span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.2}>
              <div 
                className="bg-[#d9d9d9] text-[#121312] p-6 md:p-8 flex flex-col justify-between parallax-right w-full"
                style={{ height: '320px', transition: 'transform 0.05s linear' }}
                data-translate-y="0"
              >
                <span className="text-4xl md:text-6xl font-sans font-light">
                  <Counter end={75} />
                </span>
                <div className="border-t border-[#121312]/20 pt-4 mt-auto">
                  <span className="text-[#121312]/70 font-sans text-sm">Employees</span>
                </div>
              </div>
            </ScrollAnimation>

            {/* Row 2 */}
            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <div 
                className="bg-[#fedb5b] text-[#121312] p-6 md:p-8 flex flex-col justify-between parallax-left w-full"
                style={{ height: '320px', transition: 'transform 0.05s linear' }}
                data-translate-y="0"
              >
                <span className="text-4xl md:text-6xl font-sans font-light">
                  <Counter end={300} />
                </span>
                <div className="border-t border-[#121312]/20 pt-4 mt-auto">
                  <span className="text-[#121312]/70 font-sans text-sm">Vehicles in Fleet</span>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div 
                className="bg-[#3a3a3a] text-white p-6 md:p-8 flex flex-col justify-between parallax-right w-full"
                style={{ height: '320px', transition: 'transform 0.05s linear' }}
                data-translate-y="0"
              >
                <span className="text-4xl md:text-6xl font-sans font-light">
                  <Counter end={80} suffix="k" />
                </span>
                <div className="border-t border-white/20 pt-4 mt-auto">
                  <span className="text-white/70 font-sans text-sm">Tons Transported Annual</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section>
        <TestimonialCarousel />
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#f0f0f1]">
        <ScrollAnimation animation="fadeInUp">
          <TeamCarousel />
        </ScrollAnimation>
      </section>

      {/* Careers CTA Section */}
      <section className="bg-[#fedb5b] py-20 md:py-32 px-6 md:px-10">
        <ScrollAnimation animation="fadeInUp">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#121312]/60 flex items-center justify-center gap-2 mb-4">
              <span className="text-sm">+</span> Careers
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-light text-[#121312] mb-8">
              Explore careers with us and shape the future of global logistics
            </h2>
            <Link
              href="/careers"
              className="inline-block px-8 py-3 bg-[#121312] text-white text-sm tracking-wider hover:bg-[#2a2a2a] transition-all btn-hover font-sans"
            >
              Explore Careers
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </main>
  );
}
