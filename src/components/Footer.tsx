
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/80 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-heading">Sripriya Agarwal</h2>
            <p className="text-muted-foreground mt-2">Front-End Developer & ML Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/sripriyaagarwal16" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sripriya-agarwal-483475261/" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sripriyaagarwal70@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center md:justify-start">
            <a href="#home" className="text-muted-foreground hover:text-white transition-colors animated-underline">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-white transition-colors animated-underline">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-white transition-colors animated-underline">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-white transition-colors animated-underline">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-white transition-colors animated-underline">
              Contact
            </a>
          </nav>
          
          <p className="text-muted-foreground text-sm flex items-center">
            <span>© {2025} Sripriya Agarwal. All rights reserved.</span>
            <span className="inline-flex items-center ml-1">
              Made with <Heart size={14} className="mx-1 text-primary" /> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
