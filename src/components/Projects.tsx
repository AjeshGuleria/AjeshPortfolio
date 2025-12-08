import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    status: 'Production',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'Collaborative task management app with real-time updates, team collaboration features, and analytics dashboard.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
    status: 'Production',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool using advanced language models for creating marketing copy and blog posts.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    status: 'Beta',
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'Real-time Analytics Dashboard',
    description: 'Interactive dashboard for visualizing business metrics with real-time data processing and customizable widgets.',
    tech: ['React', 'TypeScript', 'D3.js', 'Redis'],
    status: 'Production',
    github: '#',
    live: '#'
  },
  {
    id: 5,
    title: 'Social Media API',
    description: 'RESTful API for social media platform with authentication, post management, and notification system.',
    tech: ['Express', 'MongoDB', 'JWT', 'Redis'],
    status: 'Production',
    github: '#',
    live: '#'
  },
  {
    id: 6,
    title: 'Portfolio Builder',
    description: 'No-code portfolio builder with drag-and-drop interface, custom themes, and one-click deployment.',
    tech: ['React', 'Node.js', 'AWS', 'Docker'],
    status: 'Development',
    github: '#',
    live: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-green-500" />
              <FolderGit2 className="w-6 h-6 text-green-500" />
              <h2 className="text-4xl md:text-5xl text-green-400 font-mono tracking-wider">
                <span className="text-green-500">&gt;</span> PROJECTS
              </h2>
              <FolderGit2 className="w-6 h-6 text-green-500" />
              <div className="h-px w-12 bg-green-500" />
            </div>
            <p className="text-green-400/60 font-mono text-sm">git log --all --projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="border border-green-500/30 rounded-lg overflow-hidden bg-gradient-to-br from-black/50 to-green-950/10 hover:from-green-950/30 hover:to-green-950/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_35px_rgba(0,255,0,0.25)] group hover:-translate-y-2"
              >
                {/* Project Header */}
                <div className="bg-green-950/30 px-4 py-3 border-b border-green-500/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70 group-hover:bg-yellow-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70 group-hover:bg-green-500 transition-colors" />
                    </div>
                    <span className="text-xs font-mono text-green-400/60 group-hover:text-green-400 transition-colors">
                      [{project.status.toUpperCase()}]
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl text-green-400 font-mono mb-3 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-green-400/70 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs font-mono px-3 py-1 border border-green-500/30 text-green-400/80 rounded-full bg-black/30 hover:bg-green-500/10 hover:border-green-500/50 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-green-500/20">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-mono text-green-400/80 hover:text-green-400 transition-colors group/link"
                    >
                      <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-sm font-mono text-green-400/80 hover:text-green-400 transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
                
                {/* Bottom border accent */}
                <div className="h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent group-hover:via-green-500 transition-all duration-500" />
              </div>
            ))}
          </div>
          
          {/* Terminal style note */}
          <div className="mt-16 border border-green-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-green-400/60 font-mono text-sm mb-3">
              <span className="text-green-500">$</span>
              <span>git log --all --oneline</span>
            </div>
            <div className="text-green-400/40 font-mono text-sm pl-4">
              &gt; More projects available on GitHub. Check back for updates...
            </div>
            <div className="mt-4 pt-4 border-t border-green-500/20">
              <a href="https://github.com" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-mono text-sm transition-colors group">
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View all repositories</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}