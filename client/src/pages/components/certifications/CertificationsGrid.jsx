import CertificationCard from './CertificationCard';

const CertificationsGrid = ({ 
  certifications, 
  activeCardId, 
  isMobile, 
  onCardClick, 
  onViewClick, 
  onMouseEnter, 
  onMouseLeave, 
  onMobileActivate 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map(cert => (
        <CertificationCard
          key={cert.id}
          certification={cert}
          isActive={activeCardId === cert.id}
          isMobile={isMobile}
          onCardClick={() => onCardClick(cert)}
          onViewClick={(e) => onViewClick(cert, e)}
          onMouseEnter={() => onMouseEnter(cert.id)}
          onMouseLeave={onMouseLeave}
          onMobileActivate={(e) => onMobileActivate(cert.id, e)}
        />
      ))}
    </div>
  );
};

export default CertificationsGrid;