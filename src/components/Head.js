import { Row, Col } from "react-bootstrap";
import Path from "./Path";
import "../assets/css/Head.css";

const Head = () => {
  return (
    <Row className="justify-content-center row-cols-1 row-cols-md-3 mt-3 mb-4">
      <Col md={4} className="text-center mb-4">
        <Path departament="Juguetes" category="Funko Pop" />
      </Col>

      <Col md={4} className="d-flex justify-content-center mb-2">
        <select id="select-filter" name="select-filter">
          <option value="title">Filtrar</option>
          <option value="opcion1">Filtro 1</option>
          <option value="opcion2">Filtro 2</option>
          <option value="opcion3">Filtro 3</option>
        </select>
      </Col>

      <Col md={4} className="d-flex justify-content-center">
        <select id="select-order" name="select-order">
          <option value="title">Ordenar por</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </Col>
    </Row>
  );
};
export default Head;
