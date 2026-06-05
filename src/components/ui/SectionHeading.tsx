"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignClass}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`inline-block text-sm font-semibold tracking-[0.25em] uppercase mb-3 ${
          light ? "text-rose-gold-light" : "text-rose-gold"
        }`}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-pink-100" : "text-charcoal/70"
          }`}
        >
          {description}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`mt-6 h-0.5 w-16 bg-gradient-to-r from-rose-gold to-rose-gold-light ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
