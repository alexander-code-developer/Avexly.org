import { LuGithub, LuTwitter, LuLayers, LuExternalLink } from "react-icons/lu";

const LibraryFooter = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-md mt-auto relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-12 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* SECCIÓN 1: BRANDING */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3 group">
              <div className="p-2 bg-blue-600 rounded-xl text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform duration-500">
                <LuLayers size={18}/>
              </div>
              <span className="text-base font-black text-white tracking-[.3em] uppercase">
                Avexly<span className="text-blue-500">.UI</span>
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-widest leading-relaxed text-center md:text-left">
              SISTEMA OPERATIVO DE COMPONENTES ATÓMICOS <br />
              PARA INTERFACES DE ALTA FIDELIDAD.
            </p>
          </div>

          {/* SECCIÓN 2: NAVEGACIÓN (CENTRO) */}
          <nav className="flex justify-center gap-8">
            {[
              { name: 'Docs', link: '#' },
              { name: 'GitHub', link: '#' },
              { name: 'NPM', link: '#' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.link}
                className="text-[10px] font-black text-slate-500 hover:text-blue-500 transition-all uppercase tracking-[0.2em] relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* SECCIÓN 3: SOCIAL & STATUS */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-3">
              <a href="#" className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-500 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                <LuGithub size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-2xl bg-white/[0.03] border border-white/5 text-slate-500 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                <LuTwitter size={18} />
              </a>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/5 border border-blue-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px] font-mono text-blue-400 uppercase tracking-tighter">System_v1.0.5_Stable</span>
            </div>
          </div>

        </div>

        {/* LÍNEA FINAL DE COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-[9px] font-mono text-slate-700 tracking-[.4em] uppercase">
            © 2024 Alexander Avexly // Architecture by Core Matrix
          </span>
          <div className="flex items-center gap-2 text-[9px] text-slate-700 font-mono tracking-widest uppercase hover:text-slate-500 transition-colors cursor-default">
            Built with React & Framer Motion <LuExternalLink size={10} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LibraryFooter;