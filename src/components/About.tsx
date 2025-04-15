
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 animate-fadeIn opacity-0" style={{ animationDelay: '100ms' }}>
            <h3 className="text-2xl font-semibold">Who I Am</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I'm a passionate developer with expertise in front-end development and machine learning.
              My journey in tech started with C++ programming, and I've since expanded into web development
              with React.js and modern front-end technologies.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I believe in creating clean, efficient, and user-friendly solutions that solve real-world
              problems. My background in both traditional programming and modern web technologies gives
              me a unique perspective on problem-solving and development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or expanding my knowledge in artificial intelligence and machine learning.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover animate-fadeIn opacity-0" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-portfolio-softPurple text-portfolio-purple">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Bachelor of Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">University Name • 2018-2022</p>
                </li>
                <li>
                  <h4 className="font-medium">Machine Learning Specialization</h4>
                  <p className="text-gray-600 dark:text-gray-400">Online Platform • 2022</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover animate-fadeIn opacity-0" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-portfolio-softGreen text-portfolio-purple">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Front-End Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">Company Name • 2022-Present</p>
                </li>
                <li>
                  <h4 className="font-medium">Machine Learning Intern</h4>
                  <p className="text-gray-600 dark:text-gray-400">Company Name • 2021</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md card-hover animate-fadeIn opacity-0" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-portfolio-softYellow text-portfolio-purple">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Artificial Intelligence, Web Development, Open Source, Data Science, UI/UX Design, 
                Problem Solving, Learning New Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
