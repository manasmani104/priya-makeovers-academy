"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "whatsapp";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-rose-gold to-rose-gold-dark text-white shadow-lg shadow-rose-gold/25 hover:shadow-xl hover:shadow-rose-gold/30",
  secondary:
    "bg-white/90 text-charcoal border border-pink-200 hover:bg-white hover:border-rose-gold/40",
  outline:
    "bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white",
  whatsapp:
    "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className} ${
    disabled ? "opacity-60 cursor-not-allowed" : ""
  }`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        className={combinedStyles}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={combinedStyles}
    >
      {children}
    </motion.button>
  );
}
