/**
 * CorporateSection Component
 * Highlights custom branding and corporate gifting services with animations.
 */

"use client";

import { Tag, Package, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

// Corporate services features
const corporateFeatures = [
  {
    icon: Tag,
    title: "Custom Labels with Company Logos",
    description: "Brand your fragrances with your business identity",
  },
  {
    icon: Package,
    title: "Personalized Packaging Solutions",
    description: "Tailored presentation for maximum impact",
  },
  {
    icon: Heart,
    title: "Appreciation Gifts for Staff & Clients",
    description: "Show gratitude with luxury that lasts",
  },
  {
    icon: Sparkles,
    title: "Event Souvenirs & Party Favors",
    description: "Memorable gifts for special celebrations",
  },
];

export default function CorporateSection() {
  return (
    <section
      id="customization"
      className="section-padding bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Custom Branding &{" "}
            <span className="text-gradient-gold">Corporate Gifting</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-light">
            Elevate your brand or celebrate special occasions with personalized
            luxury fragrances
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Features */}
          <StaggerContainer className="space-y-5" staggerDelay={0.1}>
            {corporateFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="flex gap-5 p-5 rounded-2xl bg-card border border-border"
                  whileHover={{
                    x: 8,
                    borderColor: "hsl(var(--primary) / 0.3)",
                    boxShadow: "0 10px 30px hsl(var(--foreground) / 0.05)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-display text-base font-medium text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="default" size="lg" asChild>
                  <a
                    href="https://wa.me/2349065585598?text=Hi,%20I'm%20interested%20in%20corporate%20gifting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Partner With Us
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </StaggerContainer>

          {/* Image */}
          <AnimatedSection
            variants={{
              hidden: { opacity: 0, x: 60 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="relative"
          >
            <motion.div
              className="aspect-4/3 rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="/corporate-gifting.jpg"
                alt="Corporate gift perfumes with custom branding"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
