import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col items-center text-center
                 min-h-[95vh] px-6 pt-50
"
    >
     
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-[30%] left-1/2 -translate-x-1/2
                     w-[620px] h-[620px]
                     bg-purple-500/20 rounded-full blur-[160px]"
        />
      </div>

      
      <p className="text-base md:text-4xl text-gray-400 mb-6">
        Hello, I’m
      </p>

      
      <h1
        className="text-7xl md:text-8xl lg:text-9xl pb-2
                   font-extrabold tracking-tight
                   bg-gradient-to-r from-cyan-400 to-purple-500
                   bg-clip-text text-transparent"
      >
        Aabid Najar
      </h1>

    
      <p
        className="mt-8 max-w-2xl
                   text-lg md:text-xl
                   text-gray-400 leading-relaxed"
      >
        I’m a Computer Science student passionate about building
        modern, scalable, and visually clean web experiences.
      </p>

      
      <div className="flex items-center gap-7 mt-10">
        <SocialIcon href="https://instagram.com/_aabid_najar_" icon={<FaInstagram />} />
        <SocialIcon href="https://wa.me/9103560135" icon={<FaWhatsapp />} />
        <SocialIcon href="https://github.com/ProtoTypee7" icon={<FaGithub />} />
        <SocialIcon href="https://linkedin.com/in/aabid-najar-852b9234a/" icon={<FaLinkedin />} />
        <SocialIcon href="mailto:aabidbilalnajar@gmail.com" icon={<MdEmail />} />
      </div>

      
      <button
        className="mt-12 px-8 py-3.5
                   bg-white text-black
                   rounded-full text-base font-medium
                   hover:scale-105 transition"
      >
        View Resume
      </button>
    </section>
  );
}


function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="p-3.5 rounded-full
                 bg-white/5 text-cyan-400
                 hover:bg-cyan-400 hover:text-black
                 hover:scale-110 hover:shadow-lg
                 transition duration-300"
    >
      <span className="text-xl">{icon}</span>
    </a>
  );
}
