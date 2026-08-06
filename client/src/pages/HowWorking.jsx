import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaComments, 
  FaFileContract, 
  FaDraftingCompass, 
  FaCode, 
  FaRocket, 
  FaShieldAlt, 
  FaArrowRight,
  FaCheck
} from "react-icons/fa";
import data from '../data/howWorking.json';
import GlassCard from '../components/ui/GlassCard';
import GlassCardInteractive from '../components/ui/GlassCardInteractive';
import StepPreviewVisual from '../components/ui/StepPreviewVisual';

const HowWorking = () => {
  const { header, intro, workflow, requirements, cta } = data;
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflow.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [workflow.length, isHovering]);

  const stepIcons = [
    FaComments,
    FaFileContract,
    FaDraftingCompass,
    FaCode,
    FaRocket
  ];

  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 px-4 bg-[#020617] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.03)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTU5MzYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
       <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-4">
  {/* Subtítulo con líneas decorativas */}
  <h2 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/80 flex justify-center items-center gap-4">
    <span className="w-8 h-[1px] bg-blue-500/30" />
    {header.subtitle}
    <span className="w-8 h-[1px] bg-blue-500/30" />
  </h2>

  {/* Título principal */}
  <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter">
    {header.title_main}{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
      {header.title_highlight}
    </span>
  </h1>

  {/* Descripción */}
  <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
    {intro.description}
  </p>
</div>

        {/* Workflow Section */}
        <div className="space-y-12">
          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            {workflow.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative transition-all duration-700 ${
                  index === activeStep 
                    ? 'w-12 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                    : 'w-2 h-2 rounded-full bg-slate-700 hover:bg-slate-500 hover:w-6 hover:h-1.5'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {workflow.map((item, index) => {
              const Icon = stepIcons[index] || FaCode;
              const isActive = activeStep === index;

              return (
                <GlassCardInteractive 
                  key={index} 
                  active={isActive}
                  onClick={() => {
                    setActiveStep(index);
                    setIsHovering(true);
                    setTimeout(() => setIsHovering(false), 3000);
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="p-5 cursor-pointer group transition-all duration-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`relative mb-4 transition-all duration-700 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      <div className={`p-3.5 rounded-2xl transition-all duration-700 ${
                        isActive 
                          ? 'bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]' 
                          : 'bg-slate-800/60 text-blue-400 group-hover:bg-slate-700/80 group-hover:text-blue-300'
                      }`}>
                        <Icon size={22} />
                      </div>
                      {isActive && (
                        <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 blur-xl animate-pulse" />
                      )}
                    </div>

                    <span className={`text-[10px] font-mono font-bold tracking-widest mb-1 transition-colors duration-700 ${
                      isActive ? 'text-blue-400' : 'text-slate-600 group-hover:text-slate-500'
                    }`}>
                      STEP {item.step}
                    </span>

                    <h4 className={`text-sm font-bold mb-1.5 transition-colors duration-700 ${
                      isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {item.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className={`mt-3 flex items-center gap-1.5 text-[9px] font-mono tracking-wider transition-all duration-700 ${
                      isActive ? 'text-blue-400 opacity-100' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                    }`}>
                      <span className="w-1 h-1 rounded-full bg-blue-400" />
                      {isActive ? 'CURRENT' : 'SELECT'}
                    </div>
                  </div>
                </GlassCardInteractive>
              );
            })}
          </div>

          {/* Preview */}
          <div className="mt-8">
            <StepPreviewVisual activeStepIndex={activeStep} workflowData={workflow} />
          </div>
        </div>

        {/* Requirements */}
        <div className="mt-20">
          <GlassCard className="p-8 md:p-12 border-blue-400/10">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl border border-blue-400/20">
                <FaShieldAlt className="text-blue-400" size={28} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-blue-400 uppercase block">
                  COMMITMENT
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  {requirements.title}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {requirements.items.map((req, i) => (
                <div 
                  key={i} 
                  className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/30 hover:border-blue-400/30 transition-all duration-500 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-blue-400/10 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform duration-500">
                      <FaCheck size={12} />
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {req}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="relative p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 via-slate-900/80 to-indigo-600/10 border border-blue-400/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left space-y-3">
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                  {cta.title}
                </h4>
                <p className="text-slate-300 text-base max-w-lg">
                  {cta.subtitle}
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-base rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] active:scale-95 whitespace-nowrap flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">{cta.button}</span>
                <FaArrowRight className="relative z-10 text-sm group-hover:translate-x-1.5 transition-transform duration-500 text-blue-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorking;