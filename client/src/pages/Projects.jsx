import { useState, useMemo, useEffect } from "react";
import data from "../data/projects.json";
import ProjectModal from "./components/projects/ProjectModal";
import ProjectsHeader from "./components/projects/ProjectsHeader";
import ProjectFilters from "./components/projects/ProjectFilters";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import EmptyState from "./components/projects/EmptyState";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);

  // Detectar dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Extraer todos los filtros únicos del JSON
  const allFilters = useMemo(() => {
    const techs = new Set(['All']);
    data.projects.forEach(project => {
      techs.add(project.category);
      project.tech.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filtrar proyectos
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return data.projects;
    return data.projects.filter(project => 
      project.category === activeFilter || project.tech.includes(activeFilter)
    );
  }, [activeFilter]);

  // Handlers
  
const handleCardClick = (project) => {
  setActiveCardId(null); 
  setSelectedProject(project);
};

  
const handleInfoClick = (project, e) => {
  e.stopPropagation();
  setActiveCardId(null); 
  setSelectedProject(project);
};

  const handleMouseEnter = (projectId) => {
    if (!isMobile) {
      setActiveCardId(projectId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveCardId(null);
    }
  };

  const handleMobileActivate = (projectId, e) => {
  if (isMobile) {
    e.stopPropagation();
    if (activeCardId === projectId) {
      handleCardClick(data.projects.find(p => p.id === projectId));
    } else {
      setActiveCardId(projectId);
    }
  }
};

  const handleResetFilter = () => {
    setActiveFilter('All');
  };




  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617] antialiased">
      <div className="max-w-7xl mx-auto">
        <ProjectsHeader />
        
        <ProjectFilters 
          filters={allFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          isMobile={isMobile}
        />
        
        {filteredProjects.length > 0 ? (
          <ProjectsGrid
            projects={filteredProjects}
            activeCardId={activeCardId}
            isMobile={isMobile}
            onCardClick={handleCardClick}
            onInfoClick={handleInfoClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMobileActivate={handleMobileActivate}
          />
        ) : (
          <EmptyState onResetFilter={handleResetFilter} />
        )}
      </div>
      
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;