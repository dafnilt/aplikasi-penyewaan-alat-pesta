import { privateApi } from "../utils/axios";

export const useDeleteAdmin = async (idAdmin) => {
  const token = localStorage.getItem("accessToken");

  const response = await privateApi.delete(
    "/users/manage-admin/",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        idAdmin,
      },
    }
  );

  return response.data;
};