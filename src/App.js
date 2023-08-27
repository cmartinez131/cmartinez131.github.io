import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro'
import Projects from './components/Projects'
// import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="intro" className="section-offset">
        <Intro />
      </div>
      <div id="projects" className="section-offset">
        <Projects />
      </div>
      {/* <div id="blog" className="section-offset">
        <Blog />
      </div> */}
      <div id="contact" className="section-offset">
        <Contact />
      </div>
      <Footer />
    </div>

  );
}

export default App;