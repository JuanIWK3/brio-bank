"use client";

import { projects } from "@/data";
import { Project } from "@/types";
import { useState } from "react";
import {
  Notes,
  ProjectInfo,
  ProjectList,
  TeamInfo,
  Tasks,
} from "./components";

export default function Page() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex w-full max-h-screen">
      <ProjectList
        projects={projects}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      {selectedProject && (
        <div className="flex flex-col max-h-screen w-full gap-4 p-8 m-4 ml-0 bg-white rounded-2xl shadow-md">
          <ProjectInfo project={selectedProject} />
          <TeamInfo team={selectedProject.team} />
          <Tasks tasks={selectedProject.tasks} />
          <Notes />
        </div>
      )}
    </div>
  );
}
