import axios from "axios";

const baseURL = import.meta.env.DEV
  ? import.meta.env.VITE_BASE_API_URL
  : "/api";

export const privateApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export const authApi = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminApi = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

adminApi.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      originalRequest.url !== "/auth/refresh/" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await authApi.post("/auth/refresh/");

        return adminApi(originalRequest);
      } catch (refreshError) {
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);