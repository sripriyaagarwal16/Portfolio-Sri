
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Machine Learning Image Classifier",
      description: "A sophisticated image classification system built with TensorFlow and Python, achieving 95% accuracy on test datasets.",
      image: "/placeholder.svg",
      category: ["machine-learning", "python"],
      technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React, featuring cart functionality, user authentication, and payment integration.",
      image: "/placeholder.svg",
      category: ["web", "react"],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "C++ Data Structure Visualization",
      description: "An educational tool that visualizes common data structures and algorithms implemented in C++.",
      image: "/placeholder.svg",
      category: ["cpp"],
      technologies: ["C++", "SFML", "CMake"],
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Real-time Chat Application",
      description: "A real-time messaging platform with features like typing indicators, read receipts, and file sharing.",
      image: "/placeholder.svg",
      category: ["web", "react"],
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Predictive Text Generator",
      description: "A machine learning model that generates text based on input prompts, trained on a diverse corpus of literature.",
      image: "/placeholder.svg",
      category: ["machine-learning", "python"],
      technologies: ["Python", "NLTK", "TensorFlow", "Transformers"],
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "/placeholder.svg",
      category: ["web", "react"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'react', name: 'React.js' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'cpp', name: 'C++' },
    { id: 'python', name: 'Python' },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-portfolio-purple text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover animate-fadeIn opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-portfolio-purple dark:hover:text-portfolio-purple-light"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-portfolio-purple rounded-full text-portfolio-purple hover:bg-portfolio-purple-light/10 transition-colors"
          >
            <span>View All Projects</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
