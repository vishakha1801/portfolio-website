import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Linkedin, Github, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Let's Create Together
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking for a developer, collaborating on art, or just want to chat 
            about the intersection of technology and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="glow-hover bg-gradient-glow border-accent/30">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium">Name</label>
                    <Input 
                      placeholder="Your name" 
                      className="bg-background/50 border-accent/30 focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-sm font-medium">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background/50 border-accent/30 focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium">Subject</label>
                  <Input 
                    placeholder="What's this about?" 
                    className="bg-background/50 border-accent/30 focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-body text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or idea..." 
                    rows={5}
                    className="bg-background/50 border-accent/30 focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary text-primary-foreground glow-hover font-body font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-semibold">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg glow-hover border border-accent/20">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-body font-medium">Email</p>
                    <p className="font-body text-sm text-muted-foreground">hello@portfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-card/50 rounded-lg glow-hover border border-secondary/20">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-body font-medium">Let's Chat</p>
                    <p className="font-body text-sm text-muted-foreground">Available for collaborations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-display text-xl font-semibold">
                Connect with Me
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-3 p-4 h-auto border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground glow-hover"
                >
                  <Linkedin className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">LinkedIn</p>
                    <p className="text-xs opacity-70">Professional</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-3 p-4 h-auto border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground glow-hover"
                >
                  <Github className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">GitHub</p>
                    <p className="text-xs opacity-70">Code</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-3 p-4 h-auto border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground glow-secondary"
                >
                  <Twitter className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Twitter</p>
                    <p className="text-xs opacity-70">Thoughts</p>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-3 p-4 h-auto border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground glow-secondary"
                >
                  <Mail className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Substack</p>
                    <p className="text-xs opacity-70">Writing</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;