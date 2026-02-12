"use client";

import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;

    let rotation = 0;
    let animationId: number;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw the sphere gradient
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, "#4a4a4a");
      gradient.addColorStop(0.5, "#2a2a2a");
      gradient.addColorStop(1, "#121312");

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw latitude lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let lat = -60; lat <= 60; lat += 30) {
        const latRad = (lat * Math.PI) / 180;
        const y = centerY - Math.sin(latRad) * radius;
        const r = Math.cos(latRad) * radius;

        ctx.beginPath();
        ctx.ellipse(centerX, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines
      for (let lon = 0; lon < 180; lon += 30) {
        const lonRad = ((lon + rotation) * Math.PI) / 180;

        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(lonRad)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Draw dots/points for cities
      const points = [
        { lat: 48.8566, lon: 2.3522 }, // Paris
        { lat: 51.5074, lon: -0.1278 }, // London
        { lat: 31.2304, lon: 121.4737 }, // Shanghai
        { lat: 34.0522, lon: -118.2437 }, // Los Angeles
      ];

      ctx.fillStyle = "white";
      for (const point of points) {
        const latRad = (point.lat * Math.PI) / 180;
        const lonRad = ((point.lon + rotation) * Math.PI) / 180;

        // Only show if on visible side
        if (Math.cos(lonRad) > 0) {
          const x = centerX + Math.cos(latRad) * Math.sin(lonRad) * radius;
          const y = centerY - Math.sin(latRad) * radius;

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
          ctx.fill();
          ctx.fillStyle = "white";
        }
      }

      rotation += 0.2;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="w-full h-full"
      />
      {/* Center marker */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-3 h-3 rounded-full border-2 border-white" />
        <div className="w-px h-10 bg-white/50" />
      </div>
    </div>
  );
}
