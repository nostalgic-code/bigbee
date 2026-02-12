"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    cargoType: "",
    cargoVolume: "",
    cityOfDeparture: "",
    cityOfDestination: "",
    yourName: "",
    phoneNumber: "",
    additionalInfo: "",
  });
  const panelRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.4, ease: "power3.out", delay: 0.1 }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(panelRef.current, {
      x: "100%",
      duration: 0.3,
      ease: "power2.in",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-0 sm:p-4">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50"
        onClick={handleClose}
        style={{ opacity: 0 }}
      />

      {/* Slide-in Panel */}
      <div
        ref={panelRef}
        className="relative w-full sm:max-w-xl bg-[#e8e8e8] overflow-y-auto sm:rounded-2xl sm:mr-2 h-full sm:h-auto"
        style={{ transform: "translateX(100%)", maxHeight: "100vh" }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-black/60 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="p-6 sm:p-10 md:p-16 pt-16 sm:pt-20">
          {/* Header */}
          <div className="mb-10 sm:mb-16">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/60 flex items-center gap-2 mb-4">
              <span className="text-sm">+</span> YOUR INFO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-normal text-black">
              Request a Quote
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Row 1: Cargo Type & Cargo Volume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">Cargo Type</label>
                <input
                  type="text"
                  name="cargoType"
                  value={formData.cargoType}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">Cargo Volume</label>
                <input
                  type="text"
                  name="cargoVolume"
                  value={formData.cargoVolume}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
            </div>

            {/* Row 2: City of Departure & City of Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">City of Departure</label>
                <input
                  type="text"
                  name="cityOfDeparture"
                  value={formData.cityOfDeparture}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">City of Destination</label>
                <input
                  type="text"
                  name="cityOfDestination"
                  value={formData.cityOfDestination}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
            </div>

            {/* Row 3: Your Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
              <div>
                <label className="block text-sm text-black/80 mb-3 font-sans">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans"
                />
              </div>
            </div>

            {/* Row 4: Additional Information */}
            <div>
              <label className="block text-sm text-black/80 mb-3 font-sans">Addition Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                className="w-full bg-transparent border-b border-black/20 pb-2 text-black focus:outline-none focus:border-black/50 transition-colors font-sans resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white text-xs tracking-wider hover:bg-black/80 transition-all font-sans"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
