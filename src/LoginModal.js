import { Button, Container, Form } from "react-bootstrap";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginModal() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (email === "admin@namasys.co") {
      setValidated(true);
      if (password === "admin123") {
        //let them pass to data fetcher
      }
    }
  };

  return (
    <section className="App">
      <Container className="container">
        <Form
          validated={validated}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" className="mx-auto" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}
