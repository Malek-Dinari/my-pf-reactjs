import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../assets/img/leMEcin2024.jpg";
import navIcon1 from "../assets/img/github-icon.png"; // Replace with your GitHub icon
import navIcon2 from "../assets/img/linkedin-icon.png"; // Replace with your LinkedIn icon
import navIcon3 from "../assets/img/rym-icon.jpeg"; // Replace with your RYM icon

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" style={{ maxWidth: "120px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={HashLink}
              to="/#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/skills"
              className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/Malek-Dinari" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="GitHub" style={{ width: '122px', height: '122px' }} />
              </a>
              <a href="https://www.linkedin.com/in/malek-dinari-99b431263/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon2} alt="LinkedIn" style={{ width: '122px', height: '122px' }} />
              </a>
              <a href="https://rateyourmusic.com/~dinnarus" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="RateYourMusic" style={{ width: '122px', height: '122px' }} />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
