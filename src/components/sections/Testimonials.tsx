"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <AnimatedSection
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-b from-cream to-pink-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Love"
          title="What They Say About Us"
          description="Hear from our cherished clients and proud academy graduates who have experienced the Priya Makeovers difference."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 shadow-lg shadow-pink-100/50 border border-pink-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-pink-100" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-rose-gold text-rose-gold"
                  />
                ))}
              </div>

              <p className="text-charcoal/80 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-pink-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg text-charcoal">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-rose-gold">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
