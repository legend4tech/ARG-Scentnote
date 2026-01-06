/**
 * FAQSection Component
 * Frequently asked questions with Framer Motion animations.
 */

"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/motion";

// FAQ data configuration
const faqs = [
  {
    question: "Do your perfumes last long?",
    answer:
      "Yes! Our perfumes are formulated with high oil concentration to last 16-24 hours depending on skin type and application. This exceptional longevity is one of our signature features.",
  },
  {
    question: "Do you accept bulk orders?",
    answer:
      "Absolutely! We accept bulk orders for individuals and corporate clients. Contact us on WhatsApp to discuss your requirements and get special pricing for large orders.",
  },
  {
    question: "Can I customize perfumes with my brand?",
    answer:
      "Yes, we offer custom labels and packaging for corporate gifting, events, and brand collaborations. You can add your company logo, personalized messages, and custom designs to our perfumes.",
  },
  {
    question: "How do I order?",
    answer:
      "Orders are placed via WhatsApp at 09065585598. Simply message us with the perfume name and size you want, and we'll guide you through the payment and delivery process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, mobile money, and other secure payment methods. Payment details will be shared with you after placing your order via WhatsApp.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes! We offer fast and reliable delivery to your doorstep. Delivery fees and timelines vary based on your location. Contact us for specific delivery information.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Everything you need to know about ARG Scentnote perfumes
          </p>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 font-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <motion.div
            className="text-center mt-16 p-10 rounded-2xl bg-secondary/30 border border-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ borderColor: "hsl(var(--primary) / 0.2)" }}
          >
            <p className="text-muted-foreground mb-5 font-light">
              Still have questions?
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="default" asChild>
                <a
                  href="https://wa.me/2349065585598"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with Us on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
