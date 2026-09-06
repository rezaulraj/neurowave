"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export default function ContactClient() {
  const highlights = [
    {
      icon: Clock,
      title: "Fast Response",
      description: "We reply to every inquiry within 24 hours, guaranteed.",
    },
    {
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Talk through your idea with us at no cost, no pressure.",
    },
    {
      icon: Sparkles,
      title: "Tailored Plans",
      description: "Every proposal is scoped around your goals and budget.",
    },
  ];

  return (
    <div>
      <PageHero
        badge="✦ Get In Touch"
        title="Let's Start a"
        highlight="Conversation"
        description="Whether you have a fully-scoped project or just an idea, we'd love to hear from you."
        crumb="Contact"
      />

      <section className="relative bg-gray-50 pt-16 pb-4 overflow-hidden">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 mb-4">
                    <Icon className="w-6 h-6 text-[#0099CF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D2E62] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
