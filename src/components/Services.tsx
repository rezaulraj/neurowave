"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Create stunning user interfaces with intuitive experiences that captivate your audience and drive engagement.",
      icon: "/icon-1.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape: "M20 20L4 4M4 4V16M4 4H16",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      id: 2,
      title: "Development",
      description:
        "Build robust, scalable applications using cutting-edge technologies and best practices in software development.",
      icon: "/icon-2.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      bgShape: "M8 9l3-3-3-3M16 7l-3 3 3 3",
      features: ["Web Apps", "Mobile Apps", "APIs", "Cloud Solutions"],
    },
    {
      id: 3,
      title: "Online Marketing",
      description:
        "Boost your online presence with data-driven marketing strategies that deliver measurable results and ROI.",
      icon: "/icon-3.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape: "M3 17L9 11L13 15L21 7",
      features: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    },
    {
      id: 4,
      title: "Business Strategy",
      description:
        "Transform your business with innovative strategies that identify opportunities and drive sustainable growth.",
      icon: "/icon-4.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      bgShape: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12",
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
        "Leverage expert technology advice to optimize your infrastructure and implement future-proof solutions.",
      icon: "/icon-5.png",
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape:
        "M9 3v2M15 3v2M9 19v2M15 19v2M5 9H3M5 15H3M21 9h-2M21 15h-2M7 7h10v10H7z",
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
        "Develop compelling content that tells your story, engages your audience, and builds brand authority.",
      icon: "/icon-6.png",
      color: "from-[#0099CF] to-[#00D5DE]",
      bgShape:
        "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z M14 2v6h6M16 13H8M16 17H8M10 9H8",
      features: [
        "Content Creation",
        "Copywriting",
        "Brand Voice",
        "Storytelling",
      ],
    },
  ];

  const backgroundShapes = [
    {
      type: "circle",
      positions: [
        "-top-10 -right-10",
        "-bottom-10 -left-10",
        "top-20 -right-5",
      ],
      sizes: ["w-40 h-40", "w-32 h-32", "w-24 h-24"],
    },
    {
      type: "square",
      positions: ["-top-5 -right-5", "-bottom-5 -left-5", "top-10 -right-10"],
      sizes: ["w-32 h-32", "w-24 h-24", "w-20 h-20"],
    },
    {
      type: "triangle",
      positions: ["-top-8 -right-8", "-bottom-8 -left-8", "top-5 -right-5"],
      sizes: ["w-36 h-36", "w-28 h-28", "w-20 h-20"],
    },
    {
      type: "hexagon",
      positions: [
        "-top-12 -right-12",
        "-bottom-12 -left-12",
        "top-15 -right-8",
      ],
      sizes: ["w-44 h-44", "w-36 h-36", "w-28 h-28"],
    },
    {
      type: "blob",
      positions: ["-top-6 -right-6", "-bottom-6 -left-6", "top-12 -right-12"],
      sizes: ["w-48 h-48", "w-40 h-40", "w-32 h-32"],
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
    <section className="relative min-h-screen bg-gray-100 py-20 -mt-10 z-10 overflow-hidden">
      <div className="absolute inset-0  overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-40 right-40 w-64 h-64 bg-[#00D5DE]/5 rounded-full blur-3xl animate-pulse delay-700" />

        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0D2E62"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-6">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
              Offer
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs, combining
            innovation with expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const shapeGroup =
              backgroundShapes[index % backgroundShapes.length];

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative">
                <div className="relative bg-white rounded-2xl p-8 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className={`absolute ${shapeGroup.positions[0]} ${shapeGroup.sizes[0]}`}>
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full text-[#00D5DE] fill-current">
                        {shapeGroup.type === "circle" && (
                          <circle cx="50" cy="50" r="40" />
                        )}
                        {shapeGroup.type === "square" && (
                          <rect x="10" y="10" width="80" height="80" />
                        )}
                        {shapeGroup.type === "triangle" && (
                          <polygon points="50 10, 90 90, 10 90" />
                        )}
                        {shapeGroup.type === "hexagon" && (
                          <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
                        )}
                        {shapeGroup.type === "blob" && (
                          <path d="M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5" />
                        )}
                      </svg>
                    </div>

                    <div
                      className={`absolute ${shapeGroup.positions[1]} ${shapeGroup.sizes[1]}`}>
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full text-[#0099CF] fill-current rotate-45">
                        {shapeGroup.type === "circle" && (
                          <circle cx="50" cy="50" r="40" />
                        )}
                        {shapeGroup.type === "square" && (
                          <rect x="10" y="10" width="80" height="80" />
                        )}
                        {shapeGroup.type === "triangle" && (
                          <polygon points="50 10, 90 90, 10 90" />
                        )}
                        {shapeGroup.type === "hexagon" && (
                          <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
                        )}
                        {shapeGroup.type === "blob" && (
                          <path d="M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5" />
                        )}
                      </svg>
                    </div>

                    <div
                      className={`absolute ${shapeGroup.positions[2]} ${shapeGroup.sizes[2]}`}>
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full text-[#0D2E62] fill-current -rotate-12">
                        {shapeGroup.type === "circle" && (
                          <circle cx="50" cy="50" r="40" />
                        )}
                        {shapeGroup.type === "square" && (
                          <rect x="10" y="10" width="80" height="80" />
                        )}
                        {shapeGroup.type === "triangle" && (
                          <polygon points="50 10, 90 90, 10 90" />
                        )}
                        {shapeGroup.type === "hexagon" && (
                          <polygon points="50 5, 90 25, 90 75, 50 95, 10 75, 10 25" />
                        )}
                        {shapeGroup.type === "blob" && (
                          <path d="M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5" />
                        )}
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-[#00D5DE]/10 hover:text-[#0099CF] transition-colors duration-200">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#00D5DE]/0 via-transparent to-[#0099CF]/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00D5DE]/10 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0099CF]/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
