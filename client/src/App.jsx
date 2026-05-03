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


function App() {
  const [loading, setLoading] = useState(true);
  if (loading) {
    return <SplashScreen onFinished={() => setLoading(false)} />;
  }
  
  return (
    <ModalProvider>
     <Router>
      <Routes>
        <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Certifications" element={<Certifications/>} />
s
        </Route>
      </Routes>
     </Router>
    </ModalProvider>
  );
}

export default App;