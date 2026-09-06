import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

const title = "Software Development Services";
const description =
  "Explore NeuroWave Tech's UI/UX design, web & app development, online marketing, business strategy, and technology consulting services — built to accelerate your growth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title,
    description,
    url: "/services",
  },
  twitter: {
    title,
    description,
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
