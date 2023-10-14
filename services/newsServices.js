import axios from "axios";
const api = process.env.API_URL;

//Login
export const getNews = async (token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/news`, {
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
export const addNews = async (data, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/news`, data, {
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
export const deleteNews = async (id, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.delete(`${api}/news/${id}`, {
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
export const updateNews = async (data, id, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.put(`${api}/news/${id}`, data, {
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
