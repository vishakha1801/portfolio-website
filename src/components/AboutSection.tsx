import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Where Code Meets Canvas
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="glow-hover bg-card/50 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-accent">
                    👨‍💻 The Developer
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    Passionate about creating intuitive digital experiences with modern technologies. 
                    I specialize in React, TypeScript, and product development, always seeking 
                    innovative solutions that push boundaries.
                  </p>
                </CardContent>
              </Card>

              <Card className="glow-hover bg-card/50 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl font-semibold mb-4 text-secondary">
                    🎨 The Artist
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring colors, textures, and emotions 
                    through traditional and digital art. My artistic practice informs my design 
                    sensibilities and creative problem-solving approach.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-glow rounded-2xl p-8 glow-hover">
                <h3 className="font-display text-2xl font-semibold mb-4">
                  The Intersection
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  I believe the best digital products are born from the marriage of technical 
                  excellence and creative vision. This unique perspective allows me to create 
                  solutions that are not just functional, but truly inspiring.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Tech Stack</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>React & TypeScript</li>
                      <li>Node.js & Python</li>
                      <li>Design Systems</li>
                      <li>Product Strategy</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Art Mediums</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Digital Painting</li>
                      <li>Abstract Art</li>
                      <li>Mixed Media</li>
                      <li>Creative Writing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;