/**
 * AboutSection Component
 * Brand story section with Framer Motion animations.
 */

"use client";

import { Sparkles, Clock, Palette, Users } from "lucide-react";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

// Feature cards configuration
const features = [
  {
    icon: Sparkles,
    title: "Luxury Quality",
    description: "Premium ingredients and expert formulation",
  },
  {
    icon: Clock,
    title: "Long-Lasting",
    description: "16-24 hours of exceptional wear",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Personalized labels for corporate gifts",
  },
  {
    icon: Users,
    title: "Trusted",
    description: "Loved by professionals and executives",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <span className="badge-tag mb-4 inline-block">Our Story</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            About <span className="text-gradient-gold">ARG Scentnote</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Where luxury meets longevity. Crafting signature fragrances that
            speak before you do.
          </p>
        </AnimatedSection>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <AnimatedSection className="space-y-8">
            <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground leading-snug">
              Crafted for Confidence, Class, and Individuality
            </h3>

            <div className="space-y-5 text-muted-foreground leading-relaxed font-light">
              <p>
                <strong className="text-foreground font-medium">
                  ARG Scentnote (Argescent Perfumes)
                </strong>{" "}
                is a luxury fragrance brand dedicated to crafting long-lasting,
                high-quality perfumes that express confidence, class, and
                individuality.
              </p>
              <p>
                Our fragrances are carefully formulated with{" "}
                <strong className="text-foreground font-medium">
                  high oil concentration
                </strong>{" "}
                to deliver powerful longevity, refined projection, and
                unforgettable scent trails.
              </p>
              <p>
                From signature perfumes to corporate gifting and brand
                customization, ARG Scentnote creates fragrances that leave a
                lasting impression — because{" "}
                <strong className="text-foreground font-medium">
                  scent is not just worn, it is remembered
                </strong>
                .
              </p>
            </div>

            {/* Decorative line */}
            <div className="w-16 h-[1px] bg-gradient-to-r from-primary via-primary/50 to-transparent" />
          </AnimatedSection>

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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <motion.img
                src="/hero-perfume-1.jpg"
                alt="ARG Scentnote luxury perfume"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </AnimatedSection>
        </div>

        {/* Feature Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="text-center p-8 rounded-2xl bg-card border border-border group"
                whileHover={{ y: -8, borderColor: "hsl(var(--primary) / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="font-display text-lg font-medium text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground font-light">
                  {feature.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
