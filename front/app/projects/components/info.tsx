import { Project } from "@/types";

export function ProjectInfo({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-medium text-2xl">{project.name}</h1>
      <p>{project.description}</p>
      <p>Due date: {project.deadline.toUTCString()}</p>
    </div>
  );
}