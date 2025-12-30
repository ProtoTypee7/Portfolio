import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiRadixui,
  SiVercel,
  SiRender,
  SiMongodb,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";
import { TbSql, TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { MdEmail } from "react-icons/md";

const skills = [
  {
    title: "Languages",
    items: [
      { name: "C#", icon: TbBrandCSharp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
      { name: "VS Code", icon: BiLogoVisualStudio },
      { name: "Visual Studio", icon: DiVisualstudio },
    ],
  },
  {
    title: "Deployment & Services",
    items: [
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "EmailJS", icon: MdEmail },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Server", icon: TbSql },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-36 px-6 md:px-20">
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-400 mb-20">
        Technologies & Tools
      </h2>

      <div className="space-y-20">
        {skills.map((group, i) => (
          <div key={i}>
            
            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-8">
              {group.title}
            </h3>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {group.items.map((skill, j) => (
                <div
                  key={j}
                  className="flex flex-col items-center justify-center gap-3
                             p-7 rounded-2xl
                             bg-white/5 hover:bg-white/10
                             transition hover:scale-[1.04]"
                >
                  <skill.icon size={38} />

                  <span className="text-sm md:text-[15px] text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
