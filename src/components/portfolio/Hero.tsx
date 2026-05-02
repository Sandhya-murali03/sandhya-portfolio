import { ArrowRight, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(210_100%_50%_/_0.25),transparent_50%)]" />

      {/* floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/15 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-primary-glow mb-8">
          <span className="h-2 w-2 rounded-full bg-primary-glow animate-pulse-glow" />
          Available for opportunities
        </span>

        {/* EDIT: Your name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]">
          Hi, I'm <span className="gradient-text">Sandhya M</span>
        </h1>

        {/* EDIT: Tagline */}
        <p className="text-xl md:text-2xl font-medium text-foreground/90 mb-4">
          Aspiring Software Developer
        </p>

        {/* EDIT: Short intro */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          I am passionate about developing practical and user-friendly web applications that solve real-world problems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass glow-border font-semibold hover:bg-primary/10 transition-all hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground text-xs font-mono animate-float">
        scroll ↓
      </div>
    </section>
  );
};

export default Hero;
