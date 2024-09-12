import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ id, title, devType, description, imgUrl }) => {
  return (
    <Col className="crousel-card">
      <Link to={`/project/${id}`} style={{ textDecoration: "none" }}>
        <Card className="proj-card">
          <Card.Img className="proj-imgbx" src={imgUrl[0]} />
          <Card.Body>
            <Card.Title className="proj-txtx">{title}</Card.Title>
            <Card.Text className="proj-devType">{devType}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};
