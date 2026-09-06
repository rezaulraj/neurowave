import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

const title = "Case Studies";
const description =
  "See how NeuroWave Tech has helped e-commerce, healthcare, fintech, and SaaS businesses achieve measurable growth through custom software.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title,
    description,
    url: "/case-studies",
  },
  twitter: {
    title,
    description,
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
