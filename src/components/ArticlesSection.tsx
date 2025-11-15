import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react";
import staticSubstack from "@/data/substack.json";

type SubstackTag = { name?: string; display_name?: string; slug?: string };

type SubstackPost = {
  id: number;
  title?: string;
  description?: string | null;
  truncated_body_text?: string | null;
  post_date?: string | null;
  wordcount?: number | null;
  postTags?: SubstackTag[];
  slug?: string | null;
  canonical_url?: string | null;
  audience?: string | null;
  cover_image?: string | null;
  image?: string | null;
  post_image_url?: string | null;
  social_image?: string | null;
  og_image?: string | null;
};

type Article = {
  id: number;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  url: string;
  imageUrl?: string | null;
  tags?: string[];
};

const SUBSTACK_ARCHIVE_URL = import.meta.env.DEV
  ? "/substack/api/v1/archive?sort=new"
  : "https://vishakhapathak.substack.com/api/v1/archive?sort=new";

const formatRelativeDate = (isoDate?: string | null) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.round(diffMs / 60000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  if (Math.abs(diffMinutes) < 60) return rtf.format(-diffMinutes, "minute");
  const diffHours = Math.round(diffMinutes / 60);
  if (Math.abs(diffHours) < 24) return rtf.format(-diffHours, "hour");
  const diffDays = Math.round(diffHours / 24);
  if (Math.abs(diffDays) < 7) return rtf.format(-diffDays, "day");
  const diffWeeks = Math.round(diffDays / 7);
  if (Math.abs(diffWeeks) < 5) return rtf.format(-diffWeeks, "week");
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(date);
};

const formatReadTime = (wordcount?: number | null) => {
  if (!wordcount || wordcount <= 0) return "";
  const minutes = Math.max(1, Math.round(wordcount / 200));
  return `${minutes} min`;
};

const cleanExcerpt = (text?: string | null) => (text ? text.replace(/\s+/g, " ").trim() : "");

const resolveUrl = (post: SubstackPost) => {
  if (post.canonical_url) return post.canonical_url;
  if (post.slug) return `https://vishakhapathak.substack.com/p/${post.slug}`;
  return "https://vishakhapathak.substack.com";
};

const pickImage = (post: SubstackPost): string | null | undefined =>
  post.cover_image || post.image || post.post_image_url || post.social_image || post.og_image || null;

const toArticle = (post: SubstackPost): Article => ({
  id: post.id,
  title: post.title || "untitled",
  excerpt: cleanExcerpt(post.description) || cleanExcerpt(post.truncated_body_text) || "",
  publishDate:
    formatRelativeDate(post.post_date) ||
    new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(post.post_date ?? Date.now())),
  readTime: formatReadTime(post.wordcount),
  url: resolveUrl(post),
  imageUrl: pickImage(post),
});

const ArticlesSection: React.FC = () => {
  const staticArticles = (staticSubstack as { articles?: Article[] }).articles ?? [];
  const useLiveFetch = import.meta.env.DEV;

  const [articles, setArticles] = useState<Article[]>(useLiveFetch ? [] : staticArticles);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    useLiveFetch ? "idle" : "ready"
  );

  useEffect(() => {
    if (!useLiveFetch) return;

    let ignore = false;
    const fetchPosts = async () => {
      try {
        setStatus("loading");
        const response = await fetch(SUBSTACK_ARCHIVE_URL, { headers: { Accept: "application/json" } });
        if (!response.ok) throw new Error(`Substack responded with ${response.status}`);
        const data: SubstackPost[] = await response.json();
        if (ignore) return;
        const visible = data.filter((post) => (post.audience ?? "everyone") === "everyone").slice(0, 4);
        setArticles(visible.map(toArticle));
        setStatus("ready");
      } catch (err) {
        console.error("Failed to load Substack posts", err);
        if (!ignore) setStatus("error");
      }
    };
    fetchPosts();
    return () => {
      ignore = true;
    };
  }, [useLiveFetch]);

  return (
    <section id="articles" className="mouse-glow py-28 font-nice">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker">Writing Desk</div>
          <h2 className="script-accent mt-6 text-4xl leading-snug text-[var(--ink-1)] md:text-5xl">
            Notes on AI, Product, and Systems
          </h2>
        </div>

        {status === "loading" && <p className="text-center text-[var(--ink-2)]">Loading recent posts…</p>}
        {status === "error" && <p className="text-center text-[var(--ink-2)]">Unable to load posts right now. Please try again later.</p>}
        {status === "ready" && articles.length === 0 && <p className="text-center text-[var(--ink-2)]">No posts yet — check back soon.</p>}

        {status === "ready" && articles.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((a) => (
              <Card
                key={a.id}
                className="group relative overflow-hidden border border-white/60 bg-white/70 shadow-lg backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <a href={a.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    {a.imageUrl ? (
                      <img
                        src={a.imageUrl}
                        alt={a.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-white/80 to-white/40" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-3 left-3 right-3 line-clamp-2 text-xl font-semibold text-white drop-shadow">
                      {a.title}
                    </h3>
                  </div>
                </a>

                <div className="flex items-center justify-between gap-2 p-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--ink-3)]">
                    {a.publishDate && (
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" /> {a.publishDate}
                      </span>
                    )}
                    {a.readTime && (
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4" /> {a.readTime}
                      </span>
                    )}
                  </div>

                  <Button asChild size="sm" variant="outline" className="glass btn-accent-hover border border-white/60 px-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ink-1)]">
                    <a href={a.url} target="_blank" rel="noopener noreferrer">
                      Read <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mx-auto mt-8 flex max-w-lg items-center justify-between gap-2 rounded-xl border border-white/60 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-xl">
          <div className="min-w-0">
            <p className="truncate text-xs text-[var(--ink-2)]">get new posts by email</p>
            <a href="/tswd-portfolio" className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--ink-1)] hover:underline">
              view my forays into data viz
            </a>
          </div>
          <Button asChild size="sm" className="px-2 py-1 text-xs font-medium">
            <a href="https://vishakhapathak.substack.com/subscribe" target="_blank" rel="noopener noreferrer">
              subscribe <ArrowRight className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
