import React from 'react';

const GlassCardInteractive = ({ 
  children, 
  className = "", 
  active = false, 
  onClick,
  ...props 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl transition-all duration-700 backdrop-blur-xl bg-slate-900/60 border ${
        active 
          ? 'border-blue-400/60 shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-[1.01]' 
          : 'border-white/10 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]'
      } ${className}`}
      {...props}
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-400/5 rounded-full blur-3xl pointer-events-none" />
      {children}
    </div>
  );
};

export default GlassCardInteractive;