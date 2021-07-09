import { Container } from "react-bootstrap";
import Head from "./Head";
import Banner from "./Banner";
import List from "./List";
/* import productsJSON from "./products.json"; */

const Home = (props) => {
  /* const products = productsJSON; */
  const products = props.products;

  return (
    <Container fluid>
      <div className="d-flex flex-column flex-md-column-reverse my-4">
        <Head />
        <Banner />
      </div>
      <List articles={products} />
    </Container>
  );
};

export default Home;
