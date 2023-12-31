import axios from "axios";
const api = process.env.API_URL;

//Login
export const getOffers = async (token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/offers/`, {
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

export const getSingleOffer = async (token, id) => {
  try {
    const res = await axios.get(`${api}/offers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    return e.response.data;
  }
};

export const addOffer = async (data, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/offers/`, data, {
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
export const updateOffer = async (data, token, id, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/offers/${id}?_method=PUT`, data, {
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
