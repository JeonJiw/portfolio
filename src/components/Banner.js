import { Container, Row } from "react-bootstrap";
import { Link } from "react-scroll";

export const Banner = () => {
  // const onClickDownload = () => {
  //   const url = "/Jiwon Jeon's Resume.pdf";
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "Jiwon Jeon's Resume.pdf");
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // };

  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center">
          <h1>Welcome to my portfolio, I'm Jiwon</h1>
          <span className="gradient-text">
            FullStack/Frontend/Backend Developer
          </span>

          <div className="banner-btn-container">
            <a
              href="https://drive.google.com/file/d/1Kb1_k50qa0DJEbH-IIMA4_pbIYGCEPaQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Download CV</button>
            </a>
            <Link to="contactme" smooth={true} duration={100} offset={-70}>
              <button>Contact Me</button>
            </Link>
          </div>
        </Row>
      </Container>
    </section>
  );
};
