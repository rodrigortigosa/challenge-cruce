import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CATALOGO,
  HOME,
  NUEVO_PRODUCTO,
  EDITAR_PRODUCTO,
} from "./config/router/paths";
import CatalogueAdd from "./components/catalogue/Add";
import CatalogueEdit from "./components/catalogue/Edit";
import CatalogueList from "./components/catalogue/List";
import Home from "./components/Home";
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
          <Route path={NUEVO_PRODUCTO} component={CatalogueAdd} exact />
          <Route path={EDITAR_PRODUCTO} component={CatalogueEdit} exact />
          <Route path={CATALOGO} component={CatalogueList} exact />
          <Route path={HOME} exact>
            <Home products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
