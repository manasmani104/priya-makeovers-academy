import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-rose-gold-light" />
              <span className="font-serif text-xl font-medium">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-pink-200/70 text-sm leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-rose-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-rose-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-rose-gold transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-rose-gold-light">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-pink-200/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-rose-gold-light">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-pink-200/70">
              <li>Bridal Makeup</li>
              <li>Skin Treatments</li>
              <li>Hair Spa & Styling</li>
              <li>Nail Studio</li>
              <li>Beauty Academy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-4 text-rose-gold-light">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-pink-200/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-rose-gold" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-rose-gold" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-rose-gold" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pink-200/50">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-pink-200/50">
            Crafted with elegance for beauty professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
