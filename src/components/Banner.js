import { Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

export const Banner = () => {
  const onClickDownload = () => {
    const url = "http://localhost:3000/Resume_JiwonJeon_202409.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Resume_JiwonJeon_202409.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center">
          <h1>Welcome to my portfolio, I'm Jiwon</h1>
          <span className="gradient-text">
            FullStack/Frontend/Backend Developer
          </span>

          <div className="banner-btn-container">
            <button onClick={onClickDownload}>Download CV</button>
            <Link to="contactme" smooth={true} duration={100} offset={-70}>
              <button>Contact Me</button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};
