import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import productsService from "../services/products";
import {
  CATALOGO,
  EDITAR_PRODUCTO,
  NUEVO_PRODUCTO,
} from "../config/router/paths";
import { generatePath, Link } from "react-router-dom";

const Catalogue = () => {
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

  const handleDeleteClick = (idProduct) => {
    productsService.remove(idProduct);
    setProducts(products.filter((product) => product.id !== idProduct));
    alert("Producto eliminado.");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <a
          className="navbar-brand"
          href="http://www.e-cruce.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg"
            alt="logo"
          />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href={CATALOGO}>
              Catalogo
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid mt-4">
        <div className="row justify-content-end mb-4">
          <div className="col-4 text-end">
            <a href={NUEVO_PRODUCTO} className="btn btn-primary" role="button">
              Agregar producto
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <Link
                          to={generatePath(EDITAR_PRODUCTO, { id: product.id })}
                        >
                          {product.name}
                        </Link>
                      </td>
                      <td>{`$${product.price}`}</td>
                      <td className="text-right">
                        <Link
                          to={generatePath(EDITAR_PRODUCTO, { id: product.id })}
                          style={{
                            color: "black",
                            verticalAlign: "middle",
                            padding: ".375rem .75rem",
                          }}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <Link
                          to={generatePath(EDITAR_PRODUCTO, { id: product.id })}
                          style={{
                            color: "black",
                            verticalAlign: "middle",
                            padding: ".375rem .75rem",
                          }}
                        >
                          <FontAwesomeIcon icon={faPencilAlt} />
                        </Link>
                        <button
                          type="button"
                          className="btn"
                          onClick={() => handleDeleteClick(product.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
