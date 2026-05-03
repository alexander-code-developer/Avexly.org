import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles, ChevronRight } from 'lucide-react';
import data from "../data/avexly.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState({ left: 0, width: 0 });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Actualizar indicador activo
  useEffect(() => {
    const activeLink = document.querySelector(`[data-path="${location.pathname}"]`);
    if (activeLink) {
      const { offsetLeft, offsetWidth } = activeLink;
      setActiveIndicator({ left: offsetLeft, width: offsetWidth });
    }
  }, [location]);

  return (
    <>
      {/* Espaciador para evitar que el contenido quede debajo */}
      <div className={`transition-all duration-700 ${isScrolled ? 'h-20' : 'h-28'}`} />
      
      <header className={`
        fixed top-0 left-0 w-full transition-all duration-700 ease-out
        z-[9999] px-4 md:px-0
        ${isScrolled ? 'py-2' : 'py-4'}
      `}>
        <div className="max-w-6xl mx-auto">
          <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className={`
              relative flex justify-between items-center transition-all duration-700
              px-4 md:px-6 py-2 rounded-2xl md:rounded-full border
              ${isScrolled 
                ? 'bg-black/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50' 
                : 'bg-black/40 backdrop-blur-md border-white/5'}
            `}
          >
            {/* Logo */}
            <Link to="/" className="relative group">
              <div className="absolute -inset-3 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <Code2 className="w-7 h-7 text-blue-400 relative z-10" />
                  <div className="absolute inset-0 bg-blue-500/30 blur-md rounded-full group-hover:blur-xl transition-all duration-500" />
                </div>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold tracking-wider text-white">AVE</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient ml-0.5">
                    XLY
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {/* Indicador de navegación activa */}
              <motion.div
                className="absolute h-8 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm"
                initial={false}
                animate={{ left: activeIndicator.left, width: activeIndicator.width }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ top: 'calc(50% - 16px)' }}
              />
              
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    data-path={link.path}
                    className={`
                      relative px-5 py-2 text-sm font-medium tracking-wide transition-all duration-500
                      ${isActive 
                        ? 'text-blue-400' 
                        : 'text-gray-400 hover:text-white'
                      }
                    `}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* Status Badge */}
              <div className="ml-4 flex items-center gap-2 bg-gradient-to-r from-white/5 to-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500/50 blur-sm rounded-full animate-pulse" />
                  <Sparkles className="w-3 h-3 text-green-400 relative" />
                </div>
                <span className="text-[10px] font-mono text-gray-300 font-medium">ACTIVE</span>
                <div className="w-px h-3 bg-white/20" />
                <span className="text-[10px] font-mono text-blue-400 font-bold">{data.brand.version}</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-blue-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-white/70" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden absolute left-4 right-4 mt-4 overflow-hidden"
              >
                <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="p-2">
                    {navLinks.map((link, i) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <motion.div
                          key={link.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={link.path}
                            className={`
                              flex items-center justify-between px-5 py-4 rounded-xl text-base font-medium transition-all duration-300
                              ${isActive 
                                ? 'bg-gradient-to-r from-blue-600/20 to-blue-500/10 text-blue-400 border border-blue-500/20' 
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                              }
                            `}
                          >
                            <span>{link.label}</span>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 text-blue-400" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  {/* Mobile Status Badge */}
                  <div className="border-t border-white/10 p-4 bg-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-green-500/50 blur-sm rounded-full animate-pulse" />
                          <Sparkles className="w-3 h-3 text-green-400 relative" />
                        </div>
                        <span className="text-xs font-mono text-gray-300">System Online</span>
                      </div>
                      <span className="text-xs font-mono text-blue-400 font-bold">v2.0</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Agregar estilos de animación */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 2s linear infinite;
        }
      `}</style>
    </>
  );
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About', },
  { path: '/contact', label: 'Contact', },
  /*{ path: '/Certifications', label: 'Certifications'}*/
];

export default Navbar;