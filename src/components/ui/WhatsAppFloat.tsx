"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
        "Hi! I'd like to inquire about Priya Makeovers Academy."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3.5 pr-5 py-3.5 shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:scale-105 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-xs font-semibold tracking-wide hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
