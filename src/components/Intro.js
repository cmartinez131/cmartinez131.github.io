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
                    <h2>Software Engineer | MS CS Student @ Georgia Tech</h2>
                    <p>
                        I earned a BS in Computer Science from Hunter College and I am pursuing an MS in Computer Science at Georgia Tech.
                        I design and ship software and data solutions end to end, from APIs and web apps to pipelines, analytics, and ML.
                    </p>

                    {/* Updated Projects Section with Bullet Points */}
                    <p>Some of my recent projects include:</p>
                    <ul>
                        <li>
                            <span className="project-title">MLB analytics API</span> that ingests baseball data from multiple sources and serves a custom baseball metric, Veteran Presence (VP), built with Python, FastAPI, and pandas, served via a Docker-based service on AWS.
                        </li>
                        <li>
                            <span className="project-title">SaberGraphs</span>, an AI-driven sports analytics web app that turns natural language questions into interactive charts for data visualization and analysis with exportable csv files and charts using FastAPI and React.
                        </li>
                        <li>
                            A real-time <span className="project-title">multiplayer drawing game</span> using websockets, and a full-stack <span className="project-title">booking application</span>, among several other React projects.
                        </li>
                    </ul>

                    <p>Outside of work, I like to travel and follow sports, especially baseball.</p>

                    <p>
                        Explore my{' '}
                        <a 
                            className="intro-link" 
                            href="#projects" 
                            onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
                        >
                            projects
                        </a> or{' '}
                        <a className="intro-link" href="https://github.com/cmartinez131" target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
                        to see my work, or connect with me on{' '}
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