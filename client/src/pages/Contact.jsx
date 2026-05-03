import { 
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, 
  FaCheckCircle, FaGithub, FaLinkedin, FaWhatsapp 
} from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { useContact } from "../hooks/useContact";
// Asumiendo que tu JSON está en una carpeta de datos
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
    isError 
  } = useContact(API_URL);

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
          
          {/* Fila Superior: Info Cards (Mapped from JSON) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                icon: <FaEnvelope />, 
                val: contact.email, 
                label: 'Email', 
                href: `mailto:${contact.email}` 
              },
              { 
                icon: <FaPhoneAlt />, 
                val: contact.phone.display, 
                label: 'Phone', 
                href: `tel:${contact.phone.link}` 
              },
              { 
                icon: <FaMapMarkerAlt />, 
                val: brand.location.city, 
                label: 'Location', 
                href: '#' 
              }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                className="group p-5 bg-slate-900/40 border border-slate-800/60 rounded-2xl transform-gpu transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/60 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-400 bg-blue-500/5 p-3 rounded-xl group-hover:bg-blue-500/10 transition-colors duration-300">
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
          <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8 transform-gpu transition-all duration-500">
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white text-sm transition-all duration-200"
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
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white text-sm transition-all duration-200"
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
                  className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800/80 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-white text-sm transition-all duration-200 resize-none"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full group flex items-center justify-center gap-3 py-4 rounded-xl font-black tracking-[0.2em] uppercase text-[11px] transform-gpu transition-all duration-300
                  ${isSuccess 
                    ? 'bg-emerald-500 text-white scale-[0.98]' 
                    : 'bg-white text-[#020617] hover:bg-blue-600 hover:text-white shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95 disabled:opacity-70'}`}
              >
                {isLoading ? (
                  <span className="animate-pulse">Sending message...</span>
                ) : isSuccess ? (
                  <><FaCheckCircle size={16} className="animate-bounce" /> Sent Successfully</>
                ) : (
                  <><IoSendSharp size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out" /> Send Message</>
                )}
              </button>

              {isError && (
                <p className="text-red-400 text-[10px] text-center font-bold uppercase tracking-widest animate-pulse">
                  ❌ Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Social Connect & Extra */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 p-6 bg-slate-900/40 border border-slate-800/60 rounded-3xl flex flex-col justify-center items-center text-center transform-gpu hover:border-blue-500/20 transition-all duration-300">
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
                    className={`p-4 bg-slate-950 border border-slate-800/50 rounded-2xl text-slate-400 transform-gpu transition-all duration-300 hover:-translate-y-1.5 ${soc.color}`}
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
    </section>
  );
};

export default Contact;