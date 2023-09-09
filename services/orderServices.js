import axios from "axios";
const api = process.env.API_URL;

//Login
export const getOrders = async (token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.get(`${api}/orders/`, {
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
