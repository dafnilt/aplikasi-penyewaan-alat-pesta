import { adminApi } from "../utils/axios";

export const useOrderPage = async ({
  page = 0,
  pageSize = 10,
  sortBy = "updatedAt",
  sortOrder = "desc",
  search = "",
  }) => {
  const response = await adminApi.get("/orders/",{
    params: {
      page: page + 1,
      pageSize,
      sortBy,
      sortOrder,
      search,
    }
  });

  return response.data;
};