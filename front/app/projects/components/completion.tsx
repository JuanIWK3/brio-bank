import { Project } from "@/types";

export function CompletionLoading(project: Project) {
  const totalTasks = 100;
  const completedTasks = project.tasks.reduce(
    (acc, task) => acc + (task.status === "done" ? task.importance : 0),
    0
  );

  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-full justify-center">
        <div className="flex w-full h-2 bg-gray-200 rounded-2xl">
          <div
            className="h-full bg-blue-600 rounded-2xl"
            style={{ width: `${(completedTasks / totalTasks) * 100}%` }}
          />
        </div>
      </div>
      <p>{(completedTasks / totalTasks) * 100}%</p>
    </div>
  );
}