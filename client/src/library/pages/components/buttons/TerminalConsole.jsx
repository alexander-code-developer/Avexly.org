import React from "react";
import { FaTerminal } from "react-icons/fa";

const TerminalConsole = ({ logs = [] }) => {
  return (
    <div className="flex flex-col h-[280px] bg-[#03050a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl font-mono text-[11px]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#070a13] border-b border-white/5 text-slate-400">
        <FaTerminal className="text-blue-500 animate-pulse w-3 h-3" />
        <span className="text-[10px] uppercase font-bold tracking-widest">Monitor de Eventos</span>
      </div>
      <div className="flex-1 p-4 space-y-1.5 overflow-y-auto scrollbar-none">
        {logs.length === 0 ? (
          <div className="text-slate-600 italic tracking-tight animate-pulse">&gt; Esperando interacciones...</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className={`${i === 0 ? "text-blue-400 font-bold" : "text-slate-500"} tracking-tight flex items-start gap-2`}>
              <span className="text-blue-500/40 select-none">&gt;</span>
              <span className="break-all">{log}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TerminalConsole;