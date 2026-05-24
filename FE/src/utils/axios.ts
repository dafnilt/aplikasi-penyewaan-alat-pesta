import axios from "axios";

export const createAxiosInstance = (baseURL?: string) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const privateApi = createAxiosInstance(
  import.meta.env.DEV ? `${import.meta.env.VITE_BASE_API_URL}` : "api",
);

export const authApi = createAxiosInstance();