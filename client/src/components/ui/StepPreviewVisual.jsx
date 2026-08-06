import React from 'react';
import { FaCheck, FaTerminal, FaLock } from "react-icons/fa";

const StepPreviewVisual = ({ activeStepIndex, workflowData }) => {
  const current = workflowData[activeStepIndex] || workflowData[0];

  const previewContents = {
    0: (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 border-b border-white/10 pb-2">
          <span className="text-slate-500">Secure Requirements Channel</span>
        </div>
        <div className="p-3 bg-slate-950/80 rounded-xl border border-blue-400/20 text-slate-300 space-y-2">
          <p className="text-blue-400 font-semibold">Business Objectives Defined</p>
          <p className="text-slate-400">Technology Stack Specification</p>
          <p className="text-slate-400">Time & Key Deliverables Estimation</p>
        </div>
      </div>
    ),
    1: (
      <div className="space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between p-3 bg-slate-950/80 rounded-xl border border-blue-400/30">
          <div className="flex items-center gap-2">
            <FaLock className="text-blue-400" />
            <span className="text-blue-300 font-bold">Digital Contract Signed</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-400/20 text-blue-300 border border-blue-400/30">ENCRYPTED</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-[11px]">
          <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 text-slate-300">
            <span className="text-slate-500 block">Contract Type</span>
            <strong className="text-white">Custom Agreement</strong>
          </div>
          <div className="p-2.5 bg-slate-900/80 rounded-lg border border-white/5 text-slate-300">
            <span className="text-slate-500 block">Written Warranty</span>
            <strong className="text-blue-400">Support Included</strong>
          </div>
        </div>
      </div>
    ),
    2: (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-slate-950/80 rounded-xl border border-indigo-400/30">
          <div className="flex justify-between text-slate-400 mb-2">
            <span>Figma Prototype / Wireframe</span>
            <span className="text-indigo-400 font-bold">98% Approval</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-400 to-indigo-400 h-full w-[98%]"></div>
          </div>
        </div>
        <div className="flex gap-2 text-[10px]">
          <span className="px-2.5 py-1 bg-indigo-400/10 text-indigo-300 rounded-lg border border-indigo-400/20">Design System</span>
          <span className="px-2.5 py-1 bg-blue-400/10 text-blue-300 rounded-lg border border-blue-400/20">Reusable Components</span>
        </div>
      </div>
    ),
    3: (
      <div className="space-y-2 font-mono text-xs bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 text-slate-300">
        <div className="flex items-center gap-2 text-slate-500 text-[10px] border-b border-slate-800 pb-1.5">
          <FaTerminal className="text-blue-400" />
          <span>build.log - System Build Success</span>
        </div>
        <p className="text-blue-400">[PASS] Unit tests (42/42 passed)</p>
        <p className="text-blue-400">[PASS] Security audit scanned</p>
        <p className="text-indigo-400">Build time: 1.24s (Optimized Bundle)</p>
      </div>
    ),
    4: (
      <div className="space-y-3 font-mono text-xs">
        <div className="p-3 bg-gradient-to-r from-indigo-950/80 to-slate-950 rounded-xl border border-indigo-400/40 flex items-center justify-between">
          <div>
            <span className="text-indigo-400 font-bold block">SYSTEM LIVE</span>
            <span className="text-[10px] text-slate-400">SSL Active • Global CDN Fast</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-white">100<span className="text-xs text-indigo-400">%</span></span>
            <span className="text-[9px] block text-slate-400">Uptime</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="relative p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-blue-400/30 shadow-[0_0_50px_rgba(59,130,246,0.08)] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0d_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0d_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-400/10 border border-blue-400/30 text-[10px] font-black text-blue-400 uppercase tracking-widest">
            <FaCheck className="text-blue-400" /> {current.badge}
          </span>
          <h3 className="text-2xl font-bold text-white mt-3 mb-1">{current.previewTitle}</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{current.previewTagline}</p>
        </div>

        <div className="relative">
          {previewContents[activeStepIndex] || previewContents[0]}
        </div>
      </div>
    </div>
  );
};

export default StepPreviewVisual;