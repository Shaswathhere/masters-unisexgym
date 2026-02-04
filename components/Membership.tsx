"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

// Simplified membership plans
const plans = [
  {
    name: "Monthly",
    price: "3,000",
    duration: "per month",
    popular: false,
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
    ],
  },
  {
    name: "Quarterly",
    price: "8,000",
    duration: "3 months",
    popular: true,
    savings: "Save ₹1,000",
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "2 PT sessions",
    ],
  },
  {
    name: "Half-Yearly",
    price: "15,000",
    duration: "6 months",
    popular: false,
    savings: "Save ₹3,000",
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "4 PT sessions",
      "Diet consultation",
    ],
  },
  {
    name: "Yearly",
    price: "28,000",
    duration: "12 months",
    popular: false,
    savings: "Save ₹8,000",
    bestValue: true,
    features: [
      "Full gym access",
      "All equipment",
      "Locker facility",
      "10 PT sessions",
      "Diet consultation",
      "Free merchandise",
    ],
  },
];

export default function Membership() {
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
      id="membership"
      className="section-padding bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
            Affordable Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Membership Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your goals. No hidden charges, transparent pricing.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                plan.popular
                  ? "border-accent-gold shadow-lg shadow-accent-gold/20"
                  : plan.bestValue
                  ? "border-yellow-600 shadow-lg shadow-yellow-600/20"
                  : "border-gray-700 hover:border-gray-600"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {(plan.popular || plan.bestValue) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold ${
                    plan.popular
                      ? "bg-accent-gold text-black"
                      : "bg-yellow-600 text-black"
                  }`}>
                    {plan.popular ? "POPULAR" : "BEST VALUE"}
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className={`text-center mb-6 ${(plan.popular || plan.bestValue) ? 'mt-6' : 'mt-2'}`}>
                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-accent-gold">₹{plan.price}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{plan.duration}</p>
                {plan.savings && (
                  <p className="text-green-400 text-sm font-semibold mt-2">
                    {plan.savings}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular || plan.bestValue
                    ? "bg-accent-gold text-black hover:bg-accent-gold/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-gray-400 text-sm">
            All prices inclusive of taxes • No hidden charges • No registration fees
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Contact us for corporate packages and group discounts
          </p>
        </div>
      </div>
    </section>
  );
}
