import { Code2, Sparkles, Rocket } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "15+" },
  { icon: Sparkles, label: "Technologies", value: "12+" },
  { icon: Rocket, label: "Years Coding", value: "3+" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="font-mono text-sm text-primary-glow mb-3"></p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turning ideas  <span className="gradient-text">into practical solutions</span>
          </h2>
          {/* EDIT: About text */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            I am a passionate and motivated software developer who enjoys building user-friendly and efficient web applications. I like turning ideas into practical solutions using technologies like Java, JavaScript, PHP, HTML, CSS, SQL, and React.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I have hands-on experience through internships in UI/UX Design, Frontend Development, and Java Development, where I worked on real-time tasks and improved my problem-solving skills. I am particularly interested in creating visually appealing and functional interfaces by combining frontend development with UI/UX design.I am always eager to learn new technologies, explore innovative ideas, and continuously improve my skills to build better digital solutions.
          </p>
        </div>

        <div className="grid gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="glass glow-border rounded-2xl p-6 flex items-center gap-5 hover:shadow-glow transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
