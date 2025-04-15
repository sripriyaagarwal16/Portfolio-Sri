
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-portfolio-purple/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-portfolio-teal/10 rounded-full blur-3xl animate-pulse-glow animation-delay-1000"></div>
      
      <div className="section-container flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 space-y-6 animate-fadeIn">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="gradient-heading">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300">
            Front-End Developer & Machine Learning Enthusiast
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            I design and build modern web applications, develop machine learning models, 
            and create elegant solutions to complex problems.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#about" 
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
            <a 
              href="#projects" 
              className="bg-white dark:bg-gray-800 border border-portfolio-purple px-6 py-3 rounded-full font-medium text-portfolio-purple hover:bg-portfolio-purple-light/10 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative animate-float">
          <div className="relative">
            {/* Abstract shapes around the illustration */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-portfolio-softYellow rounded-full animate-spin-slow opacity-70"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-portfolio-softPurple rounded-full animate-spin-slow opacity-70"></div>
            <div className="absolute top-1/4 -right-8 w-12 h-12 bg-portfolio-softGreen rounded-md rotate-12 animate-float opacity-70"></div>

            {/* This is a placeholder for the main illustration - you would replace this with an actual SVG or image */}
            <div className="relative w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-portfolio-purple-light to-portfolio-teal rounded-2xl p-8 flex items-center justify-center shadow-xl">
              <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(10, 10) scale(0.95)">
                  {/* Computer/laptop */}
                  <rect x="150" y="200" width="200" height="140" rx="5" fill="#333" />
                  <rect x="160" y="210" width="180" height="110" rx="2" fill="#6E59A5" />
                  <rect x="100" y="340" width="300" height="20" rx="5" fill="#444" />
                  
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
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block text-gray-500 dark:text-gray-400 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
