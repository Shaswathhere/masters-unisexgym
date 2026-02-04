"use client";

import { useEffect, useRef, useState } from "react";
import {
  Dumbbell,
  Snowflake,
  Maximize2,
  Users,
  Target,
  Sparkles,
  Clock,
  Lock,
  Music,
} from "lucide-react";

// Facility data with Lucide icons
const facilities = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "Latest cardio and strength training machines from top brands",
  },
  {
    icon: Snowflake,
    title: "Fully Air-Conditioned",
    description: "All 3 floors with premium climate control for comfortable workouts",
  },
  {
    icon: Maximize2,
    title: "Spacious Layout",
    description: "7000+ sq ft of well-organized training space across 3 floors",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals to guide your fitness journey",
  },
  {
    icon: Target,
    title: "Personal Training",
    description: "Customized workout plans tailored to your goals",
  },
  {
    icon: Sparkles,
    title: "Clean Facilities",
    description: "Well-maintained washrooms and changing areas",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Extended hours to fit your busy schedule",
  },
  {
    icon: Lock,
    title: "Secure Lockers",
    description: "Safe storage for your belongings while you train",
  },
  {
    icon: Music,
    title: "Energetic Atmosphere",
    description: "Motivating music and positive vibes to fuel your workouts",
  },
];

export default function Facilities() {
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
      id="facilities"
      className="section-padding bg-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
            World-Class Amenities
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-900">
            Premium Facilities & Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for an exceptional fitness experience under one roof
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={index}
                className={`card-hover bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent-gold to-yellow-600 text-white">
                  <IconComponent className="w-8 h-8" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {facility.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}
        <div
          className={`mt-16 bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Minimalist Design, Maximum Results
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our modern, clutter-free environment is designed to keep you focused on what
            matters most — your transformation. No distractions, just pure dedication.
          </p>
        </div>
      </div>
    </section>
  );
}
