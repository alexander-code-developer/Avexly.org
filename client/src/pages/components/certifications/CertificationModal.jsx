import { useEffect } from 'react';

const CertificationModal = ({ certification, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{certification.title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">
            ×
          </button>
        </div>
        
        <div className="p-6">
          <img src={certification.image} alt={certification.title} className="w-full h-48 object-cover rounded-lg mb-6" />
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-gray-400">Issuer</h3>
              <p className="text-white font-semibold">{certification.issuer}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-400">Date</h3>
              <p className="text-white">{new Date(certification.date).toLocaleDateString()}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-400">Credential ID</h3>
              <p className="text-white text-sm font-mono">{certification.credentialId}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-400">Description</h3>
              <p className="text-gray-300">{certification.description}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-400">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {certification.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Verify Credential →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;