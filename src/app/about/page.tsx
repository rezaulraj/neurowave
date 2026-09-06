import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const title = "About Us";
const description =
  "Meet NeuroWave Tech — the designers, engineers, and strategists building AI-powered software that helps startups and growing businesses win.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
  },
  twitter: {
    title,
    description,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
