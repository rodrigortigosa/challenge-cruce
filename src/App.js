import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Ruta from "./components/Ruta";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <Ruta />

        <Banner />

        {/* <Listado></Listado> */}
      </Container>
    </div>
  );
};

export default App;
