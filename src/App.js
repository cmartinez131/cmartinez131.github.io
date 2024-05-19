// import Blog from './components/Blog'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

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