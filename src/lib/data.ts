import {
  Sparkles,
  Heart,
  Scissors,
  Palette,
  Flower2,
  GraduationCap,
  Users,
  Award,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  items: ServiceItem[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  features: string[];
  image: string;
}

export interface Achievement {
  value: string;
  label: string;
  icon: LucideIcon;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  height: "short" | "medium" | "tall";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "makeup",
    title: "Makeup Services",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    items: [
      {
        name: "Bridal Makeup",
        description: "Flawless, long-lasting bridal looks tailored to your dream wedding.",
      },
      {
        name: "HD Makeup",
        description: "Camera-ready perfection with high-definition techniques.",
      },
      {
        name: "Airbrush Makeup",
        description: "Seamless, lightweight coverage for a naturally radiant finish.",
      },
      {
        name: "Party Makeup",
        description: "Glamorous looks for celebrations, events, and special occasions.",
      },
    ],
  },
  {
    id: "skin",
    title: "Skin Treatments",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    items: [
      {
        name: "Facial Treatments",
        description: "Deep cleansing and rejuvenating facials for glowing skin.",
      },
      {
        name: "Acne Treatment",
        description: "Targeted therapies to clear and restore healthy skin.",
      },
      {
        name: "Skin Rejuvenation",
        description: "Advanced treatments to reverse signs of aging and fatigue.",
      },
    ],
  },
  {
    id: "hair",
    title: "Hair Treatments",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    items: [
      {
        name: "Hair Spa",
        description: "Luxurious nourishment for silky, healthy hair.",
      },
      {
        name: "Keratin",
        description: "Smooth, frizz-free hair with lasting shine.",
      },
      {
        name: "Smoothening",
        description: "Professional straightening for effortlessly sleek styles.",
      },
      {
        name: "Hair Coloring",
        description: "Expert color artistry from subtle highlights to bold transformations.",
      },
    ],
  },
  {
    id: "nails",
    title: "Nail Studio",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
    items: [
      {
        name: "Nail Extensions",
        description: "Elegant extensions crafted for strength and beauty.",
      },
      {
        name: "Nail Art",
        description: "Creative designs from minimalist chic to statement artistry.",
      },
      {
        name: "Gel Polish",
        description: "Chip-resistant, high-gloss finishes that last for weeks.",
      },
    ],
  },
  {
    id: "therapy",
    title: "Beauty Therapy",
    icon: Flower2,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    items: [
      {
        name: "Wellness Therapy",
        description: "Holistic treatments for mind, body, and beauty harmony.",
      },
      {
        name: "Beauty Consultation",
        description: "Personalized guidance for your unique beauty journey.",
      },
    ],
  },
];

export const COURSES: Course[] = [
  {
    id: "basic-cosmetology",
    title: "Basic Cosmetology",
    duration: "3 Months",
    description:
      "Foundation course covering essential beauty techniques, hygiene, and client care.",
    features: [
      "Skin & hair basics",
      "Makeup fundamentals",
      "Sanitation protocols",
      "Hands-on practice",
    ],
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
  },
  {
    id: "advanced-cosmetology",
    title: "Advanced Cosmetology",
    duration: "6 Months",
    description:
      "Master advanced techniques in makeup artistry, skincare, and salon management.",
    features: [
      "Bridal & HD makeup",
      "Advanced skincare",
      "Hair styling mastery",
      "Salon operations",
    ],
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
  },
  {
    id: "personality-development",
    title: "Personality Development",
    duration: "1 Month",
    description:
      "Build confidence, communication skills, and professional presence for the beauty industry.",
    features: [
      "Public speaking",
      "Client interaction",
      "Personal branding",
      "Interview preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: "professional-beauty",
    title: "Professional Beauty Training",
    duration: "12 Months",
    description:
      "Comprehensive certification program preparing you for a thriving beauty career.",
    features: [
      "Full curriculum",
      "Industry internships",
      "Certification",
      "Job placement support",
    ],
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: "2,500+", label: "Students Trained", icon: GraduationCap },
  { value: "8+", label: "Years of Excellence", icon: Award },
  { value: "98%", label: "Placement Rate", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Star },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Bridal makeup transformation",
    category: "Bridal",
    height: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    alt: "Elegant nail art design",
    category: "Nails",
    height: "short",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    alt: "Academy training session",
    category: "Academy",
    height: "medium",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1492106087820-ff3cf9f5e7d6?w=600&q=80",
    alt: "Professional makeup application",
    category: "Makeup",
    height: "medium",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=80",
    alt: "Hair styling masterpiece",
    category: "Hair",
    height: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Beauty salon ambiance",
    category: "Salon",
    height: "short",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    alt: "Skincare treatment session",
    category: "Skin",
    height: "medium",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    alt: "Makeup artist at work",
    category: "Makeup",
    height: "tall",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Luxury hair treatment",
    category: "Hair",
    height: "short",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    alt: "Facial rejuvenation treatment",
    category: "Skin",
    height: "medium",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1522335781063-78b229f2c4a6?w=600&q=80",
    alt: "Wedding beauty preparation",
    category: "Bridal",
    height: "tall",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1522335781063-78b229f2c4a6?w=600&q=80",
    alt: "Beauty academy graduation",
    category: "Academy",
    height: "short",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ananya Sharma",
    role: "Bridal Client",
    content:
      "Priya Makeovers made my wedding day absolutely magical. The bridal makeup was flawless and lasted through every ceremony. I felt like a true princess!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    id: "2",
    name: "Riya Patel",
    role: "Academy Graduate",
    content:
      "The Professional Beauty Training program transformed my life. Within months of graduating, I opened my own salon. The mentorship here is unmatched.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "3",
    name: "Meera Desai",
    role: "Regular Client",
    content:
      "From facials to hair spa treatments, every visit feels like a luxury retreat. The team is professional, warm, and truly passionate about beauty.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
  {
    id: "4",
    name: "Kavita Reddy",
    role: "Academy Student",
    content:
      "The Advanced Cosmetology course gave me skills I never thought possible. Hands-on training with real clients prepared me for the industry perfectly.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
];
