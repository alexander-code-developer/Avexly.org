const EmptyState = ({ onResetFilter }) => {
  return (
    <div className="text-center py-20">
      <p className="text-gray-400 mb-4">No certifications found for this filter</p>
      <button 
        onClick={onResetFilter}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default EmptyState;