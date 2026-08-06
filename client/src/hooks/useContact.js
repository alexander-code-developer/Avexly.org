import { useState } from 'react';

export const useContact = (rawBackendUrl) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  // Limpiamos la variable de entorno únicamente para quitar comillas o la / final si viniera con ella
  const baseUrl = (rawBackendUrl || '').trim().replace(/\/+$/, '');
  
  // Construcción directa usando SOLO tu variable de entorno
  const API_ENDPOINT = `${baseUrl}/api/contact`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const browserLang = navigator.language.split('-')[0]; 
    const langToSend = (browserLang === 'es') ? 'es' : 'en';

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          lang: langToSend 
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error devuelto por la API:", errorData);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error("Error de red/conexión al intentar hacer fetch:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const resetStatus = () => {
    setStatus('idle');
  };

  return { 
    formData, 
    status, 
    handleChange, 
    sendEmail, 
    isLoading: status === 'loading', 
    isSuccess: status === 'success', 
    isError: status === 'error',
    resetStatus
  };
};