import React from 'react';
import { 
  FaCode, FaCoffee, FaBookOpen, FaAward, 
  FaHeart, FaRocket, FaCheckCircle, FaTerminal 
} from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import GlassCard from '../components/ui/GlassCard';
import StatItem from '../components/ui/StatItem';
import TechBadge from '../components/ui/TechBadge';

const About = () => {
  const stats = [
    { icon: FaCode, value: '50+', label: 'Proyectos' },
    { icon: FaCoffee, value: '1K+', label: 'Cafés' },
    { icon: FaBookOpen, value: '12+', label: 'Cursos' },
    { icon: FaAward, value: '8+', label: 'Certificados' },
  ];

  const technologies = [
    { icon: SiReact, name: 'React', color: 'text-cyan-400' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-white' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: SiTailwindcss, name: 'Tailwind 4', color: 'text-sky-400' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'text-emerald-500' },
    { icon: SiMongodb, name: 'MongoDB', color: 'text-green-500' },
  ];

  return (
    <section className="relative min-h-screen pt-12 lg:py-22 px-4 bg-[#020617] overflow-hidden">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-24 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado Épico */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-4 flex justify-center items-center gap-2">
            <span className="w-8 h-[1px] bg-blue-500"></span>
            Profile
            <span className="w-8 h-[1px] bg-blue-500"></span>
          </h2>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Ingeniería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Software</span>
          </h1>
        </div>

        {/* Layout Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card: Bio Principal (6/12) */}
          <GlassCard className="lg:col-span-7 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                <FaTerminal size={20} />
              </div>
              <h3 className="text-2xl font-bold text-white">Sobre mí</h3>
            </div>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Soy un desarrollador enfocado en el <strong className="text-blue-400 font-semibold">Stack MERN</strong> apasionado por crear arquitectura de software que sea tan limpia como funcional.
              </p>
              <p>
                Mi enfoque va más allá de "picar código"; se trata de resolver problemas complejos mediante soluciones escalables, priorizando siempre la **experiencia de usuario** y el **rendimiento**.
              </p>
            </div>
            
            {/* Quick Stats integradas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-800/50">
              {stats.map((s, i) => <StatItem key={i} {...s} />)}
            </div>
          </GlassCard>

          {/* Card: Tech Stack (5/12) */}
          <GlassCard className="lg:col-span-5 border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <FaRocket className="text-emerald-400" /> Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, i) => <TechBadge key={i} {...tech} />)}
            </div>
            
            <div className="mt-10 p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">Metodologías</h4>
              <ul className="space-y-3">
                {['CI/CD & Automation', 'Clean Code / SOLID', 'Agile Mindset'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <FaCheckCircle className="text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Card: Colaboración (Full Width o Infográfica) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-2 p-8 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-3xl border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-white mb-2">¿Tienes un proyecto en mente?</h4>
                    <p className="text-blue-200/70">Estoy listo para ayudarte a escalar tu próxima gran idea.</p>
                </div>
                <button className="px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-400 hover:text-white transition-all shadow-xl shadow-white/5 active:scale-95 whitespace-nowrap">
                    HABLEMOS
                </button>
             </div>
             
             <div className="p-8 bg-slate-900/80 border border-slate-800 rounded-3xl flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <FaHeart className="animate-pulse" />
                </div>
                <p className="text-sm text-slate-400 font-medium">Comprometido con el código abierto y la comunidad.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;