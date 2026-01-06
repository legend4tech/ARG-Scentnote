/**
 * Home Page - ARG Scentnote Landing Page
 * Main landing page assembling all sections for the luxury perfume brand.
 * Includes SEO meta tags and semantic HTML structure.
 */

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import CorporateSection from "@/components/sections/CorporateSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import GiftSetSection from "@/components/sections/GiftSetSection";
import HeroCarousel from "@/components/sections/HeroCarousel";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import type { Metadata } from "next";

// Metadata for SEO
export const metadata: Metadata = {
  title: "ARG Scentnote - Luxury Perfumes in Nigeria for Professionals",
  description:
    "Premium long-lasting perfumes designed for confidence, elegance, and identity. ARG Scentnote crafts luxury fragrances with high oil concentration lasting 16-24 hours.",
  keywords: [
    "luxury perfumes Nigeria",
    "long-lasting fragrance",
    "premium perfumes",
    "professional scents",
    "ARG Scentnote",
  ],
  openGraph: {
    title: "ARG Scentnote - Luxury Perfumes in Nigeria for Professionals",
    description:
      "Premium long-lasting perfumes designed for confidence, elegance, and identity. Each fragrance is crafted to last 16-24 hours.",
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARG Scentnote - Luxury Perfumes in Nigeria",
    description:
      "Premium long-lasting perfumes designed for confidence, elegance, and identity.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Full-Width Carousel */}
        <HeroCarousel />

        {/* About ARG Scentnote */}
        <AboutSection />

        {/* Signature Perfume Collections */}
        <ProductsSection />

        {/* Gift Sets & Bundles */}
        <GiftSetSection />

        {/* Why Choose ARG Scentnote */}
        <WhyChooseSection />

        {/* Corporate Gifting & Custom Branding */}
        <CorporateSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final Call-to-Action */}
        <CTASection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
