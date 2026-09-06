import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

const title = "Blog";
const description =
  "Practical insights on SEO, digital marketing, UI/UX design, and web development from the NeuroWave Tech team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title,
    description,
    url: "/blogs",
  },
  twitter: {
    title,
    description,
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
