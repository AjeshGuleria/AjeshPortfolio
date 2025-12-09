import { Terminal, Code2, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Matrix-style background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal-style header */}
          <div className="border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.3)] hover:shadow-[0_0_70px_rgba(0,255,0,0.4)] transition-all duration-500">
            <div className="bg-green-950/30 px-4 py-3 flex items-center gap-2 border-b border-green-500/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
              </div>
              <span className="text-green-400/60 text-sm ml-2 font-mono">ajesh@portfolio:~$</span>
            </div>
            
            <div className="p-8 md:p-16 bg-black/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-8 text-green-400/80">
                <Terminal className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-mono">&gt; executing portfolio.sh...</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-green-500/60 font-mono text-sm mb-2"># Developer Profile</div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl text-green-400 tracking-wider font-mono animate-glow">
                    AJESH GULERIA
                  </h1>
                </div>
                
                <div className="flex items-center gap-3 text-2xl md:text-3xl text-green-300">
                  <span className="text-green-500 text-xl">&gt;</span>
                  <span className="font-mono">{text}</span>
                  <span className="w-3 h-7 bg-green-400 animate-pulse" />
                </div>
                
                <p className="text-green-400/70 text-lg md:text-xl max-w-3xl font-mono leading-relaxed">
                  <span className="text-green-500">//</span> Crafting elegant solutions through code. Building scalable applications with modern technologies and clean architecture.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-8">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group relative px-8 py-4 border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 font-mono flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_35px_rgba(0,255,0,0.6)] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-green-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    <Code2 className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">View Projects</span>
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 border border-green-500/50 text-green-400/80 hover:border-green-500 hover:text-green-400 hover:bg-green-500/10 transition-all duration-300 font-mono flex items-center gap-2"
                  >
                    <Cpu className="w-5 h-5" />
                    Contact Me
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-green-500/20">
                  <div className="text-center">
                    <div className="text-3xl font-mono text-green-400">1+</div>
                    <div className="text-xs font-mono text-green-400/60">Years Exp</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-green-400">Neet</div>
                    <div className="text-xs font-mono text-green-400/60">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-mono text-green-400">100%</div>
                    <div className="text-xs font-mono text-green-400/60">Dedication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating icons */}
          <div className="absolute top-10 right-10 text-green-500/10 animate-pulse">
            <Code2 className="w-32 h-32" />
          </div>
          <div className="absolute bottom-10 left-10 text-green-500/10 animate-pulse delay-150">
            <Terminal className="w-24 h-24" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
