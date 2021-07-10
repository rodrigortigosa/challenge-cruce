import { useState } from "react";
import productsService from "../services/products";

const Form = () => {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(
    "http://via.placeholder.com/150x150"
  );
  const [newPrice, setNewPrice] = useState("");

  const handleChangeName = (event) => {
    setNewName(event.target.value);
  };

  const handleChangeImage = (event) => {
    setNewImage(event.target.value);
  };

  const handleChangePrice = (event) => {
    setNewPrice(event.target.value);
  };

  const handleSubmitAddProduct = (event) => {
    event.preventDefault();

    const productToAdd = {
      name: newName,
      image: newImage,
      price: newPrice,
    };

    productsService.create(productToAdd);
    setNewName("");
    setNewImage("");
    setNewPrice("");

    alert("Producto agregado");
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
            <a className="nav-link" href="/catalogo">
              Catalogo
            </a>
          </li>
        </ul>
      </nav>

      <div className="container-fluid mt-4">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmitAddProduct}>
              <div className="row">
                <div className="col mb-4">
                  <img
                    src="http://via.placeholder.com/150x150"
                    alt="Imagen del producto"
                    className="rounded"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>URL de la imagen</label>
                    <input
                      type="url"
                      name="image"
                      className="form-control"
                      defaultValue="http://via.placeholder.com/150x150"
                      onChange={handleChangeImage}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Nombre del producto</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={handleChangeName}
                      value={newName}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>Precio</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      onChange={handleChangePrice}
                      value={newPrice}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Guardar
                    </button>
                    <a href="/catalogo" className="btn btn-light" role="button">
                      Volver
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
