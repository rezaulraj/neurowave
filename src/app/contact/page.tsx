import type { Metadata } from "next";
import ContactClient from "./ContactClient";

const title = "Contact Us";
const description =
  "Get in touch with NeuroWave Tech for a free consultation. We reply to every inquiry within 24 hours.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title,
    description,
    url: "/contact",
  },
  twitter: {
    title,
    description,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
