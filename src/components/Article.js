import { Col, Image } from "react-bootstrap";
import "../assets/css/Article.css";

const Article = (props) => {
  const image = props.image;
  const name = props.name;
  const price = props.price;

  return (
    <Col className="my-3">
      <div className="d-flex justify-content-center">
        <div className="div-img-article">
          <Image
            className="img-article"
            src={image}
            alt={`imagen del ${name}`}
          ></Image>
        </div>
        <div className="article-description d-flex flex-column">
          <span className="article-name">{name}</span>
          <span className="article-price mt-3">{`$${price}`}</span>
        </div>
      </div>
    </Col>
  );
};

export default Article;
