import Link from "next/link";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" />
        <path d="M8 3H3v5" />
        <path d="M12 22V8" />
        <path d="M21 3l-9 9" />
        <path d="M3 3l9 9" />
      </svg>
    ),
    title: "Freight Forwarding",
    description: "Reliable transportation of goods by air, land, or sea. We handle logistics, customs clearance, and delivery.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Warehousing and Storage",
    description: "Secure, climate-controlled storage with flexible options and real-time inventory management.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    title: "Supply Chain Management",
    description: "Customized logistics solutions to optimize your supply chain, reduce costs, and improve efficiency.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Two column layout: label left, content right */}
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          {/* Label - far left, aligned with heading */}
          <div className="flex items-start gap-2 font-mono text-xs tracking-wider text-dark pt-2">
            <span className="text-xs leading-none">+</span>
            <span>WHAT WE DO</span>
          </div>

          {/* Right column: heading, services, button */}
          <div>
            {/* Heading */}
            <h2 className="text-dark text-2xl md:text-3xl lg:text-[40px] font-sans font-normal leading-[1.35] max-w-2xl mb-20">
              We empower businesses to move goods smarter, faster, and more sustainably with innovative logistics solutions that drive growth and transform global shipping.
            </h2>

            {/* Services - 3 columns with vertical line separators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 mb-16">
              {services.map((service, index) => (
                <div key={service.title} className={`md:border-l md:border-dark/15 md:pl-6 flex flex-col ${index > 0 ? 'border-t md:border-t-0 border-dark/15 pt-8 md:pt-0' : ''}`}>
                  <div className="w-12 h-12 flex items-center justify-center bg-dark/[0.04] rounded-xl mb-8 text-dark/70">
                    {service.icon}
                  </div>
                  <h3 className="text-dark text-lg font-sans font-medium mb-3">{service.title}</h3>
                  <p className="text-dark/60 font-sans text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#about"
              className="inline-flex items-center justify-center w-[132px] h-[42px] bg-dark text-white font-sans text-sm hover:bg-dark/90 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
