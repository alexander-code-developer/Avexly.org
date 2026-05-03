const LibraryHome = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">
          UI Library <span className="text-blue-500">v1.0</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
          Sistema de diseño propio basado en Tailwind CSS 4. Componentes atómicos, 
          altamente interactivos y optimizados para el ecosistema AveXly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Atomic', 'Reactive', 'Dark-First'].map((trait) => (
          <div key={trait} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-2">{trait}</h3>
            <p className="text-slate-300 text-sm">Optimized for high-performance React applications.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryHome;