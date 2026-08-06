import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuArrowLeft, LuSearch } from "react-icons/lu";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [errorCode, setErrorCode] = useState('404');
  
  useEffect(() => {
    // Animación del código de error
    const interval = setInterval(() => {
      setErrorCode(prev => {
        if (prev === '404') return '4⨀4';
        if (prev === '4⨀4') return '4Ø4';
        if (prev === '4Ø4') return '404';
        return '404';
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="p-10 bg-[#020617] selection:bg-blue-500/30 overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Animated Glow Orbs */}
      <div 
        className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] transition-all duration-1000 ease-out"
        style={{
          left: `${mousePosition.x * 0.02}px`,
          top: `${mousePosition.y * 0.02}px`,
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] transition-all duration-1000 ease-out"
        style={{
          right: `${mousePosition.x * 0.01}px`,
          bottom: `${mousePosition.y * 0.01}px`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Animated Number */}
          <div className="mb-8 md:mb-12 relative">
            <div className="text-[120px] sm:text-[180px] md:text-[280px] lg:text-[350px] font-black leading-none tracking-tighter select-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-emerald-400 animate-pulse">
                {errorCode}
              </span>
            </div>
            
            {/* Glitch Effect Layers */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="text-[120px] sm:text-[180px] md:text-[280px] lg:text-[350px] font-black leading-none tracking-tighter text-blue-500 animate-glitch-1">
                404
              </div>
              <div className="text-[120px] sm:text-[180px] md:text-[280px] lg:text-[350px] font-black leading-none tracking-tighter text-emerald-500 animate-glitch-2 absolute top-0 left-0">
                404
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="px-3 py-1 border border-red-500/20 bg-red-500/5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block mr-2"></span>
              <span className="text-red-400 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                Error {errorCode} | Resource Not Found
              </span>
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter text-white">
            Lost in the<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400"> Void</span>
          </h1>
          
          <p className="text-slate-400 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-6 md:mb-8 font-light">
            The page you're looking for has been deleted, moved, or never existed. 
            But don't worry, we can guide you back to known space.
          </p>

          {/* Suggestions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto mb-8 md:mb-12">
            <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
              <span className="text-blue-400 font-mono text-xs">/projects</span>
              <p className="text-slate-500 text-[10px] mt-1">Explore our work</p>
            </div>
            <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
              <span className="text-blue-400 font-mono text-xs">/about</span>
              <p className="text-slate-500 text-[10px] mt-1">Learn about us</p>
            </div>
            <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
              <span className="text-blue-400 font-mono text-xs">/contact</span>
              <p className="text-slate-500 text-[10px] mt-1">Get in touch</p>
            </div>
             {/* Action Buttons
            <div className="px-4 py-2 bg-slate-900/50 border border-slate-800 rounded-lg">
              <span className="text-blue-400 font-mono text-xs">/certifications</span>
              <p className="text-slate-500 text-[10px] mt-1">View credentials</p> 
            </div> */}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <Link
              to="/"
              className="group relative px-8 py-3 md:px-10 md:py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <FaHome className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Return Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-3 text-slate-500 hover:text-white transition-all duration-300 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]"
            >
              <LuArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-2 transition-transform text-blue-500" />
              Go Back
            </button>
          </div>

          {/* Search Hint */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-800/50">
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <LuSearch className="w-4 h-4" />
              <span className="text-[10px] md:text-xs font-mono">
                Try searching for what you need or check the URL for typos
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.5; }
        }
        
        @keyframes glitch1 {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }
        
        @keyframes glitch2 {
          0%, 100% { transform: translate(0); opacity: 0.3; }
          20% { transform: translate(2px, -2px); opacity: 0.5; }
          40% { transform: translate(2px, 2px); opacity: 0.3; }
          60% { transform: translate(-2px, -2px); opacity: 0.5; }
          80% { transform: translate(-2px, 2px); opacity: 0.3; }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-glitch-1 {
          animation: glitch1 0.3s infinite;
        }
        
        .animate-glitch-2 {
          animation: glitch2 0.3s infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;