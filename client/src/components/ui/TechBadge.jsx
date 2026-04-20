import React from 'react';

const TechBadge = ({ icon: Icon, name, color }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/60 transition-all group">
      {Icon && (
        <Icon className={`text-lg ${color} group-hover:scale-110 transition-transform`} />
      )}
      <span className="text-sm font-medium text-slate-300 group-hover:text-white">
        {name}
      </span>
    </div>
  );
};

export default TechBadge;