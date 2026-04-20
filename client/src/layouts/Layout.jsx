import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialSidebar from '../components/SocialSidebar';

const Layout = () => {
  return (
     <div className="relative overflow-x-hidden bg-[#020617]">
      <Navbar />
      <SocialSidebar/>
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;