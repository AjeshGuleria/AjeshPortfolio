import { Code, Database, Cloud, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS']
  },
  {
    icon: Database,
    title: 'Backend',
    skills: ['Node.js','laravel', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'Git', 'aa pannel', 'c pannel', 'Linux', 'Nginx']
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['VS Code', 'Postman', 'Figma', 'npm/yarn']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-green-950/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-green-500" />
              <Code className="w-6 h-6 text-green-500" />
              <h2 className="text-4xl md:text-5xl text-green-400 font-mono tracking-wider">
                <span className="text-green-500">&gt;</span> TECH_STACK
              </h2>
              <Code className="w-6 h-6 text-green-500" />
              <div className="h-px w-12 bg-green-500" />
            </div>
            <p className="text-green-400/60 font-mono text-sm">import {'{'} skills {'}'} from './developer'</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="border border-green-500/30 rounded-lg bg-gradient-to-br from-black/50 to-green-950/10 hover:from-green-950/30 hover:to-green-950/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] group overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-green-500/20">
                      <div className="p-2 bg-green-500/10 rounded group-hover:bg-green-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-green-300 font-mono text-lg">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-center gap-2 group/item hover:translate-x-1 transition-transform"
                        >
                          <span className="text-green-500 text-xs">&gt;</span>
                          <span className="text-green-400/80 font-mono text-sm group-hover/item:text-green-400 transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated gradient border */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent group-hover:via-green-500 transition-all duration-500" />
                </div>
              );
            })}
          </div>
          
          {/* Command line style footer */}
          <div className="mt-16 border border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm font-mono text-sm">
            <div className="flex items-center gap-2 text-green-400/60 mb-3">
              <span className="text-green-500">$</span>
              <span>npm list --skills --depth=0</span>
            </div>
            <div className="text-green-400/40 pl-4">
              &gt; Continuously expanding knowledge base and exploring new technologies...
            </div>
            <div className="text-green-500/60 text-xs mt-3 pl-4">
              [INFO] Last updated: 2025-12-05
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
