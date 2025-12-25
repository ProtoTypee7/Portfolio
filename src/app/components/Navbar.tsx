export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 w-full z-50">
      <h1 className="text-xl font-bold">Aabid Najar</h1>

      <div className="flex space-x-6 text-base">
        {["about", "skills",  "projects", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="relative text-white hover:text-cyan-400 transition-colors duration-300
                       after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
