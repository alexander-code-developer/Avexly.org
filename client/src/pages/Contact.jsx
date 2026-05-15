import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, 
  FaCheckCircle, FaGithub, FaLinkedin, FaWhatsapp, FaPaperPlane 
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { useContact } from "../hooks/useContact";
import data from "../data/avexly.json"; 

const Contact = () => {
  const { contact, socials, brand } = data;
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  
  const { 
    formData, 
    handleChange, 
    sendEmail, 
    isLoading, 
    isSuccess, 
    isError,
    resetStatus
  } = useContact(API_URL);

  const [showModal, setShowModal] = useState(false);

  // Efecto para controlar la aparición y auto-cierre del modal
  useEffect(() => {
    if (isSuccess) {
      setShowModal(true);
      
      // Auto-cierre tras 4 segundos (dando tiempo a la animación de 3s del avión)
      const timer = setTimeout(() => {
        setShowModal(false);
        resetStatus(); // Resetear el estado después de cerrar el modal
      }, 4000); 

      return () => clearTimeout(timer);
    } else {
      // Si isSuccess se vuelve false, cerramos el modal
      setShowModal(false);
    }
  }, [isSuccess, resetStatus]);

  // Función para cerrar manualmente el modal
  const handleCloseModal = () => {
    setShowModal(false);
    resetStatus(); // Resetear el estado al cerrar manualmente
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center lg:pt-12 pt-20 px-4 bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10 antialiased">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-blue-500 font-bold text-[10px] uppercase tracking-[0.5em] opacity-80">Ready to work?</h2>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">together.</span>
            </h1>
          </div>
          <p className="text-slate-500 text-sm max-w-[260px] md:text-right leading-relaxed font-medium">
            Available for freelance projects and high-impact digital collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Info Cards */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <FaEnvelope />, val: contact.email, label: 'Email', href: `mailto:${contact.email}` },
              { icon: <FaPhoneAlt />, val: contact.phone.display, label: 'Phone', href: `tel:${contact.phone.link}` },
              { icon: <FaMapMarkerAlt />, val: brand.location.city, label: 'Location', href: '#' }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="group p-5 bg-slate-900/40 border border-slate-800/60 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/60"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-400 bg-blue-500/5 p-3 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{item.val}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Formulario */}
          <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 transition-all duration-500">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 text-white text-sm transition-all"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 text-white text-sm transition-all"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 text-white text-sm transition-all resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full group flex items-center justify-center gap-3 py-4 rounded-xl font-black tracking-[0.2em] uppercase text-[11px] transition-all duration-300
                  ${isSuccess 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-white text-[#020617] hover:bg-blue-600 hover:text-white shadow-lg active:scale-95 disabled:opacity-70'}`}
              >
                {isLoading ? (
                  <span className="animate-pulse">Sending message...</span>
                ) : isSuccess ? (
                  <><FaCheckCircle size={16} className="animate-bounce" /> Sent Successfully</>
                ) : (
                  <><IoSendSharp size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
                )}
              </button>

              {isError && (
                <p className="text-red-400 text-[10px] text-center font-bold uppercase tracking-widest animate-pulse">
                  ✕ Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Social Connect */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 p-6 bg-slate-900/40 border border-slate-800/60 rounded-3xl flex flex-col justify-center items-center text-center hover:border-blue-500/20 transition-all">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-6">Connect</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { icon: <FaGithub />, link: socials.github, color: 'hover:bg-white hover:text-black' },
                  { icon: <FaLinkedin />, link: socials.linkedin, color: 'hover:bg-blue-600 hover:text-white' },
                  { icon: <FaWhatsapp />, link: socials.whatsapp, color: 'hover:bg-emerald-500 hover:text-white' }
                ].map((soc, i) => (
                  <a 
                    key={i} 
                    href={soc.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-slate-950 border border-slate-800/50 rounded-2xl text-slate-400 transition-all hover:-translate-y-1 ${soc.color}`}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/10 rounded-3xl flex flex-col items-center justify-center text-center group">
                <p className="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-2 group-hover:text-blue-300 transition-colors">Fast Response</p>
                <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                  Guaranteed response in less than <span className="text-slate-300 font-bold">24 hours</span>.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- REFINED MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Overlay con blur profundo - Al hacer click afuera también se cierra */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-[#020617]/90 backdrop-blur-2xl cursor-pointer"
            />

            {/* Contenedor del Modal */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-slate-950/50 border border-slate-800/50 p-12 rounded-[2.5rem] max-w-sm w-full text-center overflow-hidden pointer-events-none"
            >
              {/* Sutil brillo interior */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

              <div className="relative h-44 w-full flex items-center justify-center mb-4">
                {/* Trayectoria de vuelo optimizada */}
                <motion.div
                  initial={{ x: -180, y: 100, opacity: 0, rotate: 20 }}
                  animate={{ 
                    x: [ -180, 0, 280 ], 
                    y: [ 100, 0, -180 ],
                    opacity: [ 0, 1, 0 ],
                    rotate: [ 20, 0, -20 ]
                  }}
                  transition={{ 
                    duration: 3, 
                    ease: "easeInOut"
                  }}
                  className="text-blue-400 text-6xl"
                >
                  <FaPaperPlane className="drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
                </motion.div>

                {/* Estela de vapor sutil */}
                <motion.div 
                   initial={{ scaleX: 0, opacity: 0 }}
                   animate={{ scaleX: 1, opacity: [0, 0.3, 0] }}
                   transition={{ duration: 2, delay: 0.2 }}
                   className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent rotate-[-35deg] origin-left"
                />
              </div>

              <h3 className="text-2xl font-black text-white mb-2 tracking-tighter">
                ¡MENSAJE EN CAMINO!
              </h3>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                Gracias, <span className="text-blue-500">{formData.name}</span>
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed italic">
                "Tu mensaje ha sido enviado con éxito. <br/> Estaremos en contacto pronto."
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;