import resumeImage from '../assets/resume.png';
import resumePDF from '../assets/resume.pdf';

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-center">
                    <h1>Contact Me!</h1>
                </div>
            </div>
            <div className="row contact-box">
                <div className="col col-center">
                    <h2>Email</h2>
                    <p><a href="mailto:chrismartinez131@gmail.com" className="contact-link">chrismartinez131@gmail.com</a></p>
                    <a href="mailto:chrismartinez131@gmail.com" target="_blank" rel="noreferrer">
                        <img 
                            src="https://freelogopng.com/images/all_img/1657906383gmail-icon-png.png" 
                            alt="Gmail" 
                            className="social-media-button img-link"
                        />
                    </a>
                </div>
                <div className="col col-center">
                    <h2>Resume</h2>
                    <a href={resumePDF} target="_blank" rel="noreferrer">
                        <img 
                            src={resumeImage} 
                            alt="Christopher Martinez's Resume"
                            className="img-med img-link"
                        />
                    </a>
                    <p>(click to enlarge)</p>
                </div>
                <div className="col col-center">
                    <h2>Socials</h2>
                    <p><a href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a></p>

                    <a href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noreferrer">
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" 
                            alt="LinkedIn" 
                            className="social-media-button img-link"
                        />
                    </a>

                    <p><a href="https://github.com/cmartinez131" target="_blank" rel="noreferrer" className="contact-link">GitHub</a></p>

                    <a href="https://github.com/cmartinez131" target="_blank" rel="noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" 
                            alt="GitHub" 
                            className="social-media-button img-link"
                        />
                    </a>
                    </div>
            </div>
        </div>
    )
}

export default Contact;
