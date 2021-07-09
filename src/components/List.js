import { Row, Col } from "react-bootstrap";
import Article from "./Article";
import "../assets/css/List.css";

const List = (props) => {
  const articles = props.articles;

  return (
    <Row className="row-cols-1 row-cols-md-3 my-4">
      <Col id="col-separator">
        <hr className="separator" />
      </Col>
      {articles.map((article) => (
        <Article
          key={article.id}
          image={article.image}
          name={article.name}
          price={article.price}
        />
      ))}
    </Row>
  );
};

export default List;
