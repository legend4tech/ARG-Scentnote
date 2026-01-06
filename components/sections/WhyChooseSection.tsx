/**
 * WhyChooseSection Component
 * Highlights the key benefits with Framer Motion animations.
 */

"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Droplets,
  Gift,
  DollarSign,
  Palette,
  Building2,
} from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

// Benefits data configuration
const benefits = [
  {
    icon: Clock,
    title: "Long-Lasting Performance",
    description: "Our fragrances last 16-24 hours with just one application.",
  },
  {
    icon: Droplets,
    title: "High-Oil Concentration",
    description:
      "Eau de Parfum and pure perfume oils with premium concentration.",
  },
  {
    icon: Gift,
    title: "Premium Packaging",
    description: "Elegantly designed bottles that reflect the luxury within.",
  },
  {
    icon: DollarSign,
    title: "Affordable Luxury",
    description: "High-end quality at accessible prices for everyone.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Personalize your perfumes with custom labels and packaging.",
  },
  {
    icon: Building2,
    title: "Corporate Orders",
    description: "Special pricing and services for bulk purchases.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Why Choose <span className="text-gradient-gold">ARG Scentnote</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Experience the difference of truly premium fragrances
          </p>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
        </AnimatedSection>

        {/* Benefits Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {benefits.map((benefit, index) => (
            <StaggerItem key={benefit.title}>
              <motion.div
                className="group p-8 rounded-2xl border border-border bg-card h-full"
                whileHover={{
                  y: -6,
                  borderColor: "hsl(var(--primary) / 0.3)",
                  boxShadow: "0 20px 40px hsl(var(--foreground) / 0.08)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Icon with number */}
                <div className="flex items-center gap-4 mb-5">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-5xl font-display text-border font-medium opacity-50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-lg font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {benefit.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
