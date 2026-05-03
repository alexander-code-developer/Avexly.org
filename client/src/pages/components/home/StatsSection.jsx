import React, { useState } from 'react';
import { LuRocket, LuAward, LuSparkles } from "react-icons/lu";
import statsData from "../../../data/stats.json";
import data from "../../../data/avexly.json";

const ICON_MAP = {
  LuRocket: <LuRocket />,
  LuAward: <LuAward />,
  LuSparkles: <LuSparkles />
};

const COLOR_MAP = {
  blue: {
    bg: 'from-blue-500/20 to-transparent',
    text: 'text-blue-400',
    border: 'group-hover:border-blue-500/50',
    shadow: 'shadow-blue-500/20'
  },
  emerald: {
    bg: 'from-emerald-500/20 to-transparent',
    text: 'text-emerald-400',
    border: 'group-hover:border-emerald-500/50',
    shadow: 'shadow-emerald-500/20'
  },
  purple: {
    bg: 'from-purple-500/20 to-transparent',
    text: 'text-purple-400',
    border: 'group-hover:border-purple-500/50',
    shadow: 'shadow-purple-500/20'
  }
};

const StatsSection = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="relative lg:pt-20 lg:pb-10 py-12 bg-[#020617] overflow-hidden">
      {/* Background Grid Refinado */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-md bg-slate-900/10">
          {statsData.stats.map((stat, idx) => {
            const colors = COLOR_MAP[stat.colorID];
            const isActive = activeIdx === idx;

            return (
              <div 
                key={stat.id} 
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                className={`relative p-12 group transition-all duration-700 cursor-pointer border-slate-800
                  ${idx !== statsData.stats.length - 1 ? 'md:border-r' : ''} 
                  border-b md:border-b-0 
                  ${isActive ? 'bg-slate-800/40' : 'hover:bg-slate-800/20'}`}
              >
                {/* Glow de fondo dinámico */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-slate-950 border transition-all duration-500 transform ${isActive ? `border-white/20 scale-110 ${colors.text} shadow-2xl` : 'border-slate-800 text-slate-500'}`}>
                      {React.cloneElement(ICON_MAP[stat.icon], { size: 24 })}
                    </div>
                    <span className="text-[9px] font-mono text-slate-600 tracking-[0.3em] uppercase">Data_Point.0{idx + 1}</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="relative overflow-hidden group">
                        <span className={`text-6xl md:text-7xl font-black tracking-tighter transition-all duration-700 block ${isActive ? 'text-white translate-x-2' : 'text-slate-400'}`}>
                        {stat.value}
                        </span>
                    </div>
                    
                    <span className={`text-sm font-bold mt-4 uppercase tracking-widest transition-colors duration-500 ${isActive ? 'text-slate-100' : 'text-slate-500'}`}>
                      {stat.label}
                    </span>

                    <div className="flex items-center gap-3 mt-6">
                      <div className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-slate-700'}`}></div>
                      <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                        {stat.detail}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decoración de esquina (Angulo Técnico) */}
                <div className={`absolute top-0 right-0 p-4 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-10'}`}>
                  <div className={`w-6 h-6 border-t-2 border-r-2 ${isActive ? 'border-white/30' : 'border-slate-700'}`}></div>
                </div>

                {/* Indicador inferior de activación */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
              </div>
            );
          })}
        </div>
        
        {/* Footer de Sección */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 px-6">
            <div className="flex gap-3">
                {[0, 1, 2].map((i) => (
                    <div key={i} className={`w-12 h-1 rounded-full transition-all duration-500 ${activeIdx === i ? 'bg-blue-500 w-16' : 'bg-slate-800'}`}></div>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-slate-800 hidden sm:block"></div>
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Terminal_Live: <span className="text-white">{data.brand.version}</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;