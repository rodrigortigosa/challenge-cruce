import axios from "axios";

/* const PORT = 3001;
const baseUrl = `http://localhost:${PORT}`; */
const baseUrl = "https://catalogo-cruce.herokuapp.com";

const getAll = () => {
  const request = axios.get(baseUrl + "/products");
  return request.then((response) => response.data);
};

const create = (newProduct) => {
  axios.post(baseUrl + "/products", newProduct);
};

const remove = (id) => {
  axios.delete(`${baseUrl}/products/${id}`);
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, remove };
