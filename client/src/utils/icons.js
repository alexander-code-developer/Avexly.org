// utils/icons.js
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaInfoCircle, 
  FaVideo, 
  FaCode, 
  FaChartLine,
  FaTimes,
  FaDesktop,
  FaRocket,
  FaAws,
  FaRobot
} from "react-icons/fa";

import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiPrisma, 
  SiStripe, 
  SiExpress,
  SiTensorflow, 
  SiRedis,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiGraphql,
  SiRedux
} from "react-icons/si";

// Mapa de íconos
export const ICON_MAP = {
  // Frontend
  "React": { icon: SiReact, color: "text-sky-400" },
  "React Native": { icon: SiReact, color: "text-sky-500" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "Tailwind": { icon: SiTailwindcss, color: "text-cyan-400" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "JavaScript": { icon: SiJavascript, color: "text-yellow-400" },
  "Redux": { icon: SiRedux, color: "text-purple-400" },
  "Framer Motion": { icon: FaCode, color: "text-pink-400" },
  
  // Backend
  "Node.js": { icon: SiNodedotjs, color: "text-green-500" },
  "Express": { icon: SiExpress, color: "text-gray-400" },
  "Python": { icon: SiPython, color: "text-blue-400" },
  "Django": { icon: SiDjango, color: "text-green-600" },
  "Flask": { icon: SiFlask, color: "text-gray-300" },
  
  // Bases de datos
  "MongoDB": { icon: SiMongodb, color: "text-emerald-500" },
  "PostgreSQL": { icon: SiPostgresql, color: "text-blue-300" },
  "Prisma": { icon: SiPrisma, color: "text-white" },
  "Redis": { icon: SiRedis, color: "text-red-500" },
  
  // DevOps & Cloud
  "Docker": { icon: SiDocker, color: "text-blue-400" },
  "Kubernetes": { icon: SiKubernetes, color: "text-blue-500" },
  "AWS": { icon: FaAws, color: "text-orange-400" },
  "Firebase": { icon: SiFirebase, color: "text-yellow-500" },
  
  // Payments
  "Stripe": { icon: SiStripe, color: "text-indigo-400" },
  
  // APIs
  "GraphQL": { icon: SiGraphql, color: "text-pink-500" },
  
  // AI/ML
  "AI": { icon: SiTensorflow, color: "text-purple-400" },
  
  // Categorías
  "Frontend": { icon: FaCode, color: "text-blue-400" },
  "Backend": { icon: FaCode, color: "text-emerald-400" },
  "Full Stack": { icon: SiExpress, color: "text-purple-400" },
  
  // Default
  "default": { icon: FaCode, color: "text-slate-400" }
};

// Función helper para obtener ícono
export const getTechIcon = (tech) => {
  return ICON_MAP[tech] || ICON_MAP.default;
};

// Función para obtener solo el ícono (sin color)
export const getTechIconOnly = (tech) => {
  const iconInfo = ICON_MAP[tech] || ICON_MAP.default;
  return iconInfo.icon;
};

// Exportar íconos comunes
export {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaVideo,
  FaCode,
  FaChartLine,
  FaTimes,
  FaDesktop,
  FaRocket,
  FaAws,
  FaRobot,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiStripe,
  SiExpress,
  SiTensorflow,
  SiRedis,
  SiJavascript,
  SiPython,
  SiDjango,
  SiFlask,
  SiDocker,
  SiKubernetes,
  SiFirebase,
  SiGraphql,
  SiRedux
};