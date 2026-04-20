"use client";
import { useTodoStore } from "@/stores/useTodoStore";
import InputBar from "./InputBar";
import TodoList from "./TodoList";
import TodoLoader from "./TodoLoader";

const TodoSection = () => {
  const { todos, addTodo, hasHydrated } = useTodoStore();

  const doneCount = todos.filter((t) => t.done).length;
  const listCount = todos.length;

  if (!hasHydrated) {
    return (
      <div className="max-w-[400px] w-full mx-auto mt-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
          Todo App
        </h1>

        <InputBar addTodo={addTodo} />

        <div className="flex justify-between mb-5">
          <h3 className="text-2xl font-bold">Your List</h3>
          <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
            Done ( <span>0</span> / <span>0</span> )
          </div>
        </div>

        <TodoLoader className="w-40 h-4 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-[400px] w-full mx-auto mt-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-5">
        Todo App
      </h1>

      <InputBar addTodo={addTodo} />

      <div className="flex justify-between mb-5">
        <h3 className="text-2xl font-bold">Your List</h3>
        <div className="flex items-center bg-neutral-700 text-white px-3 rounded-full text-sm py-1">
          Done ( <span>{doneCount}</span> / <span>{listCount}</span> )
        </div>
      </div>

      <TodoList todos={todos} />
    </div>
  );
};

export default TodoSection;
