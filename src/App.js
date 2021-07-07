import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Head from "./components/Head";
import Banner from "./components/Banner";
import List from "./components/List";
import productsJSON from "./products.json";

const App = () => {
  const products = productsJSON;

  return (
    <div className="App">
      <Container fluid>
        <div className="d-flex flex-column flex-md-column-reverse my-4">
          <Head />
          <Banner />
        </div>
        <List articles={products} />
      </Container>
    </div>
  );
};

export default App;
