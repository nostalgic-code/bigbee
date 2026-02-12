import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ValuesSection from "@/components/ValuesSection";
import HowWeWork from "@/components/HowWeWork";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <ValuesSection />
        <HowWeWork />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
