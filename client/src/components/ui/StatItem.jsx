import React from 'react';

const StatItem = ({ icon: Icon, value, label }) => {
  return (
    <div className="group flex flex-col items-center justify-center p-4 transition-all duration-300">
      <div className="mb-2 p-3 rounded-2xl bg-slate-800/50 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
        <Icon size={24} />
      </div>
      <span className="text-2xl font-black text-white">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold text-center">
        {label}
      </span>
    </div>
  );
};

export default StatItem;