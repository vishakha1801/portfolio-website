import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import assignmentContent from "@/content/tswd-assignment.md?raw";

const markdownComponents: Components = {
  a: ({ children, href, ...props }) => (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <figure className="my-6 w-full">
      <img src={src ?? ""} alt={alt ?? ""} className="mx-auto max-h-[520px] rounded-2xl border border-white/50 shadow" />
      {alt && (
        <figcaption className="mt-2 text-center text-sm text-[var(--ink-3)]">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
  code: ({ inline, className, children, ...props }) =>
    inline ? (
      <code className={className} {...props}>
        {children}
      </code>
    ) : (
      <pre className="overflow-x-auto rounded-2xl bg-black/80 p-4 text-sm text-white shadow-lg">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    ),
};

const LAST_UPDATED = "october 28, 2025";

const TswdPortfolioPage: React.FC = () => {
  const scrollToSection = (id?: string) => {
    if (!id) return;
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
    <SEOHead
      title="Data Visualization Portfolio | Vishakha Pathak"
      description="Dedicated hub for CMU TSWD coursework featuring about, learning goals, portfolio placeholders, and ready-to-embed slots."
      url="https://vishakhapathak.com/tswd-portfolio"
    />
    <GlobalStyles />
    <SkipLink />
    <Navigation />

    <main id="main" className="relative z-0 flex min-h-screen flex-col bg-transparent pt-32 pb-24 font-nice text-base text-[var(--ink-2)]">
      <div className="container mx-auto px-6">
        <article className="glass-strong pop-glow mx-auto max-w-4xl rounded-[32px] border border-white/60 px-8 py-12 shadow-xl md:px-12 md:py-16">
          <header className="space-y-4 md:text-left">
            <h1 className="script-accent text-4xl leading-tight text-[var(--ink-1)] md:text-5xl">
              data visualization portfolio
            </h1>
            <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">last updated: {LAST_UPDATED}</p>
            <p className="text-sm leading-relaxed text-[var(--ink-2)]">
              this is the official log for telling stories with data at carnegie mellon—every critique, workshop, and final embed lives here once it is ready.
            </p>
          </header>

          <section className="mt-12 space-y-16">
            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">about me</h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                i'm vishakha pathak, a master's student in information systems management at carnegie mellon university. i like building useful things
                at the intersection of software and analytics, and i care about trustworthy visual communication that stays easy to read and act on.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">what i hope to learn</h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                from this course, i want to get faster at picking the right encodings, design more accessible charts, and ship explainable, repeatable
                visuals. this page tracks workshops, critiques, and the final project. i'll add live embeds as they're ready.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">telling stories with data log</h2>
              <ul className="list-disc space-y-3 pl-6 text-[var(--ink-2)]">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection("tswd-assignment")}
                    className="text-left font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    critique by design: a statistical analysis of the work of bob ross (full write-up below)
                  </button>
                </li>
                <li>workshop 2: critique and redesign — notes + embed slot coming soon</li>
                <li>
                  final project part i:{" "}
                  <a
                    href="/lego-final-project/"
                    className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    how lego grew up
                  </a>{" "}
                  (full markdown mirrored locally, original{" "}
                  <a
                    href="https://github.com/vishakha1801/telling_stories_with_data_final_project/blob/main/submission.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    github submission
                  </a>
                  )
                </li>
              </ul>
            </section>

            <section className="rounded-[32px] border border-dashed border-white/60 bg-white/40 px-6 py-8 shadow-inner backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">embeds & process notes</p>
              <h3 className="script-accent mt-3 text-2xl text-[var(--ink-1)]">placeholders stay clean until the work is live</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">
                i'll drop observable, tableau, or video walkthroughs directly alongside each assignment when they are ready. no dead links or empty
                frames—just the finished work plus the markdown write-up.
              </p>
            </section>
            <section id="tswd-assignment" className="space-y-6">
              <header className="space-y-3">
                <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">
                  full assignment write-up
                </p>
                <h2 className="script-accent text-3xl leading-tight text-[var(--ink-1)] md:text-4xl">
                  critique by design: a statistical analysis of the work of bob ross
                </h2>
                <p className="text-sm text-[var(--ink-2)]">
                  this is the complete markdown submission mirrored from{" "}
                  <a
                    href="https://github.com/vishakha1801/tellin_stories_with_data/blob/main/assignment.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    telling stories with data
                  </a>{" "}
                  so everything lives on one page.
                </p>
              </header>
              <div className="mouse-glow rounded-3xl border border-white/60 bg-white/70 p-6 shadow-lg backdrop-blur-xl">
                <div className="prose prose-lg max-w-none prose-headings:text-[var(--ink-1)] prose-strong:text-[var(--ink-1)] prose-em:text-[var(--ink-1)] prose-a:text-[var(--ink-1)] prose-code:rounded-md prose-code:bg-white/70 prose-code:px-1 prose-code:text-[var(--ink-1)] prose-li:marker:text-[var(--ink-3)] text-[var(--ink-2)]">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {assignmentContent}
                  </ReactMarkdown>
                </div>
              </div>
            </section>
          </section>
        </article>
      </div>
    </main>

    <Footer />
  </>
  );
};

export default TswdPortfolioPage;
