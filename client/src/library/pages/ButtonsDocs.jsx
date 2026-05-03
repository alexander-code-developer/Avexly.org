import { LuCopy, LuMousePointer2, LuZap, LuCode } from "react-icons/lu";
import AtomicButton from '../components/AtomicButton'; // Importamos tu átomo

const ButtonsDocs = () => {
  // Función para copiar el código al portapapeles (Opcional, pero pro)
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  };

  const codeExample = `<AtomicButton onClick={() => console.log('Action')}>
  Initialize System
</AtomicButton>`;

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Header de la sección */}
      <header>
        <div className="flex items-center gap-2 mb-2">
          <LuMousePointer2 className="w-4 h-4 text-blue-500" />
          <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em]">
            Atomic Components
          </span>
        </div>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
          Buttons
        </h1>
        <p className="text-slate-400 mt-2 max-w-2xl">
          Botones interactivos con efectos de escaneo láser y estados reactivos, 
          diseñados para interfaces de alta tecnología.
        </p>
      </header>

      {/* Área de Preview */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-200">Atomic Scan Button</h2>
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-bold uppercase tracking-widest">
            Main Component
          </span>
        </div>

        <div className="relative p-12 rounded-[2rem] bg-slate-950 border border-white/5 flex flex-col items-center justify-center gap-8 overflow-hidden group">
          {/* Fondo Decorativo (Grid) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          {/* DEMO DEL COMPONENTE */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            <AtomicButton onClick={() => alert('AVE.UI System Initialized')}>
              Initialize System
            </AtomicButton>
            
            <p className="text-slate-500 text-xs font-mono tracking-widest uppercase animate-pulse">
              Click to execute command
            </p>
          </div>
        </div>

        {/* Bloque de Código (Snippet) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-slate-400 text-sm font-mono">
            <LuCode className="w-4 h-4" />
            <span>Usage Guide</span>
          </div>
          
          <div className="group relative bg-slate-900/50 rounded-2xl border border-white/5 p-6 hover:border-blue-500/30 transition-all">
            <button 
              onClick={() => copyToClipboard(codeExample)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              title="Copy code"
            >
              <LuCopy className="w-4 h-4" />
            </button>
            
            <pre className="text-sm font-mono text-blue-300/80 overflow-x-auto leading-relaxed">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sección de Propiedades (Documentación Técnica) */}
      <section className="pt-6 border-t border-white/5">
        <h3 className="text-slate-200 font-bold mb-4">Properties (Props)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5">
            <code className="text-blue-400 text-xs font-bold">children</code>
            <p className="text-slate-500 text-xs mt-1 italic">El texto o elementos dentro del botón.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/30 border border-white/5">
            <code className="text-blue-400 text-xs font-bold">onClick</code>
            <p className="text-slate-500 text-xs mt-1 italic">Función que se ejecuta al presionar.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonsDocs;