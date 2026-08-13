"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-[#1877F2]" },
    { icon: Twitter, href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: Instagram, href: "#", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, href: "#", color: "hover:text-[#0A66C2]" },
    { icon: Github, href: "#", color: "hover:text-[#333]" },
  ];

  const services = [
    { name: "Logo & Branding", href: "#" },
    { name: "Website Development", href: "#" },
    { name: "Mobile App Development", href: "#" },
    { name: "Search Engine Optimization", href: "#" },
    { name: "Pay-Per-Click", href: "#" },
    { name: "Social Media Marketing", href: "#" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Support", href: "#" },
  ];

  const legal = [
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
  ];

  return (
    <footer className="relative bg-white text-gray-600 overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00D5DE]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D5DE]/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-4 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-[#0D2E62]"
            >
              Get in touch!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-500 leading-relaxed"
            >
              Fusce varius, dolor tempor interdum tristique, dui urna bib endum
              magna, ut ullamcorper purus
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300 hover:border-[#00D5DE]/30 hover:bg-gray-50`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium text-gray-600">
                Subscribe to our newsletter
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 text-gray-700 placeholder-gray-400 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Subscribe
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-[#0D2E62] mb-6"
            >
              Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#00D5DE] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transition-opacity text-[#00D5DE]" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-[#0D2E62] mb-6"
            >
              Resources
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {resources.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#00D5DE] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transition-opacity text-[#00D5DE]" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-[#0D2E62] mb-6"
            >
              Legal
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {legal.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#00D5DE] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transition-opacity text-[#00D5DE]" />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="relative pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-500 text-center md:text-left"
            >
              © 2026. All rights reserved by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF] font-semibold">
                JihanSoft
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-6"
            >
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-[#00D5DE] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-[#00D5DE] transition-colors duration-300"
              >
                Terms of Use
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="absolute right-8 top-5 w-10 h-10 rounded-full bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300"
        >
          <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
        </motion.button>
      </div>
    </footer>
  );
}
