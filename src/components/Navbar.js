import React from 'react';

const Navbar = () => {
    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        const yOffset = -60;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div className="nav-item-container" onClick={() => scrollTo('intro')}>
                <span className="nav-item">Home</span>
            </div>
            <div className="nav-item-container" onClick={() => scrollTo('projects')}>
                <span className="nav-item">Projects</span>
            </div>
            {/* <div className="nav-item-container" onClick={() => scrollTo('blog')}>
                <span className="nav-item">Blog</span>
            </div> */}
            <div className="nav-item-container" onClick={() => scrollTo('contact')}>
                <span className="nav-item">Contact</span>
            </div>
        </nav>
    );
}

export default Navbar;
