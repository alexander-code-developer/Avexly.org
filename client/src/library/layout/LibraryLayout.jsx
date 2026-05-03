import { Outlet } from 'react-router-dom';
import LibrarySidebar from './LibrarySidebar';
import Navbar from "..//../components/Navbar"

const LibraryLayout = () => {
  return (
    <div className="h-screen w-full bg-[#020617] flex overflow-hidden fixed inset-0">
        <Navbar />
      
      {/* Sidebar Desktop y Drawer Móvil */}
      <LibrarySidebar />

      {/* Área de contenido principal */}
      <main className="pt-30 flex-1 min-w-0 h-full overflow-y-auto custom-scrollbar relative">
        {/* Gradiente decorativo de fondo */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#1e293b_0%,transparent_25%)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto p-6 md:p-8 lg:p-12 w-full relative z-0">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default LibraryLayout;