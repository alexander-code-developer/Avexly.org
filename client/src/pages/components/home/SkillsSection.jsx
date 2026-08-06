import React, { useState } from 'react';
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsLightningCharge, BsArrowRightShort } from "react-icons/bs";
import { IoCodeSlash } from "react-icons/io5";

import skillsData from "../../../data/skills.json";
import { 
  SiNextdotjs, SiTypescript, SiMongodb, SiPython, 
  SiPostgresql, SiAndroidstudio, SiLaravel, SiTailwindcss, SiUnity,
  SiDocker, SiFigma, SiGithub
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const ICON_MAP = {
  SiNextdotjs, FaNodeJs, SiTypescript, SiMongodb, SiPython, 
  SiPostgresql, SiAndroidstudio, SiLaravel, SiTailwindcss, 
  SiUnity, SiDocker, SiFigma, SiGithub
};

const SkillsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [galleryIndices, setGalleryIndices] = useState({});

  const handleCardClick = (e, index, skill) => {
    // 1. Si el clic es en el link externo, no hacemos nada para dejar que el link funcione
    if (e.target.closest('a')) return;

    // 2. Cambiar la imagen de la galería (comportamiento original)
    const currentIdx = galleryIndices[index] || 0;
    const nextIdx = (currentIdx + 1) % (skill.gallery?.length || 1);
    setGalleryIndices({ ...galleryIndices, [index]: nextIdx });

    // 3. LOGICA PARA MÓVIL: Forzar la activación de la tarjeta
    // Si la tarjeta ya estaba activa, la cerramos (toggle), si no, la activamos.
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  return (
    <section className="py-24 px-6 relative bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(2,6,23,1))]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase">Tech-Stack Deployment</h2>
            <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
              Core <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-emerald-400">
                Engines.
              </span>
            </h3>
          </div>
          <p className="text-slate-500 font-mono text-xs max-w-xs md:text-right uppercase leading-relaxed">
            // Tap cards to deploy technical specs & scan architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.skills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.iconType] || IoCodeSlash;
            const isActive = activeCard === index;
            const currentImg = skill.gallery[galleryIndices[index] || 0];

            return (
              <div
                key={skill.id}
                // Desktop: Mouse events
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                // Mobile & Desktop: Click event
                onClick={(e) => handleCardClick(e, index, skill)}
                className={`group relative h-[450px] bg-slate-900/10 border rounded-[2.5rem] backdrop-blur-3xl transition-all duration-700 transform-gpu overflow-hidden cursor-pointer
                  ${isActive ? 'border-slate-500 scale-[0.98]' : 'border-slate-800/40'}`}
              >
                {/* GALERÍA DE FONDO */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <img 
                    src={currentImg} 
                    alt="project" 
                    className={`w-full h-full object-cover grayscale opacity-20 transition-transform duration-[2s] ${isActive ? 'scale-100' : 'scale-110'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                </div>

                {/* Brand Glow */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${isActive ? 'opacity-40' : 'opacity-0'}`}
                  style={{ background: `radial-gradient(circle at 50% 0%, ${skill.glowColor}, transparent 70%)` }}
                />

                <div className="p-10 h-full flex flex-col justify-between relative z-20">
                  <div className="flex justify-between items-start">
                    <div 
                      className="text-6xl transition-all duration-700"
                      style={{ color: isActive ? skill.brandColor : '#334155' }}
                    >
                      <IconComponent className={`${isActive ? 'rotate-0' : '-rotate-12'} transition-transform duration-500`} />
                    </div>

                    <div className={`flex flex-col gap-3 transition-all duration-500 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
                      <a 
                        href={skill.url} target="_blank" rel="noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white hover:bg-blue-600 transition-all shadow-xl backdrop-blur-xl"
                      >
                        <HiOutlineExternalLink size={22} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-mono text-emerald-500 font-black uppercase tracking-widest flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${isActive ? 'animate-pulse' : ''}`} />
                        {skill.status}
                      </span>
                      <h4 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                        {skill.name}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 bg-slate-800/50 border rounded-lg text-[10px] font-mono uppercase tracking-tighter transition-all ${isActive ? 'border-blue-500/50 text-blue-400' : 'border-slate-700/50 text-slate-400'}`}>
                        {skill.tech}
                      </span>
                    </div>

                    <div className="overflow-hidden h-4">
                        <p className={`text-[9px] text-blue-400 font-mono uppercase tracking-widest transition-transform duration-500 flex items-center gap-2 ${isActive ? 'translate-y-0' : 'translate-y-4'}`}>
                           <BsLightningCharge /> Tap to scan next project
                        </p>
                    </div>
                  </div>

                  {/* Footer con Level dinámico */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex justify-between items-center mb-2">
                       <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">
                        Level.{skill.level || 'Initialized'}
                       </p>
                       <BsArrowRightShort className={`transition-colors ${isActive ? 'text-blue-500' : 'text-white/20'}`} size={20}/>
                    </div>
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-[1s] ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                        style={{ 
                          width: '100%',
                          backgroundColor: skill.brandColor,
                          boxShadow: `0 0 15px ${skill.brandColor}`
                        }}
                      />
                    </div>
                  </div>
                </div>

                <span className={`absolute -bottom-10 -left-6 text-[180px] font-black transition-all duration-1000 pointer-events-none select-none italic ${isActive ? 'text-white/[0.03]' : 'text-white/[0.015]'}`}>
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;