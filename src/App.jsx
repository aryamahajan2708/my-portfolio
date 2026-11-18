import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './App.css';
import HomePage from "./HomePage";
import Services from "./Services";
import Work from "./Work";
import About from "./About";
import Review from "./Review";
import Blog from "./blog";
import Contact from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";
AOS.init();

function App() {
 const [darkMode, setDarkMode] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <div className="navbar">
        <div className="logo">
          Arya
        </div>
        <div className={`nav ${menuOpen ? "active" : ""}`}>
          <nav>
            <a href="#Services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#Work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#Review" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#Blog" onClick={() => setMenuOpen(false)}>Blog</a>
            <a href="#Contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>

        <div className="nav-btn">
          <button className="theme-btn" onClick={toggleTheme}>
            {darkMode ? "🔆" : "🌙"}
          </button>

          <button className="hireme-btn">
            <a href="#ContectForm" className="btn-1">
              Hire Me
            </a>
          </button>
        </div>
        <div className="menu-icon"  onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      <HomePage />
      <Services />
      <Work />
      <About />
      <Review />
      <Blog />  
      <Contact />
      <Footer />
    </div>
  );
}

export default App;