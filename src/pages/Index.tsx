import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Profiles from "@/components/portfolio/Profiles";
import Resume from "@/components/portfolio/Resume";
import Contact from "@/components/portfolio/Contact";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const Index = () => {
  useScrollReveal();

  useEffect(() => {
    document.title = "Sandhya's portfolio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Personal portfolio of Your Name — Aspiring Software Developer. Projects, skills, certifications, and contact.");
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Profiles />
      <Resume />
      <Contact />
    </main>
  );
};

export default Index;
