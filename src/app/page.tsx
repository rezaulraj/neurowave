import AboutUs from "@/components/AboutUs";
import Blogs from "@/components/Blogs";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import HeroPage from "@/components/HeroPage";
import NeedHelp from "@/components/NeedHelp";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <HeroPage />
      <Services />
      <CaseStudy />
      <AboutUs />
      <Projects />
      <Testimonial />
      <Blogs />
      <Contact />
      <NeedHelp />
    </div>
  );
}
