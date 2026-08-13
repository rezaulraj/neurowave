"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NeedHelp() {
  const bubbles = [
    {
      size: "w-96 h-96",
      color: "bg-white/5",
      top: "-top-20",
      left: "-left-20",
      delay: 0,
      duration: 20,
    },
    {
      size: "w-80 h-80",
      color: "bg-white/5",
      bottom: "-bottom-20",
      right: "-right-20",
      delay: 2,
      duration: 22,
    },
    {
      size: "w-72 h-72",
      color: "bg-white/5",
      top: "top-40",
      right: "right-10",
      delay: 4,
      duration: 18,
    },
    {
      size: "w-64 h-64",
      color: "bg-white/5",
      bottom: "bottom-40",
      left: "left-10",
      delay: 6,
      duration: 24,
    },

    {
      size: "w-56 h-56",
      color: "bg-white/10",
      top: "top-60",
      left: "left-20",
      delay: 8,
      duration: 16,
    },
    {
      size: "w-48 h-48",
      color: "bg-white/10",
      bottom: "bottom-60",
      right: "right-20",
      delay: 10,
      duration: 19,
    },
    {
      size: "w-40 h-40",
      color: "bg-white/10",
      top: "top-80",
      right: "right-40",
      delay: 12,
      duration: 21,
    },
    {
      size: "w-36 h-36",
      color: "bg-white/10",
      bottom: "bottom-80",
      left: "left-40",
      delay: 14,
      duration: 17,
    },

    {
      size: "w-28 h-28",
      color: "bg-white/15",
      top: "top-20",
      right: "right-60",
      delay: 16,
      duration: 14,
    },
    {
      size: "w-24 h-24",
      color: "bg-white/15",
      bottom: "bottom-20",
      left: "left-60",
      delay: 18,
      duration: 15,
    },
    {
      size: "w-20 h-20",
      color: "bg-white/15",
      top: "top-32",
      left: "left-32",
      delay: 20,
      duration: 13,
    },
    {
      size: "w-16 h-16",
      color: "bg-white/15",
      bottom: "bottom-32",
      right: "right-32",
      delay: 22,
      duration: 12,
    },

    {
      size: "w-12 h-12",
      color: "bg-white/20",
      top: "top-48",
      right: "right-48",
      delay: 24,
      duration: 10,
    },
    {
      size: "w-10 h-10",
      color: "bg-white/20",
      bottom: "bottom-48",
      left: "left-48",
      delay: 26,
      duration: 11,
    },
    {
      size: "w-8 h-8",
      color: "bg-white/20",
      top: "top-64",
      left: "left-64",
      delay: 28,
      duration: 9,
    },
    {
      size: "w-6 h-6",
      color: "bg-white/20",
      bottom: "bottom-64",
      right: "right-64",
      delay: 30,
      duration: 8,
    },
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <section className="relative bg-gradient-to-br from-[#0D2E62] to-[#0A1A2F] pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} backdrop-blur-sm`}
            style={{
              top: bubble.top,
              left: bubble.left,
              bottom: bubble.bottom,
              right: bubble.right,
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.3, 1, 1.2, 1],
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -20, 0],
              opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {particles.map((particle, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute rounded-full bg-white/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -50, 0, 50, 0],
              x: [0, 30, 0, -30, 0],
              scale: [1, 1.5, 1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00D5DE 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 font-medium mb-4 border border-white/20 backdrop-blur-sm"
          >
            Let&apos;s Work Together
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
            Need a successful <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
              project?
            </span>
          </h1>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Estimate Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="relative h-[350px] md:h-[400px] lg:h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[300px] md:w-[400px] lg:w-[500px]"
          >
            <div className="relative aspect-square">
              <Image
                src="/chat-group.png"
                alt="Chat Group"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              <motion.div
                className="absolute inset-0"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#00D5DE]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#0099CF]/20 rounded-full blur-xl" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[200px] md:w-[280px] lg:w-[350px]"
          >
            <div className="relative aspect-[4/4]">
              <Image
                src="/laptop-poses-left.png"
                alt="Laptop Poses Left"
                fill
                className="object-contain drop-shadow-2xl"
              />

              <motion.div
                className="absolute inset-0"
                animate={{
                  x: [0, -10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-[200px] md:w-[280px] lg:w-[350px]"
          >
            <div className="relative aspect-[4/4]">
              <Image
                src="/bill-pay-right.png"
                alt="Bill Pay Right"
                fill
                className="object-contain drop-shadow-2xl"
              />

              <motion.div
                className="absolute inset-0"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
