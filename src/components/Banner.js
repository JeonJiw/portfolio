// Banner.js
import { Container, Row } from "react-bootstrap";

export const Banner = ({ scrollRef }) => {
  return (
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="aligh-items-center">
          <h1>Welcome to my portfolio</h1>
          <p>Hi, I'm Jiwon. Full Stack / Front / Backend Developer</p>
          <div className="mb-2">
            <button onClick={() => console.log("Download CV")}>
              Download CV
            </button>
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
