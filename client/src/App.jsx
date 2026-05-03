import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Layout from './layouts/Layout';
import { ModalProvider } from './context/ModalContext';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import SplashScreen from './components/SplashScreen';

//library
import { LibraryLayout } from './library/layout';
import { 
  LibraryHome, 
  DesignTokens, 
  ButtonsDocs, 
  TypographyDocs 
} from './library/pages';

function App() {
 const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <SplashScreen onFinished={() => setLoading(false)} />;
  }
  
  return (
    <ModalProvider>
      <Router>
        <Routes>
          {/* 1. Página de error (Independiente) */}
          <Route path="*" element={<NotFound/>} />

          {/* 2. PORTAFOLIO (Usa el Layout con Navbar/Footer/SocialSidebar) */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Certifications" element={<Certifications/>} />
          </Route>

          {/* 3. LIBRERÍA (Usa LibraryLayout con su propio Sidebar Épico) */}
          <Route path="/library" element={<LibraryLayout />}>
            <Route index element={<LibraryHome />} />
            <Route path="tokens" element={<DesignTokens />} />
            <Route path="typography" element={<TypographyDocs />} />
            <Route path="buttons" element={<ButtonsDocs />} />
            
            {/* Próximamente: */}
            {/* <Route path="inputs" element={<InputsDocs />} /> */}
            {/* <Route path="cards" element={<CardsDocs />} /> */}
          </Route>

        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;