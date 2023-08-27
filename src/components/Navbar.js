import React from 'react';

const Navbar = () => {
    const scrollTo = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
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
