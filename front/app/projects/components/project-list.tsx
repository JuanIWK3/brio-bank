import { Project } from "@/types";
import { CompletionLoading } from "./completion";

export function ProjectList({
  projects,
  selectedProject,
  setSelectedProject,
}: {
  projects: Project[];
  selectedProject: Project | null;
  setSelectedProject: (project: Project) => void;
}) {
  return (
    <div className="flex flex-col p-4 gap-4">
      {projects.map((project) => (
        <div
          key={project.id}
          onClick={() => setSelectedProject(project)}
          className={`flex w-56 cursor-pointer flex-col gap-4 p-4 rounded-2xl shadow-md
          ${selectedProject?.id === project.id ? "text-white bg-blue-500" :  "bg-white"}`}
        >
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-xl">{project.name}</h1>
            <p className="text-sm">{project.description}</p>
          </div>

          <CompletionLoading {...project} />
        </div>
      ))}
    </div>
  );
}
