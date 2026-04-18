// components/TodoLoader.jsx
import { Skeleton } from "@/components/ui/skeleton";

const TodoLoader = () => {
  return (
    <div className="space-y-2">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between border border-stone-800 px-3 py-4 rounded"
        >
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded bg-muted-foreground" />
            <Skeleton className="w-40 h-4 rounded bg-muted-foreground" />
          </div>

          <div className="flex gap-2">
            <Skeleton className="w-6 h-6 rounded bg-muted-foreground" />
            <Skeleton className="w-6 h-6 rounded bg-muted-foreground" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoLoader;
