// components/ui/FeatureItem.jsx
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

export const FeatureItem = ({ text, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/50"
    >
      <FaCheck className="text-emerald-500 flex-shrink-0 text-sm" />
      <span className="text-slate-300 text-sm">{text}</span>
    </motion.div>
  );
};