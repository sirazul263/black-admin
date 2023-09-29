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

    const user = {
      name: res.data.user.name,
      email: res.data.user.email,
      phone: res.data.user.phone_number,
      type: res.data.user.type,
    };

    Cookies.set("auth_token", res.data.token);
    Cookies.set("user", JSON.stringify(user));
    setLoading(false);
    return res.data;
  } catch (e) {
    setLoading(false);
    return e.response.data;
  }
};
