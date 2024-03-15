import React, { useRef } from "react";
import { Card } from "./components/card";
import { useGetTodos } from "./service/query/useGetTodos";
import { useCreateTodo } from "./service/mutation/useCreateTodo";
import { toast } from "react-toastify";
import { queryClient } from "../config/query-client";

export const Home = () => {
  const { data, isLoading } = useGetTodos();
  const { mutate, isPending } = useCreateTodo();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const submit = (e) => {
    e.preventDefault();

    mutate(
      { description: ref2.current.value, title: ref.current.value },
      {
        onSuccess: () => {
          toast.success("success");
          queryClient.invalidateQueries({ queryKey: ["abdumuhaymin"] });
        },
      }
    );
    ref.current.value = " ";
    ref2.current.value = " ";
  };
  return (
    <div className="box">
      <div className="container">
        <div className="contents">
          <form onSubmit={submit}>
            <input required ref={ref} type="text" name="title" />
            <input required ref={ref2} type="text" name="description" />
            <button
              style={{ padding: "10px 50px", backgroundColor: "blueviolet" }}
              type="submit"
            >
              {isPending ? "Loading.." : "send"}
            </button>
          </form>

          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              {data?.reverse().map((item) => (
                <Card {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
