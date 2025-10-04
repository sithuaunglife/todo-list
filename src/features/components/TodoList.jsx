"use client";
import Image from "next/image";
import TodoItem from "./TodoItem";

// Parent 
// Presentation Component 
const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="hidden last:flex flex-col items-center py-10">
        <Image src="/empty.svg" width={150} height={32} alt="png" />
        <p className="text-neutral-500">No todos yet!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {/* looping  */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
