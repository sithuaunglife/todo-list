// Container Component 
"use client"
import { Trash2 } from "lucide-react";
import { useState } from "react";

// child 
const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);
  const [isExiting, setIsExiting] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    editTodo(todo.id, value);
  };

  const handleDelete = () => {
    setIsExiting(true);
    // Wait for animation to finish before calling onDelete
    setTimeout(() => deleteTodo(todo.id), 1000); // 700ms matches animate.css default
  };

// Presentational Component 
  return (
    <div
      className={`flex items-center justify-between border px-3 py-2 rounded 
        animate__animated 
        ${isExiting ? "animate__bounceOutLeft animate__slow" : "animate__bounceInLeft animate__slow"}`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 cursor-pointer"
        />

        {isEditing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSave}
            onKeyUp={(e) => e.key === "Enter" && handleSave()}
            autoFocus
            className="border px-1 py-0.5"
          />
        ) : (
          <span
            className={`${todo.done ? "line-through" : ""}`}
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
        )}
      </div>

      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 duration-300 active:scale-75 cursor-pointer"
      >
        <Trash2 />
      </button>
    </div>
  );
};

export default TodoItem;
