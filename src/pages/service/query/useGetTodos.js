import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["abdumuhaymin"],
    queryFn: () => request.get("/todos").then((res) => res.data),
  });
};
