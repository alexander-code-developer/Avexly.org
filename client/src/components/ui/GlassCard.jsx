import React from 'react';

const GlassCard = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-xl transition-all duration-500 group-hover:border-blue-500/30 ${className}`}>
      {/* Gradiente sutil */}
      <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-500/10 opacity-50 pointer-events-none" />
      
      {/* Removí el padding p-8 de aquí para que el !p-0 de Projects funcione y la imagen pegue al borde */}
      <div className={`relative z-10 ${className.includes('!p-0') ? '' : 'p-8'}`}>
        {children}
      </div>
    </div>
  );
};

export default GlassCard;