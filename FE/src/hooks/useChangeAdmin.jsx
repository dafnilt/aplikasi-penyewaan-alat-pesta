import { privateApi } from "../utils/axios";

export const useChangeAdmin = async (idAdmin, fullName, isActive) => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.patch("/users/manage-admin/", {
    idAdmin,
    fullName,
    isActive
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.data;
};