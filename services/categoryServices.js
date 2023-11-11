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

//Login
export const getSubCategories = async (token) => {
  try {
    const res = await axios.get(`${api}/subcategories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    return e.response.data;
  }
};
export const deleteCategory = async (id, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.delete(`${api}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLoading(false);
    return {
      status: 1,
      data: res.data,
    };
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
