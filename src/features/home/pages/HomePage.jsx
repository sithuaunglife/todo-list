"use client";
import React, { useState } from "react";
import InputBar from "../../components/InputBar";
import TodoList from "../../components/TodoList";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const doneCount = todos.filter((t) => t.done).length;
  const listCount = todos.length;

  return (
    <div className="w-[400px] mx-auto mt-20">
      <h1 className="text-4xl  font-bold font-serif mb-5">Todo App</h1>
      <InputBar addTodo={addTodo} />
      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold">Your List</h3>
        <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
          Done ( <span>{doneCount}</span> / <span>{listCount}</span> )
        </div>
      </div>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default HomePage;
