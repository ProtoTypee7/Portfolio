import {
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        
        <div className="flex items-center gap-5">
          <FooterIcon href="https://instagram.com/_aabid_najar_" icon={<FaInstagram />} />
          <FooterIcon href="https://wa.me/9103560135" icon={<FaWhatsapp />} />
          <FooterIcon href="https://github.com/ProtoTypee7" icon={<FaGithub />} />
          <FooterIcon href="https://linkedin.com/in/aabid-najar-852b9234a" icon={<FaLinkedin />} />
          <FooterIcon href="mailto:aabidbilalnajar@gmail.com.com" icon={<MdEmail />} />
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
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
      className="text-gray-400 hover:text-cyan-400
                 transition text-lg"
    >
      {icon}
    </a>
  );
}
