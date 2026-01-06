/**
 * Header Component
 * Sticky navigation header with Framer Motion animations.
 */

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Navigation links configuration
const navLinks = [
  { label: "Collections", href: "#collections" },
  { label: "Gift Sets", href: "#gift-sets" },
  { label: "Corporate", href: "#customization" },
  { label: "FAQ", href: "#faq" },
];

// Helper function to determine which logo to display
const getLogoSrc = (isScrolled: boolean) => {
  return isScrolled ? "/logo-dark.png" : "/logo-light.png";
};

export default function Header() {
  // State for mobile menu toggle and scroll effect
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with transition between light and dark versions */}
          <motion.a
            href="#"
            className="relative flex items-center group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={getLogoSrc(isScrolled)}
              alt="ARG Scentnote Logo"
              width={160}
              height={48}
              className="h-12 w-auto object-contain transition-opacity duration-500"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative ${
                  isScrolled
                    ? "text-foreground/70 hover:text-primary"
                    : "text-ivory/80 hover:text-gold"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="default"
                className={
                  isScrolled
                    ? "btn-gold"
                    : "bg-gold hover:bg-gold-light text-charcoal"
                }
                asChild
              >
                <a
                  href="https://wa.me/2349065585598"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-ivory"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-secondary/50"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-4"
              >
                <Button variant="default" className="w-full btn-gold" asChild>
                  <a
                    href="https://wa.me/2349065585598"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Shop Now
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
