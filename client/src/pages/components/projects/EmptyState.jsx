import { FaCode } from "react-icons/fa";

const EmptyState = ({ onResetFilter }) => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/50 mb-4">
        <FaCode className="text-3xl text-slate-600" />
      </div>
      <p className="text-slate-400">No se encontraron proyectos con este filtro</p>
      <button
        onClick={onResetFilter}
        className="mt-4 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Ver todos los proyectos
      </button>
    </div>
  );
};

export default EmptyState;