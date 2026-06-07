import { privateApi } from "../utils/axios";

export const useAddAdmin = async (username, password, fullName, isActive) => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.post("/users/manage-admin/", {
    username,
    password,
    fullName,
    isActive
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};