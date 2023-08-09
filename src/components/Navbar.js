import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-item-container">
                <Link className="nav-item" to="/">Home</Link>
            </div>
            <div className="nav-item-container">
                <Link className="nav-item" to="/projects">Projects</Link>
            </div>
            <div className="nav-item-container">
                <Link className="nav-item" to="/Blog">Blog</Link>
            </div>
            <div className="nav-item-container">
                <Link className="nav-item" to="/contact">Contact Me</Link>
            </div>
        </div>
    )
}

export default Navbar;