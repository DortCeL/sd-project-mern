import { Container, Form, InputGroup, Table } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <h1 className="text-center mt-4">Creators</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control placeholder="Search Creators"></Form.Control>
          </InputGroup>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Gamertag</th>
              <th>Name</th>
              <th>Nationality</th>
              <th>Age</th>
              <th>Games</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>DortCeL</td>
              <td>Ismail AliF</td>
              <td>Bangladesh</td>
              <td>22</td>
              <td>cs2</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Home;
