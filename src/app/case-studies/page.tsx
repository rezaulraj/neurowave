"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Website & Development",
      description:
        "Complete overhaul of a major e-commerce platform resulting in a 150% increase in conversions and 40% faster load times.",
      image: "/case-study-1.png",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      stats: [
        { label: "Conversion Rate", value: "+150%" },
        { label: "Page Load", value: "-40%" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Web Application",
      description:
        "A comprehensive healthcare platform connecting patients with providers, featuring telemedicine and secure record management.",
      image: "/case-study-2.png",
      tags: ["React", "Python", "Django", "PostgreSQL"],
      stats: [
        { label: "Patients Served", value: "5K+" },
        { label: "Response Time", value: "<2s" },
      ],
      color: "from-[#0099CF] to-[#00D5DE]",
    },
    {
      id: 3,
      title: "Brand Identity & Digital Marketing",
      category: "Branding & Marketing",
      description:
        "A comprehensive brand transformation including visual identity, a responsive website, and an integrated marketing campaign.",
      image: "/case-study-3.png",
      tags: ["UI/UX", "Branding", "SEO", "Analytics"],
      stats: [
        { label: "Brand Awareness", value: "+200%" },
        { label: "Traffic", value: "+180%" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      category: "Education Technology",
      description:
        "An interactive learning platform with real-time collaboration tools, now used by educational institutions worldwide.",
      image: "/case-study-1.png",
      tags: ["Next.js", "WebRTC", "Socket.io", "MongoDB"],
      stats: [
        { label: "Active Students", value: "5K+" },
        { label: "Countries", value: "25+" },
      ],
      color: "from-[#0099CF] to-[#00D5DE]",
    },
    {
      id: 5,
      title: "FinTech Mobile Banking App",
      category: "Mobile Application",
      description:
        "A secure, intuitive mobile banking experience that helped a challenger bank onboard thousands of new customers.",
      image: "/case-study-2.png",
      tags: ["React Native", "Node.js", "Security", "Fintech"],
      stats: [
        { label: "New Signups", value: "20K+" },
        { label: "App Rating", value: "4.8★" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
    },
    {
      id: 6,
      title: "Logistics & Fleet Dashboard",
      category: "SaaS Platform",
      description:
        "A real-time fleet tracking dashboard that cut operational overhead and improved delivery accuracy for a logistics leader.",
      image: "/case-study-3.png",
      tags: ["Vue.js", "Go", "Kubernetes", "Analytics"],
      stats: [
        { label: "Efficiency", value: "+65%" },
        { label: "Cost Saved", value: "$1.2M" },
      ],
      color: "from-[#0099CF] to-[#00D5DE]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <PageHero
        badge="✦ Case Studies"
        title="Real Projects,"
        highlight="Real Results"
        description="Every engagement is a partnership. Here's a look at how we've helped ambitious teams turn ideas into measurable wins."
        crumb="Case Studies"
      />

      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${study.color} mix-blend-overlay opacity-30`}
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${study.color} text-white text-sm font-medium shadow-lg`}
                    >
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#0D2E62] mb-3 group-hover:text-[#00D5DE] transition-colors duration-300">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{study.description}</p>

                  <div className="flex items-center gap-8 mb-6">
                    {study.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-[#00D5DE]" />
                        <div>
                          <div
                            className={`text-lg font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      className={`inline-flex items-center gap-1 text-sm font-medium bg-gradient-to-r ${study.color} bg-clip-text text-transparent group/link shrink-0`}
                    >
                      View
                      <ExternalLink className="w-3.5 h-3.5 text-[#0099CF] group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-[#0D2E62] to-[#0A1A2F] py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#00D5DE]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0099CF]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Your success story{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                starts here
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              Let&apos;s discuss your goals and map out the results we can achieve
              together.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00D5DE]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0099CF] to-[#00D5DE]"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
