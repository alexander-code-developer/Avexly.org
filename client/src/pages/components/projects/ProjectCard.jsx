import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaVideo, FaChartLine } from "react-icons/fa";
import GlassCard from "../../../components/ui/GlassCard";
import TechBadge from "../../../components/ui/TechBadge";
import { getTechIcon } from "../../../utils/icons";

const ProjectCard = ({ 
  project, 
  index, 
  isActive, 
  isMobile, 
  onCardClick, 
  onInfoClick, 
  onMouseEnter, 
  onMouseLeave,
  onMobileActivate 
}) => {
  const techInfo = getTechIcon(project.category);
  const IconComponent = techInfo.icon;

  return (
    <div 
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={onMouseLeave}
    >
      <GlassCard 
        className={`!p-0 cursor-pointer h-full transition-all duration-500 border ${
          isActive 
            ? 'border-blue-500/60 shadow-2xl shadow-blue-500/20 scale-[1.02]' 
            : 'border-slate-800/50 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2'
        } overflow-hidden`}
        onClick={() => onCardClick(project)}
      >
        {/* Contenedor de Imagen o Video de Cloudinary */}
        <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          
          {/* Lógica de Video: Se activa cuando isActive es true */}
          {isActive && project.video ? (
  <video
    src={project.video}
    autoPlay
    loop
    playsInline
    muted={true} // <--- CAMBIO: Mantenlo muteado en la rejilla
    className="w-full h-full object-cover animate-fade-in transition-all duration-700"
  />
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              loading="lazy"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isActive ? 'scale-110' : 'group-hover:scale-110'
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <IconComponent className="text-6xl text-slate-600" />
            </div>
          )}
          
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none" />
          
          {/* Categoría flotante */}
          <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 transition-all duration-300 z-10 ${
            isActive ? 'scale-110 bg-blue-600/80' : ''
          }`}>
            <IconComponent className={`text-[10px] ${techInfo.color}`} />
            <span className="text-[9px] font-bold text-white uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          
          {/* Indicador de video */}
          {project.video && (
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 z-10">
              <FaVideo className={`text-[10px] ${isActive ? 'text-red-500 animate-pulse' : 'text-red-400'}`} />
              <span className="text-[9px] font-medium text-white">Demo</span>
            </div>
          )}
          
          {/* Botones flotantes */}
          <ProjectCardButtons 
            project={project} 
            isActive={isActive} 
            isMobile={isMobile} 
            onInfoClick={onInfoClick}
          />
          
          {/* Overlay táctil para móvil */}
          {isMobile && (
            <div
              className="absolute inset-0 z-5"
              onClick={(e) => {
                e.stopPropagation();
                onMobileActivate(project.id, e);
              }}
              style={{ pointerEvents: isActive ? 'none' : 'auto' }}
            />
          )}
        </div>
        
        {/* Contenido de la tarjeta */}
        <ProjectCardContent project={project} isActive={isActive} isMobile={isMobile} />
      </GlassCard>
    </div>
  );
};

// Subcomponente: Botones flotantes
const ProjectCardButtons = ({ project, isActive, isMobile, onInfoClick }) => {
  return (
    <div className={`absolute top-3 right-3 flex gap-2 transition-all duration-300 z-20 ${
      isMobile 
        ? `opacity-100 ${isActive ? 'translate-x-0' : 'translate-x-0'}` 
        : `opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 ${isActive ? 'opacity-100 translate-x-0' : ''}`
    }`}>
      {project.github && project.github !== '#' && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-black/70 backdrop-blur-md text-white rounded-lg hover:bg-blue-600 transition-all duration-200 border border-white/10 active:scale-95 hover:scale-110"
          aria-label="Ver código en GitHub"
        >
          <FaGithub size={16} />
        </a>
      )}
      {project.demo && project.demo !== '#' && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-black/70 backdrop-blur-md text-white rounded-lg hover:bg-emerald-600 transition-all duration-200 border border-white/10 active:scale-95 hover:scale-110"
          aria-label="Ver demo en vivo"
        >
          <FaExternalLinkAlt size={14} />
        </a>
      )}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onInfoClick(project, e);
        }}
        className="p-2 bg-black/70 backdrop-blur-md text-white rounded-lg hover:bg-purple-600 transition-all duration-200 border border-white/10 active:scale-95 hover:scale-110"
        aria-label="Más información"
      >
        <FaInfoCircle size={16} />
      </button>
    </div>
  );
};

// Subcomponente: Contenido de la tarjeta
const ProjectCardContent = ({ project, isActive, isMobile }) => {
  const getTechIconForBadge = (tech) => {
    const techInfo = getTechIcon(tech);
    return { icon: techInfo.icon, color: techInfo.color };
  };

  return (
    <div className={`p-5 md:p-6 space-y-3 transition-all duration-300 ${
      isActive ? 'bg-blue-500/5' : ''
    }`}>
      <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
        isActive ? 'text-blue-400' : 'text-white group-hover:text-blue-400'
      }`}>
        {project.title}
      </h3>
      
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed line-clamp-2">
        {project.description}
      </p>
      
      {/* Tecnologías */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/40">
        {project.tech.slice(0, isMobile ? 3 : 4).map(tech => {
          const { icon: TechIcon, color } = getTechIconForBadge(tech);
          return (
            <TechBadge 
              key={tech} 
              name={tech} 
              icon={TechIcon} 
              color={color}
            />
          );
        })}
        {project.tech.length > (isMobile ? 3 : 4) && (
          <span className="text-[9px] md:text-[10px] text-slate-500 font-medium self-center px-2">
            +{project.tech.length - (isMobile ? 3 : 4)}
          </span>
        )}
      </div>
      
      {/* Estadísticas rápidas */}
      {project.features && project.features.length > 0 && (
        <div className="flex items-center gap-3 pt-2 text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <FaChartLine size={10} />
            {project.features.length} features
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;