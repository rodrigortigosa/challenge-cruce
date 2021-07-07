import { Row, Col, Image } from "react-bootstrap";
import banner from "../assets/images/banner_listado.png";

const Banner = () => {
  return (
    <Row className="justify-content-center">
      <Col xs={12}>
        <Image src={banner} width={"100%"}></Image>
      </Col>
    </Row>
  );
};

export default Banner;
