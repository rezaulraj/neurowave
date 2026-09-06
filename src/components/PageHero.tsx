"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface PageHeroProps {
  badge: string;
  title: string;
  highlight: string;
  suffix?: string;
  description: string;
  crumb: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  suffix,
  description,
  crumb,
}: PageHeroProps) {
  const pathname = usePathname();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: crumb,
        item: `${siteConfig.url}${pathname}`,
      },
    ],
  };

  const bubbleFloatAnimation: Variants = {
    initial: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
    }),
    animate: (custom: {
      x: number;
      y: number;
      duration: number;
      delay: number;
    }) => ({
      x: [custom.x, custom.x + 100, custom.x - 50, custom.x + 50, custom.x],
      y: [custom.y, custom.y - 60, custom.y + 40, custom.y - 30, custom.y],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut",
      },
    }),
  };

  const bubblePulseAnimation: Variants = {
    initial: { scale: 1, opacity: 0.2 },
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const bubbles = [
    {
      size: "w-48 h-48",
      color: "bg-[#00D5DE]/10",
      duration: 25,
      delay: 0,
      startX: 100,
      startY: 40,
    },
    {
      size: "w-40 h-40",
      color: "bg-[#0099CF]/10",
      duration: 22,
      delay: 2,
      startX: 800,
      startY: 150,
    },
    {
      size: "w-36 h-36",
      color: "bg-[#0D2E62]/10",
      duration: 28,
      delay: 4,
      startX: 1200,
      startY: 300,
    },
    {
      size: "w-28 h-28",
      color: "bg-[#00D5DE]/15",
      duration: 18,
      delay: 1,
      startX: 300,
      startY: 380,
    },
    {
      size: "w-24 h-24",
      color: "bg-[#0099CF]/15",
      duration: 20,
      delay: 3,
      startX: 600,
      startY: 100,
    },
    {
      size: "w-24 h-24",
      color: "bg-[#0D2E62]/15",
      duration: 16,
      delay: 5,
      startX: 1000,
      startY: 350,
    },
    {
      size: "w-20 h-20",
      color: "bg-[#00D5DE]/20",
      duration: 14,
      delay: 0.5,
      startX: 200,
      startY: 80,
    },
    {
      size: "w-16 h-16",
      color: "bg-[#0099CF]/20",
      duration: 12,
      delay: 1.5,
      startX: 700,
      startY: 320,
    },
    {
      size: "w-16 h-16",
      color: "bg-[#0D2E62]/20",
      duration: 15,
      delay: 2,
      startX: 900,
      startY: 180,
    },
    {
      size: "w-14 h-14",
      color: "bg-[#00D5DE]/25",
      duration: 10,
      delay: 0.2,
      startX: 150,
      startY: 250,
    },
    {
      size: "w-12 h-12",
      color: "bg-[#0099CF]/25",
      duration: 9,
      delay: 1.2,
      startX: 450,
      startY: 150,
    },
    {
      size: "w-10 h-10",
      color: "bg-[#0D2E62]/25",
      duration: 8,
      delay: 2.2,
      startX: 1100,
      startY: 280,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100 pt-32 pb-20 lg:pt-40 lg:pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} backdrop-blur-sm`}
            style={{
              left: bubble.startX,
              top: bubble.startY,
              filter: "blur(8px)",
            }}
            variants={bubbleFloatAnimation}
            initial="initial"
            animate="animate"
            custom={{
              x: bubble.startX,
              y: bubble.startY,
              duration: bubble.duration,
              delay: bubble.delay,
            }}
          />
        ))}

        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`pulse-${index}`}
            className={`absolute rounded-full ${
              index % 3 === 0
                ? "w-32 h-32 bg-[#00D5DE]/10"
                : index % 3 === 1
                  ? "w-24 h-24 bg-[#0099CF]/10"
                  : "w-16 h-16 bg-[#0D2E62]/10"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={bubblePulseAnimation}
            initial="initial"
            animate="animate"
          />
        ))}

        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6"
        >
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#00D5DE] transition-colors duration-200"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-[#0099CF] font-medium">{crumb}</span>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/20 border border-[#00D5DE]/30 mb-6"
        >
          <span className="text-[#0099CF] font-medium">{badge}</span>
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-6"
        >
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
            {highlight}
          </span>{" "}
          {suffix}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 lg:h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#0D2E62"
            opacity="0.05"
          />
        </svg>
      </div>
    </section>
  );
}
