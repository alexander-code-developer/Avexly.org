import React from 'react';

const WorkflowImage = ({ src, alt, active }) => {
  if (!src) return null;
  
  return (
    <div className={`relative w-full h-32 md:h-40 lg:h-48 rounded-xl overflow-hidden transition-all duration-700 ${
      active ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
    }`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-contain"
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent transition-opacity duration-700 ${
        active ? 'opacity-0' : 'opacity-100'
      }`} />
    </div>
  );
};

export default WorkflowImage;