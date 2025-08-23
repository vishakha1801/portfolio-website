import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Clock } from 'lucide-react';

const ArticlesSection = () => {
  const articles = [
    {
      title: "The Art of Creative Coding: Finding Beauty in Logic",
      excerpt: "Exploring how programming can be a form of artistic expression, blending technical precision with creative vision to create meaningful digital experiences.",
      publishDate: "2 days ago",
      readTime: "8 min read",
      tags: ["Creative Coding", "Art", "Development"],
      featured: true,
      url: "#"
    },
    {
      title: "Design Systems as Living Art",
      excerpt: "How design systems can evolve like artistic movements, creating consistency while allowing for creative expression and innovation.",
      publishDate: "1 week ago",
      readTime: "6 min read",
      tags: ["Design Systems", "UX", "Process"],
      featured: true,
      url: "#"
    },
    {
      title: "Building Products with Soul",
      excerpt: "Why the most successful products aren't just functional—they're infused with personality, emotion, and human connection.",
      publishDate: "2 weeks ago",
      readTime: "10 min read",
      tags: ["Product", "Philosophy", "UX"],
      featured: false,
      url: "#"
    },
    {
      title: "The Intersection of AI and Creative Expression",
      excerpt: "Examining how artificial intelligence is reshaping creative processes while preserving the uniquely human aspects of artistic creation.",
      publishDate: "3 weeks ago",
      readTime: "12 min read",
      tags: ["AI", "Creativity", "Future"],
      featured: false,
      url: "#"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Thoughts & Insights
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology, creativity, and human experience 
            through writing and reflection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className={`glow-hover group cursor-pointer transition-all duration-300 ${
                article.featured 
                  ? 'bg-gradient-glow border-accent/30' 
                  : 'bg-card/50 hover:bg-card/70'
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishDate}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  {article.featured && (
                    <Badge variant="secondary" className="text-xs">Featured</Badge>
                  )}
                </div>
                
                <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="font-body text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-accent/30 text-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-accent hover:text-accent-foreground hover:bg-accent group-hover:translate-x-1 transition-transform"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-glow rounded-2xl p-8 max-w-2xl mx-auto glow-hover">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Subscribe to My Newsletter
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Get weekly insights on creative development, product thinking, and artistic exploration 
              delivered straight to your inbox.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground glow-hover font-body font-semibold"
            >
              Subscribe on Substack
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;