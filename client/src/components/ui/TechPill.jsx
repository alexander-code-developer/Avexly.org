// components/ui/TechPill.jsx
export const TechPill = ({ tech, icon: Icon }) => {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 text-xs font-medium hover:border-blue-500/50 transition-colors">
      <Icon className="w-3.5 h-3.5" />
      {tech}
    </span>
  );
};