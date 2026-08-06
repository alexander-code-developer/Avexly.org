const ProjectsHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16 space-y-4">
      {/* Subtítulo con líneas decorativas */}
      <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/80 flex justify-center items-center gap-4">
        <span className="w-8 h-[1px] bg-blue-500/30" />
        PORTFOLIO
        <span className="w-8 h-[1px] bg-blue-500/30" />
      </h2>

      {/* Título principal */}
      <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
        Selected{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
          Works.
        </span>
      </h1>

      {/* Descripción */}
      <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
        Exploring the intersection of design, technology, and innovation.
      </p>
    </div>
  );
};

export default ProjectsHeader;