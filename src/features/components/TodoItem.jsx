// Container Component
"use client";
import { PencilIcon, Trash2 } from "lucide-react";
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
    // in classname give group at outer shell to control group at animation group
    <div
      className={`group flex items-center justify-between border px-3 py-4 rounded 
        animate__animated 
        ${
          isExiting
            ? "animate__bounceOutRight animate__slow"
            : "animate__bounceInLeft animate__slow"
        }`}
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

      {/* in classname use control to control group animation */}
      {/* in classname use group-something to control animation in group  */}
      <div className="control opacity-0 duration-300 translate-x-5 group-hover:pointer-events-auto group-hover:opacity-100 group-hover:translate-x-0 flex gap-1 pointer-events-none">
        <button
          onClick={() => setIsEditing(true)}
          className="text-red-500 hover:text-red-700 duration-300 active:scale-75 cursor-pointer"
        >
          <PencilIcon />
        </button>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 duration-300 active:scale-75 cursor-pointer"
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
