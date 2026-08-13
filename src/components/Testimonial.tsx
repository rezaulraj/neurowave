"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, Creative Agency",
      content:
        "Working with this team has been absolutely transformative for our business. Their attention to detail and innovative solutions have exceeded all our expectations.",
      rating: 5,
      image: "/avatar-1.png",
      color: "from-[#0D2E62] to-[#0099CF]",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, TechStart",
      content:
        "The level of professionalism and expertise this team brings is unmatched. They took our vision and turned it into reality, creating something far beyond what we imagined.",
      rating: 5,
      image: "/avatar-2.png",
      color: "from-[#0099CF] to-[#0D2E62]",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "I've worked with many agencies, but none have impressed me as much as this team. Their creativity and dedication to our success made all the difference.",
      rating: 5,
      image: "/avatar-3.png",
      color: "from-[#0D2E62] to-[#0099CF]",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      content:
        "The results speak for themselves. Our user engagement increased by 200% after their redesign. They don't just build products; they create experiences.",
      rating: 5,
      image: "/avatar-4.png",
      color: "from-[#0099CF] to-[#0D2E62]",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Brand Strategist",
      content:
        "Exceptional work ethic and creative vision. They understood our brand identity perfectly and delivered beyond our expectations every single time.",
      rating: 5,
      image: "/avatar-1.png",
      color: "from-[#0D2E62] to-[#0099CF]",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Tech Lead",
      content:
        "Their technical expertise is outstanding. They solved complex problems with elegant solutions and were a pleasure to collaborate with throughout.",
      rating: 5,
      image: "/avatar-2.png",
      color: "from-[#0099CF] to-[#0D2E62]",
    },
  ];

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], position: i });
    }
    return items;
  };

  const nextTestimonials = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonials = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonials();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0A1A2F] py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#00D5DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#0099CF]/5 rounded-full blur-3xl" />

        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="testimonial-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="1"
                  fill="#00D5DE"
                  fillOpacity="0.3"
                />
                <circle
                  cx="10"
                  cy="10"
                  r="1"
                  fill="#0099CF"
                  fillOpacity="0.3"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="1"
                  fill="#00D5DE"
                  fillOpacity="0.3"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#testimonial-pattern)"
            />
          </svg>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-10">
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={i}
              x1={100 + i * 200}
              y1="0"
              x2={200 + i * 200}
              y2="100%"
              stroke="#00D5DE"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#00D5DE] font-medium mb-4 border border-[#00D5DE]/20"
          >
            Testimonials
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            From Getting Started
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working
            with us
          </p>
        </motion.div>

        <div className="flex justify-end gap-3 mb-8">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 213, 222, 0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonials}
            className="w-12 h-12 rounded-full border border-[#00D5DE]/30 text-[#00D5DE] hover:text-white flex items-center justify-center transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 213, 222, 0.2)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonials}
            className="w-12 h-12 rounded-full border border-[#00D5DE]/30 text-[#00D5DE] hover:text-white flex items-center justify-center transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" custom={direction}>
            {getVisibleTestimonials().map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${idx}`}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#00D5DE]/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#00D5DE]/10">
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 text-[#00D5DE]" />
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + idx * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-[#00D5DE] text-[#00D5DE]" />
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 line-clamp-4">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#00D5DE]/30 group-hover:ring-[#00D5DE] transition-all duration-300">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${testimonial.color}`}
                      />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <span className="text-white text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#00D5DE] transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx >= currentIndex && idx < currentIndex + 3
                  ? "w-8 bg-[#00D5DE]"
                  : "w-1.5 bg-gray-600 hover:bg-[#00D5DE]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
