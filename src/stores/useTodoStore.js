import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      hasHydrated: false,

      setHasHydrated: (state) => set({ hasHydrated: state }),

      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, done: false }],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t,
          ),
        })),

      editTodo: (id, newText) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, text: newText } : t,
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),
    }),
    {
      name: "todo-storage",
      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    },
  ),
);
