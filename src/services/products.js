import axios from "axios";

/* const PORT = 3001;
const baseUrl = `http://localhost:${PORT}`; */
const baseUrl = "https://catalogo-cruce.herokuapp.com";

const getAll = () => {
  const request = axios.get(baseUrl + "/products");
  return request.then((response) => response.data);
};

const create = (newObject) => {
  axios.post(baseUrl + "/products", newObject);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create };
