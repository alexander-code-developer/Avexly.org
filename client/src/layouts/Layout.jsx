import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialSidebar from '../components/SocialSidebar';

const Layout = () => {
  const location = useLocation();
  
  
  const isLibraryRoute = location.pathname.startsWith('/library');

  return (
    <div className="relative overflow-x-hidden bg-[#020617]">
      <Navbar />
      
      {/* Solo mostramos el Sidebar de redes si NO estamos en la librería */}
      {!isLibraryRoute && <SocialSidebar />}
      
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Solo mostramos el Footer si NO estamos en la librería */}
      {!isLibraryRoute && <Footer />}
    </div>
  );
};

export default Layout;