import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ScrollBackground } from './components/ScrollBackground';
import { MusashiLogo } from './components/MusashiLogo';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <div className="relative">
        {/* Navbar */}
        <Navbar />
        
        {/* Animated background effects */}
        <ScrollBackground />
        
        {/* Musashi Logo */}
        <MusashiLogo />
        
        {/* Scanline effect overlay */}
        <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse opacity-30" />
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}