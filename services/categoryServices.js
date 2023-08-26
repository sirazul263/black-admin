import axios from "axios";
const api = process.env.API_URL;

//Login
export const getCategories = async (token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/categories`, {
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
//Add
export const addCategory = async (data, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/categories`, data, {
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
//Add
export const updateCategory = async (data, token, id, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/categories/${id}?_method=PUT`, data, {
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
