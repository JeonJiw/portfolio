import { useParams, useNavigate } from "react-router-dom";
import projects from "../projectsData";
import { Container, Row } from "react-bootstrap";

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use this for navigation
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-page">
      <Container>
        <Row>
          <button onClick={() => navigate("/")}>Go Back</button>{" "}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <img src={project.imgUrl} alt={project.title} />
          <p>
            <strong>Development Type:</strong> {project.devType}
          </p>
          <p>
            <strong>Architecture:</strong> {project.architecture}
          </p>
          <button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </button>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src={project.videoUrl}
              title={project.title}
              allowFullScreen
            ></iframe>
          </div>
        </Row>
      </Container>
    </section>
  );
};
