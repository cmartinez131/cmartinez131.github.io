import React from 'react';

// Project component displays a single project item in the grid view
// It receives the project's details as props from the Projects component
const Project = ({ title, description, technology, media, mediaType }) => {
    // Project data is passed down as props for a single project
    return (
        <div className="project-content">
            <div className="media-container">
                 {/* Conditionally render image, video, or gif based on mediaType */}
                 {mediaType === 'image' && <img className="media" src={media} alt={title} />}
                 {mediaType === 'video' && <video controls className="media"><source src={media} type="video/mp4" className="media" />Your browser does not support the video tag.</video>}
                 {mediaType === 'gif' && <img className="media" src={media} alt={title} />}
                 {/* Add a placeholder image if no media is provided */}
                 {!media && <img className="media" src="/path/to/placeholder.png" alt={`Placeholder for ${title}`} />}
            </div>
            <div className="project-details">
                <h2>{title}</h2>
                {/* Display the short description for the grid card */}
                <p>{description}</p>
                {/* Display the list of technologies */}
                <p><strong>Technology Used:</strong> {technology.join(", ")}</p>
            </div>
        </div>
    );
}

export default Project;
