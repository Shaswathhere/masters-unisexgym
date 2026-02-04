"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award,
  BadgeDollarSign,
  Wind,
  Expand,
  Sparkles,
  UserCheck,
  Wrench,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "30+ Years of Trust",
    description:
      "Three decades of delivering results and building healthier communities in Ambattur.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprises. Just honest pricing starting at ₹3,000/month.",
  },
  {
    icon: Wind,
    title: "Fully Air-Conditioned",
    description:
      "Train in comfort across all 3 floors with premium climate control year-round.",
  },
  {
    icon: Expand,
    title: "Spacious Environment",
    description:
      "7000+ sq ft of thoughtfully designed space - never feel cramped during peak hours.",
  },
  {
    icon: Sparkles,
    title: "Modern Minimalist Design",
    description:
      "Clean, clutter-free aesthetic that keeps you focused on your fitness goals.",
  },
  {
    icon: UserCheck,
    title: "Expert Guidance",
    description:
      "Certified trainers who understand your goals and support your transformation.",
  },
  {
    icon: Wrench,
    title: "Latest Equipment",
    description:
      "State-of-the-art machines and equipment from leading international brands.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Conveniently located in Ambattur with easy access and ample parking space.",
  },
];

export default function WhyChooseUs() {
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
      id="why-choose-us"
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
            The Master&apos;s Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-900">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When you choose Master&apos;s Unisex Gym, you&apos;re choosing excellence,
            affordability, and a proven track record of transforming lives.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className={`group text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon Circle */}
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent-gold to-yellow-600 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <IconComponent className="w-10 h-10" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call-to-Action Box */}
        <div
          className={`mt-16 bg-gradient-to-r from-black to-gray-900 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Ready to Start Your Transformation?
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members who have achieved their fitness goals with us.
            Your journey to a healthier, stronger you begins here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-accent-gold text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("membership");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              View Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
