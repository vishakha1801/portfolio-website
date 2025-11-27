import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import finalProjectPart2Content from "@/content/tswd-final-project-part2.md?raw";

const markdownComponents: Components = {
  h1: ({ children, ...props }) => (
    <h1
      className="script-accent text-center text-3xl font-semibold leading-tight text-[var(--ink-1)] dark:text-white md:text-4xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="script-accent text-center text-2xl font-semibold leading-tight text-[var(--ink-1)] dark:text-white md:text-3xl"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="script-accent text-left text-xl font-semibold leading-tight text-[var(--ink-1)] dark:text-white md:text-2xl"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="text-left text-lg font-semibold leading-tight text-[var(--ink-1)] dark:text-white md:text-xl"
      {...props}
    >
      {children}
    </h4>
  ),
  a: ({ children, href, ...props }) => (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4 dark:text-white"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => {
    const isGarage = (alt ?? "").toLowerCase().includes("garage with automated door");
    return (
      <>
      <figure className="my-8 w-full">
        <img
          src={src ?? ""}
          alt={alt ?? ""}
          className={
            isGarage
              ? "mx-auto h-auto w-auto max-w-full rounded-3xl border border-white/50 object-contain shadow-lg"
              : "mx-auto w-full rounded-3xl border border-white/50 object-contain shadow-lg"
          }
        />
        {alt && (
          <figcaption className="mt-3 text-center text-sm text-[var(--ink-3)]">
            {alt}
          </figcaption>
        )}
      </figure>
      <div aria-hidden className="h-6 w-full" />
      </>
    );
  },
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

const LegoFinalProjectPart2Page: React.FC = () => (
  <>
    <SEOHead
      title="Final Project Part II: Wireframes, Storyboards, and Research | Vishakha Pathak"
      description="Telling Stories with Data final project Part II — user research, wireframes, and storyboard-driven evolution of the LEGO narrative."
      url="https://vishakhapathak.com/lego-final-project-part2"
    />
    <GlobalStyles />
    <SkipLink />
    <Navigation />

    <main
      id="main"
      className="relative z-0 flex min-h-screen flex-col bg-transparent pt-32 pb-24 font-nice text-base text-[var(--ink-2)] dark:bg-gradient-to-b dark:from-[#090b1d] dark:to-[#111635]"
    >
      <div className="container mx-auto px-6">
        <article className="glass-strong pop-glow mx-auto w-full max-w-5xl rounded-[32px] border border-white/60 bg-white px-6 py-10 shadow-xl backdrop-blur-xl dark:border-white/20 dark:bg-[#090c1f]/95 md:w-[70%] md:px-10 md:py-12">
          <header className="space-y-4 md:text-left">
            <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)] dark:text-white/70">
              Final Project Part II · How LEGO grew up
            </p>
            <h1 className="script-accent text-4xl leading-tight text-[var(--ink-1)] dark:text-white md:text-5xl">
              LEGO: Wireframes, Storyboards, and User Research
            </h1>
            <p className="text-sm leading-relaxed text-[var(--ink-2)] dark:text-white/80">
              Full markdown submission mirrored from{" "}
              <a
                href="https://github.com/vishakha1801/telling_stories_with_data_final_project/blob/main/submission_part2.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
              >
                Telling Stories with Data
              </a>{" "}
              with images referenced locally so everything can render reliably once assets are added.
            </p>
            <a
              href="/lego-final-project/"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.42em] text-[var(--ink-1)] underline decoration-dotted underline-offset-4 dark:text-white"
            >
              ← Back to Part I
            </a>
          </header>

          <div className="mouse-glow mt-6 rounded-3xl border border-white/60 p-2 shadow-lg backdrop-blur-xl dark:border-white/30 md:p-3">
            <div
              className="prose mx-auto w-full text-[0.82rem] leading-7
              text-[var(--ink-1)]
              prose-headings:font-semibold
              prose-headings:text-[var(--ink-1)]
              prose-strong:text-[var(--ink-1)]
              prose-em:text-[var(--ink-1)]
              prose-a:text-[var(--ink-1)]
              prose-li:marker:text-[var(--ink-3)]
              prose-p:leading-7

              dark:text-white
              dark:prose-headings:text-white
              dark:prose-strong:text-white
              dark:prose-em:text-white
              dark:prose-a:text-white

              md:w-[80%] md:text-[0.88rem]"
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                {finalProjectPart2Content}
              </ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </main>

    <Footer />
  </>
);

export default LegoFinalProjectPart2Page;
