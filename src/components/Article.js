import { Col, Image } from "react-bootstrap";

const Article = (props) => {
  const image = props.image;
  const name = props.name;
  const price = props.price;

  return (
    <Col className="d-flex justify-content-center my-3">
      <div>
        <Image src={image} alt={`imagen del ${name}`}></Image>
      </div>
      <div>
        <p>{name}</p>
        <p>{`$${price}`}</p>
      </div>
    </Col>
  );
};

export default Article;
