import React, { forwardRef, useState } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import { FiCheck, FiShoppingCart } from 'react-icons/fi';

// Inyección de estilos globales para animaciones (keyframes)
const animationStyles = `
  @keyframes ripple {
    0% { transform: scale(0); opacity: 0.6; }
    100% { transform: scale(20); opacity: 0; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 1px); }
    40% { transform: translate(2px, -1px); }
    60% { transform: translate(-1px, 2px); }
    80% { transform: translate(1px, -2px); }
    100% { transform: translate(0); }
  }
  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    50% { transform: translateX(3px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
  .animate-ripple {
    animation: ripple 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
  }
  .animate-shimmer {
    animation: shimmer 1.5s infinite;
  }
  .group\\:animate-glitch:hover {
    animation: glitch 0.3s ease-in-out;
  }
  .group\\:animate-shake:hover {
    animation: shake 0.4s ease-in-out;
  }
`;

// Variantes con sus propias animaciones al hover (clases CSS)
const VARIANTS = {
  base: "bg-white text-black border-transparent hover:scale-105 hover:shadow-lg transition-all",
  dark: "bg-zinc-950 text-white border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_12px_#3b82f6] transition-all",
  ghost: "bg-transparent text-zinc-400 border-transparent hover:text-white relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0",
  outline: "bg-transparent text-zinc-200 border-zinc-800 hover:border-white hover:bg-white/5 hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all",
  glass: "bg-white/5 backdrop-blur-md border-white/10 text-white hover:bg-white/20 hover:backdrop-blur-xl hover:scale-105 transition-all",
  scan: "bg-zinc-900 text-[--color-ave-blue] border-blue-500/20 relative overflow-hidden hover:shadow-[0_0_10px_#3b82f6] before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent hover:before:animate-shimmer",
  terminal: "bg-black text-emerald-500 border-emerald-500/20 font-mono hover:bg-emerald-500/10 hover:animate-[glitch_0.3s_ease-in-out] transition-all",
  pulse: "bg-indigo-600 text-white border-transparent animate-pulse hover:animate-none hover:scale-105 hover:shadow-lg transition-all",
  glossy: "bg-gradient-to-b from-zinc-700 to-zinc-900 text-white border-zinc-600 relative overflow-hidden after:absolute after:inset-0 after:translate-y-full after:bg-gradient-to-t after:from-white/0 after:via-white/20 after:to-white/0 hover:after:translate-y-0 after:transition-transform after:duration-500",
  danger: "bg-transparent text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white hover:animate-[shake_0.4s_ease-in-out] transition-colors"
};

const sizeClasses = {
  sm: "px-4 py-2 text-[10px]",
  md: "px-6 py-3 text-[12px]",
  lg: "px-10 py-5 text-[14px]",
  xl: "px-14 py-7 text-[16px]"
};

const AvButton = forwardRef(({
  children,
  onClick,
  onClickAsync,
  variant = "base",
  gradient = null,
  icon: Icon = null,
  iconPosition = "left",
  className = "",
  style = {},
  size = "md",
  fontSize = "10px",
  customColor = null,
  fullWidth = false,
  isAnimated = true,       // aún se respeta, pero ahora cada variante tiene sus animaciones
  customAnimation = "",
  customHoverAnimation = "",
  ripple = true,
  isLoading = false,
  loadingText = "",
  isCart = false,
  cartSuccess = false,
  cartDefaultText = "ADD TO CART",
  cartSuccessText = "ADDED TO UNIT",
  // Nueva prop: autoCart - maneja automáticamente el estado de carga y éxito del carrito
  autoCart = false,
  ...props
}, ref) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [internalCartSuccess, setInternalCartSuccess] = useState(false);
  const [ripples, setRipples] = useState([]);

  const isActuallyLoading = isLoading || internalLoading;
  const isActuallyCartSuccess = cartSuccess || internalCartSuccess;

  // Inyectar las keyframes una sola vez (si no existen)
  React.useEffect(() => {
    if (!document.querySelector('#avbutton-animations')) {
      const styleTag = document.createElement('style');
      styleTag.id = 'avbutton-animations';
      styleTag.textContent = animationStyles;
      document.head.appendChild(styleTag);
    }
  }, []);

  const handleClick = async (e) => {
    if (isActuallyLoading || isActuallyCartSuccess || props.disabled) return;

    // Ripple
    if (ripple) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples(prev => [...prev, { x, y, id }]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    }

    // Auto-cart: simula agregar al carrito
    if (autoCart && isCart) {
      setInternalLoading(true);
      // Simular delay de "agregando..."
      await new Promise(resolve => setTimeout(resolve, 800));
      setInternalLoading(false);
      setInternalCartSuccess(true);
      setTimeout(() => setInternalCartSuccess(false), 1500);
      // Si hay onClick externo, también se ejecuta
      if (onClick) onClick(e);
      return;
    }

    if (onClickAsync) {
      setInternalLoading(true);
      try {
        await onClickAsync(e);
      } finally {
        setInternalLoading(false);
      }
    } else if (onClick) {
      onClick(e);
    }
  };

  const baseClasses = `
    group relative overflow-hidden transition-all duration-300 ease-out
    flex items-center justify-center gap-3 rounded-md border
    font-bold uppercase tracking-[0.2em] select-none
    active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none
    ${fullWidth ? 'w-full' : 'w-fit'}
    ${sizeClasses[size] || sizeClasses.md}
    ${gradient ? gradient : (VARIANTS[variant] || VARIANTS.base)}
    ${customAnimation}
    ${customHoverAnimation}
    ${className}
  `;

  const dynamicStyles = {
    fontSize: fontSize,
    borderColor: customColor ? `${customColor}50` : undefined,
    color: customColor || undefined,
    ...style
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={baseClasses}
      style={dynamicStyles}
      disabled={isActuallyLoading || isActuallyCartSuccess || props.disabled}
      {...props}
    >
      {/* Ripples dinámicos */}
      {ripple && ripples.map(r => (
        <span
          key={r.id}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none z-0"
          style={{
            width: '20px',
            height: '20px',
            top: r.y - 10,
            left: r.x - 10,
          }}
        />
      ))}

      {/* Contenido principal */}
      <span className="relative z-20 flex items-center justify-center gap-2 pointer-events-none">
        {isActuallyLoading ? (
          <>
            <BiLoaderAlt className="w-[1.3em] h-[1.3em] animate-spin text-inherit" />
            <span className="opacity-90">
              {loadingText || (isCart ? "AGREGANDO..." : "PROCESSING...")}
            </span>
          </>
        ) : isCart ? (
          isActuallyCartSuccess ? (
            <div className="flex items-center gap-2 text-emerald-400">
              <FiCheck className="w-[1.3em] h-[1.3em] stroke-[3]" />
              <span>{cartSuccessText}</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <FiShoppingCart className="w-[1.3em] h-[1.3em] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 duration-300" />
              <span>{children || cartDefaultText}</span>
            </div>
          )
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon className="w-[1.2em] h-[1.2em] transition-transform group-hover:scale-110 duration-300" />
            )}
            <span>{children}</span>
            {Icon && iconPosition === "right" && (
              <Icon className="w-[1.2em] h-[1.2em] transition-transform group-hover:scale-110 duration-300" />
            )}
          </>
        )}
      </span>

      {/* Bisel decorativo */}
      <div className="absolute top-0 left-0 w-full h-full border-t border-white/5 pointer-events-none z-40" />
    </button>
  );
});

AvButton.displayName = 'AvButton';

export default AvButton;