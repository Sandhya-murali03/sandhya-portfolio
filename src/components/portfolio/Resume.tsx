import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="section-padding">
      <div className="glass glow-border rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />

        <div className="relative">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow mb-6">
            <FileText className="h-7 w-7 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Want to know more? <span className="gradient-text">Grab my résumé.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            A concise overview of my experience, education, projects, and skills — ready in PDF.
          </p>
          {/* EDIT: Replace /resume.pdf with your actual file in the public folder */}
          <a
            href="/assets/Sandhya_murali_res.pdf"
            download="Sandhya_Murali_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all hover:-translate-y-0.5"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
