// components/projects/ProjectModal.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaTimes, FaDesktop, FaCode, FaRocket, FaInfoCircle
} from 'react-icons/fa';
import { IconBadge } from '../../../components/ui/IconBadge';
import { TechPill } from '../../../components/ui/TechPill';
import { FeatureItem } from '../../../components/ui/FeatureItem';
import { CodeBlock } from '../../../components/ui/CodeBlock';
import { ImageSlider } from '../../../components/ui/ImageSlider';
import { getTechIconOnly } from '../../../utils/icons';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

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

  const images = project?.images || (project?.image ? [project.image] : []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
          />
          
          <div className="fixed inset-0 z-[10000] overflow-y-auto flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              style={{ 
                marginTop: '100px', 
                marginBottom: '20px', 
                marginLeft: '20px', 
                marginRight: '20px' 
              }}
              className="relative max-w-4xl w-full h-fit bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="relative p-6 pb-4 border-b border-slate-800 bg-slate-900">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-slate-800 hover:bg-red-500/20 rounded-xl flex items-center justify-center transition-colors group z-30"
                >
                  <FaTimes className="text-slate-400 group-hover:text-red-400 transition-colors" />
                </button>
                
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <div className="flex gap-2 mt-3">
                    <IconBadge icon={FaDesktop} label={project.category} color="blue" />
                  </div>
                </div>
              </div>

              <div className="sticky top-0 z-20 bg-slate-900 border-b border-slate-800 px-6">
                <div className="flex gap-6">
                  {[
                    { id: 'overview', label: 'Overview', icon: FaDesktop },
                    { id: 'code', label: 'Code', icon: FaCode },
                    { id: 'challenge', label: 'Challenges', icon: FaRocket }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 py-3 text-sm font-medium transition-colors border-b-2 ${
                          isActive 
                            ? 'text-blue-400 border-blue-500' 
                            : 'text-slate-500 border-transparent hover:text-slate-300'
                        }`}
                      >
                        <Icon className="text-sm" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 space-y-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Imagen o Video */}
                    {project.video ? (
                      <div className="rounded-xl overflow-hidden border border-slate-700">
                        <iframe
                          src={project.video.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/')}
                          title={project.title}
                          className="w-full aspect-video"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <ImageSlider images={images} title={project.title} />
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                          <FaInfoCircle className="text-blue-500" />
                          About the project
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features?.map((feature, i) => (
                            <FeatureItem key={i} text={feature} delay={i * 0.05} />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Technology stack</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech?.map(tech => {
                            const IconComponent = getTechIconOnly(tech);
                            return (
                              <TechPill 
                                key={tech} 
                                tech={tech} 
                                icon={IconComponent} 
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="space-y-4">
                    {project.codeSnippets?.map((snippet, idx) => (
                      <CodeBlock
                        key={idx}
                        title={snippet.title}
                        code={snippet.code}
                        language={snippet.language}
                      />
                    ))}
                  </div>
                )}

                {activeTab === 'challenge' && (
                  <div className="space-y-4">
                    <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                      <h3 className="text-lg font-semibold text-amber-400 mb-2">🧩 El Reto</h3>
                      <p className="text-slate-300">{project.challenge}</p>
                    </div>
                    <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                      <h3 className="text-lg font-semibold text-emerald-400 mb-2">⚡ La Solución</h3>
                      <p className="text-slate-300">{project.solution}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors text-sm font-medium"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-colors text-sm font-medium"
                    >
                      <FaExternalLinkAlt /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;