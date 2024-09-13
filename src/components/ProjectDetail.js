import { useParams } from "react-router-dom";
import projects from "../projectsData";
import { Container, Row, Col } from "react-bootstrap";
import colorsharp from "../assets/img/color-sharp.png";
import { programmingLanguages, webAppDevelopments } from "../SkillsData";
import background from "../assets/img/background.jpg";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const allSkills = [...programmingLanguages, ...webAppDevelopments];

  const findTechStack = (techNames) => {
    return techNames
      .map((techName) => {
        const skill = allSkills.find((skill) => skill.name === techName);
        return skill ? { src: skill.src, name: skill.name } : null; // Return an object with src and name
      })
      .filter((item) => item !== null); // Remove null values
  };

  const techStackDetails = findTechStack(project.techStack);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section
      className="project-page"
      style={{ backgroundImage: `url(${colorsharp})` }}
    >
      <Container>
        <Row>
          <Col md={8} className="project-details">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <p className="project-full-description">{project.description}</p>
            <div className="buttons">
              <button className="github-btn">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </button>
            </div>
          </Col>
          <Col md={4} className="tech-wrap-up">
            <h2>Tech Wrap-up</h2>
            <div className="icons">
              {techStackDetails.length > 0 ? (
                techStackDetails.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-item d-flex flex-column align-items-center"
                  >
                    <img src={tech.src} alt={tech.alt} className="tech-image" />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))
              ) : (
                <p>No tech stack images available</p>
              )}
            </div>
          </Col>
        </Row>
        <Row className="image-row">
          <Col md={12} className="image-column">
            {project.imgUrl.length > 0 ? (
              project.imgUrl.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={img.alt}
                  className="project-image"
                />
              ))
            ) : (
              <p>No project images available</p>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
