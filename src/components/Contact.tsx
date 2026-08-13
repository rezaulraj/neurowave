"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const shapes = [
    {
      type: "circle",
      size: 400,
      color: "#00D5DE",
      opacity: 0.03,
      position: "-top-20 -left-20",
      rotate: 0,
      duration: 20,
    },
    {
      type: "hexagon",
      size: 350,
      color: "#0099CF",
      opacity: 0.03,
      position: "-bottom-20 -right-20",
      rotate: 30,
      duration: 25,
    },
    {
      type: "triangle",
      size: 300,
      color: "#0D2E62",
      opacity: 0.03,
      position: "top-40 right-20",
      rotate: 45,
      duration: 22,
    },
    {
      type: "blob",
      size: 450,
      color: "#00D5DE",
      opacity: 0.03,
      position: "bottom-40 left-20",
      rotate: 15,
      duration: 28,
    },
    {
      type: "square",
      size: 250,
      color: "#0099CF",
      opacity: 0.03,
      position: "top-60 left-40",
      rotate: 20,
      duration: 18,
    },
    {
      type: "circle",
      size: 200,
      color: "#0D2E62",
      opacity: 0.03,
      position: "bottom-60 right-40",
      rotate: 0,
      duration: 15,
    },
    {
      type: "hexagon",
      size: 280,
      color: "#00D5DE",
      opacity: 0.03,
      position: "top-80 right-60",
      rotate: 60,
      duration: 23,
    },
    {
      type: "blob",
      size: 320,
      color: "#0099CF",
      opacity: 0.03,
      position: "bottom-80 left-60",
      rotate: 90,
      duration: 26,
    },
  ];

  const dots = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section className="relative min-h-screen bg-gray-50 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.position}`}
            initial={{ scale: 0.8, rotate: shape.rotate }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -20, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}>
            <svg
              width={shape.size}
              height={shape.size}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              {shape.type === "circle" && (
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill={shape.color}
                  fillOpacity={shape.opacity}
                />
              )}
              {shape.type === "square" && (
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill={shape.color}
                  fillOpacity={shape.opacity}
                />
              )}
              {shape.type === "triangle" && (
                <polygon
                  points="50 10, 90 90, 10 90"
                  fill={shape.color}
                  fillOpacity={shape.opacity}
                />
              )}
              {shape.type === "hexagon" && (
                <polygon
                  points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25"
                  fill={shape.color}
                  fillOpacity={shape.opacity}
                />
              )}
              {shape.type === "blob" && (
                <path
                  d="M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5"
                  fill={shape.color}
                  fillOpacity={shape.opacity}
                />
              )}
            </svg>
          </motion.div>
        ))}

        {dots.map((dot, index) => (
          <motion.div
            key={`dot-${index}`}
            className="absolute rounded-full bg-gradient-to-r from-[#00D5DE] to-[#0099CF]"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 30, 0, -30, 0],
              scale: [1, 1.5, 1, 1.5, 1],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 text-[#0099CF] font-medium mb-4 border border-[#00D5DE]/20">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-4">
            Need a designer?
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
            Let&apos;s work together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#0099CF]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0D2E62] mb-2">
                  Mail
                </h3>
                <Link
                  href="mailto:jihansoft.tech@gmail.com"
                  className="text-gray-600 text-sm break-all">
                  jihansoft.tech@gmail.com
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0099CF]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0D2E62] mb-2">
                  Address
                </h3>
                <p className="text-gray-600 text-sm">Dhaka Bangladesh</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="sm:col-span-2 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#0099CF]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0D2E62] mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">+8801829708756</p>
                <p className="text-gray-600">+8801877796011</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-[#00D5DE]/5 to-[#0099CF]/5 rounded-2xl p-8 border border-[#00D5DE]/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#00D5DE]">100+</div>
                  <div className="text-sm text-gray-500">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0099CF]">50+</div>
                  <div className="text-sm text-gray-500">Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0D2E62]">5+</div>
                  <div className="text-sm text-gray-500">Years</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00D5DE] to-[#0099CF] border-2 border-white shadow-lg"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-[#0D2E62]">1,000+</span>{" "}
                trusted clients
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0D2E62] mb-6">
                Describe your project
              </h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0099CF]" />
                    Name
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 transition-all duration-200 text-gray-700"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00D5DE] to-[#0099CF] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0099CF]" />
                    Email
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 transition-all duration-200 text-gray-700"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00D5DE] to-[#0099CF] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#0099CF]" />
                    How can we help you?
                  </label>
                  <div className="relative group">
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 transition-all duration-200 text-gray-700 resize-none"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00D5DE] to-[#0099CF] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    SEND
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0099CF] to-[#00D5DE]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <p className="text-xs text-center text-gray-400">
                  By sending this, you agree to our{" "}
                  <a href="#" className="text-[#0099CF] hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
