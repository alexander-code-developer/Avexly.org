import { useState, useEffect, lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowRight } from "react-icons/lu";
import avexlyData from "../data/avexly.json";

const SkillsSection = lazy(() => import('./components/home/SkillsSection'));
const StatsSection = lazy(() => import('./components/home/StatsSection'));

const Home = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Sincronizamos las frases desde el JSON
  const phrases = useMemo(() => avexlyData.hero.typing_phrases, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullPhrase = phrases[i];

      setText(isDeleting 
        ? fullPhrase.substring(0, text.length - 1) 
        : fullPhrase.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && text === fullPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <div className="lg:pt-0 pt-10 bg-[#020617] selection:bg-blue-500/30 overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="relative z-10 text-center w-full max-w-7xl mx-auto">
         <div className="mb-10 md:mb-16 relative inline-block group">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto rounded-[3rem] md:rounded-[4rem] p-[2px] bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent shadow-[0_0_60px_rgba(37,99,235,0.1)] transition-transform duration-700 ease-out group-hover:rotate-3 will-change-transform transform-gpu">
               <div className="w-full h-full rounded-[2.9rem] md:rounded-[3.9rem] bg-slate-950 overflow-hidden relative">
                  <img 
                     src="https://avatars.githubusercontent.com/u/170388577?v=4" 
                     alt={avexlyData.brand.legalName}
                     className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100 transform-gpu"
                     loading="eager"
                     decoding="async"
                   />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(transparent_50%,#020617_110%)] opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
               </div>
              <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1]" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter text-white uppercase leading-[0.85]">
            {avexlyData.hero.title_part1}{" "}
            <span className="relative inline-block pb-2 pr-2 sm:pr-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {avexlyData.hero.title_part2}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[4px] bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-40"></span>
            </span>
          </h1>
          
          <div className="min-h-[60px] flex flex-col items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-3 py-1 border border-blue-500/20 bg-blue-500/5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-blue-400 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                {avexlyData.brand.name}.Active
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-slate-200 font-bold tracking-tight h-10">
              {text}<span className="w-[2px] md:w-[3px] h-6 md:h-9 bg-blue-500 inline-block align-middle ml-2 animate-pulse"></span>
            </h2>
          </div>
          
          <p className="text-slate-400 max-w-[90%] md:max-w-2xl mx-auto mb-12 text-base md:text-xl font-light leading-relaxed">
            {avexlyData.hero.mission}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center">
            <Link to="/proyectos"
                  className="w-full sm:w-auto group relative px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95">
              Explore Projects
            </Link>
            
            <Link to="/contacto"
                  className="group flex items-center gap-3 text-slate-500 hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em]">
              <span>Initialize Contact</span>
              <LuArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform text-blue-500" />
            </Link>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />

      <Suspense fallback={
        <div className="h-96 flex flex-col items-center justify-center bg-[#020617] gap-4">
          <div className="w-10 h-10 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Loading Modules...</span>
        </div>
      }>
        <main className="bg-[#020617] relative">
          <SkillsSection />
          <div className="h-px w-3/4 mx-auto bg-slate-900" />
          <StatsSection />
        </main>
      </Suspense>
    </div>
  );
};

export default Home;