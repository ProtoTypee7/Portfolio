import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform featuring authentication, cart, checkout, and admin management.",
    tech: ["ASP.NET Core", "C#", "SQL", "Bootstrap"],
    github: "https://github.com/ProtoTypee7/Stitch",
    live: "",
  },
  {
    title: "Movie App",
    description:
      "A modern movie browsing application powered by the TMDB API with Redux-based state management.",
    tech: ["ASP.NET Core","React", "Redux", "TypeScript", "Tailwind", "C#"],
    github: "https://github.com/ProtoTypee7",
    live: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS, focused on clean design and performance.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/ProtoTypee7/portfolio",
    live: "https://portfolio-sand-xi-89.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-36 px-6 md:px-20">
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-400 mb-20 text-center">
        Projects
      </h2>

    
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl
                       bg-white/5 hover:bg-white/10
                       transition hover:-translate-y-1.5"
          >
           
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            
            <div className="flex flex-wrap gap-2 mb-7">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-xs md:text-[13px]
                             px-3 py-1.5 rounded-full
                             bg-cyan-400/10 text-cyan-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2
                             text-gray-300 hover:text-white transition"
                >
                  <FaGithub className="text-base" />
                  Code
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2
                             text-gray-300 hover:text-white transition"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
