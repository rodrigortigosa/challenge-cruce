import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Ruta from "./components/Ruta";

const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <Ruta />

        {/* Imagen */}

        {/* <Listado></Listado> */}
      </Container>
    </div>
  );
};

export default App;
