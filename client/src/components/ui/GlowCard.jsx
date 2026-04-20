// components/ui/GlowCard.jsx
import { motion } from 'framer-motion';

export const GlowCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
      <div className="relative bg-slate-900 rounded-2xl">
        {children}
      </div>
    </div>
  );
};