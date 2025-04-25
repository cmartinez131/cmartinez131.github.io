import React from "react";
import './ProjectDetailModal.css';

const ProjectDetailModal = ({ project, onClose }) => {
    if (!project) {
        return null;
    }

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>&times;</button>

                <h2>{project.title}</h2>

                {/* Render for different types of media */}
                <div className="modal-media-gallery">
                    {project.detailedMedia && project.detailedMedia.map((mediaItem, index) => (
                        <div key={index} className="modal-media-item">
                            {/* render each piece of media based on the media type */}
                            {mediaItem.type === 'image' && <img src={mediaItem.src} alt={`${project.title} ${mediaItem.caption || ''}`} />}
                            {mediaItem.type === 'video' && <video controls src={mediaItem.src}>Your browser does not support the video tag.</video>}
                            {mediaItem.type === 'gif' && <img src={mediaItem.src} alt={`${project.title} ${mediaItem.caption || ''}`} />}
                            {/* caption for the media */}
                            {mediaItem.caption && <p className="media-caption">{mediaItem.caption}</p>}
                        </div>
                    ))}
                    {/* if there is no media for this project, handle it gracefully */}
                    {(!project.detailedMedia || project.detailedMedia.length === 0) && (<p>No media available for this project.</p>)}
                </div>


                {project.fullDescription && (
                    <div>
                        <h3>Overview</h3>
                        <p>{project.fullDescription}</p>
                    </div>
                )}

                {/* My Contributions as a list if data is an array */}
                 {project.yourContributions && (
                    <div>
                         <h3>My Contributions</h3>
                         {Array.isArray(project.yourContributions) ? (
                             <ul>
                                 {project.yourContributions.map((item, index) => (
                                     <li key={index}>{item}</li>
                                 ))}
                             </ul>
                         ) : (
                             <p>{project.yourContributions}</p>
                         )}
                    </div>
                 )}

                {/* Technical Challenges and Solutions as list if data is an array */}
                 {project.technicalChallenges && (
                    <div>
                         <h3>Technical Challenges & Solutions</h3>
                         {Array.isArray(project.technicalChallenges) ? (
                             <ul>
                                 {project.technicalChallenges.map((item, index) => (
                                     <li key={index}>{item}</li>
                                 ))}
                             </ul>
                         ) : (
                             <p>{project.technicalChallenges}</p>
                         )}
                    </div>
                 )}

                {/* Technologies Used for Projects */}
                {project.keyTechnologies && (
                    <p><strong>Key Technologies:</strong> {project.keyTechnologies.join(", ")}</p>
                )}

                {/* Project Links */}
                <div className="modal-links">
                    {project.githubLink && !project.privateCode && (
                         <a href={project.githubLink} target="_blank" rel="noreferrer" className="modal-link-button">View on Github</a>
                    )}
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="modal-link-button">View Live Demo</a>
                    )}
                    {project.privateCode && project.privateCodeExplanation && (
                         <p className="private-code-note">{project.privateCodeExplanation}</p>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailModal;