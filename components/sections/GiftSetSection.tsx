/**
 * GiftSetSection Component
 * Highlights the luxury fragrance gift set with Framer Motion animations.
 */

"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/motion";

// Gift set items included
const giftSetItems = [
  "30ml ARG Sugrato",
  "30ml ARG Chocoluxe",
  "ARG Nectar perfume oil",
  "12ml ARG Sugrato",
];

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export default function GiftSetSection() {
  return (
    <section
      id="gift-sets"
      className="section-padding section-dark overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
            Gift Sets & <span className="text-gradient-gold">Bundles</span>
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto font-light">
            Carefully curated fragrance gift sets that deliver luxury, value,
            and elegance in one package
          </p>
        </AnimatedSection>

        {/* Gift Set Card */}
        <AnimatedSection className="max-w-5xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-charcoal/40 rounded-3xl p-8 lg:p-12 border border-ivory/10 backdrop-blur-sm"
            whileHover={{ borderColor: "hsl(var(--gold) / 0.3)" }}
            transition={{ duration: 0.4 }}
          >
            {/* Image */}
            <motion.div
              className="aspect-square rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <motion.img
                src="/gift-set.jpg"
                alt="Luxury Fragrance Gift Set"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gold text-charcoal font-medium mb-4">
                  Popular Set
                </Badge>
              </motion.div>

              <motion.h3
                className="font-display text-2xl md:text-3xl font-medium text-ivory"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Luxury Fragrance Gift Set
              </motion.h3>

              <motion.p
                className="text-ivory/60 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Our fragrance gift sets are carefully curated to deliver luxury,
                value, and elegance in one package. Perfect for gifting or
                treating yourself.
              </motion.p>

              {/* Set Includes */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xs uppercase tracking-widest text-gold font-medium">
                  Set Includes:
                </h4>
                <ul className="space-y-2.5">
                  {giftSetItems.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-ivory/80"
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={listItemVariants}
                    >
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-gold" />
                      </div>
                      <span className="font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Price */}
              <motion.div
                className="pt-6 border-t border-ivory/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-ivory/50 font-light">
                    Set Price:
                  </span>
                  <span className="font-display text-4xl font-semibold text-gold">
                    ₦15,000
                  </span>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a
                      href="https://wa.me/2349065585598?text=Hi,%20I'm%20interested%20in%20the%20Luxury%20Gift%20Set"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Gift Set Now
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <p className="text-sm text-ivory/40 text-center font-light">
                Custom gift sets also available based on your budget
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
