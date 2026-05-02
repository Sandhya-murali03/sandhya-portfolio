import { useEffect } from "react";

export const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("section");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate-fade-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => {
      if (el.id !== "home") {
        el.style.opacity = "0";
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
};
