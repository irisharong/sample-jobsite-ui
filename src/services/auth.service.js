import axios from "axios";

const API_URL = `${process.env.REACT_APP_BASE_URL}/api/auth/`;

class AuthService {
  register(name, email, password, industry, promo, type) {
    return axios.post(API_URL + "signup", {
      name, email, password, industry, promo, type
    });
  }
  verify(token, email) {
    return axios.post(API_URL + "verify", {
      token, email
    });
  }
}

export default new AuthService();
