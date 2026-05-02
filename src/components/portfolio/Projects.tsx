import { Github, ExternalLink } from "lucide-react";

// EDIT: Your projects
const projects = [
  {
    title: "Focus Mode Optimizer",
    description:
      "A productivity-focused task management application designed to help users stay focused and organized. Features include secure authentication, drag-and-drop Kanban boards, real-time updates, and smart task prioritization to enhance workflow efficiency.",
    tech: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/Sandhya-murali03/Focus-Mode-Optimizer.git",
    demo: "https://focusflow-frontend-oe4s.onrender.com/dashboard",
  },
  {
    title: "Campus Event Management System",
    description:
      "A centralized platform for managing college events, enabling organizers to create, update, and track events while allowing students to register and receive notifications. Designed to streamline event coordination and improve campus engagement.",
    tech: ["MongoDB", "React", "Node.js", "Express"],
    github: "https://github.com/Sandhya-murali03/Campus-Event.git",
    demo: "https://www.figma.com/make/6zlfg4wI7sxRlkLSVSvwqo/Campus-Event-Management-System-UI?fullscreen=1&t=FmWJ4Pt9jB41r61N-1",
  },
  {
    title: "Hotel Management System",
    description:
       "A Java-based system developed to manage hotel operations such as room booking, customer records, billing, and check-in/check-out processes. Built to improve efficiency and reduce manual workload in hospitality management.",
    tech: ["Java"],
    github: "https://github.com/Sandhya-murali03/Hotel-management-sys.git",
    demo: "https://onlinegdb.com/INSzkkwT9",
  },
  {
    title: "Volunteer Management System",
    description:
       "A Python-based application designed to manage volunteer registrations, task assignments, and participation tracking. Helps organizations efficiently coordinate volunteers and monitor their contributions.",
    tech: ["Python"],
    github: "https://github.com/Sandhya-murali03/Volunteer-Management-Sys.git",
    demo: "https://onlinegdb.com/i6IF4B3lC",
  },
  {
    title: "Landing Page",
    description:
     "A modern and visually appealing landing page designed using Figma, focusing on user experience, clean layout, and responsive design principles. Created to showcase branding, product highlights, and call-to-action elements effectively.",
    tech: ["UI/UX","Figma"],
    github: "https://github.com/Sandhya-murali03/landing-page.git",
    demo: "https://www.figma.com/proto/2MLSAzUgFQmonGiKtWIfXm/task-3?node-id=4-14&t=gjs5JrutTqDzVFVd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A14",
  },
  {
    title: "Grocery App",
    description:
       "A user-friendly grocery shopping app prototype designed in Figma, featuring intuitive navigation, product browsing, cart functionality, and a seamless checkout experience to enhance user convenience.",
    tech: ["UI/UX", "Figma"],
    github: "https://github.com/Sandhya-murali03/Navigation-bar-design.git",
    demo: "https://www.figma.com/proto/zCmjjzjrzkWS1NgHeuPtn8/task-6?node-id=6-30&t=dEU4zzVzTZQWeeus-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A30",
  },
  {
    title: "Renewable Performance Monitoring System",
    description:
       "A user-friendly grocery shopping app prototype designed in Figma, featuring intuitive navigation, product browsing, cart functionality, and a seamless checkout experience to enhance user convenience.",
    tech: ["Power BI"],
    github: "https://github.com/Sandhya-murali03/Renewable-Performance-Monitoring-System.git",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="text-center mb-14">
        <p className="font-mono text-sm text-primary-glow mb-3">// selected work</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative glass glow-border rounded-2xl p-7 hover:shadow-glow-strong transition-all hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                {p.title}
              </h3>
              <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-secondary/60 hover:bg-primary/20 hover:text-primary-glow transition"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-secondary/60 hover:bg-primary/20 hover:text-primary-glow transition"
                  aria-label="Demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary-glow border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
