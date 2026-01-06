/**
 * ProductsSection Component
 * Showcases the signature perfume collections with Framer Motion animations.
 */

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";

// Product data configuration
const products = [
  {
    id: "theros",
    name: "ARG Theros",
    description:
      "A bold, refined masculine fragrance built for leadership and presence.",
    image: "/product-theros.jpg",
    prices: [
      { size: "30ml", price: "₦7,000" },
      { size: "50ml", price: "₦12,000" },
      { size: "100ml", price: "₦22,500" },
    ],
  },
  {
    id: "sugrato",
    name: "ARG Sugrato",
    description:
      "A sweet, playful, and irresistible gourmand fragrance for everyday elegance.",
    image: "/product-sugrato.jpg",
    prices: [
      { size: "12ml", price: "₦2,000" },
      { size: "30ml", price: "₦6,500" },
      { size: "50ml", price: "₦11,000" },
    ],
  },
  {
    id: "chocoluxe",
    name: "ARG Chocoluxe",
    description:
      "A rich, luxurious blend of chocolate, oud, and musk for statement moments.",
    image: "/product-chocoluxe.jpg",
    prices: [
      { size: "30ml", price: "₦7,000" },
      { size: "50ml", price: "₦12,000" },
      { size: "100ml", price: "₦22,500" },
    ],
  },
  {
    id: "nectar",
    name: "ARG Nectar",
    description:
      "A smooth, sweet perfume oil with vanilla warmth and soft musk.",
    image: "/product-nectar.jpg",
    prices: [
      { size: "10ml oil", price: "₦3,000" },
      { size: "20ml oil", price: "₦5,000" },
    ],
    isOil: true,
  },
  {
    id: "essence",
    name: "ARG Essence",
    description:
      "A clean, versatile fragrance designed for daily wear. Balanced and timeless.",
    image: "/product-essence.jpg",
    prices: [
      { size: "12ml", price: "₦2,500" },
      { size: "30ml", price: "₦6,500" },
      { size: "50ml", price: "₦11,000" },
      { size: "100ml", price: "₦18,000" },
    ],
  },
  {
    id: "dawn",
    name: "ARG Dawn",
    description:
      "Fresh and vibrant fragrance capturing the essence of a new beginning.",
    image: "/product-dawn.jpg",
    prices: [
      { size: "30ml", price: "₦6,500" },
      { size: "50ml", price: "₦11,000" },
    ],
  },
];

export default function ProductsSection() {
  return (
    <section
      id="collections"
      className="section-padding bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Our Signature{" "}
            <span className="text-gradient-gold">Collections</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Premium fragrances crafted for those who appreciate luxury
          </p>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <motion.div
                className="group bg-card rounded-2xl overflow-hidden border border-border"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Product Image */}
                <div className="aspect-4/5 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Product Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {product.description}
                    </p>
                  </div>

                  {/* Prices */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-medium">
                      {product.isOil ? "Oil Prices" : "Prices"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.prices.map((priceItem) => (
                        <motion.div
                          key={priceItem.size}
                          className="flex flex-col items-center px-3 py-2 rounded-lg bg-secondary/50"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "hsl(var(--secondary))",
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-xs text-muted-foreground">
                            {priceItem.size}
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {priceItem.price}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="default" className="w-full" asChild>
                      <a
                        href={`https://wa.me/2349065585598?text=Hi, I'm interested in ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order Now
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View All CTA */}
        <AnimatedSection className="text-center mt-20">
          <motion.div
            className="inline-block p-10 rounded-2xl bg-secondary/30 border border-border"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-xl font-medium text-foreground mb-2">
              Discover More Scents
            </h3>
            <p className="text-muted-foreground font-light mb-6">
              Explore our complete collection of luxury fragrances
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://wa.me/2349065585598"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Collections
              </a>
            </Button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
