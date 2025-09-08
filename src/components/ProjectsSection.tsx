import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  demoLabel?: string;
  githubUrl?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "VigilantAI (CMU)",
    description:
      "Transformer-based super-resolution (PyTorch, OpenCV) to enhance low-quality CCTV footage for crime detection; improved facial recognition accuracy by ~40%.",
    tags: ["PyTorch", "OpenCV", "Super-Resolution", "Computer Vision", "CMU"],
    demoUrl: "#", // replace with demo
    githubUrl: "#", // replace with repo
    featured: true,
  },
  {
    title: "Moodify — Demo",
    description:
      "Music recommender that collects preferences via a multi-step flow and suggests playable tracks using Spotify API; state managed with React Hooks.",
    tags: ["React", "Spotify API", "Hooks", "UX"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "HashChat",
    description:
      "Blockchain-backed messaging where messages are intentionally corrupted in transit; receiver verifies integrity using RSA and SHA-256 (transport via Pusher).",
    tags: ["Blockchain", "Security", "RSA", "SHA-256", "Pusher"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Glow Artistry — Chrome Extension",
    description:
      "Manifest v3 extension with a React options page and glasmorphic UI. Quick-launch palette, theme tokens, sync storage, and keyboard shortcuts for a focused new-tab workflow.",
    tags: ["Chrome Extension", "Manifest v3", "React", "TypeScript"],
    demoUrl: "#", // put Chrome Web Store link here when ready
    demoLabel: "Web Store",
    githubUrl: "#",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 font-nice">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]" />
          <h2 className="text-4xl font-semibold text-[var(--ink-1)]">Projects</h2>
          <p className="text-lg text-[var(--ink-2)] max-w-2xl mx-auto">
            Real work where engineering meets creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <Card key={i} className="glass pop-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2 flex items-center gap-2">
                      {p.title}
                      {p.featured && (
                        <span className="text-xs rounded bg-rose-50/80 px-2 py-0.5 text-[var(--accent-1)]">
                          Featured
                        </span>
                      )}
                    </CardTitle>
                    <CardDescription className="text-[var(--ink-2)]">
                      {p.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge
                      key={t}
                      variant="outline"
                      className="text-xs border-white/60 text-[var(--ink-1)]"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.demoUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
                      disabled={p.demoUrl === "#"}
                    >
                      <a href={p.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {p.demoLabel || "Live Demo"}
                      </a>
                    </Button>
                  )}

                  {p.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
                      disabled={p.githubUrl === "#"}
                    >
                      <a href={p.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass btn-accent-hover border border-white/60 text-[var(--ink-1)]"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
