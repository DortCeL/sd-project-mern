import { Container, FloatingLabel, Form } from "react-bootstrap";

function Signup() {
  return (
    <>
      <Container>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form>
      </Container>
    </>
  );
}

export default Signup;
