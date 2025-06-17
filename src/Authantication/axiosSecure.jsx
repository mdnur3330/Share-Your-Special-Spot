import axios from "axios";
import { getAuth } from "firebase/auth";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_api,
});

axiosSecure.interceptors.request.use(async (config) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    const token = await user.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosSecure;
