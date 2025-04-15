
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import sleep from '../assets/sleep.png';
import ardhnaari from '../assets/Ardhnaari.png'
import shesync from "../assets/SheSync.png"
import dsa from "../assets/DSA.png"
import sarcasm from "../assets/Sarcasm.png"
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
      title: "Sleep Detection Cycle using BiLSTM-GCN",
      description: "This research aims to investigate the detection of neurological abnormalities in EEG data using a dataset containing EEG signals and provided sleep stage annotations. Leveraging comprehensive EEG recordings with accompanying sleep stage annotations, the study seeks to identify abnormal EEG patterns indicative of neurological dysfunction within the context of sleep stages. ",
      image: sleep,
      category: ["machine-learning", "python"],
      technologies: ["Python", "TensorFlow", "Keras", "NumPy","Machine Learning", "Deep Learning"],
      githubUrl: "https://github.com/sripriyaagarwal16/Detecting-stages-of-sleep",
    },
    {
      id: 2,
      title: "Ardh Naari Shakti",
      description: "Our platform is a safe and inclusive digital space dedicated to empowering the transgender community through technology and community-driven support. It offers a confidential chatbot for guidance, a hub for job opportunities to promote economic independence, a safe spaces locator for those facing rejection or discrimination, and a moderated blog section for sharing personal stories and building community. By addressing key challenges faced by transgender individuals, the platform fosters dignity, resilience, and belonging, while contributing to the broader goal of peace, justice, and strong institutions.",
      image: ardhnaari,
      category: ["web", "react"],
      technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/sripriyaagarwal16/Ardh-Naari-Shakti",
      liveUrl: " https://ardhnaarishaktitaara.netlify.app",
    },
    {
      id: 3,
      title: "NADA Sentinel",
      description: "NADA Sentinel is a comprehensive anti-doping investigation platform developed during (SIH) 2024 for the SportsMinistry of India. It integrates AI-powered models for analyzing forensic reports, audio testimonies, and imageevidence to help streamline and support the anti-doping investigation process.The system ensures whistleblower protection and role-based access for Admins, Analysts, and Investigators,all while maintaining complete anonymity and case integrity.",
      image: "https://img.manoramayearbook.in/content/dam/yearbook/learn/world/images/2024/may/nada.jpg",
      category: ["web","react","machine-learning"],
      technologies: ["Python", "TensorFlow", "Keras", "NumPy","Machine Learning","React", "Redux", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/sripriyaagarwal16/AntiDoping",
    },
    {
      id: 4,
      title: "She-Sync",
      description: "SheSync is a comprehensive women's health platform designed to empower users with personalized menstrual health tracking, education, and support. Our platform combines AI-powered insights with community features to create a holistic approach to menstrual wellness.",
      image: shesync,
      category: ["web", "react","Tensorflow"],
      technologies: ["React", "Socket.io", "Express", "MongoDB","Typescript","Google Map Api ","Tensorflow","Gemini"],
      githubUrl: "https://github.com/divi-24/Google-Solution2K25",
      liveUrl: "https://shesync.netlify.app/",
    },
    {
      id: 5,
      title: "DSA Basic to hard Level",
      description: " This github is here with all the different data structures of DSA,their algorithms and some solutions to problems.I hope this might help you guys...",
      image: dsa,
      category: ["cpp"],
      technologies: ["cpp"],
      githubUrl: "https://github.com/sripriyaagarwal16/DSA-Basic_to_hard_level",
    },
    {
      id: 6,
      title: "Model Comparison for Sarcasm Detection",
      description: "This project focuses on comparison between different AI-models that can be used to detect the twitter sarcastic text..We have compared all the models including ADASYN,LSTM and Bagging Random Forest.ADASYN (Adaptive Synthetic Sampling):Description: ADASYN is an oversampling technique used to balance imbalanced datasets. In the context of sarcasm detection, it might be applied to address the class imbalance issue if sarcastic and non-sarcastic tweets are not evenly distributed.Application: ADASYN can be used to generate synthetic examples of the minority class (sarcastic tweets) to improve the model's ability to detect sarcasm in an imbalanced dataset.",
      image: sarcasm,
      category: ["machine-learning", "python"],
      technologies: ["Machine Learning","Python","ADASYN","LSTM","Bagging Random Forest"],
      githubUrl: "https://github.com/sripriyaagarwal16/Model-Comparison-Sarcasm-Detection",
      
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
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-primary text-white'
                  : 'glass-card text-muted-foreground hover:text-white'
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
              className="glass-card rounded-xl overflow-hidden card-hover opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 bg-secondary/30 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-secondary/50 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
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
                      className="flex items-center gap-1 text-muted-foreground hover:text-primary"
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
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-primary hover:text-white hover:bg-primary/20 transition-colors"
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
