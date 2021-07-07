import { Row, Col, Image } from "react-bootstrap";

const List = (props) => {
  const articles = props.articles;
  return (
    <Row className="row-cols-1 row-cols-md-3">
      {articles.map((article, index) => (
        <Col key={index} className="d-flex justify-content-center my-3">
          <div>
            <Image
              src={article.image}
              alt={`imagen del ${article.name}`}
            ></Image>
          </div>
          <div>
            <p>{article.name}</p>
            <p>{`$${article.price}`}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default List;
