import ProjectCard from "./ProjectCard";

const ProjectsGrid = ({ 
  projects, 
  activeCardId, 
  isMobile, 
  onCardClick, 
  onInfoClick, 
  onMouseEnter, 
  onMouseLeave,
  onMobileActivate 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          isActive={activeCardId === project.id}
          isMobile={isMobile}
          onCardClick={onCardClick}
          onInfoClick={onInfoClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMobileActivate={onMobileActivate}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;