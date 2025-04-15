
import { useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'language' | 'ml';
  icon: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Machine Learning', level: 85, category: 'ml', icon: '🧠' },
    { name: 'C++', level: 90, category: 'language', icon: '⚙️' },
    { name: 'React.js', level: 95, category: 'frontend', icon: '⚛️' },
    { name: 'HTML & CSS', level: 95, category: 'frontend', icon: '🎨' },
    { name: 'JavaScript', level: 90, category: 'language', icon: '📜' },
    { name: 'TypeScript', level: 85, category: 'language', icon: '📘' },
    { name: 'Python', level: 80, category: 'language', icon: '🐍' },
    { name: 'Data Analysis', level: 75, category: 'ml', icon: '📊' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: '💨' },
    { name: 'Git & GitHub', level: 85, category: 'backend', icon: '🔄' },
    { name: 'Responsive Design', level: 95, category: 'frontend', icon: '📱' },
    { name: 'UI/UX Design', level: 80, category: 'frontend', icon: '🎯' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const skillBars = document.querySelectorAll('.skill-bar-fill');
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight) {
          const width = bar.getAttribute('data-width');
          (bar as HTMLElement).style.width = width + '%';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Front-End' },
    { id: 'language', name: 'Languages' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'backend', name: 'Other' },
  ];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-gradient-to-b from-background to-black/50">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I've developed a diverse skill set throughout my journey as a developer.
              Here's an overview of my technical skills and competencies:
            </p>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 gradient-heading">Skill Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 gradient-heading">Technical Strengths</h3>
              <ul className="space-y-2 pl-5 list-disc text-muted-foreground">
                <li>Building responsive, modern React applications</li>
                <li>Developing and training machine learning models</li>
                <li>Creating efficient algorithms in C++ and Python</li>
                <li>Implementing clean, maintainable code</li>
                <li>Data analysis and visualization</li>
                <li>Problem-solving and optimization</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="opacity-0 animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <h4 className="font-medium">{skill.name}</h4>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="skill-bar-fill h-full w-0 transition-all duration-1000 ease-out"
                    data-width={skill.level}
                    style={{ 
                      width: '0%',
                      backgroundImage: 'linear-gradient(to right, var(--primary), var(--accent))'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
