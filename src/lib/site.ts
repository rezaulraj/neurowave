export const siteConfig = {
  name: "NeuroWave Tech",
  legalName: "Neurowave Technologies",
  shortName: "NeuroWave",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://neurowavetech.online",
  description:
    "NeuroWave Tech is an AI-powered web design and development agency that designs, builds, and scales high-performing websites, web apps, and mobile apps for startups and growing businesses.",
  tagline: "AI-Powered Web Design & Development Agency",
  email: "neurowave.codex@gmail.com",
  phone: "+8801877796011",
  address: {
    locality: "Dhaka",
    country: "Bangladesh",
  },
  ogImage: "/logo.png",
  keywords: [
    "AI-powered web design",
    "software development agency",
    "web development company",
    "mobile app development",
    "UI/UX design agency",
    "custom software development",
    "Next.js development agency",
    "digital marketing agency",
    "technology consulting",
    "NeuroWave Tech",
  ],
} as const;
