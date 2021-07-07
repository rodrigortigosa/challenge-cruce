import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";
import Ruta from "./Ruta";

const Head = () => {
  return (
    <Row className="justify-content-center row-cols-1 row-cols-md-3 mt-3">
      <Col md={4} className="text-center mb-4">
        <Ruta departament="Juguetes" category="Funko Pop" />
      </Col>

      <Col md={4} className="d-flex justify-content-center mb-2">
        <DropdownButton
          id="dropdown-item-button"
          title="Filtrar"
          variant="secondary"
          drop="right"
        >
          <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
      </Col>

      <Col md={4} className="d-flex justify-content-center mb-4">
        <DropdownButton
          id="dropdown-item-button"
          title="Ordenar por"
          variant="secondary"
        >
          <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
};
export default Head;
