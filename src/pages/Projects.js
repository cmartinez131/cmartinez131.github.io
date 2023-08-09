
const Project = ({ title, description, technology, githubLink, media, mediaType }) => {
    return (
        <div className="project row">
            <div className="col">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Technology Used:</strong> {technology.join(", ")}</p>
                <a href={githubLink} target="_blank" rel="noreferrer" className="project-link" >View on Github</a>
            </div>
            <div className="col img-center">
                <a href={githubLink} target="_blank" rel="noreferrer" className="img-link">
                    {/* conditionally render based on mediaType */}
                    {mediaType === 'image' && <img className="img-med" src={media} alt={title} />}
                    {mediaType === 'video' && <video controls width="100%"><source src={media} type="video/mp4" />Your browser does not support the video tag.</video>}
                    {mediaType === 'gif' && <img className="img-med" src={media} alt={title} />} {/* GIFs can be embedded using the img tag */}
                </a>
            </div>
        </div>
    )
}

const Projects = () => {
    const projectData = [
        {
            title: "Example project 1",
            description: "Description for example project 1",
            technology: ["React", "Node.js"],
            githubLink: "https://github.com/user/project1",
            media: "https://liftlearning.com/wp-content/uploads/2020/09/default-image.png",
            mediaType: "image" // "video" or "gif" or "image"
        },
        {
            title: "Sketch - Real Time Multiplayer Drawing Game",
            description: `Created a full-stack multiplayer online game where players draw and guess what others are drawing.
                          Implemented real-time communication using websockets (Socket.io) for real-time drawing and messaging.
                          Leveraged React, JavaScript, CSS, MongoDB, Git, Axios, and Express to build the game.`,
            technology: ["React", "JavaScript", "CSS", "MongoDB", "Git", "Axios", "Express"],
            githubLink: "https://github.com/cmartinez131/sketch",
            media: "https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif",
            mediaType: "image"
        },
        {
            title: "CodePath.org University: Mobile Application Design Course",
            description: `Attended a 12-week program for designing and scoping our own mobile applications.
                          Developed ‘Flix’, an app allowing users to browse movies currently playing in theaters.
                          Created clones of popular apps such as Twitter and Instagram.`,
            technology: ["Swift", "Twitter developer APIs", "Parse"],
            githubLink: "https://github.com/cmartinez131/FlixMovie",
            media: "https://cmartinez131.github.io/images/flix.gif",
            mediaType: "image"
        },
        {
            title: "Batting Blvd - Website for Batting Cage Business",
            description: "Developed a modern website to streamline customer bookings for a batting cage business. Features include real-time booking and user account management.",
            technology: ["JavaScript", "CSS", "React", "React Router", "MongoDB"],
            githubLink: "https://github.com/cmartinez131/batting-cage-business-website",
            media: "https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif",
            mediaType: "image"
        },
        {
            title: "Fitness Coach - iOS App",
            description: "Swift-based iOS app guiding beginners through workout routines and educating them about exercises targeting specific muscle groups.",
            technology: ["Swift", "UIKit", "ExerciseDB API"],
            githubLink: "https://github.com/cmartinez131/FitFriend",
            media: "https://media.giphy.com/media/3o85xChv5muUGOhyWk/giphy.gif",
            mediaType: "gif"
        },
        
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col col-center">
                    <h1>Projects</h1>
                </div>
            </div>
            {projectData.map((project, index) => (
                <div key={index}>
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
    )
}

export default Projects;