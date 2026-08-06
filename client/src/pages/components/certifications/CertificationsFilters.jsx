const CertificationsFilters = ({ filters, activeFilter, onFilterChange, isMobile }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${activeFilter === filter 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default CertificationsFilters;