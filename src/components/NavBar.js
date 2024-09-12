import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="home" smooth={true} duration={100} className="nav-link">
              Home
            </Link>
            <Link to="skills" smooth={true} duration={100} className="nav-link">
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={100}
              className="nav-link"
            >
              Projects
            </Link>
            <Link
              to="contactme"
              smooth={true}
              duration={100}
              className="nav-link"
            >
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
