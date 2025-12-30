"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "timeline", label: "Timeline" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const RADIUS = 17;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollIndicator() {
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleScroll = () => {
      const newProgress: Record<string, number> = {};

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = rect.height;

        let rawProgress =
          (window.scrollY - sectionTop) / sectionHeight;

        rawProgress = Math.min(Math.max(rawProgress, 0), 1);

        
        if (rect.top <= 0) rawProgress = 1;

        newProgress[id] = rawProgress;
      });

      setProgress(newProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-8">
      {sections.map(({ id, label }) => {
        const value = progress[id] ?? 0;
        const offset = CIRCUMFERENCE - value * CIRCUMFERENCE;

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="relative w-5 h-5 flex items-center justify-center group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 36 36"
              className="absolute"
            >
              <circle
                cx="18"
                cy="18"
                r={RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1.5"
              />
              <circle
                cx="18"
                cy="18"
                r={RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="1.5"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-[stroke-dashoffset] duration-600 ease-out"

              />
            </svg>

            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />

            <span
              className="absolute top-7 text-[14px] tracking-wide
                         text-white/50
                         opacity-0 translate-y-1
                         group-hover:opacity-100 group-hover:translate-y-0
                         transition-all duration-300"
            >
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
