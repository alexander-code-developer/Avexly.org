const TypographyDocs = () => {
  const samples = [
    { label: 'Display Large', class: 'text-7xl font-black uppercase tracking-tighter', desc: 'Hero sections and big titles' },
    { label: 'Heading 01', class: 'text-4xl font-bold tracking-tight', desc: 'Main section titles' },
    { label: 'Body Regular', class: 'text-base text-slate-400 font-light leading-relaxed', desc: 'General reading and paragraphs' },
    { label: 'Mono Technical', class: 'font-mono text-xs text-blue-500 tracking-[0.3em] uppercase', desc: 'System labels and status' },
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header>
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Typography</h1>
        <p className="text-slate-400">The rhythmic and structural rules for text in AVE.UI.</p>
      </header>

      <div className="space-y-10">
        {samples.map((s) => (
          <div key={s.label} className="border-b border-white/5 pb-8 group">
            <p className="text-[10px] font-mono text-slate-600 mb-4 group-hover:text-blue-500 transition-colors">
              {s.label} — {s.desc}
            </p>
            <p className={`${s.class} text-white`}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypographyDocs;