import axios from "axios";
const api = process.env.API_URL;

//Login
export const getOrders = async (data, setLoading) => {
  setLoading(true);
  try {
    let url = `${api}/orders?page=${data.pageNumber + 1}`;
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

//Order Status

export const updateOrderStatus = async (data, id, token, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.put(`${api}/orders/${id}`, data, {
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
