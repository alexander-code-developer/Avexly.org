import { getTechIcon } from "../../../utils/icons";

const ProjectFilters = ({ filters, activeFilter, onFilterChange, isMobile }) => {
  return (
    <div className="relative mb-12 md:mb-16">
      <div className={`flex ${isMobile ? 'overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent' : 'flex-wrap justify-center gap-2'} gap-2 max-w-7xl mx-auto`}>
        {filters.map((filter) => {
          const techInfo = getTechIcon(filter);
          const IconComponent = techInfo.icon;
          
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 border-blue-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {IconComponent && <IconComponent className={`text-sm ${activeFilter === filter ? 'text-white' : techInfo.color}`} />}
              <span className="whitespace-nowrap">{filter}</span>
              {activeFilter === filter && (
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
      
      {isMobile && filters.length > 8 && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1 mt-2">
          <div className="w-1 h-1 rounded-full bg-blue-500/60" />
          <div className="w-1 h-1 rounded-full bg-slate-600/40" />
          <div className="w-1 h-1 rounded-full bg-slate-600/40" />
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;