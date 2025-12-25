const timelineData = [
  {
    title: "Secured 82% in Informatics Practices — Class XI, JKBOSE",
    date: "May 2025",
    description:
      "Achieved strong academic results with exposure to Python basics, SQL, and analytical thinking.",
  },
  {
    title: "Freelance Web Developer",
    date: "June 2024 – Present",
    description:
      "Designing and developing modern, responsive websites for small businesses and individuals.",
  },
];

export default function Timeline() {
  return (
    <section className="py-36 px-6 md:px-20">
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-400 mb-24 text-center">
        Courses & Accomplishments
      </h2>

      <div className="relative">
        
        <div className="absolute left-1/2 top-0 h-full w-[2px]
                        bg-gradient-to-b from-purple-500 to-cyan-400
                        hidden md:block" />

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center
              ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
            
              <div
                className="absolute md:left-1/2 -translate-x-1/2
                           w-4 h-4 rounded-full
                           bg-cyan-400 shadow-md"
              />

              
              <div
                className={`w-full md:w-[45%]
                            p-7 md:p-8
                            rounded-2xl
                            bg-white/5 hover:bg-white/10
                            transition
                            ${
                              index % 2 === 0
                                ? "md:mr-auto md:text-right"
                                : "md:ml-auto"
                            }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <span className="block mt-1 text-sm text-cyan-400">
                  {item.date}
                </span>

                <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
