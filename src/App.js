import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CATALOGO, HOME, NUEVO_PRODUCTO } from "./config/router/paths";
import Form from "./components/Form";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import productsService from "./services/products";
import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService
      .getAll()
      .then((initialProducts) => {
        setProducts(initialProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={NUEVO_PRODUCTO} component={Form} exact />
          <Route path={CATALOGO} component={Catalogue} exact />
          <Route path={HOME} exact>
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
