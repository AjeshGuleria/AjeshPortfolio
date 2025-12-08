import { useEffect, useState } from 'react';

export function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [matrixChars, setMatrixChars] = useState<Array<{ id: number; x: number; speed: number; chars: string[] }>>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate matrix rain columns
    const columns = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: (i * 5) + (Math.random() * 3),
      speed: 0.5 + Math.random() * 1,
      chars: Array.from({ length: 15 }, () => 
        String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
      )
    }));
    setMatrixChars(columns);
  }, []);

  return (
    <>
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        {matrixChars.map((column) => (
          <div
            key={column.id}
            className="absolute animate-matrix-fall"
            style={{
              left: `${column.x}%`,
              animationDuration: `${10 / column.speed}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {column.chars.map((char, i) => (
              <div
                key={i}
                className="text-green-500 font-mono text-sm opacity-50"
                style={{
                  textShadow: '0 0 5px rgba(0, 255, 0, 0.5)',
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Parallax Grid Lines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Floating Particles */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.02) 50%)',
          backgroundSize: '100% 4px',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
    </>
  );
}
