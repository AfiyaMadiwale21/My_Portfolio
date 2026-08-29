import React, { useEffect, useState } from 'react';
import { useRef } from "react";
import { createRoot } from 'react-dom/client';
import './styles.css';

const icons = {
  arrow: '→', github: '🌐', link: '🔗', mail: '✉︎', menu: '☰', close: '×'
};
const socials = [
  ['GitHub', 'https://github.com/AfiyaMadiwale21', icons.github],
  ['LinkedIn', 'https://www.linkedin.com/in/afiya-madiwale', 'in'],
  ['Email', 'mailto:afiyamadiwale@gmail.com', icons.mail]
];
const skills = {
  Languages: ['C++', 'Java', 'Python', 'JavaScript'],
  Frontend: ['HTML', 'CSS', 'React.js', 'Vite', 'Tailwind CSS', 'Responsive Web Design'],
  'Backend & data': ['Node.js', 'Express.js', 'MongoDB / Mongoose', 'MySQL', 'Firebase', 'Supabase'],
  'APIs & AI': ['REST APIs', 'Postman', 'OpenAI API', 'OpenRouter API', 'LLM integration'],
  'Tools & deployment': ['Git', 'GitHub', 'Chrome DevTools', 'VS Code', 'Vercel', 'Render']
};
const projects = [
  { name: 'BlogNest', type: 'Full-stack publishing platform', desc: 'A blog-management application focused on creating, managing, and reading content with authenticated user flows.', stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'vercel', 'Git', 'Github', 'Vite', 'Daisy UI'], git: 'https://github.com/AfiyaMadiwale21/BlogNest', live: 'https://blognest-coral.vercel.app/', mark: 'BN' },
  { name: 'ResuMate', type: 'AI resume analyzer', desc: 'An AI-powered tool that compares a resume with a job description to surface ATS compatibility, skill gaps, keywords, and improvement suggestions.', stack: ['React', 'Node.js', 'Express.js', 'Open Router API', 'AI integration', 'LLM'], git: 'https://github.com/AfiyaMadiwale21/ResuMate', mark: 'RM' },
  { name: 'CodeBot', type: 'AI-assisted application', desc: 'A focused application exploring conversational, AI-powered functionality and modern web interfaces.', stack: ['React', 'JavaScript', 'AI integration', 'Gemini AI'], git: 'https://github.com/AfiyaMadiwale21/CodeBot', mark: 'CB' },
  { name: 'EduQuiz', type: 'Interactive learning interface', desc: 'A quiz-focused web project designed around clear, accessible question-and-answer interactions.', stack: ['JavaScript', 'HTML', 'CSS'], git: 'https://github.com/AfiyaMadiwale21', mark: 'EQ' },
  { name: 'Weather & News Dashboard', type: 'Information dashboard', desc: 'A consolidated dashboard concept for presenting weather and news information through API-driven interfaces.', stack: ['JavaScript', 'REST APIs', 'JSON'], git: 'https://github.com/AfiyaMadiwale21', mark: 'WN' },
  { name: 'Amazon UI Clone', type: 'Responsive UI implementation', desc: 'A frontend recreation project focused on translating a familiar commerce interface into responsive web UI.', stack: ['HTML', 'CSS', 'JavaScript'], git: 'https://github.com/AfiyaMadiwale21/Amazon-UI-Clone', mark: 'AM' },
];
const values = [
  ['◌', 'Frontend development', 'Crafting clear, responsive interfaces with care for interaction and usability.'],
  ['⌘', 'Full-stack development', 'Connecting thoughtful client experiences with practical application logic.'],
  ['✦', 'Problem solving', 'Breaking complex requirements into focused, buildable product decisions.'],
  ['⟡', 'AI-powered applications', 'Exploring useful ways to integrate generative AI into web products.']
];

function Reveal({ children, className = '' }) { return <div className={`reveal ${className}`}>{children}</div> }
function Button({ href, children, light = false }) { return <a className={`button ${light ? 'light' : ''}`} href={href}>{children} <span>{icons.arrow}</span></a> }
function Socials() { return <div className="socials">{socials.map(([n, u, i]) => <a key={n} href={u} target={u.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={n}>{i}</a>)}</div> }
function SectionTitle({ eyebrow, title, text }) { return <Reveal className="section-head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="intro">{text}</p>}</Reveal> }
function Navbar() { const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const links = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Achievements', 'Education', 'Contact']; useEffect(() => { const update = () => setScrolled(window.scrollY > 40); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, []); return <header className={scrolled ? 'scrolled' : ''}><a href="#home" className="logo" aria-label="Home">AM<span>.</span></a><nav className={open ? 'open' : ''}>{links.map(x => <a onClick={() => setOpen(false)} href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</nav><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? icons.close : icons.menu}</button></header> }
function Hero() { return <section id="home" className="hero"><div className="orb orb-two" /><div className="code-chip chip-one">&lt;/&gt;</div><div className="hero-copy"><p className="eyebrow">Available for opportunities · 2026</p><em style={{ fontSize: "30px", color: "lightyellow", fontWidth: "semi-condensed" }} >Afiya Madiwale</em><h1>Building useful software with <em>clarity.</em></h1><p className="hero-desc">Computer Science Engineering graduate building modern React applications, practical full-stack experiences, and AI-powered tools.</p><div className="hero-actions"><Button href="#projects">View my projects</Button><Button href="#contact" light>Let&apos;s talk</Button></div><Socials /></div><div className="portrait-wrap"><div className="portrait-ring" /><div className="portrait-note">Software<br />Developer <span>✦</span></div><img src="/profilephoto.jpeg" alt="Afiya Madiwale" className="portrait" /></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section> }
function About() { return <section id="about" className="about"><SectionTitle eyebrow="01 / About" title={<>A developer grounded in <em>thoughtful execution.</em></>} /><div className="about-grid"><Reveal><p className="big-copy">I&apos;m Afiya, a recent Computer Science Engineering graduate focused on building web applications people can actually use. My work combines frontend craft with hands-on full-stack development using React, JavaScript, Node.js, and modern tools.</p></Reveal><Reveal><p>I enjoy translating product ideas, I am focused on engineering connected applications from initial concept to deployment. I specialize in building smooth application logic, configuring seamless API integrations, and implementing robust user authentication mechanisms to ensure system security. Beyond standard development, I have a keen interest in leveraging AI-powered tools to optimize and automate everyday software workflows. Backed by a strong engineering foundation and a hands-on approach to problem-solving, I am eager to bring my fresh perspective and technical drive into a collaborative development team where I can ship high-quality code and grow as a professional engineer.</p><a href="#contact" className="text-link">More about how I work <span>↗</span></a></Reveal></div></section> }
function Values() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".value-card");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="values">
      <div className="value-grid" ref={gridRef}>
        {values.map(([icon, title, desc], i) => (
          <Reveal key={title}>
            <article className={`value-card v${i}`}>
              <span className="value-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <i>0{i + 1}</i>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
} function Skills() { return <section id="skills" className="skills"><SectionTitle eyebrow="02 / Toolkit" title={<>Tools for making ideas <em>real.</em></>} text="A focused toolkit for building fast, connected web experiences." /><div className="skill-groups">{Object.entries(skills).map(([group, items], i) => <Reveal key={group}><div className="skill-group"><p>{String(i + 1).padStart(2, '0')} <span>{group}</span></p><div>{items.map((skill, j) => <b key={skill} className={`tag tag-${(i + j) % 4}`}>{skill}</b>)}</div></div></Reveal>)}</div></section> }
function Experience() { return <section id="experience" className="experience"><SectionTitle eyebrow="03 / Experience" title={<>Learning by building in <em>real contexts.</em></>} /><Reveal><article className="experience-card"><div><p className="eyebrow">Practical exposure</p><h3>JIEF Foundation</h3><span className="role">Web development experience (Remote)-3 Months</span></div><ul><li>Contributed to web-development-related work with attention to clear, usable digital interfaces.</li><li>Applied frontend implementation skills in a practical, collaborative setting.</li><li>Strengthened hands-on development habits through real project exposure and iteration.</li></ul><span className="experience-star">✦</span></article></Reveal></section> }
function Projects() { return <section id="projects" className="projects"><SectionTitle eyebrow="04 / Selected work" title={<>From an idea to a <em>working experience.</em></>} text="A selection of projects across full-stack applications, AI integration, dashboards, and frontend builds." /><div className="project-grid">{projects.map((p, i) => <Reveal key={p.name}><article className={`project p${i % 4}`}><div className="project-art"><span>{p.mark}</span><i>{p.type}</i><div className="art-grid" /></div><div className="project-body"><p className="project-number">0{i + 1}</p><h3>{p.name}</h3><p>{p.desc}</p><div className="stack">{p.stack.map(x => <span key={x}>{x}</span>)}</div><div className="project-links"><a href={p.git} target="_blank" rel="noreferrer">Repository {icons.arrow}</a>{p.live && <a href={p.live} target="_blank" rel="noreferrer">Live site {icons.link}</a>}</div></div></article></Reveal>)}</div></section> }
function Certifications() { const certs = [['Build Your Generative AI Productivity Skills', 'Microsoft & LinkedIn Learning', 'https://drive.google.com/file/d/1_bqJ8Obnc7viNeBMcEBsC-uhBE1ZKrFH/view?usp=sharing', 'GEN AI'], ['Frontend Development Intern', 'IBM SkillsBuild & Edunet Foundation', 'https://drive.google.com/file/d/1kGwYS_5_Dc-PIKvkf9B0OHQ-xPKKvCph/view?usp=drivesdk', 'FRONTEND']]; return <section id="certifications" className="certifications"><SectionTitle eyebrow="05 / Certifications" title={<>Proof of <em>continuous learning.</em></>} /><div className="cert-grid">{certs.map(([name, issuer, url, mark]) => <Reveal key={name}><article className="cert"><div className="cert-art"><small>Certificate of completion</small><strong>{mark}</strong><span>AM</span></div><div><h3>{name}</h3><p>{issuer}</p><a className="text-link" href={url} target="_blank" rel="noreferrer">View certificate <span>↗</span></a></div></article></Reveal>)}</div></section> }
function Achievements() { let xs = [['◎', 'NSS Volunteer', 'Organized community visits and awareness events.'], ['⌘', 'CODE HUNTER · YUKTI-2025', 'Finalist in CODE HUNTER at YUKTI-2025, National Coding Event by VTU.'], ['✦', 'Best Poster Presentation Award', 'Received Best Poster Presentation Award at Jain College, highlighting excellence in presentation skills']]; return <section id="achievements" className="achievements"><SectionTitle eyebrow="06 / Beyond code" title={<>Curiosity, contribution, and <em>communication.</em></>} /><div className="achievement-list">{xs.map(([i, t, d], n) => <Reveal key={t}><article><span>{i}</span><p>0{n + 1}</p><div><h3>{t}</h3><p>{d}</p></div></article></Reveal>)}</div></section> }
function Education() { let ed = [['Bachelor of Engineering', 'Computer Science & Engineering', 'Jain College of Engineering', 'CGPA 8.87 / 10'], ['Pre-University', 'PCMCs', "KLE's Rajalakhamagouda College of Science", '92%'], ['School', '', 'Benson English Medium High School', '91.68%']]; return <section id="education" className="education"><SectionTitle eyebrow="07 / Education" title={<>Built on a strong <em>foundation.</em></>} /><div className="education-grid">{ed.map(([level, field, school, score], i) => <Reveal key={level}><article className={`education-card e${i}`}><p>0{i + 1}</p><h3>{level}</h3><strong>{field}</strong><span>{school}</span><b>{score}</b></article></Reveal>)}</div></section> }
function Contact() { const [status, setStatus] = useState(''); async function send(e) { e.preventDefault(); const form = e.currentTarget; setStatus('Sending…'); try { let res = await fetch('https://formsubmit.co/ajax/afiyamadiwale@gmail.com', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) }); if (!res.ok) throw Error(); form.reset(); setStatus('Thank you — your message is on its way.'); } catch { setStatus('Could not send right now. Please email me directly instead.'); } } return <><section className="final-cta"><p className="eyebrow">Open to opportunities</p><h2>Let&apos;s build something <em>meaningful.</em></h2><p>For roles, collaborations, or a conversation about software—my inbox is open.</p><Button href="#contact">Let&apos;s talk</Button></section><section id="contact" className="contact"><SectionTitle eyebrow="08 / Contact" title={<>Send me a <em>message.</em></>} /><div className="contact-grid"><p>Have an opportunity or an idea? I&apos;d love to hear about it.<br /><a href="mailto:afiyamadiwale@gmail.com">afiyamadiwale@gmail.com</a></p><form onSubmit={send}><label>Full name<input required name="name" placeholder=" " /></label><label>Email address<input required type="email" name="email" placeholder=" " /></label><label>Subject<input required name="subject" placeholder=" " /></label><label>Message<textarea required name="message" placeholder=" " /></label><button className="button" type="submit">Send message <span>→</span></button>{status && <p role="status" className="form-status">{status}</p>}</form></div></section></> }
function App() { const [load, setLoad] = useState(true); useEffect(() => { let o = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('shown')), { threshold: .08 }); document.querySelectorAll('.reveal').forEach(x => o.observe(x)); let t = setTimeout(() => setLoad(false), 850); return () => { o.disconnect(); clearTimeout(t) } }, []); return <><style>{`header{color:#fff;mix-blend-mode:normal;transition:color .25s,background .25s}header.scrolled{color:var(--ink);background:#fff9;backdrop-filter:blur(12px)}@media(max-width:650px){.hero{padding-top:104px;padding-bottom:42px;min-height:610px}.hero h1{font-size:47px;margin-bottom:18px}.hero-desc{max-width:88%;font-size:13px;line-height:1.55}.hero-actions{margin:25px 0}.portrait-wrap{width:170px;height:230px;right:-20px;bottom:35px}.orb-two{left:-55px;bottom:11%;width:115px;height:115px;border-width:22px}.chip-one{right:12%;top:45%}header{color:#fff}header.scrolled{color:var(--ink)}}`}</style>{load && <div className="loader"><span>AM</span><i /></div>}<Navbar /><main><Hero /><About /><Values /><Skills /><Experience /><Projects /><Certifications /><Achievements /><Education /><Contact /></main><footer><a href="#home" className="logo">AM<span>.</span></a><p>Software Developer · Building useful web experiences.</p><Socials /><small>© {new Date().getFullYear()} Afiya Madiwale</small></footer></> };
createRoot(document.getElementById('root')).render(<App />);
