import React from "react";

type TimelineItem = {
  type: "experience" | "education";
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  details?: string;
  accent: string;
  align: "left" | "right";
};

const timeline: TimelineItem[] = [
  {
    type: "experience",
    title: "Kearney",
    subtitle: "Product Consultant (Contract)",
    date: "Sept 2025 – Present",
    accent: "from-[var(--accent-1)] to-[var(--accent-3)]",
    align: "left",
  },
  {
    type: "experience",
    title: "Coforge (Sabre Team)",
    subtitle: "AI Product Manager (Intern)",
    date: "May 2025 – Aug 2025",
    accent: "from-[var(--accent-2)] to-[var(--accent-3)]",
    align: "left",
  },
  {
    type: "education",
    title: "Carnegie Mellon University",
    subtitle: "Master of Information Systems Management",
    location: "Pittsburgh, PA",
    date: "Aug 2024 – Dec 2025",
    details:
      "Coursework in Economics, Finance, Product Management, Deep Learning, Statistics, AI Products, AI Governance, and Databases. Activities: TA for OOP in Java & Linux/Open Source; Hack-a-Startup finalist; Product Wars 2024 runner-up.",
    accent: "from-[var(--accent-1)] to-[var(--accent-2)]",
    align: "right",
  },
  {
    type: "experience",
    title: "Optum — UnitedHealth Group",
    subtitle: "Software Engineer · Product & Engineering Hybrid",
    date: "Jul 2022 – Apr 2024",
    accent: "from-[var(--accent-3)] to-[var(--accent-2)]",
    align: "left",
  },
  {
    type: "education",
    title: "Manipal Institute of Technology",
    subtitle: "B.Tech in Computer & Communication Engineering, Minor in Big Data",
    location: "Manipal, India",
    date: "Jul 2018 – Jul 2022",
    details:
      "Coursework spanning Machine Learning, Pattern Recognition, Data Mining & Predictive Analysis, Engineering Mathematics, HCI, Software Design Technology, and Engineering Economics.",
    accent: "from-[var(--accent-2)] to-[var(--accent-3)]",
    align: "right",
  },
  {
    type: "experience",
    title: "Capgemini",
    subtitle: "Data Scientist (Intern) — Engineering Analytics",
    date: "Jan 2022 – May 2022",
    accent: "from-[var(--accent-1)] to-[var(--accent-2)]",
    align: "left",
  },
  {
    type: "experience",
    title: "eFeed",
    subtitle: "Product Manager (Intern)",
    date: "Apr 2021 – Jun 2021",
    accent: "from-[var(--accent-3)] to-[var(--accent-1)]",
    align: "left",
  },
];

const ExperienceSection: React.FC = () => (
  <section id="experience" className="mouse-glow py-20 font-nice">
    <div className="container mx-auto px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="script-accent text-4xl leading-snug text-[var(--ink-1)] md:text-5xl">Timeline</h2>
      </div>

      <div className="relative mx-auto max-w-5xl">
        <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/60 md:block" />
        <ol className="relative border-l border-white/60 pl-6 md:border-none md:pl-0">
          {timeline.map((item) => {
            const cardClasses = [
              "glass",
              "pop-glow",
              "rounded-3xl",
              "border",
              "border-white/60",
              "px-5",
              "py-6",
              "shadow-lg",
              "transition",
              "duration-300",
              item.type === "education" ? "bg-white/75" : "bg-white/60",
              item.align === "right" ? "md:ml-10 md:col-start-2" : "md:mr-10 md:col-start-1",
            ].join(" ");

            return (
              <li
                key={`${item.title}-${item.date}`}
                className="relative mb-12 md:mb-18 md:grid md:grid-cols-2 md:items-start md:gap-10"
              >
                <span
                  className={`absolute -left-[37px] top-4 h-3 w-3 rounded-full bg-gradient-to-br ${item.accent} md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2`}
                />
                <div className={cardClasses}>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[var(--ink-3)]">{item.date}</p>
                  <h3 className="script-accent mt-2 text-2xl text-[var(--ink-1)]">{item.title}</h3>
                  {item.location && (
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--ink-3)]">{item.location}</p>
                  )}
                  <p className="mt-2 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-[var(--ink-3)]">{item.subtitle}</p>
                  {item.details && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-2)]">{item.details}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
