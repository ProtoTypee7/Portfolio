const education = [
  {
    degree: "Diploma in Software Engineering, Computer Science",
    institution: "Interface Learning School",
    duration: "May 2024 – May 2027",
    status: "Currently Pursuing",
    description:
      "Participated in structured coding workshops, peer-led programming sessions, and web development study groups. Gained hands-on experience through collaborative projects while building a strong foundation in modern programming concepts.",
    skills: "Front-End Development, Generative AI, +10 skills",
    image: "./ils-logo.png",
  },
  {
    degree: "Higher Secondary Education (11th & 12th Grade)",
    institution: "Sri Pratap Higher Secondary School",
    duration: "2024 – 2025",
    status: "Recently Completed",
    description:
      "Successfully completed higher secondary education with a strong focus on computer science. Currently preparing to pursue further studies in computer science.",
    skills: "Computer Science, Problem Solving",
    image: "./higher-secondary.jpg",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-36 px-6 md:px-20">
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-400 mb-20 text-center">
        Education
      </h2>

      <div className="flex flex-col items-center gap-16">
        {education.map((item, i) => {
          const content = (
            <div
              className="w-full max-w-5xl
                         p-8 md:p-10
                         rounded-2xl
                         bg-white/5 hover:bg-white/10
                         transition duration-300"
            >
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={item.image}
                  alt={item.institution}
                  className="w-12 h-12 rounded-md bg-white p-2 object-contain"
                />

                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.duration}
                  </p>
                </div>
              </div>

             
              <div className="space-y-3">
                <p className="text-cyan-400 font-medium text-base md:text-lg">
                  {item.degree}
                </p>

                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Status: {item.status}
                </p>

                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-sm md:text-base text-purple-400 pt-1">
                  Skills:{" "}
                  <span className="text-gray-400">
                    {item.skills}
                  </span>
                </p>
              </div>
            </div>
          );

          return item.institution === "Interface Learning School" ? (
            <a
              key={i}
              href="https://ilssrinagar.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
