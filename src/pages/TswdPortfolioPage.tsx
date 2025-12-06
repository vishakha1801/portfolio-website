import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const LAST_UPDATED = "december 10, 2025";

const TswdPortfolioPage: React.FC = () => (
  <>
    <SEOHead
      title="Telling Stories with Data | Vishakha Pathak"
      description="Course log for Telling Stories with Data at Carnegie Mellon, covering assignments, workshops, and final project status."
      url="https://vishakhapathak.com/tswd-portfolio"
    />
    <GlobalStyles />
    <SkipLink />
    <Navigation />

    <main
      id="main"
      className="relative z-0 flex min-h-screen flex-col bg-transparent pt-32 pb-24 font-nice text-base text-[var(--ink-2)]"
    >
      <div className="container mx-auto px-6">
        <article className="glass-strong pop-glow mx-auto max-w-4xl rounded-[32px] border border-white/60 px-8 py-12 shadow-xl md:px-12 md:py-16">
          <header className="space-y-4 md:text-left">
            <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">
              Carnegie Mellon · MISM
            </p>
            <h1 className="script-accent text-4xl leading-tight text-[var(--ink-1)] md:text-5xl">
              Telling Stories with Data
            </h1>
            <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">
              Last updated: {LAST_UPDATED}
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-2)]">
              Course log for CMU&apos;s TSWD. Everything is mirrored locally with clean links to each submission, plus the live Shorthand story for the
              final project.
            </p>
          </header>

          <section className="mt-12 space-y-14">
            <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
              <div className="space-y-6">
                <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                  What this page holds
                </h2>
                <p className="leading-relaxed text-[var(--ink-2)]">
                  I&apos;m Vishakha Pathak, a master&apos;s student in Information Systems Management at Carnegie Mellon University. This log pulls together
                  every TSWD assignment (critiques, workshops, and the LEGO final project) with local assets so nothing breaks if GitHub or external embeds are down.
                </p>
                <p className="leading-relaxed text-[var(--ink-2)]">
                  I care about visualizations that stay honest, readable, and actionable. Each entry here calls out what changed, what I learned, and who the work is for.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/70 bg-white/60 p-6 shadow-inner backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">quick links</p>
                <div className="mt-4 space-y-3">
                  <a
                    href="https://carnegiemellon.shorthandstories.com/how-lego-grew-up/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-[var(--ink-1)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Live shorthand story
                    <span aria-hidden>↗</span>
                  </a>
                  <a
                    href="https://github.com/vishakha1801/telling_stories_with_data_final_project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--ink-1)] shadow hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Project repo
                    <span aria-hidden>↗</span>
                  </a>
                  <a
                    href="/lego-final-project-part3/"
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--ink-1)] shadow hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Part III writeup
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                Final project — How LEGO grew up
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <article className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-md backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--ink-3)]">Part I</p>
                  <h3 className="mt-1 text-xl font-semibold text-[var(--ink-1)]">Proposal & initial visuals</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">
                    Framing the story and first pass at the LEGO data visuals.
                  </p>
                  <a
                    href="/lego-final-project/"
                    className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    Read Part I
                  </a>
                </article>

                <article className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-md backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--ink-3)]">Part II</p>
                  <h3 className="mt-1 text-xl font-semibold text-[var(--ink-1)]">Wireframes, storyboards, research</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">
                    Personas, story structure, and user research that shaped the final experience.
                  </p>
                  <a
                    href="/lego-final-project-part2/"
                    className="mt-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    Read Part II
                  </a>
                </article>

                <article className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-md backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--ink-3)]">Part III</p>
                  <h3 className="mt-1 text-xl font-semibold text-[var(--ink-1)]">Final story + reflection</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">
                    Seven core visuals, finished Shorthand build, and lessons learned.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]">
                    <a
                      href="/lego-final-project-part3/"
                      className="underline decoration-dotted underline-offset-4"
                    >
                      Read Part III
                    </a>
                    <span className="h-[1px] w-6 bg-[var(--ink-3)] opacity-70" aria-hidden />
                    <a
                      href="https://carnegiemellon.shorthandstories.com/how-lego-grew-up/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-4"
                    >
                      View live story
                    </a>
                  </div>
                </article>

                <article className="rounded-3xl border border-dashed border-white/70 bg-white/40 p-5 shadow-inner backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--ink-3)]">Assets</p>
                  <h3 className="mt-1 text-xl font-semibold text-[var(--ink-1)]">Local mirrors</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">
                    All markdown, images, and charts are mirrored locally so the writeups render without external calls.
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]">What&apos;s next: add embeds</p>
                </article>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                Course Log
              </h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/70 bg-white/60 p-5 shadow">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--ink-3)]">
                    <span className="rounded-full bg-emerald-500/80 px-2 py-1 text-white">Published</span>
                    <span>Critiques & workshops</span>
                  </div>
                  <p className="mt-2 text-base font-semibold text-[var(--ink-1)]">
                    <a
                      href="/bob-ross/"
                      className="underline decoration-dotted underline-offset-4"
                    >
                      Critique by Design — Bob Ross
                    </a>
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--ink-2)]">
                    Full writeup and redesign with local assets. Additional workshop notes will be added once ready.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/60 p-5 shadow">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--ink-3)]">
                    <span className="rounded-full bg-emerald-500/80 px-2 py-1 text-white">Published</span>
                    <span>Final project</span>
                  </div>
                  <div className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--ink-2)]">
                    <p>
                      Part I: <a href="/lego-final-project/" className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4">How LEGO Grew Up</a> (proposal + early visuals)
                    </p>
                    <p>
                      Part II: <a href="/lego-final-project-part2/" className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4">Wireframes, Storyboards, User Research</a>
                    </p>
                    <p>
                      Part III: <a href="/lego-final-project-part3/" className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4">Shorthand build, final visuals, reflections</a>
                    </p>
                    <p className="text-[13px] text-[var(--ink-3)]">
                      Live story:{" "}
                      <a
                        href="https://carnegiemellon.shorthandstories.com/how-lego-grew-up/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                      >
                        How LEGO Grew Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[32px] border border-dashed border-white/60 bg-white/40 px-6 py-8 shadow-inner backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">
                Embeds and process notes
              </p>
              <h3 className="script-accent mt-3 text-2xl text-[var(--ink-1)]">
                Where everything lives
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-2)]">
                Once something is ready, I will embed the Observable, Tableau, or video version under the relevant section and add a short note on
                what I changed and why. Until then, I am keeping simple text placeholders so it is clear what is still in progress.
              </p>
            </section>
          </section>
        </article>
      </div>
    </main>

    <Footer />
  </>
);

export default TswdPortfolioPage;
