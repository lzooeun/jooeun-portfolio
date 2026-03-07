import React, { useState, useEffect, useRef, type MouseEvent } from "react";
import "./App.css";
import { FaReact, FaJs, FaPython, FaHtml5, FaDatabase, FaFigma, FaWordpress, FaGithub, FaLinkedin, FaLink, FaRobot } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser'
import { FaDiscord } from "react-icons/fa6";

import customNameImg from "./assets/pixel-name.png";
import profileImg from "./assets/profile.png";
import logoImg from "./assets/logo.png";

type NavLink = { label: string; slug: string };
type Project = { 
  title: string; 
  status: string; 
  description: string; 
  longDesc?: string;
  features?: string[];
  tech: string; 
  github?: string;
  demo?: string;
  image?: string;
  invite?: string;
};

export default function App() {
  useEffect(() => {
    const handleGlobalMouseMove = (e: globalThis.MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const navLinks: NavLink[] = [
    { label: "About", slug: "#about" },
    { label: "Projects", slug: "#projects" },
    { label: "Skills", slug: "#skills" },
    { label: "Contact", slug: "#contact" },
  ];

const projectsData: Project[] = [
  { 
    title: "TaekTube Tournament", 
    status: "FULL-STACK / LIVE", 
    description: "A fully automated League of Legends e-sports tournament platform powered by a custom Discord bot and a real-time Django web dashboard.", 
    longDesc: "A comprehensive digital infrastructure built to manage a custom League of Legends tournament. I co-planned the event and developed a seamless ecosystem bridging Discord and the Web. The project features a 24/7 automated Discord bot handling participant onboarding, team sign-ups, and match result processing, strictly synchronized with a Django-based dashboard that tracks real-time rosters, schedules, and dynamic tournament brackets. This platform was specifically built and deployed for a local Korean-speaking gaming community. The UI and bot commands are localized in Korean, but the underlying backend logic, database, and system architecture are fully language-agnostic.",
    features: [
      "Discord-Web Synchronization: Built a full-stack Django web platform that shares a real-time database with a custom discord.py bot, instantly reflecting team rosters, live scores, and tournament brackets.",
      "Automated Tournament Operations: Developed an interactive Discord bot utilizing Slash Commands and UI Views (Buttons) to completely automate team sign-ups, match result submissions, and multi-game (Bo3/Bo5) score tracking.",
      "Dynamic Bracket Progression: Implemented a backend logic that automatically determines match winners, updates standings based on complex tie-breakers (including speedrun records), and generates subsequent knockout stage matchups without manual intervention.",
      "Cohesive UI/UX Design: Led the end-to-end design direction, applying a striking Neo-Brutalism aesthetic consistently across the web dashboard, player cards, and custom Discord announcement banners."
    ],
    tech: "Django, Python, discord.py, JavaScript, API",
    github: "https://github.com/lzooeun/tournament",
    demo: "https://taektube.lol/",
    image: "/assets/taektube.gif"
  },
  { 
    title: "SideEye Tracker", 
    status: "PERSONAL", 
    description: "Real-time game tracking Discord bot using Riot Games and Clash Royale APIs to send automated match notifications.", 
    longDesc: "A real-time game tracking Discord bot utilizing the Riot Games (League of Legends) and Clash Royale APIs. It actively monitors registered players and pushes automated notifications to specific Discord channels whenever a match begins or ends.",
    features: [
      "Integrated Riot Games and Clash Royale APIs to fetch and process real-time player data.",
      "Implemented automated webhook notifications triggered by specific in-game events.",
      "Developed asynchronous event-driven logic using Python and the discord.py library."
    ],
    tech: "Python, discord.py, Riot API",
    github: "https://github.com/lzooeun/sideeye-discord-bot",
    invite: "https://discord.com/oauth2/authorize?client_id=1474908081740841171&permissions=8&integration_type=0&scope=bot",
    image: "assets/side-eye.png"
  },
  { 
    title: "Boundless Books", 
    status: "IN PROGRESS", 
    description: "Full-stack Django e-commerce bookstore featuring secure payments, user authentication, and dynamic reviews.", 
    longDesc: "A collaborative academic project building a comprehensive online bookstore using the Django framework. I led the UI/UX design direction while actively implementing core backend functionalities to bridge the gap between aesthetics and secure database operations.",
    features: [
      "Led the UI/UX design, creating a seamless and engaging shopping experience.",
      "Implemented a secure payment gateway and a comprehensive user authentication system.",
      "Developed a dynamic customer review and product rating feature using Django ORM.",
      "Collaborated effectively within a team environment to merge frontend views with backend logic."
    ],
    tech: "Django, Python, SQLite",
    github: "https://github.com/582-41B-VA/boundless-books"
  },
  { 
    title: "NYT Spelling Bee", 
    status: "ACADEMIC", 
    description: "An interactive word puzzle game built with React, featuring core NYT game logic and a minimalist UI.", 
    longDesc: "A React-based recreation of the popular NYT Spelling Bee puzzle, developed in a two-person team. I took charge of the visual design and core interactions, ensuring a highly responsive, minimalist interface while implementing the complex scoring and word-validation logic.",
    features: [
      "Spearheaded the UI/UX design, focusing on a minimalist and highly responsive user experience.",
      "Recreated and implemented the core game logic and dynamic scoring system using React states.",
      "Collaborated in a two-person team (with Intessar), utilizing Git for version control and agile workflow."
    ],
    tech: "React.js, JavaScript, CSS3",
    github: "https://github.com/lzooeun/nyt-spelling-bee",
    demo: "https://nyt-spelling-bee-alpha.vercel.app/",
    image: "/assets/spellingbee.png"
  },
  { 
    title: "Spotify Lo-Fi Player", 
    status: "PERSONAL", 
    description: "Aesthetic music player interface displaying real-time playback data via Spotify Web API.", 
    longDesc: "A visually aesthetic music player interface integrated with the Spotify Web API. Designed for personal satisfaction, it provides seamless user authentication and beautifully displays real-time playback data to enhance the listening experience.",
    features: [
      "Integrated Spotify Web API for secure user authentication (OAuth) and live data retrieval.",
      "Designed an aesthetically pleasing, mood-driven visualizer for currently playing tracks.",
      "Utilized React hooks for efficient state management and asynchronous API calls."
    ],
    tech: "React.js, Spotify API",
    github: "https://github.com/lzooeun/lofi-player",
    demo: "https://lofi-player-ruby.vercel.app/",
    image: "/assets/lofi-player.gif"
  },
  { 
    title: "Palette Atelier", 
    status: "CMS / WORDPRESS", 
    description: "A fully custom WordPress theme built from scratch, featuring dynamic front-page sections and an integrated blog.", 
    longDesc: "A bespoke WordPress CMS website developed from concept to final PHP coding without relying on pre-built themes or page builders. The primary focus was on establishing a robust backend connection, ensuring every section of the website can be intuitively edited directly through the wp-admin dashboard.",
    features: [
      "Coded the theme directly from scratch (PHP/CSS) without using design tools like Figma.",
      "Integrated dynamic WordPress logic to make all homepage sections fully editable via wp-admin.",
      "Implemented a fully functional blog system utilizing the standard WordPress Loop.",
      "Ensured a highly responsive and lightweight grid-based aesthetic."
    ],
    tech: "WordPress, PHP, CSS",
    demo: "https://palette-atelier-static.vercel.app/",
    image: "assets/palette-atelier.gif"
  },
  { 
    title: "Vinyl & Vibes", 
    status: "UI/UX DESIGN", 
    description: "Comprehensive UI/UX design, wireframing, and prototyping for a music curation platform.", 
    features: [
      "Conducted user research and created detailed wireframes for a music curation platform.",
      "Designed high-fidelity prototypes with interactive transitions using Figma.",
      "Established a consistent design system, including typography, color palettes, and grid layouts."
    ],
    tech: "Figma, Prototyping",
    github: "https://github.com/lzooeun/palette-atelier-theme",
    demo: "https://www.figma.com/design/sd4rATFjP60gndcUgl1ULX/Phase-4---High-Fidelity-UI?node-id=0-1&t=25Ah25z8FCjFEPvj-1",
    image: "assets/vinyl_vibes.gif"
  }
];
const skillsData = [
    { 
      title: "HTML5 / CSS3", 
      icon: <FaHtml5 />,
      description: "Semantic markup and responsive grid layouts directly coded without builders.",
      level: 95 
    },
    { 
      title: "JavaScript / TS", 
      icon: <FaJs />,
      description: "Core logic implementation, DOM manipulation, and asynchronous operations.",
      level: 85 
    },
    { 
      title: "React.js", 
      icon: <FaReact />,
      description: "Interactive UI development and complex state management (e.g., game logic).",
      level: 90 
    },
    { 
      title: "Python / Django", 
      icon: <FaPython />,
      description: "Full-stack architecture, custom matchmaking algorithms, and secure auth.",
      level: 80 
    },
    { 
      title: "WordPress (PHP)", 
      icon: <FaWordpress />,
      description: "100% Custom theme development from scratch and dynamic wp-admin integration.",
      level: 85 
    },
    { 
      title: "SQL & Databases", 
      icon: <FaDatabase />,
      description: "Relational database design, ORM queries, and efficient data management.",
      level: 75 
    },
    { 
      title: "APIs & Automation", 
      icon: <FaRobot />,
      description: "RESTful API integration and building 24/7 automated Discord bots (discord.py).",
      level: 80 
    },
    { 
      title: "UI/UX & Figma", 
      icon: <FaFigma />,
      description: "Minimalist design systems, wireframing, and user-centric prototyping.",
      level: 90 
    }
  ];

  return (
    <>
      <div className="bg-spotlight"></div>
      <Header links={navLinks} />
      <div className="container">
        <Hero />
        <About />
        <Projects projects={projectsData} />
        <Skills skills={skillsData} />
        <Contact />
      </div>
    </>
  );
}


function Header({ links }: { links: NavLink[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-logo">
          <a href="#"><img src={logoImg} alt="Logo" /></a>
        </div>
        <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={isMenuOpen ? "nav-open" : ""}>
          {links.map((link) => (
            <a key={link.slug} href={link.slug} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {isMenuOpen && <div className="nav-overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardStyle, setCardStyle] = useState({});
  const [glareStyle, setGlareStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setCardStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out"
    });

    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.2) 0%, transparent 60%)`,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: "transform 0.5s ease-out"
    });
    setGlareStyle({ opacity: 0 });
  };
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="greeting">Hello, I'm</p>
        <img src={customNameImg} alt="JOOEUN LEE" className="custom-name-img" />
        <p className="hero-subtitle">Designer-Minded Developer. Bridging Creativity & Code</p>
        <div className="hero-socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
      <div className="hero-right">
        <div 
          className="tilt-wrapper"
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={cardStyle}
        >
          <div className="tilt-glare" style={glareStyle}></div>
          
          <div className="code-wrapper">
            <div className="code-inner">
              <span className="c-blue">const</span> <span className="c-white">developer = {"{"}</span><br />
              &nbsp;&nbsp;name: <span className="c-string">'Jooeun Lee'</span>,<br />
              &nbsp;&nbsp;skills: [<span className="c-string">'React', 'JavaScript', 'WordPress'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-string">'Photoshop', 'Illustrator', 'Python'</span>],<br />
              &nbsp;&nbsp;hardWorker: <span className="c-blue">true</span>,<br />
              &nbsp;&nbsp;quickLearner: <span className="c-blue">true</span><br />
              <span className="c-white">{"};"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2 className="section-title">About Me</h2>
        <h3 className="about-headline">
          Communicate through Design,<br />
          Implement through Code.
        </h3>
        <p className="about-intro">
          Hi, I'm <strong>Jooeun Lee</strong>. I am a <strong>Design-minded Developer</strong> blending visual aesthetics with technical logic.
        </p>
        <div className="about-specs">
          <div className="spec-item">
            <span className="spec-label">Creative_Root</span>
            <p><strong>Dawson College</strong> / Graphic Design. Built a strong foundation in typography, layout principles, and visual storytelling.</p>
          </div>
          <div className="spec-item">
            <span className="spec-label">Tech_Logic</span>
            <p><strong>Vanier College</strong> / Web Development. Mastering full-stack implementation to bring designs to life through clean, efficient code.</p>
          </div>
          <div className="spec-item">
            <span className="spec-label">My_Vibe</span>
            <p>Minimalist grid systems infused with unique, interactive details.</p>
          </div>
        </div>

        <p className="about-outro">
          Equipped with a <span className="c-blue">designer's eye</span> and a <span className="c-blue">developer's toolkit</span>, I'm ready to build experiences that users truly enjoy.
        </p>
      </div>
      
      <div className="about-photo">
        <img src={profileImg} alt="Jooeun Lee" />
        <p className="photo-caption">/* Jooeun Lee, 202X */</p>
      </div>
    </section>
  );
}

function Projects({ projects }: { projects: Project[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDrawer = (proj: Project) => {
    setSelectedProject(proj);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  const getBadgeClass = (status: string) => {
    if (status.includes("ACADEMIC")) return "academic";
    if (status.includes("CMS") || status.includes("WORDPRESS")) return "cms";
    if (status.includes("LIVE") || status.includes("FULL-STACK")) return "live";
    if (status.includes("IN PROGRESS")) return "progress";
    return "";
  }

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="grid-3">
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="project-card"
            onClick={() => handleOpenDrawer(proj)}
          >
            <div className="card-header">
              <h4>{proj.title}</h4>
              <span className={`badge ${getBadgeClass(proj.status)}`}>{proj.status}</span>
            </div>
            <p>{proj.description}</p>
            <div className="project-tech-list">
              {proj.tech.split(',').map((techItem, idx) => (
                <span key={idx} className="tech-tag-item">
                  {techItem.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* --- Slide-out Drawer --- */}
      <div 
        className={`drawer-overlay ${isOpen ? "open" : ""}`} 
        onClick={handleCloseDrawer} 
      ></div>

      <div className={`drawer-panel ${isOpen ? "open" : ""}`}>
        {selectedProject && (
          <div className="drawer-content">
            <button className="close-btn" onClick={handleCloseDrawer}>
              <IoClose /> ESC
            </button>
            
            <div className="drawer-header">
              <span className="badge">{selectedProject.status}</span>
              <h2>{selectedProject.title}</h2>
              <span className="project-tech c-blue">{selectedProject.tech}</span>
            </div>

            <div className="drawer-media">
              {selectedProject.image ? (
                <img 
                  src={selectedProject.image} 
                  alt={`${selectedProject.title} demo`} 
                  className="drawer-image" 
                />
              ) : (
                <p className="c-muted">/* Image / GIF Placeholder */</p>
              )}
            </div>

            <div className="drawer-body">
              <h3>// Overview</h3>
              <p>{selectedProject.longDesc || selectedProject.description}</p>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <>
                  <h3 style={{ marginTop: "2rem" }}>// Key Features</h3>
                  <ul className="drawer-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="drawer-actions">
              {selectedProject.github && (
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-btn outline"
                >
                  <FaGithub /> GitHub Repo
                </a>
              )}
              {selectedProject.demo && (
                <a 
                  href={selectedProject.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="action-btn solid"
                >
                  <FaLink /> Live Demo
                </a>
              )}
              {selectedProject.invite && (
                <a href={selectedProject.invite} 
                 target="_blank" 
                  className="action-btn solid" 
                  style={{ borderColor: '#5865F2', color: '#5865F2', background: 'rgba(88, 101, 242, 0.1)' }}
                >
                  <FaDiscord /> Invite Bot
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Skills({ skills }: { skills: any[] }) {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="grid-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <div className="skill-bg-icon">{skill.icon}</div>
            
            <div className="skill-header">
              <span className="skill-icon-anim">{skill.icon}</span>
              <h4>{skill.title}</h4>
            </div>
            <p>{skill.description}</p>
            
            <div className="progress-track">
              <div 
                className="progress-fill-segmented" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="adobe-card">
        <div className="adobe-header">
          <span className="adobe-icon"><FaReact /></span>
          <span>Adobe_Suite.exe</span>
        </div>
        <div className="adobe-terminal-inner">
          <p className="cmd-line">
            <span className="c-red">&gt;</span> load_modules --design
          </p>
          <div className="cmd-output">
            <p>[<span className="c-blue">OK</span>] <span className="t-tag">Ps</span> Photoshop</p>
            <p>[<span className="c-blue">OK</span>] <span className="t-tag">Ai</span> Illustrator</p>
            <p>[<span className="c-blue">OK</span>] <span className="t-tag">Ae</span> <span className="t-tag">Pr</span> Motion Graphics</p>
          </div>
          <p className="c-yellow blink">-</p>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("SENDING");

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,    
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   
      {
        name: formData.name,       
        email: formData.email,     
        message: formData.message, 
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY     
    )
    .then((result) => {
        console.log("전송 성공:", result.text);
        setStatus("SUCCESS");
        setTimeout(() => { 
          setStatus("IDLE"); 
          setFormData({ name: "", email: "", message: "" }); 
        }, 3000);
    })
    .catch((error) => {
        console.log("전송 실패:", error.text);
        setStatus("IDLE");
        alert("메시지 전송에 실패했습니다. 다시 시도해 주세요.");
    });
  };
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <div className="contact-text">
          <h3 className="contact-headline">Let's build something<br />amazing together.</h3>
          <p className="contact-desc">
            I create meaningful experiences at the intersection of design and code. <br />
            Whether you have a question or a project in mind, feel free to deploy a message via the terminal below!
          </p>
          <div className="contact-info-list">
            <p><strong>EMAIL:</strong> your.email@example.com</p>
          </div>
        </div>

        <div className="terminal-window">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="terminal-title">message_payload.sh</div>
          </div>

          <form className="terminal-body" onSubmit={handleSubmit}>
            <div className="cmd-line">
              <span className="prompt">guest@jooeun:~$</span>
              <span className="command"> sudo init contact --form</span>
            </div>

            <div className="input-group">
              <label htmlFor="name">NAME:</label>
              <input 
                type="text" id="name" placeholder="Enter your name..."
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">EMAIL:</label>
              <input 
                type="email" id="email" placeholder="your@email.com"
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">MESSAGE:</label>
              <textarea 
                id="message" placeholder="Type your message here..."
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
              />
            </div>

            <div className="terminal-status">
              {status === "IDLE" && <p className="c-muted">/* Ready to deploy your message. */</p>}
              {status === "SENDING" && <p className="c-blue blink">🚀 Pushing to remote server... [75%]</p>}
              {status === "SUCCESS" && <p className="c-green">✅ [SUCCESS] Message deployed successfully!</p>}
            </div>

            <button type="submit" className="commit-btn" disabled={status !== "IDLE"}>
              {status === "IDLE" ? "[ COMMIT & PUSH ]" : "[ PROCESSING... ]"}
            </button>
          </form>
        </div>
      </div>

      <footer className="site-footer">
        <p>/* © 2026 JOOEUN LEE. Designed with Figma, Implemented with React. */</p>
      </footer>
    </section>
  );
}