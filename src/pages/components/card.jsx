import React from "react";
import { useDeleteTodo } from "../service/mutation/useDeleteTodo";
import { toast } from "react-toastify";
import { queryClient } from "../../config/query-client";

export const Card = ({ description, title, id }) => {
  const { mutate, isPending } = useDeleteTodo();

  const deleteItem = () => {
    mutate(id, {
      onSuccess: () => {
        toast.info("deleted");
        queryClient.invalidateQueries({ queryKey: ["abdumuhaymin"] });
      },
    });
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        style={{ padding: "10px 50px", backgroundColor: "blueviolet" }}
        onClick={deleteItem}
      >
        {isPending ? "LOADING..." : "delete"}
      </button>
    </div>
  );
};
