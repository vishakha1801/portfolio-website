import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const LAST_UPDATED = "october 28, 2025";

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
              This page collects my work for the course. I will keep adding links as I finish each critique, workshop, and the final project.
            </p>
          </header>

          <section className="mt-12 space-y-14">
            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                About Me
              </h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                I'm Vishakha Pathak, a master's student in Information Systems Management at Carnegie Mellon University. I like working with
                software and data, and I care about visualizations that are honest, readable, and actually useful for the people who use them.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                What I Hope to Learn
              </h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                In this course, I want to get better at choosing chart types that match the questions people are asking, explaining design decisions
                in plain language, and improving my work based on feedback. This page is a log of that process as well as a place to share the final pieces.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                Course Log
              </h2>
              <ul className="list-disc space-y-3 pl-6 text-[var(--ink-2)]">
                <li>
                  <a
                    href="/bob-ross/"
                    className="font-semibold text-[var(--ink-1)] underline decoration-dotted underline-offset-4"
                  >
                    Critique by Design: A Statistical Analysis of the Work of Bob Ross
                  </a>{" "}
                  · case study with critique, redesign, and write up.
                </li>
                <li>
                  Workshop 2: critique and redesign. Notes and the embedded chart will be linked here once they are ready.
                </li>
                <li>
                  Final project. The interactive piece and a short write up will live here, along with a link to the repo.
                </li>
              </ul>
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
