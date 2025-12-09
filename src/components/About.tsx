import { User, Briefcase, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-green-500" />
              <User className="w-6 h-6 text-green-500" />
              <h2 className="text-4xl md:text-5xl text-green-400 font-mono tracking-wider">
                <span className="text-green-500">&gt;</span> ABOUT_ME
              </h2>
              <User className="w-6 h-6 text-green-500" />
              <div className="h-px w-12 bg-green-500" />
            </div>
            <p className="text-green-400/60 font-mono text-sm">const developer = {'{'} ...profile {'}'}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div className="border border-green-500/30 p-8 rounded-lg bg-gradient-to-br from-green-950/20 to-green-950/5 hover:from-green-950/30 hover:to-green-950/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] group">
              <div className="flex items-center gap-2 mb-6 text-green-300">
                <span className="text-green-500 font-mono">$</span>
                <span className="font-mono text-lg">whoami</span>
                <div className="h-px flex-1 bg-green-500/30 ml-4" />
              </div>
              <p className="text-green-400/90 leading-relaxed font-mono">
                Passionate full stack developer with expertise in building modern web applications. I specialize in creating efficient, scalable solutions that solve real-world problems. My approach combines clean code practices with innovative thinking to deliver exceptional user experiences.
              </p>
              <div className="mt-6 pt-6 border-t border-green-500/20">
                <div className="flex items-center gap-2 text-green-400/70 font-mono text-sm">
                  <span className="text-green-500">•</span>
                  <span>Likes to debug</span>
                </div>
                <div className="flex items-center gap-2 text-green-400/70 font-mono text-sm mt-2">
                  <span className="text-green-500">•</span>
                  <span>Continuous learner</span>
                </div>
              </div>
            </div>
            
            {/* Experience */}
            <div className="border border-green-500/30 p-8 rounded-lg bg-gradient-to-br from-green-950/20 to-green-950/5 hover:from-green-950/30 hover:to-green-950/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] group">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-5 h-5 text-green-500" />
                <span className="font-mono text-green-300 text-lg">Experience</span>
                <div className="h-px flex-1 bg-green-500/30 ml-4" />
              </div>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-green-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-green-500 rounded-full" />
                  <div className="text-green-400 font-mono">Full Stack Development</div>
                  <div className="text-green-400/60 font-mono text-sm mt-1">&gt; Building end-to-end applications</div>
                </div>
                <div className="relative pl-6 border-l-2 border-green-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-green-500 rounded-full" />
                  <div className="text-green-400 font-mono">Modern Frameworks</div>
                  <div className="text-green-400/60 font-mono text-sm mt-1">&gt; React, Node.js, and more</div>
                </div>
                <div className="relative pl-6 border-l-2 border-green-500/30">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-green-500 rounded-full" />
                  <div className="text-green-400 font-mono">Database Design</div>
                  <div className="text-green-400/60 font-mono text-sm mt-1">&gt; SQL & NoSQL solutions</div>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="md:col-span-2 border border-green-500/30 p-8 rounded-lg bg-gradient-to-br from-green-950/20 to-green-950/5 hover:from-green-950/30 hover:to-green-950/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-green-500" />
                <span className="font-mono text-green-300 text-lg">Core Competencies</span>
                <div className="h-px flex-1 bg-green-500/30 ml-4" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Problem Solving', 'Clean Code', 'Team Collaboration', 'Continuous Learning'].map((item) => (
                  <div key={item} className="text-center p-4 border border-green-500/20 rounded bg-black/30 hover:bg-black/50 hover:border-green-500/40 transition-all duration-300 group cursor-pointer">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">✓</div>
                    <span className="text-green-400/80 font-mono text-sm group-hover:text-green-400 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
