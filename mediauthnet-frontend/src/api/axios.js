// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",   // <-- backend base URL
// });

// export default api;



import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT to every request
api.interceptors.request.use(
  (config) => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      const { token } = JSON.parse(saved);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

