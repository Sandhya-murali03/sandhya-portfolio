import { useState } from "react";
import { Award, X, ExternalLink, FileText } from "lucide-react";
import awsCert from "../../assets/aws.jpg";
import javaCert from "../../assets/codsft_page-0001.jpg";
import frontendCert from "../../assets/frnt.jpeg";

const certs = [
  {
    title: "AWS",
    issuer: "AWS Cloud Practitioner",
    image: awsCert,
    fileUrl: awsCert,
    type: "image",
  },
  {
    title: "Java Development",
    issuer: "CodSoft",
    image: javaCert,
    fileUrl: javaCert,
    type: "image",
  },
  {
    title: "Frontend Development",
    issuer: "CodeTech IT Solutions",
    image: frontendCert,
    fileUrl: frontendCert,
    type: "image",
  },
  {
    title: "Joy of Computing using Python",
    issuer: "Nptel",
    image: null,
    fileUrl: "/assets/python.pdf",
    type: "pdf",
  },
  {
    title: "UI/UX Design",
    issuer: "Cognifyz Technologies",
    image: null,
    fileUrl: "/assets/uiux.pdf",
    type: "pdf",
  },
  {
    title: "Cyber Security",
    issuer: "Cisco",
    image: null,
    fileUrl: "/assets/cyber.pdf",
    type: "pdf",
  },
  {
    title: "Gen AI Basics",
    issuer: "Microsoft",
    image: null,
    fileUrl: "/assets/genai.pdf",
    type: "pdf",
  },
  {
    title: "Copilot",
    issuer: "Microsoft",
    image: null,
    fileUrl: "/assets/copilot.pdf",
    type: "pdf",
  },
];

const Certifications = () => {
  const [active, setActive] = useState<null | (typeof certs)[number]>(null);

  return (
    <section id="certifications" className="section-padding">
      <div className="text-center mb-14">
        <p className="font-mono text-sm text-primary-glow mb-3"></p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Certifications & <span className="gradient-text">Courses</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certs.map((c) => (
          <button
            key={c.title}
            onClick={() => setActive(c)}
            className="group text-left glass glow-border rounded-2xl overflow-hidden hover:shadow-glow transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative flex items-center justify-center bg-secondary/20">
              {c.type === "image" && c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary-glow transition-colors duration-300 z-10">
                  <FileText className="h-12 w-12 mb-2 opacity-80" />
                  <span className="text-xs font-medium uppercase tracking-wider">PDF Document</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-0" />
              <Award className="absolute top-3 right-3 h-5 w-5 text-primary-glow drop-shadow-[0_0_10px_hsl(var(--primary-glow))] z-10" />
            </div>
            <div className="p-5 flex-1 bg-background/50 backdrop-blur-sm z-10">
              <h3 className="font-semibold mb-1 group-hover:text-primary-glow transition">
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] bg-background/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative glass glow-border rounded-2xl max-w-4xl w-full overflow-hidden animate-scale-in shadow-glow-strong flex flex-col"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-primary/30 transition shadow-lg"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="w-full bg-black/50 relative">
              {active.type === "image" && active.image ? (
                <img src={active.image} alt={active.title} className="w-full h-[60vh] md:h-[70vh] object-contain" />
              ) : (
                <iframe src={active.fileUrl} className="w-full h-[60vh] md:h-[70vh] bg-white" title={active.title} />
              )}
            </div>

            <div className="p-6 flex items-center justify-between bg-background border-t border-border/50">
              <div>
                <h3 className="text-xl font-bold gradient-text">{active.title}</h3>
                <p className="text-muted-foreground">{active.issuer}</p>
              </div>
              <a
                href={active.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow transition"
              >
                Open Original <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
