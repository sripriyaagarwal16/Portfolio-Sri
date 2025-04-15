
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold gradient-heading">Your Name</h2>
            <p className="text-gray-400 mt-2">Front-End Developer & ML Enthusiast</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-purple-light transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-purple-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-portfolio-purple-light transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap gap-6 mb-4 md:mb-0 justify-center md:justify-start">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-gray-500 text-sm flex items-center">
            <span>© {currentYear} Your Name. All rights reserved.</span>
            <span className="inline-flex items-center ml-1">
              Made with <Heart size={14} className="mx-1 text-portfolio-purple" /> 
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
