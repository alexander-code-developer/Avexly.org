const CertificationCard = ({ 
  certification, 
  isActive, 
  isMobile, 
  onCardClick, 
  onViewClick, 
  onMouseEnter, 
  onMouseLeave, 
  onMobileActivate 
}) => {
  return (
    <div
      onClick={onCardClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={certification.image} 
          alt={certification.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white line-clamp-2">
            {certification.title}
          </h3>
        </div>
        
        <p className="text-blue-400 text-sm mb-2">{certification.issuer}</p>
        <p className="text-gray-400 text-sm mb-4">{certification.date}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {certification.tech.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>
        
        {(isActive || isMobile) && (
          <button
            onClick={onViewClick}
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium transition-colors"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;