"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { COURSES } from "@/lib/data";

export default function Academy() {
  return (
    <AnimatedSection
      id="academy"
      className="py-20 md:py-28 bg-gradient-to-b from-pink-50 to-cream"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Learn With Us"
          title="Beauty Academy Courses"
          description="Launch your dream career with industry-leading curriculum, hands-on training, and mentorship from seasoned professionals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course, index) => (
            <motion.article
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-pink-100/50 border border-pink-100 hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {course.title}
                  </h3>
                  <span className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-charcoal">
                    <Clock className="h-3.5 w-3.5 text-rose-gold" />
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-charcoal/70 leading-relaxed mb-5">
                  {course.description}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-charcoal/80"
                    >
                      <CheckCircle className="h-4 w-4 text-rose-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                  Enroll Now
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
