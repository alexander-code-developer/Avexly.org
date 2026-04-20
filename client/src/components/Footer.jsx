import { FaGithub, FaLinkedin,FaWhatsapp,FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import avexly from "../data/avexly.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                  {avexly.brand.name}<span className="text-blue-500">.org</span>
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em]">
              Engineering the next era
            </p>
          </div>
¿
          <div className="order-3 md:order-2">
            <p className="text-slate-500 text-xs font-mono">
              © {currentYear} <span className="text-slate-300">{avexly.brand.legalName}</span>. 
              <span className="hidden sm:inline"> // All rights reserved.</span>
            </p>
          </div>
          
          {/* Lado Derecho: Social Icons con efecto Glow */}
          <div className="flex space-x-4 order-2 md:order-3">
            {[
              { icon: <FaGithub />, href: avexly.socials.github, label: "Github" },
              { icon: <FaLinkedin />, href: avexly.socials.linkedin, label: "Linkedin" },
              { icon: <SiGmail />, href: avexly.socials.email, label: "Email" },
              { icon: <FaYoutube />, href: avexly.socials.youtube, label: "Youtube" },
              { icon: <FaWhatsapp />, href: avexly.socials.youtube, label: "Whatsapp" }

            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <div className="relative z-10 text-lg">
                  {social.icon}
                </div>
                {/* Reflejo inferior al hacer hover */}
                <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
              </a>
            ))}
          </div>

        </div>

        {/* Decoración inferior de estatus técnico */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          <div className="whitespace-nowrap px-4 text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em]">
            Deployment: <span className="text-emerald-500/50">Railway_Stable</span>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;