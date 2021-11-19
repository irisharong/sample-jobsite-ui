import axios from 'axios';

class JwtService {
  
  createUser = (data) => {
    const API_URL = `${process.env.REACT_APP_BASE_URL}/api/auth/`;

    return new Promise((resolve, reject) => {
      axios.post(`${API_URL}signup`, data).then((response) => {
        if (response.data.user) {
          this.setSession(response.data.access_token);
          resolve(response.data.user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

}

const instance = new JwtService();

export default instance;
