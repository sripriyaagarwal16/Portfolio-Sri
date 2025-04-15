import { GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-[100px]"></div>

      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className="space-y-6 opacity-0 animate-fadeIn"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-2xl font-semibold text-primary">Who I Am</h3>
            <p className="text-lg text-muted-foreground">
              I'm a passionate developer with expertise in front-end development
              and machine learning. My journey in tech started with C++
              programming, and I've since expanded into web development with
              React.js and modern front-end technologies.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in creating clean, efficient, and user-friendly
              solutions that solve real-world problems. My background in both
              traditional programming and modern web technologies gives me a
              unique perspective on problem-solving and development.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source, or expanding my knowledge in
              artificial intelligence and machine learning.
            </p>
          </div>

          <div className="space-y-8">
            <div
              className="glass-card rounded-xl p-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">Bachelor of Technology</h4>
                  <p className="text-muted-foreground">IGDTUW • 2022-2026</p>
                </li>
                <li>
                  <h4 className="font-medium">ECE-AI </h4>
                  <p className="text-muted-foreground">Branch • 2022</p>
                </li>
              </ul>
            </div>

            <div
              className="glass-card rounded-xl p-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <h4 className="font-medium">AI/ML Intern</h4>
                  <p className="text-muted-foreground">
                    AI Club• 2023(June-July)
                  </p>
                </li>
                <li>
                  <h4 className="font-medium">Research Intern</h4>
                  <p className="text-muted-foreground">IGDTUW• 2024</p>
                  <p className="text-muted-foreground italic">
                    Paper published in ICDAM conference (indexed by Scopus)
                  </p>{" "}
                </li>
              </ul>
            </div>

            <div
              className="glass-card rounded-xl p-6 opacity-0 animate-fadeIn"
              style={{ animationDelay: "400ms" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold">Interests</h3>
              </div>
              <p className="text-muted-foreground">
                Artificial Intelligence,Machine Learning , Deep Learning , Web Development, Open Source, Data
                Science, Problem Solving, Learning New
                Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
