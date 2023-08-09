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
            <div className="row">
                <div className="col col-center">
                    <h2>Email</h2>
                    <p><a href="mailto:chrismartinez131@gmail.com" className="contact-link">chrismartinez131@gmail.com</a></p>
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
                </div>
                <div className="col col-center">
                    <h2>Socials</h2>
                    <p>
                        <a href="https://www.linkedin.com/in/cmartinez131" target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
                        <br />
                        <a href="https://github.com/cmartinez131" target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
