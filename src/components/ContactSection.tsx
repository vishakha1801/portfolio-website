import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";

const SUBMISSION_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const CONTACT_EMAIL = "vishakhamanojpathak18@gmail.com";

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const tooltipTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (tooltipTimer.current) window.clearTimeout(tooltipTimer.current);
    };
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string | null)?.trim();
    const email = (formData.get("email") as string | null)?.trim();
    const subject = (formData.get("subject") as string | null)?.trim() || "Project Inquiry";
    const message = (formData.get("message") as string | null)?.trim();

    if (!ACCESS_KEY) {
      setError("Email service not configured. Please set VITE_WEB3FORMS_KEY.");
      setStatus("error");
      return;
    }

    if (!email || !message) {
      setError("Please add your email and a short message.");
      setStatus("error");
      return;
    }

    const payload = {
      access_key: ACCESS_KEY,
      subject,
      from_name: name || "Portfolio Website",
      reply_to: email,
      message,
    };

    try {
      setStatus("sending");
      setError(null);
      const response = await fetch(SUBMISSION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || data?.success === false) {
        throw new Error(data?.message || "We couldn’t send your message." );
      }

      form.reset();
      setStatus("success");
      if (tooltipTimer.current) window.clearTimeout(tooltipTimer.current);
      tooltipTimer.current = window.setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "We couldn’t send your message.";
      setError(msg);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-28 pb-20 font-nice">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="section-kicker">Contact</div>
          <h2 className="script-accent mt-6 text-4xl leading-snug text-[var(--ink-1)] md:text-5xl">
            Let’s Work Together
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-2)]">
            Open to product and AI collaborations, research partnerships, and mentoring conversations.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.05fr,0.95fr]">
          <Card className="glass pop-glow border border-white/60">
            <CardContent className="p-10">
              <h3 className="script-accent text-3xl text-[var(--ink-1)]">Send a Note</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.32em] text-[var(--ink-3)]">
                I’ll respond within two business days.
              </p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]" htmlFor="contact-name">
                      Name
                    </label>
                    <Input id="contact-name" name="name" className="glass" placeholder="Your name" autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]" htmlFor="contact-email">
                      Email
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="glass"
                      placeholder="you@email.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]" htmlFor="contact-subject">
                    Subject
                  </label>
                  <Input
                    id="contact-subject"
                    name="subject"
                    className="glass"
                    placeholder="Let’s explore…"
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]" htmlFor="contact-message">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    className="glass resize-none"
                    rows={5}
                    placeholder="Share context, goals, or timelines"
                    required
                  />
                </div>

                <div className="relative">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                    className="btn-accent-hover glass w-full border border-white/60 px-8 text-sm font-semibold uppercase tracking-[0.32em] text-[var(--ink-1)]"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>

                  {status === "success" && (
                    <div className="pointer-events-none absolute left-1/2 top-[-52px] -translate-x-1/2 rounded-lg bg-[var(--ink-1)] px-3 py-2 text-xs text-white shadow-lg">
                      Message sent!
                      <span className="absolute left-1/2 top-full -mt-[1px] -translate-x-1/2 border-8 border-transparent border-t-[var(--ink-1)]" />
                    </div>
                  )}
                </div>

                {status === "error" && error && (
                  <p className="text-sm text-red-500" role="alert">
                    {error}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass pop-glow border border-white/60">
              <CardContent className="flex items-start gap-4 p-8">
                <Mail className="mt-1 h-5 w-5 text-[var(--accent-1)]" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]">Email</p>
                  <p className="mt-2 text-lg text-[var(--ink-1)]">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <p className="mt-4 text-sm text-[var(--ink-2)]">
                    Prefer async updates? I can share recent case studies, decks, or code samples on request.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass pop-glow border border-white/60">
              <CardContent className="flex items-start gap-4 p-8">
                <MessageCircle className="mt-1 h-5 w-5 text-[var(--accent-2)]" aria-hidden />
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]">Let’s Chat</p>
                  <p className="mt-2 text-lg text-[var(--ink-1)]">
                    Available for speaking, feedback sessions, and studio walkthroughs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="glass pop-glow rounded-3xl border border-white/60 px-8 py-10 text-center shadow-lg">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--ink-3)]">Availability</p>
              <p className="script-accent mt-4 text-3xl text-[var(--ink-1)]">
                Remote-Friendly • Based in Pittsburgh, PA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
