"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/data";

const heightClasses = {
  short: "h-48 sm:h-52",
  medium: "h-64 sm:h-72",
  tall: "h-80 sm:h-96",
};

export default function Gallery() {
  return (
    <AnimatedSection id="gallery" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Beauty Gallery"
          description="A glimpse into our artistry — bridal transformations, salon services, nail designs, and academy moments."
        />

        <div className="masonry-grid">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              className="masonry-item group"
            >
              <div
                className={`relative overflow-hidden rounded-xl ${heightClasses[image.height]} shadow-md shadow-pink-100/50`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="inline-block rounded-full bg-rose-gold/90 px-3 py-1 text-xs font-semibold text-white">
                    {image.category}
                  </span>
                  <p className="mt-2 text-sm text-white/90">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
