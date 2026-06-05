"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG } from "@/lib/constants";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message"
      );
    }
  };

  return (
    <AnimatedSection id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Get In Touch"
          title="Contact Us"
          description="Ready to book an appointment or enroll in our academy? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-1.5">
                    Service / Course
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-charcoal focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="bridal-makeup">Bridal Makeup</option>
                    <option value="salon-service">Salon Service</option>
                    <option value="basic-cosmetology">Basic Cosmetology</option>
                    <option value="advanced-cosmetology">Advanced Cosmetology</option>
                    <option value="professional-training">Professional Beauty Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-pink-200 bg-pink-50/50 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/20 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-green-600 bg-green-50 rounded-lg px-4 py-3">
                  Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                  {errorMessage}
                </p>
              )}

              <Button type="submit" variant="primary" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8">
              <Button
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'd like to inquire about Priya Makeovers Academy.`}
                variant="whatsapp"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-pink-50 border border-pink-100 p-6 space-y-4">
              <h3 className="font-serif text-xl text-charcoal">Visit Our Salon</h3>
              <ul className="space-y-3 text-sm text-charcoal/70">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-rose-gold shrink-0" />
                  {SITE_CONFIG.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-rose-gold shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-rose-gold transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-rose-gold shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-rose-gold transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-rose-gold shrink-0" />
                  {SITE_CONFIG.hours}
                </li>
              </ul>

              <div className="flex gap-3 pt-2">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-pink-200 text-charcoal hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-pink-200 text-charcoal hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="h-4 w-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white border border-pink-200 text-charcoal hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg shadow-pink-100/50 border border-pink-100 h-64 sm:h-80">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Priya Makeovers Academy Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
