import { motion } from 'framer-motion';
import { LuPalette, LuSun, LuBox, LuCopy, LuCheck, LuFingerprint, LuInfo } from "react-icons/lu";
import { useState } from 'react';
import tokenData from '../theme/DesignTokensData.json'; // Importación limpia del JSON

const DesignTokens = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 2000);
  };

  // Helper para convertir HEX a RGB dinámicamente
  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  return (
    <div className="space-y-32 py-10 animate-in fade-in duration-1000">
      
      {/* --- ELITE HEADER --- */}
      <header className="relative space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-blue-600" />
          <span className="text-[11px] font-black text-blue-500 tracking-[0.6em] uppercase">Architecture</span>
        </div>
        <h1 className="text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          Design <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Tokens</span>
        </h1>
        <p className="text-slate-500 max-w-2xl text-lg font-light">
          Centralized visual variables that power the Avexly ecosystem. 
          Engineered for consistency and rapid deployment.
        </p>
      </header>

      {/* --- PALETTE GRID --- */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-2">
            <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
              <LuPalette className="text-blue-600" size={20} /> 01 / Color Palette
            </h2>
            <p className="text-[10px] text-slate-600 uppercase font-mono tracking-widest px-8">Semantic color mapping</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tokenData.colors.map((color, index) => (
            <motion.div 
              key={color.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-[#0a0c12]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 hover:border-blue-500/40 transition-all duration-500"
            >
              <div 
                className="w-full h-40 rounded-2xl mb-8 relative overflow-hidden shadow-2xl transition-transform duration-700 group-hover:rotate-1"
                style={{ backgroundColor: color.hex }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <LuFingerprint className="absolute -bottom-2 -right-2 text-black/10 transition-all duration-700 group-hover:scale-150" size={80} />
              </div>

              <div className="space-y-6 px-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h3 className="text-white text-xl font-bold tracking-tight">{color.name}</h3>
                    <p className="text-[10px] text-blue-500 font-black uppercase tracking-widest">{color.use}</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(color.hex)}
                    className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-xl"
                  >
                    {copied === color.hex ? <LuCheck size={16} /> : <LuCopy size={16} />}
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">Hex Code</span>
                    <p className="text-xs font-mono text-slate-300 tracking-tighter">{color.hex}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-slate-600 font-bold uppercase tracking-tighter">RGB Values</span>
                    <p className="text-xs font-mono text-slate-300 tracking-tighter">{hexToRgb(color.hex)}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- GLOW EFFECTS SECTION --- */}
      <section className="space-y-12 pb-20">
        <h2 className="text-xs font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
          <LuSun className="text-blue-600" size={20} /> 02 / Elevation Matrix
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {tokenData.glows.map((glow) => (
            <div key={glow.id} className="group space-y-8">
               <div className={`aspect-square rounded-[3rem] bg-[#0d0e14] border border-white/10 flex flex-col items-center justify-center transition-all duration-1000 group-hover:border-blue-500/50 ${glow.twClass}`}>
                  <LuBox className="text-blue-600 group-hover:scale-125 transition-transform duration-700" size={48} />
                  <span className="mt-4 text-[10px] font-mono text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">Active_Glow</span>
               </div>
               <div className="px-4 text-center sm:text-left">
                 <p className="text-sm font-black text-white uppercase tracking-widest mb-2">{glow.id}</p>
                 <code className="text-[9px] font-mono text-slate-600 block break-words">{glow.value}</code>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER BANNER --- */}
      <div className="relative p-1 bg-gradient-to-r from-blue-600/50 via-transparent to-blue-600/50 rounded-[3rem]">
        <div className="bg-[#020617] rounded-[2.9rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex gap-6 items-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500">
              <LuInfo size={30} />
            </div>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-white tracking-tight">Need specific values?</h4>
              <p className="text-slate-500 text-sm font-light">Custom tokens can be defined in the system core configuration.</p>
            </div>
          </div>
          <button className="whitespace-nowrap px-10 py-4 bg-white text-black rounded-2xl text-[11px] font-black tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 uppercase">
            Documentation
          </button>
        </div>
      </div>

    </div>
  );
};

export default DesignTokens;