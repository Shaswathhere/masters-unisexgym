import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

// Font configurations
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

// SEO Metadata - Optimized for local gym in Ambattur
export const metadata: Metadata = {
  title: "Master's Unisex Gym - Ambattur's Most Spacious & Affordable Gym Since 1995",
  description:
    "Experience premium fitness at Master's Unisex Gym in Ambattur. 7000+ sq ft, 3 floors, fully A/C facility with modern equipment. Membership starts at ₹3000/month. Join Ambattur's most trusted gym since 1995.",
  keywords: [
    "gym in Ambattur",
    "Ambattur gym",
    "Master's Unisex Gym",
    "affordable gym Chennai",
    "AC gym Ambattur",
    "best gym in Ambattur",
    "fitness center Ambattur",
    "gym membership Chennai",
    "spacious gym",
    "unisex gym Ambattur",
  ],
  authors: [{ name: "Master's Unisex Gym" }],
  creator: "Master's Unisex Gym",
  publisher: "Master's Unisex Gym",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mastersunisexgym.com",
    siteName: "Master's Unisex Gym",
    title: "Master's Unisex Gym - Ambattur's Premier Fitness Destination",
    description:
      "7000+ sq ft, 3-floor fully A/C gym in Ambattur. Modern equipment, expert trainers, affordable membership from ₹3000/month. Serving the community since 1995.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Master's Unisex Gym - Ambattur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master's Unisex Gym - Ambattur's Premier Gym Since 1995",
    description:
      "Premium fitness facility with 7000+ sq ft space, fully A/C, modern equipment. Memberships from ₹3000/month.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // User can add their Google Search Console verification
  },
  alternates: {
    canonical: "https://mastersunisexgym.com",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Ambattur, Chennai",
    "geo.position": "13.1143;80.1548", // Approximate coordinates for Ambattur
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              "@id": "https://mastersunisexgym.com",
              name: "Master's Unisex Gym",
              image: "https://mastersunisexgym.com/logo.png",
              description: "Ambattur's most spacious and affordable gym with 7000+ sq ft, 3 floors, fully A/C facility since 1995",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ambattur",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600053",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 13.1143,
                longitude: 80.1548,
              },
              url: "https://mastersunisexgym.com",
              telephone: "+91-XXXXXXXXXX",
              priceRange: "₹₹",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "05:00",
                  closes: "22:00",
                },
              ],
              foundingDate: "1995",
              areaServed: {
                "@type": "City",
                name: "Chennai",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
