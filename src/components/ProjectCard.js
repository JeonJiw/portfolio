import { Col, Card } from "react-bootstrap";
import arrow from "../assets/img/arrow2.svg";

export const ProjectCard = ({ title, devType, description, imgUrl }) => {
  return (
    <Col className="crousel-card">
      <Card className="proj-card">
        <Card.Img className="proj-imgbx" src={imgUrl} />
        <Card.Body>
          <Card.Title className="proj-txtx">{title}</Card.Title>
          <Card.Text className="proj-devType">{devType}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
