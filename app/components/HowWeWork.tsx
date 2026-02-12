import React from "react";

const steps = [
  {
    number: "01",
    title: "Plan:",
    description: (<>Define shipment details, choose<br />transport modes, and handle necessary<br />documentation.</>),
  },
  {
    number: "02",
    title: "Move & Track:",
    description: (<>Transport cargo, monitor<br />status, and manage any issues that arise.</>),
  },
  {
    number: "03",
    title: "Deliver:",
    description: (<>Clear customs, deliver cargo to<br />destination, and confirm receipt with the<br />customer.</>),
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 min-h-[600px] flex flex-col justify-center overflow-hidden bg-gray-800">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/lLGaFNjxHrHUxyNuN4Bvf2rlIc.jpg?scale-down-to=2048&width=3000&height=2000')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Label */}
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-white mb-6">
          <span className="text-base">+</span>
          <span>HOW WE WORK</span>
        </div>

        {/* Headline */}
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-sans font-normal leading-[1.4] mb-16 max-w-3xl">
          BigBeeLogistics puts shippers and carriers first, delivering smart, transparent logistics that boost efficiency, cut costs, and drive growth — powered by innovation, insight, and genuine customer care.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 md:gap-6 items-start md:items-center">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex-1">
                <div className="font-mono text-xs text-white mb-3">[{step.number}]</div>
                <p className="text-white/90 font-sans text-sm leading-relaxed">
                  <span className="text-white">{step.title}</span> {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <>
                  <div className="hidden md:flex items-center pt-6">
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none" className="text-white/40">
                      <path d="M0 8h35M30 3l6 5-6 5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                  <div className="md:hidden flex items-center justify-center py-2">
                    <svg width="16" height="40" viewBox="0 0 16 40" fill="none" className="text-white/40">
                      <path d="M8 0v35M3 30l5 6 5-6" stroke="currentColor" strokeWidth="1" />
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
