import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TswdPortfolioPage: React.FC = () => (
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
            <p className="text-xs uppercase tracking-[0.42em] text-[var(--ink-3)]">
              last updated: october 28, 2025
            </p>
            <p className="text-sm leading-relaxed text-[var(--ink-2)]">
              note: i already maintain vishakhapathak.com. this page will host my course portfolio and embeds.
            </p>
          </header>

          <section className="mt-12 space-y-16">
            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                about me
              </h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                i’m vishakha pathak, a master’s student in information systems management at carnegie mellon university. i like building useful things at the intersection of product, software, and analytics. i care about trustworthy ai and visuals that are easy to read and act on.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                what i hope to learn
              </h2>
              <p className="leading-relaxed text-[var(--ink-2)]">
                from this course, i want to get faster at picking the right encodings, design more accessible charts, and ship explainable, repeatable visuals. this page will track workshops, critiques, and my final project. i’ll add live embeds as they’re ready.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="script-accent text-3xl text-[var(--ink-1)] md:text-4xl">
                portfolio
              </h2>
              <ul className="list-disc space-y-3 pl-6 text-[var(--ink-2)]">
                <li>
                  workshop 1: exploring data visuals — link/iframe will go here (placeholder)
                </li>
                <li>
                  workshop 2: critique and redesign — link/iframe will go here (placeholder)
                </li>
                <li>
                  final project — link/iframe will go here (placeholder)
                </li>
              </ul>
            </section>

            <hr className="border-t border-white/60" />

            <section className="space-y-8">
              <header>
                <h3 className="script-accent text-2xl text-[var(--ink-1)] md:text-3xl">
                  embed placeholders (for tools like observable/tableau/etc.)
                </h3>
                <p className="mt-3 text-sm text-[var(--ink-3)]">
                  keep these here so future assignments are 30 seconds each — replace <code>src</code> with your share links when ready.
                </p>
              </header>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold uppercase tracking-[0.32em] text-[var(--ink-3)]">
                    example observable/vega-lite iframe
                  </h4>
                  <div className="glass border border-dashed border-white/60 p-4">
                    <div
                      className="hidden"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: "<!-- placeholder: replace src with share link -->" }}
                    />
                    <iframe
                      src="https://example.com/embed"
                      width="100%"
                      height="520"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="embedded chart (placeholder)"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold uppercase tracking-[0.32em] text-[var(--ink-3)]">
                    example tableau iframe
                  </h4>
                  <div className="glass border border-dashed border-white/60 p-4">
                    <div
                      className="hidden"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: "<!-- placeholder: replace src with share link -->" }}
                    />
                    <iframe
                      src="https://public.tableau.com/views/placeholder"
                      width="100%"
                      height="720"
                      style={{ border: 0 }}
                      loading="lazy"
                      title="embedded chart (placeholder)"
                    />
                  </div>
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

export default TswdPortfolioPage;
