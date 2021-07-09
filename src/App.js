import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, NUEVO_PRODUCTO } from "./config/router/paths";
import Form from "./Form";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={NUEVO_PRODUCTO} component={Form} />
          <Route path={HOME} component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
