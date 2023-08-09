import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import './styles.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Body />
      <Footer />
    </Router>
    </>
  );
}

export default App;