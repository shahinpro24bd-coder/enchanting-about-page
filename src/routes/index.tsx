import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, ArrowUp, Asterisk, Code2, PenTool, RefreshCw, Monitor, PanelsTopLeft, Fingerprint, TrendingUp, MapPin, Heart, Check, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PortfolioMotion } from "@/components/portfolio-motion";
import { projects } from "@/lib/portfolio";
import portrait from "@/assets/shahin-portrait-hd.webp.asset.json";

const services = [
  { icon: Code2, name: "Doctor & healthcare websites" },
  { icon: PenTool, name: "Modern UI/UX design" },
  { icon: RefreshCw, name: "Website redesign & optimization" },
  { icon: Monitor, name: "Responsive website development" },
  { icon: PanelsTopLeft, name: "Landing page design" },
  { icon: Fingerprint, name: "Personal & professional branding" },
  { icon: TrendingUp, name: "Online presence & digital growth" },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Shahin — Thoughtful Healthcare Websites & Selected Work" },
    { name: "description", content: "Meet Shahin, a freelance web developer in Bangladesh crafting professional websites for doctors and healthcare practices. Explore five selected projects." },
    { property: "og:title", content: "Shahin — Thoughtful Healthcare Websites & Selected Work" },
    { property: "og:description", content: "Purposeful design, thoughtful development. Explore Shahin’s healthcare website projects and meet the person behind the pixels." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <PortfolioMotion><div className="portfolio-site" id="top">
      <header className="site-header page-width">
        <a className="wordmark" href="#top" aria-label="Shahin home"><Asterisk className="brand-symbol" aria-hidden="true" />shahin<span>.</span></a>
        <span className="header-caption">Independent developer<br /><span>Thoughtful digital experiences</span></span>
        <nav aria-label="Main navigation"><a href="#work">Work <sup>05</sup></a><a href="#about">About me <ArrowUpRight size={15} /></a><a href="#services" className="nav-services">Expertise <ArrowUpRight size={15} /></a></nav>
      </header>
      <main>
        <section id="work" className="work-section page-width">
          <div className="work-intro">
            <div className="intro-title"><div className="eyebrow"><span className="status-dot" /> INDEPENDENT WEB DEVELOPER · BANGLADESH</div><h1><span className="title-line">Shahin<span className="heading-dot">.</span></span><span className="title-subline">Digital craft.<br />Human impact.</span></h1><p className="intro-description">Thoughtful websites for doctors & healthcare professionals.<br /><span>Designed to stand out. Built to earn trust.</span></p><div className="intro-actions"><Button asChild variant="portfolio"><a href="#projects">Explore my work <ArrowDown size={17} /></a></Button><a className="intro-about-link" href="#about">The person behind the work <ArrowUpRight size={16} /></a></div></div>
            <div className="intro-note"><a className="intro-profile" href="#about" aria-label="Meet Shahin"><img src={portrait.url} alt="Shahin" width="1024" height="1024" fetchPriority="high" /><span className="profile-label"><span className="status-dot" /> THE PERSON BEHIND THE PIXELS <ArrowUpRight size={16} /></span></a><div className="intro-note-bottom"><p>A little craft.<br /><strong>A lot of care.</strong></p><Asterisk className="intro-star" strokeWidth={1.2} aria-hidden="true" /></div></div>
          </div>
          <div className="work-meta"><span><span className="meta-line" /> SELECTED WORK <sup>(05)</sup></span><span>REAL PEOPLE. PURPOSEFUL WEBSITES. <ArrowDown size={13} /></span></div>
          <div id="projects" className="project-grid">
            {projects.map((project, index) => (
              <ScrollReveal className={index === 0 ? "project-featured" : ""} key={project.name}>
                <article className={`project project-${project.tone}`}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-image-link" aria-label={`View ${project.name} website`}>
                    <div className="project-surface-label"><span><span className="project-counter">0{index + 1}</span> {project.specialty}</span><span>{index === 0 ? "FEATURED PROJECT" : "SELECTED WORK"} <ArrowUpRight size={15} /></span></div>
                    <div className="project-image-wrap"><div className="browser-bar" aria-hidden="true"><span className="browser-dots"><i /><i /><i /></span><span>{new URL(project.url).hostname.replace("www.", "")}</span><ArrowUpRight size={11} /></div><img src={project.image} alt={`${project.name} website design`} width="1600" height="800" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} /><span className="image-visit">Explore website <ArrowUpRight size={17} /></span></div>
                    <div className="project-surface-footer"><span>DESIGNED WITH PURPOSE. BUILT WITH CARE.</span><Asterisk size={24} aria-hidden="true" /></div>
                  </a>
                  <div className="project-details"><div><h2><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h2><p>{project.specialty}</p></div><Button asChild variant="circle" size="icon"><a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} website`} title="Open live website"><ArrowUpRight /></a></Button></div>
                  <div className="project-tags"><span>{project.type}</span><span>Design & development</span><span className="project-live"><span className="status-dot" /> Live website</span></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
        <div className="statement-band" aria-hidden="true"><div className="statement-track">{[0, 1].map(n => <div className="statement-group" key={n}><span>Thoughtful design</span><Asterisk /><span>Purposeful development</span><Asterisk /><span>A healthier online presence</span><Asterisk /></div>)}</div></div>
        <section id="about" className="about-section"><div className="page-width">
          <ScrollReveal><div className="section-label"><span className="eyebrow"><span className="meta-line" /> THE PERSON BEHIND THE PIXELS</span><span className="section-index">01 / ABOUT ME</span></div><div className="about-title"><h2>A developer.<br /><span>A thoughtful partner.</span></h2><Asterisk className="about-asterisk" strokeWidth={1} aria-hidden="true" /></div></ScrollReveal>
          <div className="about-grid">
            <ScrollReveal className="portrait-column"><div className="portrait-frame"><span className="portrait-corner">THE HUMAN SIDE OF DIGITAL.</span><img src={portrait.url} alt="Shahin, freelance web developer from Bangladesh" width="1024" height="1024" loading="lazy" /><span className="portrait-name">Shahin<span>.</span><ArrowUpRight /></span><span className="portrait-role">DEVELOPER / DESIGNER / THOUGHTFUL PARTNER</span></div><div className="portrait-caption"><span><MapPin size={14} /> Based in Bangladesh</span><span>Independent developer</span></div><div className="portrait-signoff"><Heart size={16} /><span>A little craft.<br /><strong>A lot of care.</strong></span><Asterisk size={30} aria-hidden="true" /></div></ScrollReveal>
            <ScrollReveal className="about-copy"><div className="eyebrow about-hello">A GOOD WEBSITE STARTS WITH UNDERSTANDING.</div><h3>Hi, I’m Shahin<span>.</span></h3><p className="about-lead">A freelance web developer helping doctors and healthcare professionals turn their expertise into a <strong>trusted digital presence.</strong></p><p>I build modern, professional websites that feel as thoughtful as the care you provide. Clean design, intuitive experiences, and a clear purpose—so patients can find you, trust you, and take the next step.</p><div className="about-principles"><span><Check size={15} /> People-first design</span><span><Check size={15} /> Purposeful development</span><span><Check size={15} /> Healthcare focused</span></div><div className="approach-list"><div className="approach-item"><span className="approach-icon"><Compass size={21} /></span><div><h4><span>01</span> Understand first. Build better.</h4><p>Every practice is different. I take time to understand your identity, specialty, and goals—then create something that’s both visually impressive and genuinely useful.</p></div></div><div className="approach-item"><span className="approach-icon"><TrendingUp size={21} /></span><div><h4><span>02</span> A stronger presence. A lasting impact.</h4><p>More than a good-looking website: a platform that reflects your expertise, earns patient trust, and supports your practice’s long-term growth.</p></div></div></div><Button asChild variant="portfolio"><a href="#services">What I can help you with <ArrowDown size={16} /></a></Button></ScrollReveal>
          </div>
        </div></section>
        <section id="services" className="services-section page-width"><ScrollReveal className="services-heading"><span className="eyebrow"><span className="meta-line" /> WHAT I BRING TO THE TABLE</span><h2>Good design.<br /><span>Real purpose.</span></h2><p>From the first idea to the final detail,<br />every piece has a purpose.</p><Asterisk size={64} strokeWidth={1} aria-hidden="true" /></ScrollReveal><ScrollReveal><ul>{services.map(({ icon: Icon, name }, index) => <li key={name}><span className="service-index">0{index + 1}</span><Icon size={22} /><span>{name}</span><ArrowUpRight size={20} /></li>)}</ul></ScrollReveal></section>
      </main>
      <footer className="site-footer"><div className="page-width"><div className="footer-top"><span>GOOD WEBSITES. GENUINE IMPACT.</span><Button asChild variant="circle" size="icon"><a href="#top" aria-label="Back to top" title="Back to top"><ArrowUp /></a></Button></div><div className="footer-signature"><a href="#top">shahin<span>.</span></a><Asterisk strokeWidth={1} aria-hidden="true" /></div><div className="footer-bottom"><span>INDEPENDENT DEVELOPER · BANGLADESH</span><p>Crafted with care. Built with purpose.</p><span>DESIGN & DEVELOPMENT</span></div></div></footer>
    </div></PortfolioMotion>
  );
}
