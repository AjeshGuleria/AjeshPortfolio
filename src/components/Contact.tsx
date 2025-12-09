import { Mail, Github, Linkedin, Terminal, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-green-950/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-green-500" />
              <Terminal className="w-6 h-6 text-green-500" />
              <h2 className="text-4xl md:text-5xl text-green-400 font-mono tracking-wider">
                <span className="text-green-500">&gt;</span> CONNECT
              </h2>
              <Terminal className="w-6 h-6 text-green-500" />
              <div className="h-px w-12 bg-green-500" />
            </div>
            <p className="text-green-400/60 font-mono text-sm">./initiate-connection.sh</p>
          </div>
          
          {/* Terminal-style contact box */}
          <div className="border border-green-500/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.3)]">
            <div className="bg-green-950/30 px-4 py-3 flex items-center gap-2 border-b border-green-500/30 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors cursor-pointer" />
              </div>
              <span className="text-green-400/60 text-sm ml-2 font-mono">contact.sh</span>
            </div>
            
            <div className="p-8 md:p-12 bg-black/60 backdrop-blur-sm">
              <div className="space-y-6 font-mono">
                <div className="text-green-400/60 text-sm">
                  <span className="text-green-500">$</span> ./initiate_contact.sh
                </div>
                
                <div className="pl-4 space-y-3 border-l-2 border-green-500/30">
                  <p className="text-green-400/80 flex items-center gap-2">
                    &gt; Connection status: <span className="text-green-400 px-2 py-1 bg-green-500/20 rounded">READY</span>
                  </p>
                  <p className="text-green-400/80">
                    &gt; Let&apos;s collaborate on your next project!
                  </p>
                </div>
                
                {/* Contact Links */}
                <div className="pt-6 space-y-4">
                  <a 
                    href="mailto:ajeshguleria500@gmail.com"
                    className="flex items-center gap-4 p-5 border border-green-500/30 rounded-lg hover:bg-green-950/30 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] hover:border-green-500/50"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Mail className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="text-green-400 mb-1">Email</div>
                      <div className="text-green-400/60 text-sm break-all">ajeshguleria500@gmail.com</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-500/50 group-hover:text-green-500 transition-colors" />
                  </a>
                  
                  <a 
                    href="https://github.com/AjeshGuleria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-green-500/30 rounded-lg hover:bg-green-950/30 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] hover:border-green-500/50"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Github className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="text-green-400 mb-1">GitHub</div>
                      <div className="text-green-400/60 text-sm break-all">https://github.com/AjeshGuleria</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-500/50 group-hover:text-green-500 transition-colors" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/ajesh-guleria-731520245/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-green-500/30 rounded-lg hover:bg-green-950/30 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,255,0,0.2)] hover:border-green-500/50"
                  >
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Linkedin className="w-6 h-6 text-green-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1">
                      <div className="text-green-400 mb-1">LinkedIn</div>
                      <div className="text-green-400/60 text-sm break-all">www.linkedin.com/in/ajesh-guleria</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-green-500/50 group-hover:text-green-500 transition-colors" />
                  </a>
                </div>
                
                <div className="pt-6 text-green-400/40 text-sm space-y-2 border-t border-green-500/20">
                  <p className="flex items-center gap-2">
                    <span className="text-green-500">•</span>
                    Status: Available for freelance projects and full-time opportunities
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-green-500">•</span>
                    Response time: &lt; 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="inline-block border border-green-500/30 rounded-lg px-8 py-4 bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
              <p className="text-green-400/60 font-mono text-sm">
                <span className="text-green-500">&copy;</span> 2025 Ajesh Guleria
              </p>
              <p className="text-green-400/40 font-mono text-xs mt-1">
                Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
