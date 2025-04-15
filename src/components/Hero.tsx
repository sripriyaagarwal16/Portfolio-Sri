import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-black to-background">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow animation-delay-1000"></div>
      
      <div className="section-container flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-20">
        <div className="w-full lg:w-1/2 space-y-6 animate-fadeIn z-10">
          <p className="text-primary font-semibold">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Your Name
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
            I build things for the web & AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products
            using cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-8">
            <Button 
              className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md"
              size="lg"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md"
              size="lg"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:youremail@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative animate-float z-10">
          <div className="glass-card rounded-2xl p-8 backdrop-blur-lg bg-white/5 border border-white/10 shadow-xl">
            <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(10, 10) scale(0.95)">
                {/* Computer/laptop */}
                <rect x="150" y="200" width="200" height="140" rx="5" fill="#222" />
                <rect x="160" y="210" width="180" height="110" rx="2" fill="#6E59A5" />
                <rect x="100" y="340" width="300" height="20" rx="5" fill="#333" />
                
                {/* Girl */}
                <circle cx="250" cy="160" r="40" fill="#FEC6A1" /> {/* Head */}
                <path d="M230 150 Q250 170 270 150" stroke="#333" strokeWidth="2" fill="none" /> {/* Smile */}
                <circle cx="235" cy="145" r="5" fill="#333" /> {/* Left eye */}
                <circle cx="265" cy="145" r="5" fill="#333" /> {/* Right eye */}
                
                {/* Hair */}
                <path d="M250 120 Q220 130 220 160 Q220 180 240 190 L250 190 Q280 185 280 160 Q280 130 250 120" fill="#333" />
                
                {/* Body */}
                <path d="M250 200 L230 260 L270 260 Z" fill="#9b87f5" /> {/* Dress/top */}
                <rect x="240" y="260" width="20" height="40" rx="5" fill="#FEC6A1" /> {/* Hand */}
                
                {/* Code on screen */}
                <path d="M180 230 L220 230 M180 250 L230 250 M180 270 L210 270" stroke="#FFFFFF" strokeWidth="2" />
                <path d="M240 230 L260 230 M240 250 L280 250 M240 270 L270 270" stroke="#F2FCE2" strokeWidth="2" />
              </g>
              
              {/* Animated elements */}
              <circle cx="320" cy="180" r="15" fill="#E5DEFF" opacity="0.7">
                <animate attributeName="cy" values="180;160;180" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="320" r="10" fill="#FEF7CD" opacity="0.7">
                <animate attributeName="cy" values="320;300;320" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
