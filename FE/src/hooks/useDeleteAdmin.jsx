import { adminApi } from "../utils/axios";

export const useDeleteAdmin = async (idAdmin) => {
  const response = await adminApi.delete(
    "/users/manage-admin/",
    {
      data: {
        idAdmin,
      }
    }
  );

  return response.data;
};