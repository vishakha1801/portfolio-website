import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Design System",
      description: "A comprehensive design system with AI-generated components and automated documentation. Built with React, TypeScript, and modern design principles.",
      tags: ["React", "TypeScript", "AI", "Design Systems"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Interactive Data Visualization",
      description: "Beautiful, responsive data visualizations that tell compelling stories. Combining D3.js with React for seamless user experiences.",
      tags: ["React", "D3.js", "Data Viz", "UX"],
      demoUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Creative Portfolio Platform",
      description: "A platform for artists and creators to showcase their work with stunning galleries and interactive features.",
      tags: ["Full Stack", "Next.js", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Mindfulness Mobile App",
      description: "A React Native app combining meditation, art therapy, and progress tracking for mental wellness.",
      tags: ["React Native", "Wellness", "Mobile", "UX/UI"],
      demoUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of products and experiences that blend technical innovation 
            with creative design thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`glow-hover transition-all duration-300 ${
                project.featured 
                  ? 'md:col-span-1 bg-gradient-glow border-accent/30' 
                  : 'bg-card/50'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="font-display text-xl mb-2 flex items-center gap-2">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">Featured</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="font-body text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-accent/30 text-accent"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-secondary"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;