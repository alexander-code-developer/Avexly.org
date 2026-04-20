import { useState } from 'react';

export const useContact = (backendUrl) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Detectamos el idioma del navegador (ej: "es-MX" -> "es")
    const browserLang = navigator.language.split('-')[0]; 
    const langToSend = (browserLang === 'es') ? 'es' : 'en';

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          lang: langToSend // Se envía automáticamente sin que el usuario haga nada
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return { formData, status, handleChange, sendEmail, 
           isLoading: status === 'loading', isSuccess: status === 'success', isError: status === 'error' };
};