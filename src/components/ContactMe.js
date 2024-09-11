import { forwardRef } from "react";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
export const ContactMe = forwardRef((props, ref) => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ message: "", success: null });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setButtonText("Sending...");

    //   axios
    //     .post("http://localhost:8088/", {
    //       body: {
    //         formDetails,
    //       },
    //     })
    //     .then(() => {
    //       console.log("success");
    //       setStatus({ message: "Email sent successfully!", success: true });
    //       setButtonText("Send");
    //     })
    //     .catch(() => {
    //       setStatus({
    //         message: "Failed to send email. Please try again.",
    //         success: false,
    //       });
    //       alert("Please retry to send an email");
    //       setButtonText("Send");
    //       console.log("failure");
    //     });

    try {
      await axios.post("http://localhost:8088/", {
        body: formDetails,
      });
      setStatus({ message: "Email sent successfully!", success: true });
      alert("Email sent successfully!");
    } catch (error) {
      console.log("error: ", error);
      setStatus({
        message: "Failed to send email. Please try again.",
        success: false,
      });
      alert("Failed to send email. Please try again.");
    } finally {
      setButtonText("Send");
    }
  };
  return (
    <section id="contactme" ref={ref}>
      <Container className="contact">
        <Row className="justify-content-center contact-container">
          <Col className="form-container" md={8}>
            <h2>Contact Me</h2>
            <Form onSubmit={handleSubmit}>
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
                    className={status.success ? "text-success" : "text-danger"}
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
