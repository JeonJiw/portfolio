// Banner.js
import { Container, Row } from "react-bootstrap";

export const Banner = ({ scrollRef }) => {
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
        <Row className="aligh-items-center">
          <h1>Welcome to my portfolio</h1>
          <p>Hi, I'm Jiwon. Full Stack / Front / Backend Developer</p>
          <div className="mb-2">
            <button onClick={onClickDownload}>Download CV</button>
            <button
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "#contactme");
                }
              }}
            >
              Contact Me
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
};
