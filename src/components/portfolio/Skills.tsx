// EDIT: Add or remove skills here. Names only — no percentages, no progress bars.
const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Tailwind CSS","Bootstrap"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Adobe Xd","Power BI"],
  },
   {
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving","Team Work", "Leadership", "Attention to Detail", "Creativity", "Adaptability", "Persistence", "Adobe Xd","Power BI"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="text-center mb-14">
        <p className="font-mono text-sm text-primary-glow mb-3"></p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Skills & <span className="gradient-text">Tech Stack</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="glass glow-border rounded-2xl p-7 hover:shadow-glow transition-all"
          >
            <h3 className="text-lg font-semibold mb-5 text-foreground/90">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-secondary/60 border border-primary/20 text-foreground hover:bg-primary/15 hover:border-primary/60 hover:text-primary-glow hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
