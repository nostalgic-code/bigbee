"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    id: "01",
    title: "Global Transport",
    description: "Connecting businesses and individuals across\nborders with comprehensive transportation\nsolutions tailored for international cargo\nmovement, ensuring reliability and efficiency\nworldwide.",
    image: "https://framerusercontent.com/images/hMpfNtZpREzFm2iw1HGpOPs7cg.jpg?scale-down-to=1024&width=7680&height=4320",
  },
  {
    id: "02",
    title: "Cargo Shipping",
    description: "Delivering your goods safely and on time with\nour specialized cargo shipping services,\nadaptable to various cargo types and routes,\nbridging markets globally with care.",
    image: "https://framerusercontent.com/images/gvhFBMsq7CqzGkGuVh2v7bOU4CE.jpg?scale-down-to=2048&width=5464&height=3640",
  },
  {
    id: "03",
    title: "Freight Forwarding",
    description: "Navigating complex logistics landscapes for\nyou with expert freight forwarding, handling\ncustoms, documentation, and multimodal\ntransport to ensure smooth international cargo\nprogression.",
    image: "https://framerusercontent.com/images/qkMQq9Zs1gGZaibDwwhw42dog.jpg?scale-down-to=2048&width=3000&height=2248",
  },
  {
    id: "04",
    title: "International Delivery",
    description: "Ensuring your shipments reach their global\ndestinations securely and promptly with our\ndedicated international delivery services,\ncrafted to meet diverse customer needs\nacross the world's markets.",
    image: "https://framerusercontent.com/images/ttsW2lp4NVYHyV30luZYHR1UMg.jpg?scale-down-to=2048&width=3936&height=2214",
  },
];

const industries = [
  {
    name: "Manufacturing",
    image: "https://framerusercontent.com/images/xuiGNeWrzpBf9F7gqvI7nHqMlg.webp?scale-down-to=1024&width=2400&height=1600"
  },
  {
    name: "Military",
    image: "https://framerusercontent.com/images/S4xwFvrn52DGH2K364GnYQcJ3OU.jpg?scale-down-to=1024&width=3000&height=2001"
  },
  {
    name: "Ecommerce",
    image: "https://framerusercontent.com/images/XcEMSlkhanjUXfUe4UAom0fgaUU.jpg?scale-down-to=1024&width=4000&height=6000"
  },
  {
    name: "Restaurants",
    image: "https://framerusercontent.com/images/MS2pfAUXsicHrGIvAB19294awQ.jpg?scale-down-to=1024&width=2000&height=3000"
  },
  {
    name: "Pharmaceutical",
    image: "https://framerusercontent.com/images/P9SOAlrYc2Kyeki4paLrA51dkg.jpg?scale-down-to=1024&width=2000&height=3000"
  },
  {
    name: "Medical",
    image: "https://framerusercontent.com/images/s8I7RjckVxn2XZkd1SkvcksIDU.jpg?scale-down-to=1024&width=2000&height=3000"
  },
  {
    name: "Education",
    image: "https://framerusercontent.com/images/y0GgkxpN05P3YeJY85y6MGa0.jpg?scale-down-to=1024&width=3000&height=2400"
  },
  {
    name: "Retail",
    image: "https://framerusercontent.com/images/Gn36GDMWiRsfBCi3IQCZBnzBlAg.jpg?scale-down-to=1024&width=3528&height=4829"
  },
];

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndustry, setHoveredIndustry] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Hero animation
  useEffect(() => {
    if (isLoaded && heroRef.current) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }
  }, [isLoaded]);

  // Services scroll animation - stacking effect
  useEffect(() => {
    if (!isLoaded) return;
    
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  return (
    <main className={`page-transition ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen min-h-[600px] overflow-hidden" ref={heroRef}>
        {/* Background Image */}
        <Image
          src="https://framerusercontent.com/images/Qufuc7ZvvPRLp2ePWNlY4pH48w.jpg?scale-down-to=2048&width=3000&height=1687"
          alt="Warehouse with boxes"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
          <div className="px-6 md:px-10">
            <span className="hero-animate font-mono text-xs tracking-[0.2em] uppercase text-white/60 flex items-center gap-2 mb-4">
              <span className="text-sm">+</span> services
            </span>
          </div>
          <div className="mx-6 md:mx-10 border-t border-white/30 mb-8" />
          <div className="px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-sans font-light text-white">
              Our Services
            </h1>
            <div className="hero-animate text-right max-w-sm">
              <p className="text-sm md:text-base text-white/80 font-sans">
                <span className="font-mono text-lg text-white mr-2">↳</span>
                Big<span className="text-[#fedb5b]">Bee</span>Logistics harmonizes logistics, connecting shippers and carriers for smarter, effortless transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Focus Section */}
      <section className="py-20 md:py-32 px-6 md:px-10 bg-[#f0f0f1]">
        <div className="border-t border-[#121312]/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left column - Label */}
            <div>
              <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#121312]/60 flex items-center gap-2">
                <span className="text-sm">+</span> OUR FOCUS
              </span>
            </div>
            {/* Right column - Content */}
            <div>
              <p className="text-lg md:text-xl font-sans font-light text-[#121312] leading-relaxed">
                Big<span className="text-[#fedb5b]">Bee</span>Logistics blends collaboration and tech innovation<br className="hidden md:inline" /> to craft logistics solutions that unite shippers<br className="hidden md:inline" /> and carriers, driving smarter supply chains<br className="hidden md:inline" /> through customer-centric excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <p className="text-sm text-[#121312]/70 leading-relaxed font-sans">
                  By harnessing data-driven insights and<br className="hidden md:inline" /> adaptive technologies, Big<span className="text-[#fedb5b]">Bee</span>Logistics empowers<br className="hidden md:inline" /> stakeholders to navigate complexity with<br className="hidden md:inline" /> clarity and agility.
                </p>
                <p className="text-sm text-[#121312]/70 leading-relaxed font-sans">
                  Through relentless pursuit of transparency<br className="hidden md:inline" /> and partnership, Big<span className="text-[#fedb5b]">Bee</span>Logistics fosters trust and<br className="hidden md:inline" /> unlocks untapped potential in every<br className="hidden md:inline" /> logistical journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories with Background */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/dIpxXeu2nK0wcdN1Ri0jBE0Aw.jpg?scale-down-to=2048&width=5464&height=3640"
          alt="Logistics background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        {/* Grid overlay - 24x10 */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(10,1fr)]">
          {Array.from({ length: 240 }).map((_, i) => (
            <div key={i} className="border border-white/5" />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 lg:gap-32 px-6">
            <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase text-white flex items-center gap-1">
              <span className="text-xs">+</span> Global transport
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase text-white flex items-center gap-1">
              <span className="text-xs">+</span> Cargo shipping
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase text-white flex items-center gap-1">
              <span className="text-xs">+</span> Freight forwarding
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase text-white flex items-center gap-1">
              <span className="text-xs">+</span> International delivery
            </span>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: '#f0f0f1', filter: 'none' }} ref={servicesRef}>
        <div className="border-t border-black/10 pt-12" style={{ filter: 'none' }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-black flex items-center gap-2 mb-16">
            <span className="text-sm">+</span> Services
          </span>
          
          <div className="relative">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card sticky grid grid-cols-1 md:grid-cols-[60px_1fr_2fr_250px] gap-4 md:gap-6 items-center border-t border-black/10 pt-8 pb-8"
                style={{ 
                  top: `${80 + index * 60}px`, 
                  zIndex: 10 + index, 
                  backgroundColor: '#f0f0f1',
                  color: '#000000',
                  transform: 'translateZ(0)',
                  WebkitTransform: 'translateZ(0)',
                  filter: 'none',
                  WebkitFilter: 'none'
                }}
              >
                {/* Number */}
                <span className="font-mono text-xs tracking-[0.2em]" style={{ color: '#000000' }}>
                  [{service.id}]
                </span>
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-sans font-light" style={{ color: '#000000' }}>
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-sm leading-relaxed font-sans whitespace-pre-line" style={{ color: '#000000' }}>
                  {service.description}
                </p>
                {/* Image */}
                <div className="relative h-[120px] md:h-[150px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 md:py-32 px-6 md:px-10" style={{ backgroundColor: '#f0f0f1' }} ref={industriesRef}>
        <div className="pt-12">
          <span className="font-mono text-xs tracking-[0.2em] uppercase flex items-center gap-2 mb-16" style={{ color: '#000000' }}>
            <span className="text-sm">+</span> Industries We Cover
          </span>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: hoveredIndustry === index ? 1 : 0 }}
                >
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Right - Industries List */}
            <div className="flex flex-col justify-center">
              {industries.map((industry, index) => (
                <div
                  key={industry.name}
                  className="industry-item py-3 cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredIndustry(index)}
                >
                  <h4 
                    className={`text-2xl md:text-3xl lg:text-4xl font-sans font-light transition-colors duration-300 ${
                      hoveredIndustry === index ? 'text-[#fedb5b]' : ''
                    }`}
                    style={{ color: hoveredIndustry === index ? '#fedb5b' : '#000000' }}
                  >
                    {industry.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-10 overflow-hidden">
        <Image
          src="https://framerusercontent.com/images/cdkra1msE338pRZAmYqBqbSgQ.jpg?scale-down-to=2048&width=3000&height=1999"
          alt="CTA background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-white/70 flex items-center justify-center gap-2 mb-6">
            <span className="text-sm">+</span> LET&apos;S GET TO WORK
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-8">
            Moving Your Business Forward
          </h2>
          <button
            onClick={() => setQuoteModalOpen(true)}
            className="inline-block px-8 py-4 bg-white text-[#121312] text-sm tracking-wider hover:bg-white/90 transition-all font-sans"
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </main>
  );
}
