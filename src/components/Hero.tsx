import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// ✅ TypingEffect component moved OUTSIDE Hero
const TypingEffect = () => {
  const phrases = ["web", "AI"];
  const [text, setText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex]);

  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
      I build things for the <span className="text-primary">{text}|</span>
    </h2>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-b from-black to-background"
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[100px] animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-[100px] animate-pulse-glow animation-delay-1000"></div>

      <div className="section-container flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-20">
        <div className="w-full lg:w-1/2 space-y-6 animate-fadeIn z-10">
          <h2 className="text-2xl text-primary font-semibold">
            Hello, my name is
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Sripriya Agarwal
          </h1>

          {/* ✅ Use TypingEffect here */}
          <TypingEffect />

          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm a developer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products using cutting-edge technologies.
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
              className="border-primary text-white hover:bg-primary/10 px-6 py-3 rounded-md"
              size="lg"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <a
              href="https://github.com/sripriyaagarwal16"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/sripriya-agarwal-483475261/"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:sripriyaagarwal70@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative animate-float z-10 flex justify-center items-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"
            alt="Floating GIF"
            className="w-[400px] h-[400px] object-contain mix-blend-multiply"
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <a
          href="#about"
          className="block text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
