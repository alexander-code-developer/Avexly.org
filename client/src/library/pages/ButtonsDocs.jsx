import React, { useState } from "react";
import { FaMousePointer, FaBolt, FaSlidersH } from "react-icons/fa";
import { FiCpu, FiTrash2, FiActivity, FiShoppingBag } from "react-icons/fi";
import AvButton from "../components/buttons/AvButton";
import CodeBlock from "./components/buttons/CodeBlock";
import TerminalConsole from "./components/buttons/TerminalConsole";

const ButtonsDocs = () => {
  const [logs, setLogs] = useState(["[SYSTEM]: Instanciación exitosa. Entorno listo para simulación cinemática."]);

  // --- Playground States ---
  const [playVariant, setPlayVariant] = useState("scan");
  const [playSize, setPlaySize] = useState("lg");
  const [playFullWidth, setPlayFullWidth] = useState(false);
  const [playIsAnimated, setPlayIsAnimated] = useState(true);
  const [playRipple, setPlayRipple] = useState(true);
  const [playCustomColor, setPlayCustomColor] = useState("");
  const [playFontSize, setPlayFontSize] = useState("11px");
  const [playIcon, setPlayIcon] = useState("FiCpu");
  const [playGradient, setPlayGradient] = useState("");
  const [cartSuccess, setCartSuccess] = useState(false);

  const iconMap = { None: null, FiCpu, FiShoppingBag, FiTrash2, FiActivity };

  const addLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${time}] ${msg}`, ...prev].slice(0, 10));
  };

  const generateDynamicCode = () => {
    let iconProp = playIcon !== "None" ? `\n  icon={${playIcon}}` : "";
    let colorProp = playCustomColor ? `\n  customColor="${playCustomColor}"` : "";
    let fontProp = playFontSize !== "11px" ? `\n  fontSize="${playFontSize}"` : "";
    let widthProp = playFullWidth ? `\n  fullWidth` : "";
    let animProp = !playIsAnimated ? `\n  isAnimated={false}` : "";
    let ripProp = !playRipple ? `\n  ripple={false}` : "";
    let gradProp = playGradient ? `\n  gradient="${playGradient}"` : "";

    return `<AvButton
  variant="${playVariant}"
  size="${playSize}"${widthProp}${animProp}${ripProp}${iconProp}${colorProp}${fontProp}${gradProp}
  onClick={() => console.log("Comando ejecutado")}
>
  Execute Command
</AvButton>`;
  };

  return (
    <div className="w-full bg-[#020408] text-slate-200 antialiased min-h-screen px-4 md:px-12 py-12 space-y-20">
      
      {/* HEADER */}
      <header className="space-y-4 max-w-5xl border-b border-white/5 pb-10">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <FaMousePointer className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <span className="text-blue-400 font-mono text-[10px] uppercase tracking-[0.4em] font-semibold">
            Componente Atómico
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          AvButton <span className="text-slate-700 font-mono text-xl md:text-2xl font-light">v3.0</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl">
          Botón cinético de alta fidelidad diseñado para interfaces inmersivas. Cuenta con microinteracciones exclusivas 
          por variante, flujos asíncronos nativos con estados de carga controlados, persistencia inteligente en modo carrito 
          (<code className="bg-[#0b0f19] px-1.5 py-0.5 rounded border border-white/5 text-blue-400 text-xs font-mono">autoCart</code>), 
          y dispersión de ondas mecánicas en el punto exacto del clic.
        </p>
      </header>

      {/* INTERACTIVE LABORATORY */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <FaSlidersH className="text-blue-500 w-4 h-4" />
          <h2 className="text-xs font-bold text-white uppercase tracking-[0.2em]">Laboratorio Interactivo</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Controls Panel */}
          <div className="bg-[#070a13] border border-white/5 rounded-2xl p-6 space-y-5 shadow-xl h-fit">
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-3">
              Configuración de Propiedades
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5">variant</label>
                <select
                  value={playVariant}
                  onChange={(e) => setPlayVariant(e.target.value)}
                  className="w-full bg-[#03050a] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-mono focus:border-blue-500 outline-none transition-colors"
                >
                  {["base", "dark", "ghost", "outline", "glass", "scan", "terminal", "pulse", "glossy", "danger"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5">size</label>
                <select
                  value={playSize}
                  onChange={(e) => setPlaySize(e.target.value)}
                  className="w-full bg-[#03050a] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-mono focus:border-blue-500 outline-none transition-colors"
                >
                  {["sm", "md", "lg", "xl"].map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5">Inyección de Icono</label>
                <select
                  value={playIcon}
                  onChange={(e) => setPlayIcon(e.target.value)}
                  className="w-full bg-[#03050a] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-mono focus:border-blue-500 outline-none transition-colors"
                >
                  {Object.keys(iconMap).map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5">customColor (Hex / RGBA)</label>
                <input
                  type="text"
                  value={playCustomColor}
                  onChange={(e) => setPlayCustomColor(e.target.value)}
                  placeholder="#ff0055"
                  className="w-full bg-[#03050a] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-mono focus:border-blue-500 outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-2 xl:col-span-1">
                <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1.5">gradient (Clases Tailwind)</label>
                <input
                  type="text"
                  value={playGradient}
                  onChange={(e) => setPlayGradient(e.target.value)}
                  placeholder="from-purple-500 to-pink-500"
                  className="w-full bg-[#03050a] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-mono focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-3">
              {[
                { label: "isAnimated (Hover FX)", state: playIsAnimated, setter: setPlayIsAnimated },
                { label: "ripple (Ondas Mecánicas)", state: playRipple, setter: setPlayRipple },
                { label: "fullWidth", state: playFullWidth, setter: setPlayFullWidth }
              ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer select-none group">
                  <input 
                    type="checkbox" 
                    checked={item.state} 
                    onChange={(e) => item.setter(e.target.checked)} 
                    className="rounded border-white/10 bg-[#03050a] text-blue-600 w-4 h-4 focus:ring-0 focus:ring-offset-0 transition-colors" 
                  />
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Canvas Preview & Code Block Output */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="relative bg-[#03050a] border border-white/5 rounded-2xl p-12 flex items-center justify-center min-h-[320px] shadow-inner overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.04),_transparent_65%)]" />
              <div className="absolute top-3 left-4 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500">Entorno de Renderizado</span>
              </div>
              
              <div className={playFullWidth ? "w-full" : "w-auto"}>
                <AvButton
                  variant={playVariant}
                  size={playSize}
                  fullWidth={playFullWidth}
                  isAnimated={playIsAnimated}
                  ripple={playRipple}
                  customColor={playCustomColor || null}
                  fontSize={playFontSize}
                  icon={iconMap[playIcon]}
                  gradient={playGradient || null}
                  onClick={() => addLog(`Instancia Playground ejecutada con variante: [${playVariant}]`)}
                >
                  Execute Command
                </AvButton>
              </div>
            </div>

            <CodeBlock code={generateDynamicCode()} language="jsx" />
          </div>
        </div>
      </section>

      {/* FLUXES & CONSOLE MONITOR */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Casos de Uso Avanzados</h2>
          <div className="bg-[#03050a] border border-white/5 rounded-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center min-h-[240px] shadow-xl relative">
            
            {/* Async Workflow */}
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Operación Asíncrona</span>
              <AvButton
                variant="scan"
                loadingText="DECRYPTING..."
                onClickAsync={async () => {
                  addLog("[ASYNC]: Conectando con los nodos periféricos...");
                  await new Promise(r => setTimeout(r, 2000));
                  addLog("[ASYNC]: Sincronización exitosa. Flujo completado.");
                }}
              >
                Trigger Async Load
              </AvButton>
            </div>

            <div className="hidden md:block h-20 w-px bg-white/5 justify-self-center" />

            {/* Smart Cart Workflow */}
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Smart Cart (Inmune)</span>
              <AvButton
                variant="glass"
                isCart
                autoCart
                cartDefaultText="ADD TO CART"
                cartSuccessText="✔ ADDED"
                onClick={() => addLog("[CART]: Objeto indexado al carrito automáticamente.")}
              />
            </div>

            <div className="hidden md:block h-20 w-px bg-white/5 justify-self-center" />

            {/* Manual Flux Workflow */}
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Ciclo de Estado Manual</span>
              <AvButton
                variant="terminal"
                isCart
                cartSuccess={cartSuccess}
                onClick={() => {
                  addLog("[MANUAL FLUX]: Iniciando ciclo secuencial...");
                  setCartSuccess(true);
                  setTimeout(() => {
                    setCartSuccess(false);
                    addLog("[MANUAL FLUX]: Reset de estado completado.");
                  }, 2500);
                }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Salida de Sistema</h2>
          <TerminalConsole logs={logs} />
        </div>
      </section>

      {/* MATRIX CATALOG */}
      <section className="space-y-6">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] text-center">
          Catálogo General de Manifestaciones Visuales
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { v: "base", name: "Minimal White", desc: "clean & scale" },
            { v: "dark", name: "Deep Space", desc: "glow + shadow" },
            { v: "ghost", name: "Invisible", desc: "slide underline" },
            { v: "outline", name: "Wireframe", desc: "pulse border" },
            { v: "glass", name: "Frosted", desc: "blur + scale" },
            { v: "scan", name: "Cyber Scan", desc: "shimmer" },
            { v: "terminal", name: "Shell", desc: "glitch" },
            { v: "pulse", name: "Pulsar", desc: "heartbeat" },
            { v: "glossy", name: "Chrome", desc: "reflection slide" },
            { v: "danger", name: "Hazard", desc: "shake" },
          ].map((item) => (
            <div key={item.v} className="bg-[#070a13] border border-white/5 p-6 rounded-2xl flex flex-col items-center gap-5 hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.05)] transition-all duration-300 group">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <AvButton
                  variant={item.v}
                  size="sm"
                  onClick={() => addLog(`Catálogo: Variante [${item.v}] accionada.`)}
                >
                  Test
                </AvButton>
              </div>
              <div className="text-center font-mono space-y-0.5">
                <p className="text-[11px] text-slate-200 font-bold tracking-tight">{item.v}</p>
                <p className="text-[9px] text-slate-500 uppercase tracking-wider">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API REFERENCE TABLE */}
      <section className="space-y-6 pt-6 border-t border-white/5">
        <div className="flex items-center gap-2">
          <FaBolt className="w-3.5 h-3.5 text-blue-500" />
          <h3 className="text-xs font-bold text-white uppercase tracking-widest">Especificaciones de la API</h3>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#03050a] shadow-xl">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-white/5 text-slate-500 uppercase tracking-wider bg-[#070a13] text-[10px]">
                <th className="px-6 py-4 font-bold">Propiedad</th>
                <th className="px-6 py-4 font-bold">Tipo</th>
                <th className="px-6 py-4 font-bold">Por Defecto</th>
                <th className="px-6 py-4 font-bold">Descripción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-400">
              {[
                { p: "variant", t: "string (10 variantes)", d: '"base"', de: "Aplica las configuraciones geométricas y microinteracciones de estilo." },
                { p: "size", t: '"sm" | "md" | "lg" | "xl"', d: '"md"', de: "Escala los valores estructurales de padding, altura intrínseca y fuentes." },
                { p: "onClickAsync", t: "() => Promise<any>", d: "-", de: "Manejador asíncrono con inyección automática de spin de carga interno." },
                { p: "isCart / autoCart", t: "boolean", d: "false", de: "Activa la mutación semántica a módulo de compra. autoCart emula la confirmación exitosa automáticamente." },
                { p: "ripple", t: "boolean", d: "true", de: "Activa las ondas expansivas dinámicas calculando las coordenadas locales del cursor." },
                { p: "gradient", t: "string (Utility classes)", d: "null", de: "Inyecta un degradado personalizado en el background (Ej: bg-gradient-to-r...)." },
                { p: "customColor / fontSize", t: "string", d: "null", de: "Sobrescribe directamente las propiedades de color perimetral y dimensiones tipográficas." }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4 text-blue-400 font-bold">{row.p}</td>
                  <td className="px-6 py-4 text-indigo-300 text-[11px]">{row.t}</td>
                  <td className="px-6 py-4 text-slate-500">{row.d}</td>
                  <td className="px-6 py-4 text-slate-300 font-sans text-[13px] leading-relaxed">{row.de}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ButtonsDocs;