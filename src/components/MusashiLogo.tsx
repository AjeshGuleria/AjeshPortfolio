import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MusashiLogo() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Hide logo when scrolled past hero section
      setIsVisible(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ${
        isVisible
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      style={{
        transform: `translateY(calc(-50% + ${scrollY * 0.2}px)) scale(${1 - scrollY * 0.0003})`,
      }}
    >
      {/* Glowing container */}
      <div className="relative group">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/30 to-green-400/30 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />

        {/* Logo container */}
        <div className="relative w-32 h-32 rounded-full border-2 border-green-500/50 overflow-hidden bg-black/80 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,0,0.4)] group-hover:shadow-[0_0_60px_rgba(0,255,0,0.6)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-spin-slow" />

          {/* Image */}
          <ImageWithFallback
            src="https://ibb.co/pBC327jt"
            alt="Ajesh Guleria"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent mix-blend-overlay" />

          {/* Scanning line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-scan" />
        </div>

        {/* Corner accents */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-green-500" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-green-500" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-green-500" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-green-500" />

        {/* Text label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-green-400 font-mono text-xs opacity-60 group-hover:opacity-100 transition-opacity">
            Ajesh
          </span>
        </div>
      </div>
    </div>
  );
}