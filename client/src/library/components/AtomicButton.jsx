// src/library/components/AtomicButton.jsx
import { LuZap } from "react-icons/lu";

const AtomicButton = ({ children, onClick, icon: Icon = LuZap }) => {
  return (
    <button 
      onClick={onClick}
      className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-bold uppercase text-xs tracking-[0.2em] overflow-hidden transition-all border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    >
      <span className="relative z-10 flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-400" /> {children}
      </span>
      
      {/* El efecto scan que ya definimos en el CSS */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6] -translate-y-full group-hover:animate-scan" />
    </button>
  );
};

export default AtomicButton;