import React from 'react';
import selfieImage from '../assets/headshot.jpeg';
import { scrollTo } from '../utils/scroll';

const Intro = () => {

    return (

        <div id="intro-section" className="container" data-aos="fade-up" data-aos-duration="300">
            <div className="row">
                <br />
            </div>
            <div className="row intro-box intro-row">
                {/* Left Column for Text */}
                <div className="col intro">
                    {/* Introduction Text */}
                    <h1>Christopher Martinez</h1>
                    <h2 style={{ fontSize: '1.1em' }}>Software Engineer | M.S. CS @ Georgia Tech</h2>
                    <p>
                        I earned a BS in Computer Science from Hunter College, and I'm
                        pursuing an MS in Computer Science at Georgia Tech, specializing
                        in machine learning. I build full-stack applications and continue to expand my AI/ML skill set. Recently, I designed a reinforcement
                        learning system for an MLB challenge strategy that I presented at the {' '}
                        <a className="intro-link" href="https://sabergraphs.com/" target="_blank" rel="noopener noreferrer">SABR Analytics Conference 2026</a>. I'm currently building{' '}
                        <a className="intro-link" href="https://sabergraphs.com/" target="_blank" rel="noopener noreferrer">SaberGraphs</a>,
                        a full-stack AI app that turns natural language
                        questions into interactive baseball data visualizations. I
                        previously contributed to pip, the Python package manager, as
                        a software engineering mentee at Two Sigma.
                    </p>

                    <p>Outside of work, I'm a baseball fan who builds side projects around the sport.</p>

                    <p>
                        Explore my{' '}
                        <a 
                            className="intro-link" 
                            href="#projects" 
                            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
                        >
                            projects
                        </a> below or on{' '}
                        <a className="intro-link" href="https://github.com/cmartinez131" target="_blank" rel="noopener noreferrer">GitHub</a>{''}
                        . Connect with me on{' '}
                        <a className="intro-link" href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                    </p>
                </div>

                {/* Right Column for Image */}
                <div className="col img-center">
                    <img
                        className="img-med img-link"
                        src={selfieImage}
                        alt="Profile picture of Christopher Martinez"
                        onClick={() => scrollTo('contact')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Intro;