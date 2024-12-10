import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // withCredentials: import.meta.env.VITE_WITHCREDENTIALS == "true" ? true : false, 
  withCredentials: true, 
});

export default apiRequest;