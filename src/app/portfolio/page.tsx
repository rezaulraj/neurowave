"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Creative Agency",
      category: "Full Branding, Website, App",
      description:
        "Complete digital transformation for a leading creative agency including brand identity, responsive website, and mobile application.",
      image: "/project-1.png",
      tags: ["Branding", "Web Development", "Mobile App"],
      color: "from-[#00D5DE] to-[#0099CF]",
      type: "branding",
    },
    {
      id: 2,
      title: "Digital Marketing",
      category: "Logo, Website & Mobile App",
      description:
        "Comprehensive digital marketing platform with custom logo design, marketing website, and campaign management mobile app.",
      image: "/project-2.png",
      tags: ["Logo Design", "Website", "Mobile App"],
      color: "from-[#0099CF] to-[#00D5DE]",
      type: "marketing",
    },
    {
      id: 3,
      title: "Digital Agency",
      category: "Website, UI/UX",
      description:
        "Modern website redesign with focus on user experience and conversion optimization for a digital agency.",
      image: "/project-3.png",
      tags: ["UI/UX Design", "Web Development"],
      color: "from-[#00D5DE] to-[#0099CF]",
      type: "design",
    },
    {
      id: 4,
      title: "Plan Management",
      category: "Branding, Website, IOS App",
      description:
        "End-to-end solution including brand identity, marketing website, and iOS application for plan management.",
      image: "/project-4.png",
      tags: ["Branding", "Website", "iOS App"],
      color: "from-[#0099CF] to-[#00D5DE]",
      type: "development",
    },
    {
      id: 5,
      title: "Social Engagement",
      category: "Design, Development",
      description:
        "Social media engagement platform with custom design and full-stack development for better user interaction.",
      image: "/project-5.png",
      tags: ["UI Design", "Full Stack"],
      color: "from-[#00D5DE] to-[#0099CF]",
      type: "design",
    },
    {
      id: 6,
      title: "Web Application",
      category: "Logo, Webapp, App",
      description:
        "Complete web application with custom logo design, responsive webapp, and companion mobile application.",
      image: "/project-6.png",
      tags: ["Logo", "Web App", "Mobile App"],
      color: "from-[#0099CF] to-[#00D5DE]",
      type: "development",
    },
    {
      id: 7,
      title: "Retail Experience Hub",
      category: "E-Commerce, Website",
      description:
        "A conversion-focused storefront with rich product storytelling and a lightning-fast checkout flow.",
      image: "/project-1.png",
      tags: ["E-Commerce", "Web Development"],
      color: "from-[#00D5DE] to-[#0099CF]",
      type: "development",
    },
    {
      id: 8,
      title: "Wellness Brand Refresh",
      category: "Branding, Identity",
      description:
        "A full brand refresh — logo, palette, and packaging — for a wellness company entering new markets.",
      image: "/project-2.png",
      tags: ["Branding", "Identity"],
      color: "from-[#0099CF] to-[#00D5DE]",
      type: "branding",
    },
    {
      id: 9,
      title: "Growth Campaign Suite",
      category: "Marketing, Analytics",
      description:
        "An integrated acquisition campaign that combined paid, organic, and lifecycle marketing into one dashboard.",
      image: "/project-3.png",
      tags: ["Marketing", "Analytics"],
      color: "from-[#00D5DE] to-[#0099CF]",
      type: "marketing",
    },
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Branding", value: "branding" },
    { name: "Design", value: "design" },
    { name: "Development", value: "development" },
    { name: "Marketing", value: "marketing" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

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
        badge="✦ Our Portfolio"
        title="Work We're"
        highlight="Proud Of"
        description="A collection of products, brands, and platforms we've helped bring to life — each one built to perform, not just look good."
        crumb="Portfolio"
      />

      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0099CF]/5 rounded-full blur-3xl" />
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === f.value
                    ? "bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white shadow-lg shadow-[#00D5DE]/25"
                    : "bg-white text-gray-600 hover:text-[#0099CF] shadow-md hover:shadow-lg"
                }`}
              >
                {f.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />

                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-white text-[#0D2E62] rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-sm">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white text-[#0D2E62] hover:text-[#00D5DE] flex items-center justify-center shadow-lg"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white text-[#0D2E62] hover:text-[#00D5DE] flex items-center justify-center shadow-lg"
                        >
                          <Github className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 rounded-full bg-white text-[#0D2E62] hover:text-[#00D5DE] flex items-center justify-center shadow-lg"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0D2E62] mb-2 group-hover:text-[#00D5DE] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
              Got an idea worth{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                building
              </span>
              ?
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              Let&apos;s add your project to this list. Share your vision and
              we&apos;ll help you bring it to life.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00D5DE]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
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
