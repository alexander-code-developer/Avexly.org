import { LuPalette, LuSun } from "react-icons/lu";

const DesignTokens = () => {
  const colors = [
    { name: 'Primary', hex: '#3b82f6', class: 'bg-blue-500' },
    { name: 'Secondary', hex: '#10b981', class: 'bg-emerald-500' },
    { name: 'Background', hex: '#020617', class: 'bg-slate-950' },
    { name: 'Surface', hex: '#0f172a', class: 'bg-slate-900' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Design Tokens</h1>
        <p className="text-slate-400">The core visual foundation of the AVE.UI system.</p>
      </header>

      <section>
        <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
          <LuPalette className="w-4 h-4" /> Color Palette
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((color) => (
            <div key={color.name} className="p-4 rounded-2xl bg-slate-900/40 border border-white/5">
              <div className={`w-full h-24 rounded-xl ${color.class} mb-4 shadow-lg`} />
              <p className="text-sm font-bold text-white">{color.name}</p>
              <p className="text-xs font-mono text-slate-500">{color.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10">
        <h2 className="text-xs font-mono text-blue-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
          <LuSun className="w-4 h-4" /> Elevation & Glow
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="px-6 py-3 rounded-xl bg-slate-900 border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-sm text-blue-400 font-mono">
            glow-sm
          </div>
          <div className="px-6 py-3 rounded-xl bg-slate-900 border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] text-sm text-blue-400 font-mono">
            glow-md
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignTokens;