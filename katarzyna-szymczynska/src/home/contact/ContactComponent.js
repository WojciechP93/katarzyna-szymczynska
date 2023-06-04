import * as React from "react";
import "./contact.css";
import { Button, Stack, Form, InputGroup, FormGroup, Image, Modal, Container, Row, Col } from "react-bootstrap/";
import SectionHeaderComponent from "../../shared/section_header/SectionHeaderComponent";
import emailjs from "@emailjs/browser";
import shape1 from "./images/contact-shape1.png";
import shape2 from "./images/contact-shape2.png";

function ContactComponent() {
  const [validated, setValidated] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const form = React.useRef();
  const handleClose = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    } else {
      event.preventDefault();
      setShow(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_nkd8q7m", "template_vpdiqlm", "#contact-form", "kqvYLGrSXkzKPXAZo").then(
      (result) => {
        alert("Wiadomość wysłana");
        setShow(false);
      },
      (error) => {
        alert("Wystąpił błąd podczas wysyłania wiadomości", error);
      }
    );

    setValidated(true);
    // e.target.reset();
  };

  return (
    <Container fluid>
      <Row>
        <SectionHeaderComponent title="contact" />
      </Row>
      <Row>
        <p className="contact-header">
          Are you interested in cooperation? <br />
          Contact me!
        </p>
        {/* <div className="shape-div">
          <Image fluid src={shape1} className="contact-shape" />
        </div> */}
        <p className="contact-info">
          tel: +48 792 940 810 <br />
          e-mail: k.szymczynska@yahoo.pl
        </p>
      </Row>
      <Row>
        <Stack className="contact-content">
          <Form
            ref={form}
            className="contact-form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            id="contact-form">
            <Container fluid>
              <Row>
                <Col>
                  <FormGroup controlId="formName" className="mb-2 mailer-textbox">
                    <InputGroup hasValidation>
                      <Form.Control
                        name="user_name"
                        className="form-textbox"
                        type="text"
                        placeholder="Name"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup controlId="Formemail" className="mb-2 mailer-textbox">
                    <InputGroup hasValidation>
                      <Form.Control
                        className="form-textbox"
                        type="email"
                        name="user_email"
                        placeholder="e-mail"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <FormGroup controlId="formSubject" className="mb-2">
                  <InputGroup hasValidation>
                    <Form.Control
                      className="form-textbox"
                      name="subject"
                      type="text"
                      placeholder="Topic"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </FormGroup>
              </Row>
              <Row>
                <FormGroup className="mb-2" controlId="formMessage">
                  <InputGroup hasValidation>
                    <Form.Control
                      name="message"
                      className="message-textbox form-textbox"
                      as="textarea"
                      placeholder="Message"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </FormGroup>
              </Row>
              <Row>
                <Stack className="button-stack">
                  <Button type="submit" className="send-button">
                    SEND
                  </Button>
                </Stack>
              </Row>
            </Container>
          </Form>
        </Stack>
      </Row>
    </Container>

    /*
    <Stack className="contact-content">
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Do you want to send message?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={sendEmail}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <SectionHeaderComponent title="contact me" />
      <p className="contact-header">
        Are you interested in cooperation? <br />
        Contact me!
      </p>
      <div className="shape-div">
        <Image fluid src={shape1} className="contact-shape" />
      </div>
      <p className="contact-info">
        tel: +48 792 940 810 <br />
        e-mail: k.szymczynska@yahoo.pl
      </p>
      <Form
        ref={form}
        className="contact-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        id="contact-form">
        <div className="shape-div">
          <Image fluid src={shape2} className="form-shape" />
        </div>
        <Stack direction="horizontal" gap={2}>
          <FormGroup controlId="formName" className="mb-2 mailer-textbox">
            <InputGroup hasValidation>
              <Form.Control
                name="user_name"
                className="form-textbox"
                type="text"
                placeholder="Name"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="Formemail" className="mb-2 mailer-textbox">
            <InputGroup hasValidation>
              <Form.Control
                className="form-textbox"
                type="email"
                name="user_email"
                placeholder="e-mail"
                aria-describedby="inputGroupPrepend"
                required
              />
            </InputGroup>
          </FormGroup>
        </Stack>
        <FormGroup controlId="formSubject" className="mb-2">
          <InputGroup hasValidation>
            <Form.Control
              className="form-textbox"
              name="subject"
              type="text"
              placeholder="Topic"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-2" controlId="formMessage">
          <InputGroup hasValidation>
            <Form.Control
              name="message"
              className="message-textbox form-textbox"
              as="textarea"
              placeholder="Message"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </FormGroup>
        <Stack className="button-stack">
          <Button type="submit" className="send-button">
            SEND
          </Button>
        </Stack>
      </Form>
    </Stack>
    */
  );
}

export default ContactComponent;
