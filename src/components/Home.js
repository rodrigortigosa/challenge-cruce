import { Container } from "react-bootstrap";
import Head from "./Head";
import Banner from "./Banner";
import List from "./List";
/* import productsJSON from "./products.json"; */
import productsService from "../services/products";
import React, { useState, useEffect } from "react";

const Home = () => {
  /* const products = productsJSON; */
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productsService.getAll().then((initialProducts) => {
      setProducts(initialProducts);
    });
  }, []);

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
