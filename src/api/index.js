import axios from "axios";
const BASEURL = "http://localhost:8000";
const instance = axios.create({
  baseURL: "http://localhost:8000",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});
export { BASEURL };
export default instance;
