import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import SkipLink from "@/components/SkipLink";
import SEOHead from "@/components/SEOHead";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArtSection from "@/components/ArtSection";
import ArticlesSection from "@/components/ArticlesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


const App: React.FC = () => (
<>
<SEOHead />
<GlobalStyles />
<SkipLink />
<Navigation />
<HeroSection />
<AboutSection />
<SkillsSection />
<ProjectsSection />
<ArtSection />
<ArticlesSection />
<ExperienceSection />
<ContactSection />
<Footer />
</>
);
export default App;