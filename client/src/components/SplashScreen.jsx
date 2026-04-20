import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinished }) => {
  const [text, setText] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  
  const fullText = "Avexly — Alexander Rivera | Portfolio 2026";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      setTimeout(() => setFadeOut(true), 1200);
        
         setTimeout(() => onFinished(), 2000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onFinished]);

  const styles = {
    container: {
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: '#020617', 
      color: '#f8fafc', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: fadeOut ? 0 : 1,
      filter: fadeOut ? 'blur(10px)' : 'none',
      transform: fadeOut ? 'scale(1.05)' : 'scale(1)',
    },
    brandContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    text: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif", 
      fontSize: '1.5rem',
      fontWeight: '300',
      letterSpacing: '0.1em',
      borderRight: '2px solid #3b82f6', 
      paddingRight: '8px',
      margin: 0
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes blink {
            50% { border-color: transparent }
          }
          h1 {
            animation: blink 0.8s step-end infinite;
          }
        `}
      </style>
      <div style={styles.brandContainer}>
        <h1 style={styles.text}>{text}</h1>
      </div>
    </div>
  );
};

export default SplashScreen;