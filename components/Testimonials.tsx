"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "IT Professional",
    initials: "RK",
    rating: 5,
    text: "I've been a member for over 2 years now, and Master's Unisex Gym has completely transformed my lifestyle. The trainers are knowledgeable, the equipment is top-notch, and the AC makes all the difference during Chennai summers!",
  },
  {
    name: "Priya Shankar",
    role: "Homemaker",
    initials: "PS",
    rating: 5,
    text: "As a woman, I always felt safe and comfortable here. The environment is respectful, professional, and motivating. Lost 15kg in 6 months with their support. Highly recommended!",
  },
  {
    name: "Vikram Patel",
    role: "Business Owner",
    initials: "VP",
    rating: 5,
    text: "Best value for money in Ambattur! The 3-floor facility is massive, equipment is always well-maintained, and no hidden charges. Been here since 2018 and not planning to switch.",
  },
  {
    name: "Divya Ramesh",
    role: "Software Engineer",
    initials: "DR",
    rating: 5,
    text: "The flexible timings fit perfectly with my work schedule. The trainers helped me build a sustainable workout routine. The minimalist design keeps distractions away - exactly what I needed.",
  },
  {
    name: "Arun Krishnan",
    role: "Fitness Enthusiast",
    initials: "AK",
    rating: 5,
    text: "Started as a beginner and now I'm training for a marathon. The personal training sessions were game-changers. Master's has the right equipment and expertise for all fitness levels.",
  },
  {
    name: "Sneha Menon",
    role: "College Student",
    initials: "SM",
    rating: 5,
    text: "Affordable membership with no compromise on quality! The trainers are patient and helped me correct my form. Great atmosphere and amazing results in just 3 months.",
  },
];

export default function Testimonials() {
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
      id="testimonials"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-accent-gold font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-900">
            What Our Members Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations from real people. Join our community of successful members.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card-hover bg-white p-8 rounded-2xl shadow-lg border border-gray-200 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent-gold text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-gold to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>

                {/* Name & Role */}
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { number: "200+", label: "Happy Members" },
            { number: "30+", label: "Years Legacy" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "95%", label: "Renewal Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
