"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS } from "@/lib/data";

export default function StudentSuccess() {
  return (
    <AnimatedSection
      id="success"
      className="py-20 md:py-28 bg-charcoal relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/10 via-transparent to-rose-gold-dark/10" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Impact"
          title="Student Success Stories"
          description="Numbers that reflect our commitment to excellence — in education, placement, and transforming lives through beauty."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="inline-flex p-3 rounded-xl bg-rose-gold/20 mb-4">
                <achievement.icon className="h-6 w-6 text-rose-gold-light" />
              </div>
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2">
                {achievement.value}
              </p>
              <p className="text-sm text-pink-200/70 tracking-wide">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="font-serif text-xl md:text-2xl text-pink-100 italic leading-relaxed">
            &ldquo;Our graduates don&apos;t just learn beauty — they build empires.
            From salon owners to celebrity makeup artists, our alumni are making
            their mark across India and beyond.&rdquo;
          </p>
          <p className="mt-4 text-rose-gold-light font-medium">
            — Priya Vishwakarma, Founder
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
