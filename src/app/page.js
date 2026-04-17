"use client";
import JsonServerLayout from "@/features/todo-list/components/JsonServerLayout";
import TodoListLayout from "@/features/todo-list/components/TodoListLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <TodoListLayout />
      {/* <JsonServerLayout /> */}
    </div>
  );
};

export default page;
