"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function Blogs() {
  const images = {
    main: "/blog-1.avif",
    seo: "/blog-2.avif",
    marketing: "/blog-3.avif",
    design: "/blog-4.avif",
    tech: "/blog-5.avif",
  };


  const latestPosts = [
    {
      id: 1,
      title: "SEO Statistics You Should Know in 2024",
      excerpt:
        "Organic search has the potential to capture more than 40 percent of your gross revenue...",
      image: images.seo,
      author: "Sarah Johnson",
      date: "Mar 12, 2024",
      readTime: "5 min read",
      category: "SEO",
    },
    {
      id: 2,
      title: "Digital Marketing Trends to Watch",
      excerpt:
        "Stay ahead of the curve with these emerging digital marketing trends that will shape the industry...",
      image: images.marketing,
      author: "Mike Chen",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Marketing",
    },
    {
      id: 3,
      title: "UI/UX Design Principles for 2024",
      excerpt:
        "Discover the latest design principles that are transforming how users interact with digital products...",
      image: images.design,
      author: "Emily Brown",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Design",
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt:
        "Explore the cutting-edge technologies and frameworks that are shaping the future of web development...",
      image: images.tech,
      author: "David Wilson",
      date: "Mar 5, 2024",
      readTime: "9 min read",
      category: "Technology",
    },
    {
      id: 5,
      title: "Content Strategy Best Practices",
      excerpt:
        "Learn how to create compelling content that resonates with your audience and drives engagement...",
      image: images.design,
      author: "Lisa Thompson",
      date: "Mar 3, 2024",
      readTime: "4 min read",
      category: "Content",
    },
    {
      id: 6,
      title: "Social Media Algorithms Explained",
      excerpt:
        "Understanding how social media algorithms work can help you create more effective marketing strategies...",
      image: images.marketing,
      author: "James Lee",
      date: "Feb 28, 2024",
      readTime: "6 min read",
      category: "Social Media",
    },
  ];

  const bubbles = [
    {
      size: "w-96 h-96",
      color: "bg-[#00D5DE]/5",
      top: "-top-20",
      left: "-left-20",
      delay: 0,
    },
    {
      size: "w-80 h-80",
      color: "bg-[#0099CF]/5",
      bottom: "-bottom-20",
      right: "-right-20",
      delay: 2,
    },
    {
      size: "w-64 h-64",
      color: "bg-[#0D2E62]/5",
      top: "top-40",
      right: "right-10",
      delay: 4,
    },
    {
      size: "w-72 h-72",
      color: "bg-[#00D5DE]/5",
      bottom: "bottom-40",
      left: "left-10",
      delay: 6,
    },
    {
      size: "w-56 h-56",
      color: "bg-[#0099CF]/5",
      top: "top-60",
      left: "left-20",
      delay: 8,
    },
    {
      size: "w-48 h-48",
      color: "bg-[#0D2E62]/5",
      bottom: "bottom-60",
      right: "right-20",
      delay: 10,
    },
  ];

  return (
    <section className="relative min-h-screen bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${bubble.size} ${bubble.color} blur-3xl`}
            style={{
              top: bubble.top,
              left: bubble.left,
              bottom: bubble.bottom,
              right: bubble.right,
            }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern
              id="blog-dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#00D5DE" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blog-dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 text-[#0099CF] font-medium mb-4 border border-[#00D5DE]/20">
            What&apos;s Going On
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D2E62] mb-4">
            Latest Stories
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            News From Abstrak And Around The World Of Web Design And Complete
            Solution of Online Digital Marketing
          </p>
        </motion.div>

        <div>
          <h2 className="text-2xl font-bold text-[#0D2E62] mb-8">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
          </div>
        </div>

      </div>
    </section>
  );
}
