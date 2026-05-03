import { useState } from 'react';
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaWhatsapp, FaShareAlt, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import avexly from "../data/avexly.json";

const socialLinks = [
  { href: avexly.socials.github, icon: FaGithub, color: "text-white", glow: "shadow-white/20", label: "GitHub" },
  { href: avexly.socials.linkedin, icon: FaLinkedin, color: "text-blue-400", glow: "shadow-blue-500/20", label: "LinkedIn" },
  { href: `mailto:${avexly.contact.email}`, icon: SiGmail, color: "text-red-500", glow: "shadow-red-500/20", label: "Email" },
  { href: avexly.socials.whatsapp, icon: FaWhatsapp, color: "text-emerald-500", glow: "shadow-emerald-500/20", label: "WhatsApp" },
  { href: avexly.socials.youtube, icon: FaYoutube, color: "text-red-500", glow: "shadow-red-500/20", label: "Youtube" },
];

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className="fixed top-12 left-6 z-[20] flex flex-col items-center gap-4">
      
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative z-20 p-3 rounded-2xl border transition-all duration-500 mt-16
          ${isOpen 
            ? 'bg-blue-600 border-blue-400 rotate-180 shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
            : 'bg-slate-900/80 border-slate-800 backdrop-blur-xl hover:border-blue-500/50'}
        `}
      >
        {isOpen ? (
          <IoClose className="text-2xl text-white" />
        ) : (
          <FaShareAlt className="text-2xl text-blue-400" />
        )}
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
        )}
      </button>
      <div className={`
        flex flex-col gap-3 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-50 pointer-events-none'}
      `}>
        {socialLinks.map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center"
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            <div className={`
              p-3 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl
              transition-all duration-300 hover:-translate-y-1 hover:border-slate-600
              shadow-xl ${social.glow} hover:shadow-2xl
            `}>
              <social.icon className={`text-xl transition-colors ${social.color}`} />
            </div>

            <span className="
              absolute left-16 opacity-0 -translate-x-4 pointer-events-none
              group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 px-3 py-1 rounded-md
              bg-slate-900 border border-slate-800 text-[10px]
              font-mono text-blue-400 uppercase tracking-[0.2em] whitespace-nowrap
            ">
              {social.label}
            </span>
          </a>
        ))}
      </div>
      <div className={`
        w-px bg-gradient-to-b from-blue-500 to-transparent transition-all duration-700
        ${isOpen ? 'h-20 opacity-30' : 'h-0 opacity-0'}
      `}></div>
    </div>
  );
};

export default SocialSidebar;