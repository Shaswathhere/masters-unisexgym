"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Simulate form submission - User can integrate with their backend/email service
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success
      setStatus({
        type: "success",
        message:
          "Thank you for your inquiry! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "general",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all duration-300"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all duration-300"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all duration-300"
          placeholder="10-digit mobile number"
        />
      </div>

      {/* Interest */}
      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          I&apos;m Interested In
        </label>
        <select
          id="interest"
          name="interest"
          value={formData.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all duration-300 bg-white"
        >
          <option value="general">General Inquiry</option>
          <option value="membership">Membership Plans</option>
          <option value="personal-training">Personal Training</option>
          <option value="tour">Facility Tour</option>
          <option value="corporate">Corporate Packages</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all duration-300 resize-none"
          placeholder="Tell us about your fitness goals or any questions you have..."
        />
      </div>

      {/* Status Message */}
      {status.type && (
        <div
          className={`p-4 rounded-lg ${
            status.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          {status.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent-gold text-black py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
          isSubmitting
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-accent-gold/90 hover:scale-105 transform"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>

      <p className="text-sm text-gray-500 text-center">
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
