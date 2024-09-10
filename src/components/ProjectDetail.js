import { useParams } from "react-router-dom";
import projects from "../projectsData";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.imgUrl} alt={project.title} />
      <p>
        <strong>Development Type:</strong> {project.devType}
      </p>
      <p>
        <strong>Architecture:</strong> {project.architecture}
      </p>
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        GitHub Repository
      </a>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src={project.videoUrl}
          title={project.title}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
