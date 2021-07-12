import productsService from "../../services/products";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Edit = () => {
  const idProduct = Number(useParams().id);

  const [name, setName] = useState("");
  const [image, setImage] = useState("http://via.placeholder.com/150x150");
  const [price, setPrice] = useState("");

  useEffect(() => {
    productsService
      .getProduct(idProduct)
      .then((productToEdit) => {
        setName(productToEdit.name);
        setPrice(productToEdit.price);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idProduct]);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeImage = (event) => {
    setImage(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmitEditProduct = (event) => {
    event.preventDefault();

    const productToEdit = {
      id: idProduct,
      name: name,
      image: image,
      price: Number(price),
    };

    productsService.edit(productToEdit);
    setName("");
    setImage("");
    setPrice("");

    alert("Producto editado.");
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
            <form onSubmit={handleSubmitEditProduct}>
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
                      value={name}
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
                      value={price}
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

export default Edit;
