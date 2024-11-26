import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Banner } from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Music from "./components/Music";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* Section-based navigation */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />
          {/* Individual page navigation */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
