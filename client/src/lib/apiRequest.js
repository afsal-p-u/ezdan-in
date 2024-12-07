import axios from "axios";

const apiRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: import.meta.env.VITE_WITHCREDENTIALS == "false" ? false : true, 
});

export default apiRequest;