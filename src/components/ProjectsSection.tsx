import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      "Built a transformer-based super-resolution model (PyTorch, OpenCV) to enhance CCTV footage for crime detection; improved facial recognition accuracy by ~40%.",
    tags: ["PyTorch", "OpenCV", "Super-Resolution", "Computer Vision", "CMU"],
    // no live/demo links
    featured: true,
  },
  {
    title: "Moodify",
    description:
      "Music recommendation app that gathers preferences through a guided flow and suggests tracks using the Spotify API. State management handled with React Hooks.",
    tags: ["React", "Spotify API", "Hooks", "UX"],
    // demoUrl: "#",  // no live demo yet
    githubUrl: "https://github.com/vishakha1801/Moodify",
  },
  {
    title: "HashChat",
    description:
      "Prototype of a blockchain-backed messaging app where messages are corrupted in transit and validated by the receiver using RSA and SHA-256.",
    tags: ["Blockchain", "Security", "RSA", "SHA-256", "Pusher"],
    // no live/demo links
  },
  {
    title: "LeetCode Tracker",
    description:
      "Full-stack tool to track and visualize LeetCode practice progress with filtering, tagging, and analytics dashboards.",
    tags: ["React", "TypeScript", "Analytics", "LeetCode"],
    githubUrl: "https://github.com/vishakha1801/leetcode-tracker",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mouse-glow relative py-28 font-nice">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-kicker">Selected Work</div>
          <h2 className="script-accent mt-6 text-4xl leading-snug text-[var(--ink-1)] md:text-5xl">
            Personal Projects
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-2)]">
            A selection of projects I have built focusing on real world problems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="glass pop-glow h-full border border-white/60 p-6 transition-all duration-300"
            >
              <CardHeader className="space-y-4 p-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-[var(--ink-1)]">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <span className="rounded-full bg-white/70 px-3 py-1 text-xs uppercase tracking-[0.32em] text-[var(--accent-1)]">
                      Featured
                    </span>
                  )}
                </div>
                <CardDescription className="text-base leading-relaxed text-[var(--ink-2)]">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-6 space-y-6 p-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="project-tag rounded-full border-white/60 bg-white/55 px-3 py-1 text-xs uppercase tracking-[0.25em]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {/* Demo button (commented unless live demo link is added) */}
                  {/* {project.demoUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="glass btn-accent-hover border border-white/60 px-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
                      disabled={project.demoUrl === "#"}
                    >
                      <a href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.demoLabel || "Live"}
                      </a>
                    </Button>
                  )} */}

                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="glass btn-accent-hover border border-white/60 px-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
                      disabled={project.githubUrl === "#"}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
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

        <div className="mt-16 flex justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="glass btn-accent-hover border border-white/60 px-10 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
          >
            <a
              href="https://github.com/vishakha1801?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              View All
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
