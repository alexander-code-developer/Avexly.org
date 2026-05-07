import { motion } from 'framer-motion';
import { 
  LuCopy, LuCheck, LuZap, LuShieldCheck, LuCpu, 
  LuTerminal, LuExternalLink, LuPackagePlus, 
  LuFileCode2, LuLayers, LuActivity, LuBox, LuBinary 
} from "react-icons/lu";
import { useState } from 'react';

const LibraryHome = () => {
  const [activeTab, setActiveTab] = useState('npm');
  const [copiedText, setCopiedText] = useState("");

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const Syntax = ({ children, color }) => <span style={{ color }}>{children}</span>;
  
  const colors = { 
    keyword: '#c678dd', 
    import: '#61afef', 
    string: '#98c379', 
    comment: '#5c6370', 
    const: '#e5c07b', 
    tag: '#e06c75' 
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20 space-y-24 lg:space-y-32">
      
      {/* --- HEADER DE ALTA GAMA --- */}
      <header className="relative flex flex-col items-center justify-center text-center space-y-10">
        {/* Decoración superior sutil */}
        <div className="absolute -top-10 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full group-hover:bg-blue-600/40 transition-all duration-700" />
          <div className="relative w-24 h-24 bg-[#0a0a0c] border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl">
            <LuBox className="text-blue-500" size={44} />
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tighter"
          >
            AVEXLY<span className="text-blue-600 inline-block">.UI</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-mono text-xs sm:text-sm tracking-[0.4em] uppercase"
          >
            Premium Atomic Component System
          </motion.p>
        </div>

        {/* Badges de Estado Estilo Dashboard de Lujo */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'Version', val: '1.0.5', icon: LuLayers },
            { label: 'Bundle', val: '12.4kb', icon: LuZap },
            { label: 'Engine', val: 'React 18+', icon: LuCpu }
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/[0.03] border border-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 backdrop-blur-md">
              <s.icon size={12} className="text-blue-500" />
              <span className="text-white">{s.val}</span>
            </div>
          ))}
        </div>
      </header>

      {/* --- GRID PRINCIPAL (ESTILO BENTO) --- */}
      <main className="grid lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* BLOQUE: INSTALACIÓN (8 COLS) */}
        <div className="lg:col-span-8 group">
          <div className="h-full flex flex-col bg-[#0d0e12]/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-blue-500/30">
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.01]">
              <h3 className="text-lg font-bold text-white flex items-center gap-3 tracking-tight">
                <LuTerminal className="text-blue-500" /> Terminal Protocol
              </h3>
              <div className="flex gap-2">
                {['npm', 'yarn', 'pnpm'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-600 hover:text-slate-400'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-8 sm:p-12 flex flex-col justify-center grow space-y-8">
              <div className="flex justify-between items-center group/code">
                <code className="text-lg sm:text-2xl font-mono tracking-tight text-slate-300">
                  <span className="text-blue-600 opacity-40 select-none mr-4">❯</span>
                  {activeTab === 'npm' ? 'npm i' : activeTab === 'yarn' ? 'yarn add' : 'pnpm add'} 
                  <span className="text-white ml-3">@alexander_avexly/ui</span>
                </code>
                <button 
                  onClick={() => copy(`npm install @alexander_avexly/ui`)}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white transition-all duration-300"
                >
                  {copiedText.includes('ui') ? <LuCheck size={20} /> : <LuCopy size={20} />}
                </button>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-[10px] text-blue-400 font-mono tracking-tighter">
                  [SYSTEM_LOG]: Ready for production deployment
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[10px] text-slate-500 font-mono tracking-tighter">
                  [REQS]: framer-motion ^12.0.0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE: MÉTRICAS (4 COLS) */}
        <aside className="lg:col-span-4">
          <div className="h-full p-8 lg:p-10 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2.5rem] space-y-10 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
            
            <div className="space-y-2">
              <LuActivity className="text-blue-500 mb-4" size={32} />
              <h4 className="text-xs font-black text-blue-400 tracking-[0.3em] uppercase">Core Metrics</h4>
              <p className="text-2xl font-bold text-white tracking-tight">System Health</p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Components', val: '24+' },
                { label: 'Performance', val: '99%' },
                { label: 'TypeSafe', val: 'Strict' }
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-center group">
                  <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">{m.label}</span>
                  <div className="h-px grow mx-4 bg-white/5 group-hover:bg-blue-500/20 transition-all" />
                  <span className="text-sm font-mono font-bold text-white tracking-widest">{m.val}</span>
                </div>
              ))}
            </div>

            {/* Simulación de gráfico de carga */}
            <div className="flex items-end gap-1.5 h-16 pt-4">
              {[30, 60, 40, 80, 50, 90, 45, 70, 55, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05 }}
                  className="flex-1 bg-blue-500/30 rounded-full"
                />
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* --- SECCIÓN: CONFIGURACIÓN DE ESTILOS --- */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold text-white tracking-tight">Global Injection</h3>
            <p className="text-slate-500 text-sm">Sincroniza el núcleo visual antes de inicializar la app.</p>
          </div>
          <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl text-[10px] font-bold text-red-400 uppercase tracking-widest">
            Critical Step
          </div>
        </div>

        <div className="bg-[#0d0e12]/60 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 lg:p-12 relative group">
          <div className="absolute top-8 right-8 text-[10px] font-mono text-slate-600 select-none">src/main.jsx</div>
          <pre className="font-mono text-xs sm:text-base lg:text-lg leading-relaxed overflow-x-auto">
            <Syntax color={colors.comment}>// Importar estilos base para efectos de escaneo</Syntax><br/>
            <Syntax color={colors.keyword}>import</Syntax> <Syntax color={colors.string}>'@alexander_avexly/ui/style.css'</Syntax>;<br/>
            <Syntax color={colors.keyword}>import</Syntax> <Syntax color={colors.import}>App</Syntax> <Syntax color={colors.keyword}>from</Syntax> <Syntax color={colors.string}>'./App'</Syntax>;<br/><br/>
            <Syntax color={colors.const}>ReactDOM</Syntax>.<Syntax color={colors.import}>createRoot</Syntax>(...)
          </pre>
        </div>
      </section>

      {/* --- GRID DE ATRIBUTOS (3 COLUMNAS) --- */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[
          { icon: LuZap, title: "Nano-Bundle", desc: "Código optimizado para tiempos de respuesta menores a 100ms." },
          { icon: LuShieldCheck, title: "Enterprise Safety", desc: "Arquitectura pensada para proyectos de alta escala y robustez." },
          { icon: LuLayers, title: "Atomic Matrix", desc: "Cada componente es un átomo independiente y altamente personalizable." }
        ].map((f, i) => (
          <div key={i} className="group p-10 bg-[#0d0e12]/30 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500">
            <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-600/5">
              <f.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light">{f.desc}</p>
          </div>
        ))}
      </section>

     

    </div>
  );
};

export default LibraryHome;