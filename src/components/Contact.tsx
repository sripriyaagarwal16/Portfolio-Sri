
import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-b from-black/50 to-background">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[100px]"></div>
      
      <div className="section-container relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? Feel free to reach out!
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">Email</h3>
                  <p className="text-muted-foreground">sripriyaagarwal70@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent">
                  <Linkedin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">LinkedIn</h3>
                  <p className="text-muted-foreground">https://www.linkedin.com/in/sripriya-agarwal-483475261/</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Github size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">GitHub</h3>
                  <p className="text-muted-foreground">https://github.com/sripriyaagarwal16</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 gradient-heading">Let's Connect</h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media or check out my work:
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/sripriyaagarwal16" 
                  className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sripriya-agarwal-483475261/" 
                  className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:sripriyaagarwal70@gmail.com" 
                  className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-8 opacity-0 animate-fadeIn" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-secondary/30 border-secondary/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-muted-foreground">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-secondary/30 border-secondary/50 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-muted-foreground">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi, I'd like to talk about..."
                  rows={5}
                  required
                  className="bg-secondary/30 border-secondary/50 focus:border-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
