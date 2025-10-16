"use client";
import Image from "next/image";
import TodoItem from "./TodoItem";
import { useTodos } from "@/hooks/useTodos"; // <-- your SWR hook

const TodoList = () => {
  const { todos, isLoading, isError, toggleTodo, editTodo, deleteTodo } =
    useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Failed to load todos.</p>;

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center py-10">
        <Image src="/empty.svg" width={150} height={32} alt="Empty" />
        <p className="text-neutral-500 mt-2">No To-Do List yet!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id, !todo.done)}
          editTodo={editTodo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
