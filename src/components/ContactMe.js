import { forwardRef } from "react";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { BodyText } from "react-bootstrap-icons";

export const ContactMe = forwardRef((props, ref) => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8088/", {
        body: {
          formDetails,
        },
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };
  return (
    <section id="contactme" ref={ref}>
      <Container className="contact">
        <Row className="justify-content-center contact-container">
          <Col md={8}>
            <h2>Contact Me</h2>
            <Form className="form-container" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={formDetails.name}
                  placeholder="Enter your name"
                  onChange={(e) => onFormUpdate("name", e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={formDetails.email}
                  placeholder="Enter your email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  value={formDetails.message}
                  placeholder="Enter your message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                />
              </Form.Group>

              <button variant="primary" type="submit" className="mt-3">
                <span>{buttonText}</span>
              </button>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
