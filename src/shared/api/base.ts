import axios from "axios";
const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function createInstance() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: API_KEY,
    },
  });
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return instance;
}
export const baseInstance = createInstance();
