"use client";

import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  children,
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <div className="flex items-center gap-8 px-4">{children}</div>
        <div className="flex items-center gap-8 px-4">{children}</div>
      </div>
    </div>
  );
}
