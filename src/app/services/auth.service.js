import axios from "axios";

//const API_URL = `${process.env.REACT_APP_BASE_URL}/api/auth/`;
const API_URL = `/api/auth/`;

const createUser = (data) => {
  return  new Promise((resolve, reject) => {
    axios.post(API_URL + "signup", data).then((response) => {
      if (response.data.message !== undefined) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    })
    .catch((error) => {
      reject(error.response.data);
    });
  });
  
};

const createEmployer = (data) => {
  return  new Promise((resolve, reject) => {
    axios.post(API_URL + "signup", data).then((response) => {
      if (response.data.message !== undefined) {
        resolve(response.data);
      } else {
        reject(response.data);
      }
    })
    .catch((error) => {
      reject(error.response.data);
    });
  });
  
};

const login = (email, password) => {
  return  new Promise((resolve, reject) => {
   axios.post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      resolve(response.data);
    })
    .catch((error) => {
      reject(error.response.data);
    });  
  });
};

const confirm = (token, email) => {
  return  new Promise((resolve, reject) => {
    axios.post(API_URL + "verify", {
      token, email,
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      reject(error.response.data);
    });
  });
}

const setSession = (access_token) => {
  if (access_token) {
    localStorage.setItem('jwt_access_token', access_token);
    axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
  } else {
    localStorage.removeItem('jwt_access_token');
    delete axios.defaults.headers.common.Authorization;
  }
};

const updateUserData = (user) => {
  return axios.post('/api/auth/user/update', {
    user,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};



export default {
  createUser,
  createEmployer,
  login,
  confirm,
  updateUserData,
  logout,
  setSession,
};