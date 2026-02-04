"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-gym.jpg"
                alt="Master's Unisex Gym interior"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-accent-gold text-black px-6 py-4 rounded-lg shadow-xl">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-4">
              <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
                Our Legacy
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Building Stronger Bodies & Minds Since 1995
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                For over <span className="font-semibold text-gray-900">three decades</span>,
                Master&apos;s Unisex Gym has been Ambattur&apos;s trusted partner in fitness and wellness.
                What started as a small vision in 1995 has grown into one of the most respected
                fitness destinations in Chennai.
              </p>

              <p className="text-lg">
                Our <span className="font-semibold text-gray-900">7,000+ sq ft state-of-the-art facility</span>
                {" "}spans three fully air-conditioned floors, equipped with modern machinery and
                designed with a minimalist aesthetic that keeps you focused on your goals.
              </p>

              <p className="text-lg">
                We believe fitness should be accessible to everyone. That&apos;s why we offer
                {" "}<span className="font-semibold text-gray-900">premium quality at affordable prices</span>
                {" "}— starting at just ₹3,000/month with absolutely no hidden charges.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "200+", label: "Members Trained" },
                { number: "30+", label: "Years Experience" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
