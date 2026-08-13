"use client";

import { motion } from "framer-motion";
import { Check, Mail, Phone, User } from "lucide-react";

export default function AboutUs() {
  const achievements = [
    { number: "100+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "5+", label: "Team Members" },
  ];

  const positivePoints = [
    "Innovative solutions tailored to your needs",
    "Dedicated support 24/7",
    "Cutting-edge technology stack",
    "Agile development methodology",
  ];

  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#00D5DE]/20 to-[#0099CF]/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0099CF]/20 to-[#00D5DE]/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-64 h-64 rounded-full bg-[#00D5DE]/10 blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-[#0099CF]/10 blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 text-[#0099CF] font-medium border border-[#00D5DE]/20">
                About Us
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#0D2E62]">We do </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                design, code
              </span>
              <br />
              <span className="text-[#0D2E62]">& develop.</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              We are a passionate team of designers and developers committed to
              creating exceptional digital experiences that drive growth and
              inspire users.
            </p>

            <div className="space-y-4">
              {positivePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00D5DE] to-[#0099CF] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D5DE] to-[#0099CF] bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#00D5DE]/20 to-[#0099CF]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-[#0099CF]/20 to-[#00D5DE]/20 rounded-full blur-2xl" />

            <div className="relative bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D2E62] mb-2">
                Get a free Keystroke quote now
              </h2>
              <p className="text-gray-500 mb-8">
                Fill in the form below and we&apos;ll get back to you within 24
                hours
              </p>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-[#0099CF]" />
                    Your Name
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
                    Email Address
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
                    <Phone className="w-4 h-4 text-[#0099CF]" />
                    Phone Number
                  </label>
                  <div className="relative group">
                    <input
                      type="tel"
                      placeholder="+123456789"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 transition-all duration-200 text-gray-700"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00D5DE] to-[#0099CF] opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0099CF] to-[#00D5DE]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
