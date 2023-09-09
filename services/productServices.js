import axios from "axios";
const api = process.env.API_URL;

//Login
export const getProducts = async (token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/products/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

export const addProduct = async (data, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/products/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};

export const updateProduct = async (data, token, id, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/products/${id}?_method=PUT`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
