import { forwardRef } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

export const ContactMe = forwardRef((props, ref) => {
  return (
    <section id="contactme" ref={ref}>
      <Container className="contact">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>Contact Me</h2>
            <Form className="form-container">
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <button variant="primary" type="submit" className="mt-3">
                Submit
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
});
