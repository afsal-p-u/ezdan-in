import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: import.meta.env.VITE_WITHCREDENTIALS == "true" ? true : false, 
  // withCredentials: true, 
});

apiRequest.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user")); // Or wherever your token is stored
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiRequest;