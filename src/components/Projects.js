import { Container, Row, Col, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../projectsData.js";

export const Projects = () => {
  const projectChunks = [];
  for (let i = 0; i < projectsData.length; i += 3) {
    projectChunks.push(projectsData.slice(i, i + 3));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Carousel indicators={false} controls={true} interval={null}>
              {projectChunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                  <Row className="justify-content-center">
                    {chunk.map((project, idx) => (
                      <Col key={idx} sm={6} md={4} className="card-wrapper">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
