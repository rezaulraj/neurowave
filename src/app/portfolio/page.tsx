import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

const title = "Portfolio";
const description =
  "Browse NeuroWave Tech's portfolio of branding, web development, design, and marketing projects delivered for startups and growing businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title,
    description,
    url: "/portfolio",
  },
  twitter: {
    title,
    description,
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
