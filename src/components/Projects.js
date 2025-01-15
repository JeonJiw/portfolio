import { Container, Row, Col } from "react-bootstrap";
import projectsData from "../projectsData.js";
import { programmingLanguages, webAppDevelopments } from "../SkillsData";

export const Projects = () => {
  const allSkills = [...programmingLanguages, ...webAppDevelopments];

  const findTechStack = (techNames) => {
    return techNames
      .map((techName) => {
        const skill = allSkills.find((skill) => skill.name === techName);
        return skill ? { src: skill.src, name: skill.name } : null;
      })
      .filter((item) => item !== null);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <Row className="justify-content-center">
              {projectsData.map((project, idx) => (
                <Col
                  key={idx}
                  sm={6}
                  md={4}
                  lg={3}
                  className="card-wrapper mb-4"
                >
                  <div className="project-card">
                    <img
                      src={project.imgUrl[0]}
                      alt={project.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {project.title} | {project.subtitle}
                      </h5>

                      <p className="card-text">Description</p>
                      <p className="tech-used">
                        <strong>Tech used:</strong>
                        <div className="tech-used-container">
                          {findTechStack(project.techStack).length > 0 ? (
                            findTechStack(project.techStack).map(
                              (tech, index) => (
                                <div
                                  key={index}
                                  className="tech-item d-flex flex-column align-items-center"
                                >
                                  <img
                                    src={tech.src}
                                    alt={tech.name}
                                    className="tech-image"
                                  />
                                  <span className="tech-name">{tech.name}</span>
                                </div>
                              )
                            )
                          ) : (
                            <p>No tech stack images available</p>
                          )}
                        </div>
                      </p>
                    </div>
                    <div className="buttons">
                      <button className="source-code-btn">
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
