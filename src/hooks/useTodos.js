import useSWR from "swr";

const URL = "http://localhost:8000/todos";
const fetcher = (url) => fetch(url).then((res) => res.json());

export function useTodos() {
  const { data, mutate, error, isLoading } = useSWR(URL, fetcher);

  const addTodo = async (newTodo) => {
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    mutate();
  };

  const toggleTodo = async (id, done) => {
    await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done }),
    });
    mutate();
  };

  const editTodo = async (id, text) => {
    await fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    mutate();
  };

  const deleteTodo = async (id) => {
    await fetch(`${URL}/${id}`, { method: "DELETE" });
    mutate();
  };

  return {
    todos: data || [],
    isLoading,
    isError: error,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
  };
}
