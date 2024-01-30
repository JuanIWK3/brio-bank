import { Project } from "@/types";

export function Tasks({ tasks }: { tasks: Project["tasks"] }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-lg">Tasks</h2>
      <div className="flex gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex w-full flex-col gap-2 p-4 bg-blue-50 rounded-2xl"
          >
            <h3 className="font-bold text-md">{task.name}</h3>
            <p>{task.description}</p>
            <p>{task.status}</p>
            <p>{task.importance}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}