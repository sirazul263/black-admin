import axios from "axios";
import Cookies from "js-cookie";
const api = process.env.API_URL;

//Login
export const login = async (data, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(`${api}/login`, JSON.stringify(data), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    Cookies.set("auth_token", res.data.token);
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
