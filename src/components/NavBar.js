import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = ({ scrollRef }) => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contactme">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
