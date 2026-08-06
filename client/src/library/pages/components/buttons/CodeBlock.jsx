import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const CodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Resaltador sintáctico nativo simplificado basado en RegEx para tokens JSX/JS
  const highlightJSX = (rawCode) => {
    return rawCode
      .replace(/(&lt;[A-Z][a-zA-Z0-9]*|&lt;\/[A-Z][a-zA-Z0-9]*)/g, '<span class="text-indigo-400">$1</span>') // Componentes React
      .replace(/(&lt;[a-z]+|\/[a-z]+&gt;)/g, '<span class="text-cyan-400">$1</span>') // Etiquetas HTML estándar
      .replace(/(\b[a-zA-Z]+=)/g, '<span class="text-amber-400">$1</span>') // Props/Atributos
      .replace(/({[^}]+})/g, '<span class="text-sky-300">$1</span>') // Expresiones u objetos JS
      .replace(/("(.*?)")/g, '<span class="text-emerald-400">$1</span>') // Strings entre comillas
      .replace(/(\/\/.*)/g, '<span class="text-slate-500 italic">$1</span>'); // Comentarios
  };

  const escapedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return (
    <div className="relative group rounded-2xl bg-[#05070f] border border-white/5 overflow-hidden shadow-2xl font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#080b16] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 ml-2">{language}</span>
        </div>
        <button
          onClick={copyToClipboard}
          className="text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-md text-[11px]"
        >
          {copied ? (
            <>
              <FaCheck className="text-emerald-400" /> <span className="text-emerald-400">Copiado</span>
            </>
          ) : (
            <>
              <FaCopy /> <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-5 overflow-x-auto leading-relaxed tracking-wide text-slate-300 select-all scrollbar-none">
        <code dangerouslySetInnerHTML={{ __html: highlightJSX(escapedCode) }} />
      </pre>
    </div>
  );
};

export default CodeBlock;