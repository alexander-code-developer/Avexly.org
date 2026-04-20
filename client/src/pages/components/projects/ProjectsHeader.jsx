const ProjectsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
        <span className="text-blue-400 text-xs font-mono">✦ PORTFOLIO</span>
      </div>
      <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
        Selected{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient">
          Works.
        </span>
      </h1>
      <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
        Explorando la intersección entre diseño, tecnología e innovación
      </p>
    </div>
  );
};

export default ProjectsHeader;