import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/todos/${id}`).then((res) => res.data),
  });
};
