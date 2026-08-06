import { motion } from 'framer-motion';
import { 
  FaCopy, 
  FaCheck, 
  FaBolt, 
  FaShieldAlt, 
  FaMicrochip, 
  FaTerminal,
  FaBox,
  FaCode,
  FaLayerGroup,
  FaChartLine,
  FaGithub,
  FaArrowRight,
  FaDownload,
  FaCog
} from "react-icons/fa";
import { useState } from 'react';

const LibraryHome = () => {
  const [activeTab, setActiveTab] = useState('npm');
  const [copiedText, setCopiedText] = useState("");

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const getInstallCommand = () => {
    const commands = {
      npm: 'npm install @alexander_avexly/ui',
      yarn: 'yarn add @alexander_avexly/ui',
      pnpm: 'pnpm add @alexander_avexly/ui'
    };
    return commands[activeTab];
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 space-y-20">
      
      {/* Header */}
      <header className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto">
          <FaBox className="text-blue-500" size={32} />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
            Avexly<span className="text-blue-500">.UI</span>
          </h1>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            React components, fully typed and optimized for production
          </p>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><FaMicrochip size={12} /> React 18+</span>
          <span className="flex items-center gap-1"><FaBolt size={12} /> 12.4kb</span>
          <span className="flex items-center gap-1"><FaBox size={12} /> v1.0.5</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Installation */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl overflow-hidden">
          <div className="flex border-b border-white/10">
            {['npm', 'yarn', 'pnpm'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-xs font-mono transition-colors ${
                  activeTab === tab 
                    ? 'text-blue-500 border-b-2 border-blue-500 bg-blue-500/5' 
                    : 'text-slate-600 hover:text-slate-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between bg-black/40 rounded-xl p-4 font-mono text-sm">
              <code className="text-slate-300">
                <span className="text-blue-500">$</span> {getInstallCommand()}
              </code>
              <button 
                onClick={() => copy(getInstallCommand())}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {copiedText === getInstallCommand() ? <FaCheck size={16} className="text-green-500" /> : <FaCopy size={16} className="text-slate-500" />}
              </button>
            </div>
            
            <div className="mt-4 text-xs text-slate-600 font-mono">
              requires: framer-motion ^12.0.0
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <FaChartLine className="text-blue-500" size={20} />
            <h3 className="text-sm font-medium text-white">System Metrics</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-sm text-slate-500">Components</span>
              <span className="text-sm font-mono font-medium text-blue-500">24+</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-sm text-slate-500">Coverage</span>
              <span className="text-sm font-mono font-medium text-green-500">100%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-sm text-slate-500">Bundle size</span>
              <span className="text-sm font-mono font-medium text-yellow-500">12.4kb</span>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FaCode size={18} className="text-blue-500" />
          <h3 className="text-lg font-semibold text-white">Configuration</h3>
        </div>
        
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-6 py-3 border-b border-white/10 text-xs text-slate-600 font-mono">
            src/main.jsx
          </div>
          <pre className="p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <span className="text-purple-500">import</span> <span className="text-yellow-500">'@alexander_avexly/ui/style.css'</span><span className="text-purple-500">;</span>
            {'\n'}
            <span className="text-purple-500">import</span> <span className="text-blue-500">App</span> <span className="text-purple-500">from</span> <span className="text-yellow-500">'./App'</span><span className="text-purple-500">;</span>
            {'\n\n'}
            <span className="text-slate-600">// Mount your app</span>
            {'\n'}
            <span className="text-purple-500">createRoot</span>(<span className="text-blue-500">document</span>.<span className="text-yellow-500">getElementById</span>(<span className="text-green-500">'root'</span>)).<span className="text-yellow-500">render</span>(&lt;<span className="text-blue-500">App</span> /&gt;);
          </pre>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
          <FaBolt className="text-blue-500 mb-4" size={24} />
          <h4 className="text-white font-medium mb-2">Performance</h4>
          <p className="text-sm text-slate-500">Optimized bundle with native lazy loading</p>
        </div>
        
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
          <FaShieldAlt className="text-blue-500 mb-4" size={24} />
          <h4 className="text-white font-medium mb-2">Type Safe</h4>
          <p className="text-sm text-slate-500">Strict TypeScript from the core</p>
        </div>
        
        <div className="bg-[#0d0e12] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all">
          <FaLayerGroup className="text-blue-500 mb-4" size={24} />
          <h4 className="text-white font-medium mb-2">Modular</h4>
          <p className="text-sm text-slate-500">Modular and reusable components</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <div className="flex items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors">
            <FaDownload size={16} />
            Install now
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl transition-colors">
            <FaGithub size={16} />
            GitHub
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default LibraryHome;