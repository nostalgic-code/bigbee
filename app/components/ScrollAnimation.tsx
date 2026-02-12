"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = {
    fadeInUp: "animate-fadeInUp",
    fadeIn: "animate-fadeIn",
    slideInLeft: "animate-slideInLeft",
    slideInRight: "animate-slideInRight",
    scaleIn: "animate-scaleIn",
  }[animation];

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
}
