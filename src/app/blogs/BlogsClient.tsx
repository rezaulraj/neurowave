"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, Mail, Send } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function BlogsClient() {
  const [category, setCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "SEO Statistics You Should Know in 2026",
      excerpt:
        "Organic search has the potential to capture more than 40 percent of your gross revenue when done right.",
      image: "/blog-2.avif",
      author: "Sarah Johnson",
      date: "Mar 12, 2026",
      readTime: "5 min read",
      category: "SEO",
    },
    {
      id: 2,
      title: "Digital Marketing Trends to Watch",
      excerpt:
        "Stay ahead of the curve with the emerging digital marketing trends shaping the industry this year.",
      image: "/blog-3.avif",
      author: "Mike Chen",
      date: "Mar 10, 2026",
      readTime: "6 min read",
      category: "Marketing",
    },
    {
      id: 3,
      title: "UI/UX Design Principles for 2026",
      excerpt:
        "Discover the latest design principles transforming how users interact with digital products.",
      image: "/blog-4.avif",
      author: "Emily Brown",
      date: "Mar 8, 2026",
      readTime: "7 min read",
      category: "Design",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt:
        "Explore the cutting-edge technologies and frameworks shaping the future of web development.",
      image: "/blog-5.avif",
      author: "David Wilson",
      date: "Mar 5, 2026",
      readTime: "9 min read",
      category: "Technology",
    },
    {
      id: 5,
      title: "Content Strategy Best Practices",
      excerpt:
        "Learn how to create compelling content that resonates with your audience and drives engagement.",
      image: "/blog-1.avif",
      author: "Lisa Thompson",
      date: "Mar 3, 2026",
      readTime: "4 min read",
      category: "Content",
    },
    {
      id: 6,
      title: "Social Media Algorithms Explained",
      excerpt:
        "Understanding how social media algorithms work can help you build more effective marketing strategies.",
      image: "/blog-3.avif",
      author: "James Lee",
      date: "Feb 28, 2026",
      readTime: "6 min read",
      category: "Marketing",
    },
    {
      id: 7,
      title: "Scaling Your App Without Losing Speed",
      excerpt:
        "Practical architecture choices that let growing products stay fast as traffic climbs.",
      image: "/blog-5.avif",
      author: "David Wilson",
      date: "Feb 22, 2026",
      readTime: "8 min read",
      category: "Technology",
    },
    {
      id: 8,
      title: "Designing for Trust in Fintech",
      excerpt:
        "Small UI decisions that make financial products feel secure and easy to use.",
      image: "/blog-4.avif",
      author: "Emily Brown",
      date: "Feb 18, 2026",
      readTime: "5 min read",
      category: "Design",
    },
    {
      id: 9,
      title: "Why Every Startup Needs a Content Engine",
      excerpt:
        "How consistent, quality content compounds into long-term organic growth.",
      image: "/blog-1.avif",
      author: "Lisa Thompson",
      date: "Feb 12, 2026",
      readTime: "6 min read",
      category: "Content",
    },
  ];

  const categories = [
    "all",
    "SEO",
    "Marketing",
    "Design",
    "Technology",
    "Content",
  ];

  const filteredPosts =
    category === "all"
      ? posts
      : posts.filter((post) => post.category === category);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <PageHero
        badge="✦ Our Blog"
        title="Ideas Worth"
        highlight="Sharing"
        description="Practical thinking on design, engineering, and growth from the team building products every day."
        crumb="Blogs"
      />

      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl" />
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern
                id="blog-page-dots"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="20" cy="20" r="1" fill="#00D5DE" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-page-dots)" />
          </svg>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition-all duration-300 ${
                  category === cat
                    ? "bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white shadow-lg shadow-[#00D5DE]/25"
                    : "bg-gray-100 text-gray-600 hover:text-[#0099CF] hover:bg-white shadow-sm hover:shadow-md"
                }`}
              >
                {cat === "all" ? "All Posts" : cat}
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
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  layout
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0D2E62] text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0D2E62] mb-2 group-hover:text-[#00D5DE] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-[#00D5DE]" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-[#0099CF]" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-[#00D5DE]" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-[#00D5DE] font-medium text-sm group/link"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.article>
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

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 border border-white/20 mb-6">
              <Mail className="w-7 h-7 text-[#00D5DE]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Never miss an{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                update
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              Get fresh insights on design, engineering, and growth delivered
              straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D5DE] focus:ring-2 focus:ring-[#00D5DE]/20 transition-all duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
