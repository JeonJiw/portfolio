import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.includes("/project");
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {isProjectPage ? (
              // If on ProjectDetail page, use react-router-dom Link to navigate back

              <>
                <RouterLink to="/#home" className="nav-link">
                  Home
                </RouterLink>
                <RouterLink to="/#skills" className="nav-link">
                  Skills
                </RouterLink>
                <RouterLink to="/#projects" className="nav-link">
                  Projects
                </RouterLink>
                <RouterLink to="/#contactme" className="nav-link">
                  Contact Me
                </RouterLink>
              </>
            ) : (
              // On other pages, use react-scroll links for smooth scrolling
              <>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="skills"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Skills
                </ScrollLink>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Projects
                </ScrollLink>
                <ScrollLink
                  to="contactme"
                  smooth={true}
                  duration={100}
                  className="nav-link"
                >
                  Contact Me
                </ScrollLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
