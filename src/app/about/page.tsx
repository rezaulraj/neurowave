"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Target,
  Eye,
  Heart,
  Zap,
  Users,
  ShieldCheck,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Image from "next/image";

export default function AboutPage() {
  const achievements = [
    { number: "100+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "5+", label: "Team Members" },
  ];

  const positivePoints = [
    "Innovative solutions tailored to your needs",
    "Dedicated support 24/7",
    "Cutting-edge technology stack",
    "Agile development methodology",
  ];

  const values = [
    {
      icon: Target,
      title: "Purpose Driven",
      description:
        "Every line of code we write is tied back to a real business outcome for our clients.",
    },
    {
      icon: Heart,
      title: "Client First",
      description:
        "Your goals become our goals. We measure success by the growth we help create.",
    },
    {
      icon: Zap,
      title: "Fast & Agile",
      description:
        "Iterative sprints and clear communication keep momentum high from day one.",
    },
    {
      icon: ShieldCheck,
      title: "Built to Last",
      description:
        "We engineer for reliability and scale, not just for launch day.",
    },
  ];

  const team = [
    {
      name: "Rezaul Karim",
      img:"/rezaul.jpg",
      role: "Founder & CEO",
      color: "from-[#0D2E62] to-[#0099CF]",
    },
    {
      name: "Rezaul Karim",
      img:"/rezaul.jpg",
      role: "Lead Product Designer",
      color: "from-[#0099CF] to-[#00D5DE]",
    },
    {
      name: "Tushar",
      img:"/tushar.jpg",
      role: "Head of Engineering",
      color: "from-[#00D5DE] to-[#0099CF]",
    },
    {
      name: "Mizanur Rahman",
      img:"/mizan.jpg",
      role: "Growth & Marketing Lead",
      color: "from-[#0099CF] to-[#0D2E62]",
    },
  ];

  return (
    <div>
      <PageHero
        badge="✦ About Us"
        title="The People Behind"
        highlight="Your Product"
        description="NeuroWave Tech is a team of designers, engineers, and strategists obsessed with building software that actually moves the needle."
        crumb="About"
      />

      <section className="relative bg-white py-20 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#00D5DE]/20 to-[#0099CF]/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#0099CF]/20 to-[#00D5DE]/20 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0D2E62 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D5DE]/10 to-[#0099CF]/10 text-[#0099CF] font-medium border border-[#00D5DE]/20">
                  Our Story
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-[#0D2E62]">We do </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                  design, code
                </span>
                <br />
                <span className="text-[#0D2E62]">& develop.</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                NeuroWave Tech started with a simple belief: great software
                should feel effortless to use and be built on a foundation that
                never breaks. Today we partner with startups and growing
                businesses to design, build, and scale digital products that
                make a real difference.
              </p>

              <div className="space-y-4">
                {positivePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00D5DE] to-[#0099CF] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#00D5DE] to-[#0099CF] bg-clip-text text-transparent">
                      {item.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#00D5DE]/20 to-[#0099CF]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-[#0099CF]/20 to-[#00D5DE]/20 rounded-full blur-2xl" />

              <div className="relative grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                    <Target className="w-8 h-8 text-[#00D5DE] mb-3" />
                    <h3 className="text-lg font-bold text-[#0D2E62] mb-1">
                      Our Mission
                    </h3>
                    <p className="text-sm text-gray-600">
                      Empower businesses with technology that&apos;s simple,
                      powerful, and built to scale.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[#0D2E62] to-[#0A1A2F] rounded-3xl shadow-lg p-6 text-white">
                    <Users className="w-8 h-8 text-[#00D5DE] mb-3" />
                    <h3 className="text-lg font-bold mb-1">Our People</h3>
                    <p className="text-sm text-gray-300">
                      A close-knit team of makers who genuinely love what they
                      build.
                    </p>
                  </div>
                </div>
                <div className="space-y-6 pt-10">
                  <div className="bg-gradient-to-br from-[#00D5DE] to-[#0099CF] rounded-3xl shadow-lg p-6 text-white">
                    <Eye className="w-8 h-8 text-white mb-3" />
                    <h3 className="text-lg font-bold mb-1">Our Vision</h3>
                    <p className="text-sm text-white/90">
                      To be the trusted technology partner behind the next
                      generation of great products.
                    </p>
                  </div>
                  <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                    <ShieldCheck className="w-8 h-8 text-[#0099CF] mb-3" />
                    <h3 className="text-lg font-bold text-[#0D2E62] mb-1">
                      Our Promise
                    </h3>
                    <p className="text-sm text-gray-600">
                      Quality, transparency, and results — every project, every
                      time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00D5DE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0099CF]/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00D5DE]/10 text-[#0099CF] font-medium mb-4">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2E62] mb-6">
              Our Core{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                Values
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that shape how we work, collaborate, and deliver
              for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D5DE] to-[#0099CF] mb-5 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D2E62] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
              Meet The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D2E62] mb-6">
              The Minds Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                NeuroWave
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A small team with big ambitions — and the track record to back it
              up.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                  />
                  <div className="relative w-full h-full flex items-center justify-center">
                   <Image 
                    src={member.img}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full object-cover"
                  />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0D2E62] group-hover:text-[#00D5DE] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
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
              Let&apos;s build something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D5DE] to-[#0099CF]">
                great together
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
              We&apos;d love to learn about your business and show you how we
              can help it grow.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00D5DE] to-[#0099CF] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#00D5DE]/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
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
