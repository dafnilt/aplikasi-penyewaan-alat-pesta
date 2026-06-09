import { useMutation } from "@tanstack/react-query";
import { authApi } from "../utils/axios";

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      const response = await authApi.post(
        "/auth/logout/"
      );

      return response.data;
    },
  });
}