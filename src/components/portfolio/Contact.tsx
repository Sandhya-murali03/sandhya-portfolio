import { useState } from "react";
import { Mail, Github, Linkedin, Trophy, Send } from "lucide-react";
import { toast } from "sonner";

// EDIT: Your contact details
const CONTACT = {
  email: "sandhyamurali0303@gmail.com",
  linkedin: "https://linkedin.com/in/sandhya-murali-krishnan-03mar06",
  github: "https://github.com/Sandhya-murali03",
  hackerrank: "https://www.hackerrank.com/profile/sandhyamurali031",
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    // EDIT: Wire this to your email service (Formspree, EmailJS, backend, etc.)
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const links = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: CONTACT.linkedin },
    { icon: Github, label: "GitHub", value: "Follow my work", href: CONTACT.github },
    { icon: Trophy, label: "HackerRank", value: "View profile", href: CONTACT.hackerrank },
  ];

  return (
    <section id="contact" className="section-padding pb-32">
      <div className="text-center mb-14">
        <p className="font-mono text-sm text-primary-glow mb-3">// get in touch</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Have a project in mind, an opportunity, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-7">
        <div className="lg:col-span-2 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center gap-4 glass glow-border rounded-2xl p-5 hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
                <l.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="font-medium truncate group-hover:text-primary-glow transition">
                  {l.value}
                </div>
              </div>
            </a>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass glow-border rounded-2xl p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="John Doe"
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong transition-all hover:-translate-y-0.5"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-input/60 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
    />
  </div>
);

export default Contact;
