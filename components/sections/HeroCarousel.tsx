/**
 * HeroCarousel Component - Modern Edition
 * Full-width hero section with auto-playing image carousel.
 * Features smooth Framer Motion animations, parallax effects, and modern design.
 */

"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Star,
  Truck,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Carousel slides configuration
const slides = [
  {
    image: "/hero-perfume-1.jpg",
    alt: "Luxury perfume bottle with golden amber liquid",
    title: "Signature Collection",
    subtitle: "Timeless elegance in every drop",
  },
  {
    image: "/hero-perfume-2.jpg",
    alt: "Collection of luxury perfume bottles",
    title: "Premium Selection",
    subtitle: "Curated for the distinguished",
  },
  {
    image: "/hero-perfume-3.jpg",
    alt: "Premium fragrance with golden light effects",
    title: "Exclusive Scents",
    subtitle: "Where luxury meets artistry",
  },
];

// Trust badges data
const trustBadges = [
  { icon: Clock, label: "16-24 Hours Lasting" },
  { icon: Star, label: "Premium Quality" },
  { icon: Truck, label: "Fast Delivery" },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  // Generate stable random values for particles (only once)
  const particles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: (i * 7.3) % 100, // Pseudo-random but stable
        y: (i * 13.7) % 100,
        duration: 3 + (i % 3),
        delay: (i % 5) * 0.4,
      })),
    []
  );

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  }, []);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setIsAutoPlaying(false);
    },
    [currentSlide]
  );

  // Improved slide animation variants - faster and smoother
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "50%" : "-50%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-50%" : "50%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image Carousel with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.4 },
              scale: { duration: 0.8, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              quality={95}
              className="object-cover"
            />

            {/* Animated gradient mesh overlay */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal/50 to-transparent"
                animate={{
                  background: [
                    "linear-gradient(to bottom right, rgba(61, 50, 41, 0.7), rgba(61, 50, 41, 0.5), transparent)",
                    "linear-gradient(to top left, rgba(61, 50, 41, 0.7), rgba(61, 50, 41, 0.5), transparent)",
                    "linear-gradient(to bottom right, rgba(61, 50, 41, 0.7), rgba(61, 50, 41, 0.5), transparent)",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </motion.div>

      {/* Animated particles/sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              scale: 0,
            }}
            animate={{
              y: [`${particle.y}%`, `${(particle.y + 20) % 100}%`],
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Overlay with Parallax */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {/* Animated badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 backdrop-blur-sm mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium tracking-widest uppercase text-gold">
                {slides[currentSlide].title}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-ivory leading-[1.1] mb-4 tracking-tight"
          >
            Luxury Scents That
            <br />
            <span className="text-gradient-gold italic font-medium">
              Speak Before You Do
            </span>
          </motion.h1>

          {/* Animated subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-gold/80 text-sm md:text-base mb-6 font-elegant italic"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-base md:text-lg text-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed font-light"
          >
            Premium long-lasting perfumes designed for confidence, elegance, and
            identity. Each fragrance is crafted to last 16-24 hours.
          </motion.p>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="lg" className="btn-gold" asChild>
                <a
                  href="https://wa.me/2349065585598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="btn-outline-gold"
                asChild
              >
                <a href="#collections">View Collection</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Badges with stagger animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2.5 text-ivory/80 cursor-default"
              >
                <motion.div
                  className="w-10 h-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/20 flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "rgba(201, 168, 106, 0.2)",
                    borderColor: "rgba(201, 168, 106, 0.4)",
                  }}
                >
                  <badge.icon className="w-4 h-4 text-gold" />
                </motion.div>
                <span className="text-sm font-light tracking-wide">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Modern Navigation Arrows */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={goToPrevious}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ivory/5 backdrop-blur-md border border-ivory/10 text-ivory hover:bg-gold/20 hover:border-gold/30 transition-all duration-300 group"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 group-hover:text-gold transition-colors" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={goToNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-ivory/5 backdrop-blur-md border border-ivory/10 text-ivory hover:bg-gold/20 hover:border-gold/30 transition-all duration-300 group"
        aria-label="Next slide"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 group-hover:text-gold transition-colors" />
      </motion.button>

      {/* Enhanced Slide Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3"
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative h-1 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-gold"
                : "w-8 bg-ivory/20 hover:bg-ivory/40"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gold rounded-full"
                layoutId="activeSlide"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-2 text-ivory/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="relative w-6 h-10 rounded-full border-2 border-gold/30 p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-2 bg-gold rounded-full mx-auto"
          />
        </motion.div>
        <span className="text-xs tracking-widest uppercase font-light">
          Scroll
        </span>
      </motion.div>

      {/* Progress bar */}
      {isAutoPlaying && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-ivory/10 z-20"
          initial={{ scaleX: 0 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-gold-light origin-left"
            animate={{ scaleX: 1 }}
            transition={{
              duration: 6,
              ease: "linear",
              repeat: Infinity,
            }}
            key={currentSlide}
          />
        </motion.div>
      )}
    </section>
  );
}
