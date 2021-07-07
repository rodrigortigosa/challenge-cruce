import { Row } from "react-bootstrap";
import Article from "./Article";

const List = (props) => {
  const articles = props.articles;

  return (
    <Row className="row-cols-1 row-cols-md-3">
      {articles.map((article, index) => (
        <Article
          key={index}
          image={article.image}
          name={article.name}
          price={article.price}
        />
      ))}
    </Row>
  );
};

export default List;
