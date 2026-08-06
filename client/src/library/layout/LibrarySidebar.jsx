import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { 
  LuLayoutDashboard, LuComponent, LuPalette, LuBox, 
  LuType, LuMousePointer2, LuLayers, LuZap, LuMenu, LuX
} from "react-icons/lu";
import { FaCode } from "react-icons/fa";

const LibrarySidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: 'Dashboard', path: '/library', icon: LuLayoutDashboard },
        { name: 'Design Tokens', path: '/library/tokens', icon: LuPalette },
      ]
    },
    {
      title: "Foundations",
      items: [
        { name: 'Typography', path: '/library/typography', icon: LuType },
        { name: 'Colors', path: '/library/colors', icon: LuBox },
      ]
    },
    {
      title: "Atomic Components",
      items: [
        { name: 'Buttons', path: '/library/buttons', icon: LuMousePointer2, status: 'New' },
        { name: 'Inputs', path: '/library/inputs', icon: FaCode },
        { name: 'Badges', path: '/library/badges', icon: LuZap },
      ]
    },
    {
      title: "Complex Structures",
      items: [
        { name: 'Cards', path: '/library/cards', icon: LuLayers },
        { name: 'Modals', path: '/library/modals', icon: LuComponent },
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target)) {
        if (event.target.closest('.btn-toggle-library')) return;
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const NavContent = () => (
    <div className="flex flex-col h-full bg-slate-950 w-full overflow-hidden border-r border-white/5">
      

      <nav className="pt-20 flex-1 overflow-y-auto px-4 pb-6 scrollbar-none">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 border-l border-blue-500/20 ml-2">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `
                    relative flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}
                  `}
                >
                  <div className="flex items-center gap-3 truncate">
                    <item.icon className="w-4 h-4 flex-none" />
                    <span className="text-sm font-medium truncate">{item.name}</span>
                  </div>
                  {item.status && (
                    <span className="text-[9px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase flex-none">
                      {item.status}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      
      <div className="p-4 border-t border-white/5 bg-slate-900/40 flex-none">
        <div className="flex items-center gap-2 px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">v2.0.4 - Stable</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* BOTÓN GATILLO (Móvil) - Abajo a la derecha */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-toggle-library lg:hidden fixed bottom-6 right-6 z-[100] w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl active:scale-90 transition-all border border-blue-400/50"
      >
        {isOpen ? <LuX size={26} /> : <LuMenu size={26} />}
      </button>

      {/* DRAWER MÓVIL */}
      <div className={`lg:hidden fixed inset-0 z-[90] transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay oscuro */}
        <div 
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)} 
        />
        
        {/* Panel lateral deslizante */}
        <div 
          ref={panelRef}
          className={`absolute top-0 left-0 h-full w-[280px] bg-slate-950 shadow-2xl transition-transform duration-300 ease-in-out transform
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <NavContent />
        </div>
      </div>

      {/* SIDEBAR (Desktop) */}
      <aside className="hidden lg:block w-72 h-full bg-slate-950 flex-none relative z-10">
        <NavContent />
      </aside>
    </>
  );
};

export default LibrarySidebar;