import { Col, Image } from "react-bootstrap";

const Article = (props) => {
  const image = props.image;
  const name = props.name;
  const price = props.price;

  return (
    <Col className="mb-3">
      <div className="d-flex flex-md-column">
        <div className="div-img-article w-100">
          <Image
            className="img-article w-100"
            src={image}
            alt={`imagen del ${name}`}
          ></Image>
        </div>
        <div className="article-description w-100 text-left ml-3 ml-md-0 mt-md-2 d-flex flex-column">
          <span className="article-name">{name}</span>
          <span className="article-price mt-3 mt-md-2">{`$${price}`}</span>
        </div>
      </div>
    </Col>
  );
};

export default Article;
