import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaCoffee, FaBookOpen, FaAward, 
  FaHeart, FaRocket, FaCheckCircle, FaTerminal 
} from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiTailwindcss, SiNodedotjs, SiMongodb 
} from "react-icons/si";
import GlassCard from '../components/ui/GlassCard';
import StatItem from '../components/ui/StatItem';
import TechBadge from '../components/ui/TechBadge';
import data from "../data/about.json";

const About = () => {
  const { about } = data;
  
  const statIcons = [FaCode, FaCoffee, FaBookOpen, FaAward];
  
  const technologies = [
    { icon: SiReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: SiTailwindcss, name: 'Tailwind 4', color: 'text-sky-400' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-emerald-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  ];

  return (
    <section className="relative min-h-screen pt-12 lg:py-24 px-4 bg-[#020617] overflow-hidden">
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
       
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/80 mb-4 flex justify-center items-center gap-4">
            <span className="w-8 h-[1px] bg-blue-500/30"></span>
            {about.header.subtitle}
            <span className="w-8 h-[1px] bg-blue-500/30"></span>
          </h2>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter flex flex-wrap justify-center items-center gap-x-3 md:gap-x-5">
            <span>
              {about.header.title_main}
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              {about.header.title_highlight}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         
          <GlassCard className="lg:col-span-7 group p-8 md:p-10 border-white/5 hover:border-blue-500/20 transition-colors duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:rotate-12 transition-transform duration-500">
                <FaTerminal size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white">{about.bio.title}</h3>
            </div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: about.bio.description_1 }} />
              <p className="opacity-80">{about.bio.description_2}</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-800/50">
              {about.bio.stats.map((s, i) => (
                <StatItem 
                  key={i} 
                  icon={statIcons[i]} 
                  value={s.value} 
                  label={s.label} 
                />
              ))}
            </div>
          </GlassCard>

          {/* Tech Stack Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard className="flex-1 border-white/5 shadow-[0_0_40px_rgba(59,130,246,0.03)] p-8">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <FaRocket className="text-emerald-400" /> {about.skills.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <TechBadge key={i} {...tech} />
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-slate-950/40 rounded-3xl border border-slate-800/60 transition-all hover:bg-slate-950/60">
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-5">
                  {about.skills.methodologies_label}
                </h4>
                <ul className="space-y-4">
                  {about.skills.methodologies.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                      <FaCheckCircle className="text-emerald-500/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </div>

          {/* Collaboration Row */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-6">
             {/* Dynamic CTA Card */}
             <div className="md:col-span-8 p-8 md:p-10 bg-gradient-to-br from-blue-600/15 via-slate-900/40 to-emerald-600/10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/30 transition-all duration-700">
                <div className="text-center md:text-left space-y-2">
                    <h4 className="text-2xl md:text-3xl font-black text-white">{about.cta.title}</h4>
                    <p className="text-slate-400 font-medium">{about.cta.subtitle}</p>
                </div>
                
                <Link 
                  to="/contact" 
                  className="relative overflow-hidden px-10 py-5 bg-white text-[#020617] font-black rounded-2xl hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all active:scale-95 whitespace-nowrap group"
                >
                    <span className="relative z-10 flex items-center gap-2">
                      {about.cta.button}
                      <FaRocket className="text-xs group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
             </div>
             
             {/* Community Card */}
             <div className="md:col-span-4 p-8 bg-slate-900/40 border border-slate-800/60 rounded-[2.5rem] flex flex-col justify-center items-center gap-4 text-center group hover:bg-slate-900/60 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <FaHeart size={24} className="animate-pulse" />
                </div>
                <p className="text-xs md:text-sm text-slate-500 font-bold leading-relaxed px-6 uppercase tracking-wider">
                  {about.cta.community}
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;