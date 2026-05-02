import { Github, Trophy, ExternalLink } from "lucide-react";

const Profiles = () => {
  return (
    <section id="profiles" className="section-padding">
      <div className="text-center mb-14">
        <p className="font-mono text-sm text-primary-glow mb-3">// coding profiles</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Where I <span className="gradient-text">Build & Compete</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* GitHub — EDIT links and stats */}
        <a
          href="https://github.com/Sandhya-murali03"
          target="_blank"
          rel="noreferrer"
          className="group glass glow-border rounded-2xl p-7 hover:shadow-glow-strong transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">GitHub</h3>
                <p className="text-sm text-muted-foreground">Sandhya-murali03</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow transition" />
          </div>
          
        </a>

        {/* HackerRank */}
        <a
          href="https://www.hackerrank.com/profile/sandhyamurali031"
          target="_blank"
          rel="noreferrer"
          className="group glass glow-border rounded-2xl p-7 hover:shadow-glow-strong transition-all hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Trophy className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HackerRank</h3>
                <p className="text-sm text-muted-foreground">@sandhyamurali031</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow transition" />
          </div>
         
        </a>
      </div>
    </section>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center p-3 rounded-xl bg-secondary/40 border border-primary/10">
    <div className="text-2xl font-bold gradient-text">{value}</div>
    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
  </div>
);

export default Profiles;
