// Container Component
"use client";
import { PencilIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTodoStore } from "@/stores/useTodoStore";

// child
const TodoItem = ({ todo }) => {
  const { toggleTodo, editTodo, deleteTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(todo.text);
  const [isExiting, setIsExiting] = useState(false);

  // Toaster
  const handleSave = () => {
    setIsEditing(false);
    editTodo(todo.id, value);
    toast.success("To-Do List Updated");
  };

  // Toaster
  const handleDelete = () => {
    setIsExiting(true);
    // Wait for animation to finish before calling onDelete
    setTimeout(() => {
      deleteTodo(todo.id);
      toast.error("To-Do List Deleted");
    }, 700); // 700ms matches animate.css default
  };

  // Presentational Component
  return (
    // in classname give group at outer shell to control group at animation group
    <div
      className={`group flex items-center justify-between border border-stone-700 px-3 py-4 rounded 
        animate__animated 
        ${
          isExiting
            ? "animate__fadeOut animate__fast"
            : "animate__fadeIn animate__fast"
        }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => {
            toggleTodo(todo.id);
            toast.info(
              todo.done
                ? "To-Do List marked as incomplete ❌"
                : "To-Do List marked as done ✅",
            );
          }}
          className="w-4 h-4 cursor-pointer"
        />

        {isEditing ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSave}
            onKeyUp={(e) => e.key === "Enter" && handleSave()}
            autoFocus
            className="border rounded bg-transparent outline-stone-500 px-1 py-0.5"
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
      <div
        className="flex items-center gap-1

    opacity-100 translate-x-0 pointer-events-auto

    sm:opacity-0 sm:translate-x-5 sm:pointer-events-none
    sm:group-hover:opacity-100 sm:group-hover:translate-x-0 sm:group-hover:pointer-events-auto

    transition duration-300"
      >
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center justify-center text-gray-500 hover:text-red-700 duration-300 active:scale-75 cursor-pointer"
        >
          <PencilIcon className="size-6" />
        </button>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button className="flex items-center justify-center text-gray-500 hover:text-red-700 duration-300 active:scale-75 cursor-pointer">
              <Trash2 className="size-6" />
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent
            className={`bg-gray-900 text-gray-600 border border-gray-700`}
          >
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                To-Do List item.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={`bg-red-600 hover:bg-red-700`}
                onClick={handleDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default TodoItem;
