import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import painting1 from '@/assets/painting-1.jpg';
import painting2 from '@/assets/painting-2.jpg';
import painting3 from '@/assets/painting-3.jpg';

const ArtSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const artworks = [
    {
      id: 1,
      title: "Flowing Emotions",
      medium: "Digital Painting",
      category: "digital",
      image: painting1,
      description: "An exploration of movement and emotion through abstract brushstrokes."
    },
    {
      id: 2,
      title: "Geometric Harmony",
      medium: "Mixed Media",
      category: "abstract",
      image: painting2,
      description: "Finding balance in structured chaos and geometric relationships."
    },
    {
      id: 3,
      title: "Ethereal Dreams",
      medium: "Watercolor",
      category: "traditional",
      image: painting3,
      description: "Capturing the fleeting nature of dreams through watercolor techniques."
    },
    {
      id: 4,
      title: "Code Poetry",
      medium: "Digital Art",
      category: "digital",
      image: painting1,
      description: "Where programming logic meets artistic expression."
    },
    {
      id: 5,
      title: "Urban Abstracts",
      medium: "Acrylic",
      category: "abstract",
      image: painting2,
      description: "Abstract interpretations of city life and urban energy."
    },
    {
      id: 6,
      title: "Nature's Algorithms",
      medium: "Mixed Media",
      category: "traditional",
      image: painting3,
      description: "Discovering patterns and algorithms in natural forms."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'digital', label: 'Digital' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'traditional', label: 'Traditional' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <section id="art" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold mb-4">
            Artistic Expressions
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated collection of paintings and digital art exploring the intersection 
            of technology, emotion, and creative expression.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`font-body ${
                selectedCategory === category.id
                  ? 'bg-gradient-primary text-primary-foreground'
                  : 'border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Art Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredArtworks.map((artwork) => (
            <Card key={artwork.id} className="glow-hover overflow-hidden bg-card/50 border-accent/20 group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {artwork.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                      {artwork.medium}
                    </Badge>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {artwork.description}
                </p>
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
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtSection;