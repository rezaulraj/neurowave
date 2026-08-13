"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
  Variants,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export default function CaseStudy() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Website & Development",
      description:
        "Complete overhaul of a major e-commerce platform resulting in 150% increase in conversions and 40% faster load times.",
      image: "/case-study-1.png",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      stats: [
        { label: "Conversion Rate", value: "+150%" },
        { label: "Page Load", value: "-40%" },
        { label: "Users", value: "10K+" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape:
        "M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Web Application",
      description:
        "Developed a comprehensive healthcare platform connecting patients with providers, featuring telemedicine and secure record management.",
      image: "/case-study-2.png",
      tags: ["React", "Python", "Django", "PostgreSQL"],
      stats: [
        { label: "Patients Served", value: "5K+" },
        { label: "Response Time", value: "<2s" },
        { label: "Data Points", value: "10K+" },
      ],
      color: "from-[#0099CF] to-[#00D5DE]",
      bgShape: "M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12",
    },
    {
      id: 3,
      title: "Brand Identity & Digital Marketing",
      category: "Branding & Marketing",
      description:
        "Comprehensive brand transformation including visual identity, responsive website, and integrated marketing campaign.",
      image: "/case-study-3.png",
      tags: ["UI/UX", "Branding", "SEO", "Analytics"],
      stats: [
        { label: "Brand Awareness", value: "+200%" },
        { label: "Traffic", value: "+180%" },
        { label: "Engagement", value: "5x" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape: "M8 9l3-3-3-3M16 7l-3 3 3 3",
    },
    {
      id: 4,
      title: "EdTech Learning Platform",
      category: "Education Technology",
      description:
        "Built an interactive learning platform with real-time collaboration tools, used by educational institutions worldwide.",
      image: "/case-study-1.png",
      tags: ["Next.js", "WebRTC", "Socket.io", "MongoDB"],
      stats: [
        { label: "Active Students", value: "5K+" },
        { label: "Courses", value: "50+" },
        { label: "Countries", value: "25+" },
      ],
      color: "from-[#00D5DE] to-[#0099CF]",
      bgShape:
        "M50,5 Q70,5 85,20 Q100,35 95,55 Q90,75 70,85 Q50,95 30,85 Q10,75 5,55 Q0,35 15,20 Q30,5 50,5",
    },
  ];

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-10, 0, 10]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const bubbleVariants: Variants = {
    initial: (custom: { x: number; y: number }) => ({
      x: custom.x,
      y: custom.y,
    }),
    animate: (custom: {
      x: number;
      y: number;
      duration: number;
      delay: number;
    }) => ({
      x: [custom.x, custom.x + 150, custom.x - 80, custom.x + 60, custom.x],
      y: [custom.y, custom.y - 120, custom.y + 100, custom.y - 60, custom.y],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        delay: custom.delay,
        ease: "easeInOut",
      },
    }),
  };

  const bubbles = [
    {
      size: "w-64 h-64",
      color: "bg-[#00D5DE]/10",
      duration: 25,
      delay: 0,
      x: 100,
      y: 50,
    },
    {
      size: "w-56 h-56",
      color: "bg-[#0099CF]/10",
      duration: 22,
      delay: 2,
      x: 800,
      y: 200,
    },
    {
      size: "w-48 h-48",
      color: "bg-[#0D2E62]/10",
      duration: 28,
      delay: 4,
      x: 1200,
      y: 400,
    },
    {
      size: "w-40 h-40",
      color: "bg-[#00D5DE]/15",
      duration: 18,
      delay: 1,
      x: 300,
      y: 600,
    },
    {
      size: "w-36 h-36",
      color: "bg-[#0099CF]/15",
      duration: 20,
      delay: 3,
      x: 600,
      y: 150,
    },
    {
      size: "w-32 h-32",
      color: "bg-[#0D2E62]/15",
      duration: 16,
      delay: 5,
      x: 1000,
      y: 500,
    },
    {
      size: "w-24 h-24",
      color: "bg-[#00D5DE]/20",
      duration: 14,
      delay: 0.5,
      x: 200,
      y: 300,
    },
    {
      size: "w-20 h-20",
      color: "bg-[#0099CF]/20",
      duration: 12,
      delay: 1.5,
      x: 700,
      y: 450,
    },
    {
      size: "w-16 h-16",
      color: "bg-[#0D2E62]/20",
      duration: 15,
      delay: 2,
      x: 900,
      y: 250,
    },
    {
      size: "w-14 h-14",
      color: "bg-[#00D5DE]/25",
      duration: 10,
      delay: 3.5,
      x: 400,
      y: 550,
    },
    {
      size: "w-12 h-12",
      color: "bg-[#0099CF]/25",
      duration: 11,
      delay: 4.5,
      x: 1100,
      y: 350,
    },
  ];

  const shapes = [
    { type: "circle", color: "#00D5DE", opacity: 0.1, size: 200, rotate: 0 },
    { type: "square", color: "#0099CF", opacity: 0.1, size: 150, rotate: 45 },
    { type: "triangle", color: "#0D2E62", opacity: 0.1, size: 180, rotate: 90 },
    { type: "hexagon", color: "#00D5DE", opacity: 0.1, size: 160, rotate: 30 },
    { type: "blob", color: "#0099CF", opacity: 0.1, size: 220, rotate: 15 },
  ];

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 100;
    if (info.offset.x < -threshold) {
      nextCase();
    } else if (info.offset.x > threshold) {
      prevCase();
    }
    animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
  };

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  return (
    <section className="relative min-h-screen bg-gray-100 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} backdrop-blur-sm`}
            style={{
              left: bubble.x,
              top: bubble.y,
              filter: "blur(8px)",
            }}
            variants={bubbleVariants}
            initial="initial"
            animate="animate"
            custom={{
              x: bubble.x,
              y: bubble.y,
              duration: bubble.duration,
              delay: bubble.delay,
            }}
          />
        ))}

        {shapes.map((shape, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: shape.rotate,
            }}
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [0, -40, 30, -20, 0],
              rotate: [shape.rotate, shape.rotate + 180, shape.rotate + 360],
            }}
            transition={{
              duration: 30 + index * 5,
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
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-6">
            Our Success{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
              Stories
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses transform their digital
            presence and achieve remarkable results
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative" ref={constraintsRef}>
            <button
              onClick={prevCase}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#0D2E62] hover:text-[#00D5DE] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextCase}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#0D2E62] hover:text-[#00D5DE] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            <motion.div
              ref={cardRef}
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ x, rotate, opacity }}
              whileDrag={{ cursor: "grabbing", scale: 1.02 }}
              className="cursor-grab active:cursor-grabbing"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <span
                        className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${caseStudies[currentIndex].color} text-white text-sm font-medium`}
                      >
                        {caseStudies[currentIndex].category}
                      </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2E62] mb-4">
                      {caseStudies[currentIndex].title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-8">
                      {caseStudies[currentIndex].description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {caseStudies[currentIndex].stats.map((stat, idx) => (
                        <div key={idx}>
                          <div
                            className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${caseStudies[currentIndex].color} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {caseStudies[currentIndex].tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${caseStudies[currentIndex].color} text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>

                    <div className="hidden lg:flex items-center gap-2 mt-8 text-sm text-gray-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 5v14m0 0l-4-4m4 4l4-4"
                        />
                      </svg>
                      <span>Drag to explore more case studies</span>
                    </div>
                  </div>

                  <div className="hidden lg:block relative bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="relative w-full h-full min-h-[500px]">
                      <Image
                        src={caseStudies[currentIndex].image}
                        alt={caseStudies[currentIndex].title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 0px, 50vw"
                      />

                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${caseStudies[currentIndex].color} mix-blend-overlay opacity-20`}
                      />

                      <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-20">
                        <svg
                          viewBox="0 0 100 100"
                          className="w-full h-full text-[#00D5DE] fill-current"
                        >
                          <path d={caseStudies[currentIndex].bgShape} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-3 mt-8">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? `w-8 bg-gradient-to-r ${caseStudies[currentIndex].color}`
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
