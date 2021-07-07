import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

const Ruta = () => {
  return (
    <Row className="justify-content-between row-cols-1 row-cols-md-3">
      <Col>
        <span>
          Inicio / Juguetes / <b>Funko Pop</b>
        </span>
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
  );
};

export default Ruta;
