import React from 'react';
import selfieImage from '../assets/selfie.jpeg';
import { scrollTo } from '../utils/scroll';

const Intro = () => {

    return (
        
        <div id="intro-section" className="container" data-aos="fade-up" data-aos-duration="1000">
            <div className="row">
                <br />
            </div>
            <div className="row intro-box intro-row">
                {/* Left Column for Text */}
                <div className="col intro">
                    {/* Introduction Text */}
                    <h1>Christopher Martinez</h1> {/* Use a heading for your name */}
                    <h2>Software Engineer | MS CS @ Georgia Tech</h2> {/* Clear headline highlighting your role and degree */}

                    <p>
                        I'm a Computer Science graduate from Hunter College and currently pursuing a Master's in Computer Science at Georgia Institute of Technology, specializing in Machine Learning and AI. My passion lies in building interactive real-time software applications and engaging user experiences.
                    </p>
                    <p>
                        Throughout my journey, I've developed a range of applications, from a real-time multiplayer drawing game and dynamic websites to mobile applications and complex AI systems for game environments. I enjoy tackling technical challenges and creating software that provides utility and entertainement for users.
                    </p>

                    <p>
                        When I'm not coding, I'm often traveling and enjoying sports, particularly baseball. I appreciate the similarities between the strategic thinking, teamwork, and adaptability required in both baseball and software engineering.
                    </p>

                    <p>
                        Explore my <span className="intro-link" onClick={() => scrollTo('projects')}>projects</span> to see my work, or connect with me on <a className="intro-link" href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a className="intro-link" href="https://github.com/cmartinez131" target="_blank" rel="noopener noreferrer">GitHub</a>.
                    </p>
                </div>

                {/* Right Column for Image */}
                <div className="col img-center">
                    {/* Made the image itself clickable to scroll to contact, kept img-link div for styling */}
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
