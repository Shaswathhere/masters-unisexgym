"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Master's Unisex Gym facility"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 py-20">
        {/* Logo */}
        <div
          className={`mb-8 flex justify-center transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <img
              src="/logo.png"
              alt="Master's Unisex Gym Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wider transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          MASTER&apos;S UNISEX GYM
        </h1>

        {/* Since Badge */}
        <div
          className={`inline-block mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span className="text-accent-gold text-xl md:text-2xl font-semibold tracking-widest border-2 border-accent-gold px-6 py-2 inline-block">
            SINCE 1995
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`text-xl md:text-3xl text-white mb-8 font-light transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Ambattur&apos;s Most Spacious & Affordable Gym
        </p>

        {/* Highlights */}
        <div
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "7000+", label: "Sq. Ft." },
            { value: "3", label: "Floors" },
            { value: "100%", label: "A/C" },
            { value: "₹3000", label: "Starting" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent-gold">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-white/80">{item.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("membership")}
            className="btn-primary bg-accent-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-2xl min-w-[200px]"
          >
            View Membership
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 min-w-[200px]"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
