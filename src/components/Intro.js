import React from 'react';
import selfieImage from '../assets/headshot.jpeg';
import sabergraphsImg from '../assets/saber-graphs/sg_home_screen.png';
import absImg from '../assets/abs-challenge/projected_wins.png';
import mlTradingImg from '../assets/ml-trading/in_sample_manual_vs_qlearner.png';
import wordDropImg from '../assets/reddit-hackathon/word_drop_drag.gif';
import unityAiImg from '../assets/unity-ai/GridLattice.png';
import resumePDF from '../assets/resume.pdf';
import { scrollTo } from '../utils/scroll';

const credentials = [
    { label: 'M.S., CS', detail: 'Georgia Tech · ML' },
    { label: 'B.S., CS', detail: 'Hunter College' },
];

const experiences = [
    {
        company: 'Grizz the Beagle',
        role: 'Software Engineer',
        period: 'May 2025 — Present',
        where: 'New York, NY',
        bullets: [
            'Automated over 80% of routine customer inquiries using a production RAG chatbot (FastAPI, Claude Haiku) integrated with a no-code Google Sheets knowledge base.',
            'Decreased average response times from 8+ hours to under 3 seconds by deploying a stateless, vanilla-JS chat widget directly within the Shopify theme code.',
            'Architected a full-stack analytics pipeline (Next.js, Postgres) with nightly ETL jobs to ingest Shopify, Meta Ads, and chatbot data into a unified platform, providing daily auto-generated insights.',
        ],
        tech: ['FastAPI', 'Claude', 'Postgres', 'Next.js', 'Shopify'],
    },
    {
        company: 'Varsity Tutors',
        role: 'Computer Science Tutor',
        period: 'Jun 2025 — Present',
        where: 'New York, NY',
        bullets: [
            'Mentor students from middle school through university in Python, OOP, and algorithms through pair programming, live code reviews, and interactive debugging sessions.',
            'Create custom assignments and study plans tailored to each student\'s gaps, helping them get up to speed for university-level coursework.',
        ],
        tech: ['Python', 'OOP', 'Algorithms'],
    },
    {
        company: 'Two Sigma',
        role: 'Software Engineering Mentee',
        period: 'Jul 2021 — Aug 2021',
        where: 'New York, NY',
        bullets: [
            'Contributed to pip, the Python package manager, by submitting pull requests fixing uninstallation bugs.',
            'Built a CLI tool for dependency debugging that maps source files to their origin packages; presented the final project to an engineering panel.',
        ],
        tech: ['Python', 'Open Source', 'CLI'],
    },
];

const projectGroups = [
    {
        name: 'AI / Machine Learning',
        items: [
            {
                id: 'sabergraphs',
                title: 'SaberGraphs',
                blurb: 'Type a baseball question in natural language, get back an interactive chart and a short written answer.',
                year: 2026,
                status: 'Live',
                tech: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI'],
                media: sabergraphsImg,
                liveLink: 'https://sabergraphs.com',
                github: null,
            },
            {
                id: 'abs',
                title: 'ABS Challenge Strategy',
                blurb: "Reinforcement learning applied to MLB's new robot-umpire challenge system. Presented at the SABR Analytics Conference 2026.",
                year: 2026,
                status: 'Presented at SABR 2026',
                tech: ['Python', 'Q-Learning', 'pybaseball'],
                media: absImg,
                liveLink: null,
                github: 'https://github.com/cmartinez131/sabr-abs-challenge',
            },
            {
                id: 'ml-trading',
                title: 'ML Trading Strategy',
                blurb: 'Compared a rules-based trading strategy to a reinforcement-learning agent on JPMorgan stock. The learned agent beat the benchmark on both training and test data.',
                year: 2024,
                status: 'Course',
                tech: ['Python', 'Q-Learning', 'Matplotlib'],
                media: mlTradingImg,
                liveLink: null,
                github: null,
            },
        ],
    },
    {
        name: 'Full-Stack',
        items: [
            {
                id: 'mlb-api',
                title: 'MLB Analytics API',
                blurb: "Pulls live MLB stats and pitch-tracking data, computes a custom \u201cVeteran Presence\u201d score for any player, and serves the result to any app that asks for it.",
                year: 2025,
                status: 'Deployed',
                tech: ['FastAPI', 'pandas', 'Docker', 'AWS'],
                media: null,
                liveLink: null,
                github: 'https://github.com/cmartinez131/umpire-batter-analytics-api',
            },
            {
                id: 'sketch',
                title: 'Real-Time Drawing Game',
                blurb: 'Real-time multiplayer drawing and guessing game, similar to Pictionary. Players take turns sketching prompts while others try to guess, with live chat and round scoring.',
                year: 2023,
                status: 'Shipped',
                tech: ['React', 'Node', 'Socket.IO', 'MongoDB'],
                media: null,
                liveLink: null,
                github: 'https://github.com/cmartinez131/sketch',
            },
            {
                id: 'batting-cage',
                title: 'Batting Cage Booking App',
                blurb: 'Online booking system for a batting-cage business. Customers can reserve cage time 24/7, sign in securely, and find the location on an embedded map.',
                year: 2023,
                status: 'Live',
                tech: ['React', 'Firebase', 'Tailwind'],
                media: null,
                liveLink: 'https://batting-cage-app.web.app/',
                github: 'https://github.com/cmartinez131/batting-cage-business-website',
            },
        ],
    },
    {
        name: 'Games & Systems',
        items: [
            {
                id: 'word-drop',
                title: 'Word Drop',
                blurb: 'Word game that plays inside a Reddit post, with a live global leaderboard. Built for the Reddit Developer Platform hackathon.',
                year: 2024,
                status: 'Hackathon',
                tech: ['JavaScript', 'Redis', 'Devvit'],
                media: wordDropImg,
                liveLink: 'https://www.reddit.com/r/WordDrop/comments/1hgk1iz/word_drop/',
                github: 'https://github.com/cmartinez131/word-drop',
            },
            {
                id: 'unity-ai',
                title: 'Unity Path-Planning AI',
                blurb: 'Pathfinding framework for video game characters. Implements the core navigation techniques used to route NPCs around obstacles in modern games.',
                year: 2025,
                status: 'Coursework',
                tech: ['C#', 'Unity', 'A*', 'Comp. Geometry'],
                media: unityAiImg,
                liveLink: null,
                github: null,
            },
        ],
    },
];

const Intro = () => {
    return (
        <div id="intro-section" className="recruiter-layout">
            <aside className="rec-sidebar">
                <div className="rec-sidebar-inner">
                    <img
                        className="rec-avatar"
                        src={selfieImage}
                        alt="Christopher Martinez"
                    />
                    <h1 className="rec-name">Christopher Martinez</h1>
                    <p className="rec-role">Software Engineer</p>
                    <p className="rec-subrole">M.S. Computer Science, Georgia Tech</p>

                    <div className="rec-side-section">
                        <div className="rec-side-label">Contact</div>
                        <a
                            className="rec-side-link"
                            href="mailto:chrismartinez131@gmail.com"
                        >
                            chrismartinez131@gmail.com
                        </a>
                        <a
                            className="rec-side-link"
                            href="https://github.com/cmartinez131"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            github.com/cmartinez131
                        </a>
                        <a
                            className="rec-side-link"
                            href="https://www.linkedin.com/in/cmartinez131"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/cmartinez131
                        </a>
                        <div className="rec-side-location">New York, NY</div>
                    </div>

                    <div className="rec-side-section">
                        <div className="rec-side-label">At a Glance</div>
                        {credentials.map((c) => (
                            <div key={c.label} className="rec-cred-row">
                                <div className="rec-cred-label">{c.label}</div>
                                <div className="rec-cred-detail">{c.detail}</div>
                            </div>
                        ))}
                    </div>

                    <a
                        className="rec-resume-btn"
                        href={resumePDF}
                        download="Christopher_Martinez_Resume.pdf"
                    >
                        Download resume ↓
                    </a>
                </div>
            </aside>

            <main className="rec-main">
                <section className="rec-about">
                    <div className="rec-section-head">
                        <h2 className="rec-h2">About</h2>
                        <div className="rec-line" />
                    </div>
                    <p className="rec-bio-para">
                        I earned a BS in Computer Science from Hunter College and am
                        pursuing an MS in Computer Science at Georgia Tech, specializing
                        in machine learning. I build full-stack applications and continue
                        to expand my AI/ML skill set.
                    </p>
                    <p className="rec-bio-para">
                        Recently, I designed a reinforcement-learning system for an MLB
                        challenge strategy that I presented at the{' '}
                        <a
                            className="intro-link"
                            href="https://sabergraphs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SABR Analytics Conference 2026
                        </a>
                        . I'm currently building{' '}
                        <a
                            className="intro-link"
                            href="https://sabergraphs.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SaberGraphs
                        </a>
                        , a full-stack AI app that turns natural-language questions into
                        interactive baseball data visualizations.
                    </p>
                    <p className="rec-bio-para">
                        Previously, I contributed to pip, the Python package manager, as
                        a software-engineering mentee at Two Sigma. Outside of work, I'm
                        a baseball fan who builds side projects around the sport. Explore
                        my{' '}
                        <a
                            className="intro-link"
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollTo('projects');
                            }}
                        >
                            projects
                        </a>{' '}
                        below.
                    </p>
                </section>

                <section className="rec-experience">
                    <div className="rec-section-head">
                        <h2 className="rec-h2">Experience</h2>
                        <div className="rec-line" />
                    </div>
                    <div className="rec-exp-list">
                        {experiences.map((e) => (
                            <article key={e.company} className="rec-exp-card">
                                <div className="rec-exp-head">
                                    <div className="rec-exp-head-left">
                                        <h3 className="rec-exp-title">{e.company}</h3>
                                        <div className="rec-exp-role">{e.role}</div>
                                    </div>
                                    <div className="rec-exp-meta">
                                        <div className="rec-exp-period">{e.period}</div>
                                        <div className="rec-exp-where">{e.where}</div>
                                    </div>
                                </div>
                                <ul className="rec-exp-bullets">
                                    {e.bullets.map((b, i) => (
                                        <li key={i} className="rec-exp-bullet">{b}</li>
                                    ))}
                                </ul>
                                {e.tech.length > 0 && (
                                    <div className="rec-exp-tech-row">
                                        {e.tech.map((t) => (
                                            <span key={t} className="rec-exp-tech">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                <section id="projects" className="rec-projects">
                    <div className="rec-section-head">
                        <h2 className="rec-h2">Projects</h2>
                        <div className="rec-line" />
                    </div>
                    {projectGroups.map((group) => (
                        <div key={group.name} className="rec-project-group">
                            <div className="rec-group-head">{group.name}</div>
                            <div className="rec-grid">
                                {group.items.map((p) => (
                                    <article key={p.id} className="rec-card">
                                        <div className="rec-card-img">
                                            {p.media ? (
                                                <img src={p.media} alt="" />
                                            ) : (
                                                <div className="rec-card-placeholder">{p.title}</div>
                                            )}
                                            <div className="rec-status-tag">{p.status}</div>
                                        </div>
                                        <div className="rec-card-body">
                                            <div className="rec-card-meta">
                                                <span>{p.year}</span>
                                                <span className="rec-card-meta-dot">·</span>
                                                <span>{group.name}</span>
                                            </div>
                                            <h3 className="rec-card-title">{p.title}</h3>
                                            <p className="rec-card-blurb">{p.blurb}</p>
                                            <div className="rec-exp-tech-row">
                                                {p.tech.map((t) => (
                                                    <span key={t} className="rec-exp-tech">{t}</span>
                                                ))}
                                            </div>
                                            <div className="rec-card-links">
                                                {p.liveLink && (
                                                    <a
                                                        className="rec-primary-btn"
                                                        href={p.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Live ↗
                                                    </a>
                                                )}
                                                {p.github && (
                                                    <a
                                                        className="rec-ghost-btn"
                                                        href={p.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Code ↗
                                                    </a>
                                                )}
                                                {!p.liveLink && !p.github && (
                                                    <span className="rec-coursework-note">
                                                        Coursework · code not public
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Intro;
