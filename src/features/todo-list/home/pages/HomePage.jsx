"use client";
import { useTodos } from "@/hooks/useTodos";
import InputBar from "../../components/InputBar";
import TodoList from "../../components/TodoList";

const HomePage = () => {
  const {
    todos,
    isLoading,
    isError,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
  } = useTodos();

  const doneCount = todos.filter((t) => t.done).length;
  const listCount = todos.length;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Failed to load todos.</p>;

  const handleAddTodo = async (text) => {
    if (!text.trim()) return;
    await addTodo({ text, done: false }); // goes to JSON server
  };

  return (
    <div className="w-[400px] mx-auto mt-20">
      <h1 className="text-4xl font-bold font-serif mb-5">Todo App</h1>
      <InputBar handleAddTodo={handleAddTodo} />

      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold">Your List</h3>
        <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
          Done (<span>{doneCount}</span> / <span>{listCount}</span>)
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
