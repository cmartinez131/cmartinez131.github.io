const Project = ({ title, description, technology, githubLink, media, mediaType }) => {
    return (
        <div className="project-content">
            <div className="media-container">
                <a href={githubLink} target="_blank" rel="noreferrer">
                    {mediaType === 'image' && <img className="media" src={media} alt={title} />}
                    {mediaType === 'video' && <video controls className="media"><source src={media} type="video/mp4" className="media" />Your browser does not support the video tag.</video>}
                    {mediaType === 'gif' && <img className="media" src={media} alt={title} />}
                </a>
            </div>
            <div className="project-details">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Technology Used:</strong> {technology.join(", ")}</p>
            </div>
            <div className="project-footer">
                <a href={githubLink} target="_blank" rel="noreferrer" className="project-link">View on Github</a>
            </div>
        </div>
    );
}


const Projects = () => {
    const projectData = [
        // {
        //     title: "Example project 1",
        //     description: "Description for example project 1",
        //     technology: ["React", "Node.js"],
        //     githubLink: "https://github.com/user/project1",
        //     media: "https://liftlearning.com/wp-content/uploads/2020/09/default-image.png",
        //     mediaType: "image" // "video" or "gif" or "image"
        // },
        {
            title: "Sketch - Real Time Multiplayer Drawing Game",
            description: `A multiplayer online game where players draw and guess each other's drawings in real-time. The game features live communication through websockets, allowing for real-time drawing and messaging.`,
            technology: ["React", "JavaScript", "CSS", "Git", "MongoDB", "Axios", "Express"],
            githubLink: "https://github.com/cmartinez131/sketch",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3BxeDZvNG5uY3F1ZmMzMXRqNjRzY29sMDB5M2lmM3B4cjJrZzR5dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DeXUAtuFtVLGc7uNRv/giphy.gif",
            mediaType: "image"
        },
        {
            title: "Batting Blvd - Website for Batting Cage Business",
            description: "A modern website designed to streamline customer bookings for a batting cage business. The site features real-time booking capabilities and user account management for an enhanced customer experience.",
            technology: ["JavaScript", "CSS", "React", "React Router"],
            githubLink: "https://github.com/cmartinez131/batting-cage-business-website",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFtcjE0bHk2M2I2bGpxMjRzeHZ0ZXQzYjkxcGZ1YjFtMHp6bW0yNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feHmMr62vssviDO976/giphy.gif",
            mediaType: "image"
        },
        {
            title: "Financial Calculator Web Application",
            description: `A web application that helps users perform various financial calculations, including investments, home buying affordability, take-home pay, and net worth. It features dynamic user interfaces, data visualization, and a mobile-friendly design.`,
            technology: ["React", "HTML", "CSS", "Bootstrap", "React-Bootstrap", "Firebase", "React Router", "Chart.js"],
            githubLink: "https://github.com/cmartinez131/PersonalFinanceWebApp",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGRoc2F5YW50eTJ0M2YxcWlqbG95cDQyMjI2c2p3OWpjdmVjazJxeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MXXkFfgxr2RH9O9rtA/giphy.gif",
            mediaType: "gif"
        },
        {
            title: "Fitness Coach - iOS App",
            description: "An iOS app that guides beginners through workout routines and educates them about exercises targeting specific muscle groups. The app provides a comprehensive fitness coaching experience.",
            technology: ["Swift", "UIKit"],
            githubLink: "https://github.com/cmartinez131/FitFriend",
            media: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHMxN3AzZ2V3MGpzYjFqcTIxdzJraWNkOWtybTAyem93bmlueDRxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aut6DU7b0DovZJg7Rt/giphy.gif",
            mediaType: "gif"
        },
        // {
        //     title: "Twitter iOS Clone",
        //     description: "A minimal Swift clone of Twitter. It uses the Twitter developer API for authentication and fetching tweets.",
        //     technology: ["Swift", "UIKit", "Twitter API"],
        //     githubLink: "https://github.com/cmartinez131/TwitterIOSApp",
        //     media: "https://camo.githubusercontent.com/752229b3c540f3d3e5b6a315046bd1bec23031fdb334fda1f77d0d332eacce32/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7061467953626a754e4d3177586e68644d4e2f67697068792e6769663f6369643d373930623736313131663865333263663065323263646566623137653861303232646630356431666364656433643939267269643d67697068792e6769662663743d67",
        //     mediaType: "gif"
        // },
        {
            title: "CodePath.org University: Mobile Application Design Course",
            description: `An intensive 12-week program focused on designing and scoping mobile applications. Includes 'Flix', an app for browsing movies currently playing in theaters, and clones of popular apps like Twitter and Instagram.`,
            technology: ["Swift", "Twitter developer APIs", "Parse"],
            githubLink: "https://github.com/cmartinez131/FlixMovie",
            media: "https://media.giphy.com/media/9UV1k9WWER16JowJus/giphy.gif",
            mediaType: "image"
        },
        {
            title: "Personal Portfolio Website",
            description: "A portfolio website that showcases projects, blogs, and contact information. Built with React, it features a responsive navbar and dynamic content loading to provide an overview of skills, experiences, and projects.",
            technology: ["React", "React Router", "CSS"],
            githubLink: "https://github.com/cmartinez131/cmartinez131.github.io",
            media: "https://t3.ftcdn.net/jpg/00/86/16/40/360_F_86164083_3aYnTQyX9cxYd9aQlSlAFj4M7A679lE3.jpg",
            mediaType: "image"
        },

    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div key={index} className="project-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={`${index * 100}`}>
                        <Project
                            title={project.title}
                            description={project.description}
                            technology={project.technology}
                            githubLink={project.githubLink}
                            media={project.media}
                            mediaType={project.mediaType}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;