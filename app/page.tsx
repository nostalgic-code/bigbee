import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import ValuesSection from "@/components/ValuesSection";
import TechnologySection from "@/components/TechnologySection";
import HowWeWork from "@/components/HowWeWork";
import Newsroom from "@/components/Newsroom";
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
        <TechnologySection />
        <HowWeWork />
        <Newsroom />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
