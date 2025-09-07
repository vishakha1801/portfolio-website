import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle } from "lucide-react";


const ContactSection: React.FC = () => (
<section id="contact" className="py-24 font-nice">
<div className="container mx-auto px-6">
<div className="text-center mb-16"><div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--pop-pink)] to-[var(--pop-purple)]" /><h2 className="text-4xl font-semibold text-[var(--ink-1)]">Let's Create Together</h2><p className="text-lg text-[var(--ink-2)] max-w-2xl mx-auto">Open to collaborations, commissions, and product work.</p></div>
<div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
<Card className="glass pop-glow"><CardContent className="p-8"><h3 className="mb-6 text-2xl font-semibold text-[var(--ink-1)]">Send a Message</h3><form className="space-y-6"><div className="grid sm:grid-cols-2 gap-4"><div className="space-y-2"><label className="text-sm font-medium text-[var(--ink-1)]">Name</label><Input className="glass" placeholder="Your name" /></div><div className="space-y-2"><label className="text-sm font-medium text-[var(--ink-1)]">Email</label><Input type="email" className="glass" placeholder="you@email.com" /></div></div><div className="space-y-2"><label className="text-sm font-medium text-[var(--ink-1)]">Subject</label><Input className="glass" placeholder="What's this about?" /></div><div className="space-y-2"><label className="text-sm font-medium text-[var(--ink-1)]">Message</label><Textarea className="glass resize-none" rows={5} placeholder="Tell me about your project..." /></div><Button type="submit" size="lg" className="w-full glass pop-glow border border-white/60 text-[var(--ink-1)]">Send Message</Button></form></CardContent></Card>
<div className="space-y-6"><h3 className="text-2xl font-semibold text-[var(--ink-1)]">Get in Touch</h3><div className="space-y-4"><div className="glass rounded-lg p-4 flex items-center gap-4"><Mail className="h-5 w-5 text-[var(--pop-pink)]"/><div><p className="font-medium text-[var(--ink-1)]">Email</p><p className="text-sm text-[var(--ink-2)]">hello@portfolio.com</p></div></div><div className="glass rounded-lg p-4 flex items-center gap-4"><MessageCircle className="h-5 w-5 text-[var(--pop-purple)]"/><div><p className="font-medium text-[var(--ink-1)]">Let's Chat</p><p className="text-sm text-[var(--ink-2)]">Available for collaborations</p></div></div></div></div>
</div>
</div>
</section>
);
export default ContactSection;