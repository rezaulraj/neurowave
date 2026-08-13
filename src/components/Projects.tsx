"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function Projects() {
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

  const shapes = [
    {
      type: "circle",
      size: 600,
      color: "#00D5DE",
      opacity: 0.03,
      position: "-top-20 -left-20",
      rotate: 0,
    },
    {
      type: "hexagon",
      size: 500,
      color: "#0099CF",
      opacity: 0.03,
      position: "-bottom-20 -right-20",
      rotate: 30,
    },
    {
      type: "triangle",
      size: 400,
      color: "#0D2E62",
      opacity: 0.03,
      position: "top-40 -right-10",
      rotate: 45,
    },
    {
      type: "blob",
      size: 450,
      color: "#00D5DE",
      opacity: 0.03,
      position: "bottom-40 -left-10",
      rotate: 15,
    },
    {
      type: "square",
      size: 350,
      color: "#0099CF",
      opacity: 0.03,
      position: "top-60 left-20",
      rotate: 20,
    },
    {
      type: "circle",
      size: 300,
      color: "#0D2E62",
      opacity: 0.03,
      position: "bottom-60 right-20",
      rotate: 0,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gray-100 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {shapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.position}`}
            initial={{ scale: 0.8, rotate: shape.rotate }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -20, 0],
            }}
            transition={{
              duration: 40 + index * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg
              width={shape.size}
              height={shape.size}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-6">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest work and see how we&apos;ve helped businesses
            transform their digital presence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          animate="visible"
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
                      <span
                        className={`px-3 py-1 text-xs font-medium bg-white text-[#0D2E62] rounded-full shadow-lg`}
                      >
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
