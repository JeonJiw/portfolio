import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link to="home" smooth={true} duration={100}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" smooth={true} duration={100}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth={true} duration={100}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="contactme" smooth={true} duration={100}>
                Contact Me
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
