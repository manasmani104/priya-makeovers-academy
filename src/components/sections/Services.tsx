"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <AnimatedSection id="services" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Premium Services"
          description="Indulge in a curated selection of beauty treatments crafted with premium products, expert techniques, and personalized care."
        />

        <div className="space-y-16">
          {SERVICES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                catIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`relative ${catIndex % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl shadow-pink-100/50">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2.5 rounded-xl bg-white/90 backdrop-blur-sm">
                      <category.icon className="h-5 w-5 text-rose-gold" />
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className={catIndex % 2 === 1 ? "lg:order-1" : ""}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.08 }}
                      className="group p-5 rounded-xl border border-pink-100 bg-pink-50/50 hover:bg-white hover:border-rose-gold/30 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-300"
                    >
                      <h4 className="font-serif text-lg text-charcoal group-hover:text-rose-gold transition-colors">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
