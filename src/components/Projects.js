import { Container, Row, Col, Carousel } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Microsoft Team Auto Recording System",
      devType: "Web Development",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "Ther Genius Game",
      devType: "Web Development",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "SafeCam",
      devType: "Web Development",
      description: "Web Development",
      imgUrl: projImg3,
    },
    {
      title: "Calory Calculator",
      devType: "Web Development",
      description: "Android App Development",
      imgUrl: projImg1,
    },
  ];
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectChunks.push(projects.slice(i, i + 3));
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
