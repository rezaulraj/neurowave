"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

export default function HeroPage() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
      y: [custom.y, custom.y - 80, custom.y + 60, custom.y - 40, custom.y],
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
      startY: 50,
    },
    {
      size: "w-40 h-40",
      color: "bg-[#0099CF]/10",
      duration: 22,
      delay: 2,
      startX: 800,
      startY: 200,
    },
    {
      size: "w-36 h-36",
      color: "bg-[#0D2E62]/10",
      duration: 28,
      delay: 4,
      startX: 1200,
      startY: 400,
    },

    {
      size: "w-28 h-28",
      color: "bg-[#00D5DE]/15",
      duration: 18,
      delay: 1,
      startX: 300,
      startY: 600,
    },
    {
      size: "w-24 h-24",
      color: "bg-[#0099CF]/15",
      duration: 20,
      delay: 3,
      startX: 600,
      startY: 150,
    },
    {
      size: "w-28 h-28",
      color: "bg-[#0D2E62]/15",
      duration: 16,
      delay: 5,
      startX: 1000,
      startY: 500,
    },
    {
      size: "w-24 h-24",
      color: "bg-[#00D5DE]/15",
      duration: 19,
      delay: 2.5,
      startX: 400,
      startY: 350,
    },

    {
      size: "w-20 h-20",
      color: "bg-[#00D5DE]/20",
      duration: 14,
      delay: 0.5,
      startX: 200,
      startY: 100,
    },
    {
      size: "w-16 h-16",
      color: "bg-[#0099CF]/20",
      duration: 12,
      delay: 1.5,
      startX: 700,
      startY: 450,
    },
    {
      size: "w-20 h-20",
      color: "bg-[#0D2E62]/20",
      duration: 15,
      delay: 2,
      startX: 900,
      startY: 250,
    },
    {
      size: "w-16 h-16",
      color: "bg-[#00D5DE]/20",
      duration: 13,
      delay: 3.5,
      startX: 500,
      startY: 550,
    },
    {
      size: "w-18 h-18",
      color: "bg-[#0099CF]/20",
      duration: 11,
      delay: 4.5,
      startX: 1100,
      startY: 100,
    },

    {
      size: "w-14 h-14",
      color: "bg-[#00D5DE]/25",
      duration: 10,
      delay: 0.2,
      startX: 150,
      startY: 300,
    },
    {
      size: "w-12 h-12",
      color: "bg-[#0099CF]/25",
      duration: 9,
      delay: 1.2,
      startX: 450,
      startY: 200,
    },
    {
      size: "w-10 h-10",
      color: "bg-[#0D2E62]/25",
      duration: 8,
      delay: 2.2,
      startX: 750,
      startY: 400,
    },
    {
      size: "w-14 h-14",
      color: "bg-[#00D5DE]/25",
      duration: 11,
      delay: 3.2,
      startX: 850,
      startY: 150,
    },
    {
      size: "w-12 h-12",
      color: "bg-[#0099CF]/25",
      duration: 9.5,
      delay: 4.2,
      startX: 950,
      startY: 350,
    },
    {
      size: "w-10 h-10",
      color: "bg-[#0D2E62]/25",
      duration: 8.5,
      delay: 5.2,
      startX: 1150,
      startY: 450,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-100">
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

        {[...Array(8)].map((_, index) => (
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

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  staggerChildren: 0.2,
                },
              },
            }}
            className="text-[#0D2E62]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/20 border border-[#00D5DE]/30 mb-6"
            >
              <span className="text-[#0099CF] font-medium">
                ✦ Software Development Agency
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            >
              We Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                Digital Excellence
              </span>{" "}
              That Drives Growth
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              Transform your ideas into powerful software solutions. We deliver
              cutting-edge applications that elevate your business to the next
              level.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00D5DE]/25"
              >
                <span className="relative z-10">Get Started</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0099CF] to-[#00D5DE]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 w-full h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/window.png"
                  alt="Window Background"
                  fill
                  className="object-contain opacity-30"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-[85%] z-10">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/laptop-poses.png"
                  alt="Laptop with code"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-24"
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
