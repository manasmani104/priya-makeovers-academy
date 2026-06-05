"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Target } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  {
    icon: Heart,
    title: "Passion for Beauty",
    description:
      "Every service is delivered with genuine care, precision, and an artist's eye for detail.",
  },
  {
    icon: Target,
    title: "Career Transformation",
    description:
      "Our academy programs are designed to turn passion into a thriving professional career.",
  },
  {
    icon: Award,
    title: "Award-Winning Excellence",
    description:
      "Recognized for outstanding bridal makeup, skincare innovation, and beauty education.",
  },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-pink-200/50"
            >
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                alt="Priya Vishwakarma, founder of Priya Makeovers Academy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl p-6 shadow-xl shadow-pink-100/50 border border-pink-100"
            >
              <p className="font-serif text-3xl font-medium text-rose-gold">8+</p>
              <p className="text-sm text-charcoal/60 mt-1">Years of Excellence</p>
            </motion.div>
          </div>

          <div>
            <SectionHeading
              subtitle="Our Story"
              title="Meet Our Founder"
              description="Priya Makeovers Academy was born from a vision to redefine beauty standards and create opportunities for aspiring artists."
              align="left"
            />

            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                Founded by <strong className="text-charcoal">Priya Vishwakarma</strong>, a
                celebrated makeup artist and cosmetology educator with over 8 years of
                industry experience, our academy stands at the intersection of luxury
                salon services and transformative education.
              </p>
              <p>
                What began as a small bridal makeup studio has blossomed into a
                full-service beauty destination and one of Bhopal&apos;s most respected
                cosmetology training institutes — nurturing thousands of successful
                beauty professionals.
              </p>
              <p>
                Our mission is simple yet profound: to help every client discover their
                most radiant self, and to equip every student with the skills, confidence,
                and business acumen to build a flourishing career in the beauty industry.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="inline-flex p-3 rounded-xl bg-pink-100 mb-3">
                    <item.icon className="h-5 w-5 text-rose-gold" />
                  </div>
                  <h3 className="font-serif text-lg text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
