"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesClient() {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "We craft intuitive, delightful interfaces backed by real user research so every screen feels effortless and every click drives conversion.",
      icon: "/icon-1.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      id: 2,
      title: "Web & App Development",
      description:
        "Robust, scalable products built on modern stacks — from marketing sites to complex platforms that grow with your business.",
      icon: "/icon-2.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      features: ["Web Apps", "Mobile Apps", "APIs", "Cloud Solutions"],
    },
    {
      id: 3,
      title: "Online Marketing",
      description:
        "Data-driven campaigns that put your brand in front of the right people and turn visibility into measurable revenue.",
      icon: "/icon-3.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      id: 4,
      title: "Business Strategy",
      description:
        "We pair technology with sharp strategic thinking to uncover opportunities and turn them into sustainable growth.",
      icon: "/icon-4.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      features: [
        "Market Analysis",
        "Growth Strategy",
        "Consulting",
        "Planning",
      ],
    },
    {
      id: 5,
      title: "Technology Consulting",
      description:
        "Expert guidance to modernize your infrastructure, tighten security, and future-proof every layer of your stack.",
      icon: "/icon-5.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      features: [
        "IT Strategy",
        "Digital Transformation",
        "Security",
        "Optimization",
      ],
    },
    {
      id: 6,
      title: "Content Strategy",
      description:
        "Compelling storytelling that builds authority, earns trust, and keeps your audience coming back for more.",
      icon: "/icon-6.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      features: [
        "Content Creation",
        "Copywriting",
        "Brand Voice",
        "Storytelling",
      ],
    },
  ];

  const process = [
    {
      icon: Lightbulb,
      title: "Discover",
      description:
        "We dive deep into your goals, users, and market to build a strategy grounded in real insight.",
    },
    {
      icon: PenTool,
      title: "Design",
      description:
        "Wireframes and prototypes evolve into polished, on-brand experiences you'll be proud to ship.",
    },
    {
      icon: Code2,
      title: "Develop",
      description:
        "Clean, scalable code built with modern tools and tested at every step for a rock-solid launch.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description:
        "We launch, monitor, and keep optimizing — your growth doesn't stop when the project ships.",
    },
  ];

  const stack = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Figma",
    "MongoDB",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <PageHero
        badge="✦ Our Services"
        title="Solutions That Power"
        highlight="Your Growth"
        description="From first sketch to final deploy, we deliver end-to-end digital services engineered to help your business win."
        crumb="Services"
      />

      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="services-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#0D2E62"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0D2E62] mb-3 group-hover:text-[#00D5DE] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-[#00D5DE]/10 hover:text-[#0099CF] transition-colors duration-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2E62] mb-6">
              A Process Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                Results
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A clear, collaborative roadmap that keeps every project on time,
              on budget, and ahead of expectations.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00D5DE] via-[#0099CF] to-[#00D5DE] opacity-20" />
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00D5DE] to-[#0099CF] shadow-lg mb-6">
                    <Icon className="w-9 h-9 text-white" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0D2E62] text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2E62] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00D5DE]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0099CF]/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
              Our Toolkit
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2E62]">
              Technology We Trust
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {stack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white text-[#0D2E62] font-medium rounded-xl shadow-md hover:shadow-lg hover:text-[#00D5DE] transition-all duration-300"
              >
                {tech}
              </span>
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
            <div className="flex items-center justify-center gap-2 mb-6">
              {[
                "Transparent pricing",
                "Dedicated team",
                "On-time delivery",
              ].map((point, idx) => (
                <span
                  key={idx}
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm border border-white/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00D5DE]" />
                  {point}
                </span>
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                great
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              Tell us about your project and let&apos;s turn your idea into a
              product your users will love.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00D5DE]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Project
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
