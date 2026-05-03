import { useState, useMemo, useEffect } from "react";
import data from "../data/certifications.json";
import CertificationModal from "./components/certifications/CertificationModal";
import CertificationsHeader from "./components/certifications/CertificationsHeader";
import CertificationsFilters from "./components/certifications/CertificationsFilters";
import CertificationsGrid from "./components/certifications/CertificationsGrid";
import EmptyState from "./components/certifications/EmptyState";

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);
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
    const categories = new Set(['All']);
    data.certifications.forEach(cert => {
      categories.add(cert.category);
      cert.tech.forEach(tech => categories.add(tech));
    });
    return Array.from(categories).sort();
  }, []);

  // Filtrar certificaciones
  const filteredCertifications = useMemo(() => {
    if (activeFilter === 'All') return data.certifications;
    return data.certifications.filter(cert => 
      cert.category === activeFilter || cert.tech.includes(activeFilter)
    );
  }, [activeFilter]);

  // Handlers
  const handleCardClick = (cert) => {
    setSelectedCert(cert);
  };

  const handleViewClick = (cert, e) => {
    e.stopPropagation();
    setSelectedCert(cert);
  };

  const handleMouseEnter = (certId) => {
    if (!isMobile) {
      setActiveCardId(certId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveCardId(null);
    }
  };

  const handleMobileActivate = (certId, e) => {
    if (isMobile) {
      e.stopPropagation();
      setActiveCardId(activeCardId === certId ? null : certId);
    }
  };

  const handleResetFilter = () => {
    setActiveFilter('All');
  };

  return (
    <section className="min-h-screen pt-24 pb-20 px-4 md:px-6 bg-gradient-to-br from-[#020617] via-[#0a0f2a] to-[#020617] antialiased">
      <div className="max-w-7xl mx-auto">
        <CertificationsHeader />
        
        <CertificationsFilters 
          filters={allFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          isMobile={isMobile}
        />
        
        {filteredCertifications.length > 0 ? (
          <CertificationsGrid
            certifications={filteredCertifications}
            activeCardId={activeCardId}
            isMobile={isMobile}
            onCardClick={handleCardClick}
            onViewClick={handleViewClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMobileActivate={handleMobileActivate}
          />
        ) : (
          <EmptyState onResetFilter={handleResetFilter} />
        )}
      </div>
      
      {selectedCert && (
        <CertificationModal
          certification={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
};

export default Certifications;