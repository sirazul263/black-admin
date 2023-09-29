import axios from "axios";
const api = process.env.API_URL;

//Login
export const getProducts = async (data, setLoading) => {
  setLoading(true);
  try {
    let url = `${api}/products/?page=${data.pageNumber + 1}`;
    if (data.status) {
      url += `&status=${data.status}`;
    }
    if (data.search) {
      url += `&search=${data.search}`;
    }
    const res = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${data.token}`,
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

//Dashboard

export const getAnalytics = async (token, type, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/analytics/${type}`, {
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
