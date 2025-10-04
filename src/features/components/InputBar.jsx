// Container Component 
"use client"
import { Plus } from "lucide-react";
import { useState } from "react";

const InputBar = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  // Presentational Component 
  return (
    <form onSubmit={handleSubmit} className="flex mb-5">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
        className="flex-grow border border-neutral-700 h-14 px-3 focus-visible:outline-none"
      />
      <button
        type="submit"
        className="bg-neutral-700 text-white px-4 py-1 cursor-pointer"
      >
        <Plus />
      </button>
    </form>
  );
};

export default InputBar;