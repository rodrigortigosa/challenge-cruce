import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Ruta from "./components/Ruta";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <Row className="justify-content-between row-cols-1 row-cols-md-3">
          <Col>
            <Ruta />
          </Col>

          <Col>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>

          <Col>
            <DropdownButton id="dropdown-item-button" title="Dropdown button">
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Banner />

        {/* <Listado></Listado> */}
        <Row className="row-cols-1 row-cols-md-3">
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
