import React from 'react';
import selfieImage from '../assets/selfie.jpeg';

const Intro = () => {
    // Function to scroll to a specific section
    const scrollTo = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container">
            <div className="row">
                <br />
            </div> 
            <div className="row intro-box">
                <div className="col intro">
                    <p>Hello! I'm Christopher Martinez, a New York City-based Computer Science graduate from Hunter College. My passion lies in software and web development, spanning across several languages including Python, C++, JavaScript, SQL, Swift, HTML, and CSS, along with frameworks/libraries like React and Django.</p>

                    <p>Throughout my journey in tech, I've built a range of applications, from a real-time multiplayer drawing game, to modern and efficient websites, and even mobile applications. I enjoy creating software that provides utility, entertainment, and convenience for users.</p>
 
                    <p>When I'm not knee-deep in code, you'll find me enjoying my love for sports. I'm a passionate fan of the New York Yankees and I see a lot of parallels between baseball and software development. Both require strategy, teamwork, and the ability to adapt.</p>

                    <p>Feel free to explore my <span className="intro-link" onClick={() => scrollTo('projects')}>projects</span>, or connect with me on <a className="intro-link" href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a className="intro-link" href="https://github.com/cmartinez131" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                </div>
                <div className="col img-center">
                    <div className="img-link" onClick={() => scrollTo('contact')}>
                        <img className="img-med" src={selfieImage} alt="Self portrait" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
