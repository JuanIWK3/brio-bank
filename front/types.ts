export interface Project {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  team: Team;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  description: string;
  deadline: Date;
  assignee: Person;
  status: "todo" | "in-progress" | "done";
  importance: number;
}

export interface Team {
  id: number;
  name: string;
  members: Person[];
}

export interface Person {
  id: number;
  name: string;
}