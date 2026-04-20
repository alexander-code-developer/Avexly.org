// components/ui/CodeBlock.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheckDouble } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({ title, code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-slate-700 overflow-hidden bg-slate-950">
      <div className="flex justify-between items-center px-4 py-3 bg-slate-800/50 border-b border-slate-700">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-blue-400 font-mono text-xs">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-700 hover:bg-slate-600 text-white text-xs transition-colors"
        >
          {copied ? <FaCheckDouble className="text-emerald-400" /> : <FaCopy />}
          {copied ? 'Copiado' : 'Copiar'}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ background: 'transparent', padding: '20px', margin: 0, fontSize: '13px' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};