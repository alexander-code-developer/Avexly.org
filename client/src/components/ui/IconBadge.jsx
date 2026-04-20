import { motion } from 'framer-motion';

export const IconBadge = ({ icon: Icon, label, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
  };

  return (
    <span className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${colors[color]}`}>
      <Icon className="w-3.5 h-3.5" />
      {label}
    </span>
  );
};