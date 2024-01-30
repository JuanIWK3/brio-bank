import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Website Design",
    description: "Design a website for a client",
    deadline: new Date(),
    tasks: [
      {
        id: 1,
        name: "Design",
        description: "Design the website",
        deadline: new Date(),
        assignee: {
          id: 1,
          name: "Person 1",
        },
        status: "todo",
        importance: 20,
      },
      {
        id: 2,
        name: "Development",
        description: "Develop the website",
        deadline: new Date(),
        assignee: {
          id: 2,
          name: "Person 2",
        },
        status: "in-progress",
        importance: 40,
      },
      {
        id: 3,
        name: "Testing",
        description: "Test the website",
        deadline: new Date(),
        assignee: {
          id: 1,
          name: "Person 1",
        },
        status: "done",
        importance: 40,
      },
    ],
    team: {
      id: 1,
      name: "Team 1",
      members: [
        {
          id: 1,
          name: "Person 1",
        },
        {
          id: 2,
          name: "Person 2",
        },
      ],
    },
  },
  {
    id: 2,
    name: "User Research",
    description: "Based on user interviews, create a report",
    deadline: new Date(),
    tasks: [
      {
        id: 4,
        name: "Interview",
        description: "Interview a user",
        deadline: new Date(),
        assignee: {
          id: 3,
          name: "Juan",
        },
        status: "todo",
        importance: 35,
      },
      {
        id: 5,
        name: "Report",
        description: "Write a report",
        deadline: new Date(),
        assignee: {
          id: 4,
          name: "Paulo",
        },
        status: "done",
        importance: 25,
      },
      {
        id: 6,
        name: "Presentation",
        description: "Present the report",
        deadline: new Date(),
        assignee: {
          id: 3,
          name: "Person 3",
        },
        status: "todo",
        importance: 40,
      },
    ],
    team: {
      id: 2,
      name: "Team 2",
      members: [
        {
          id: 3,
          name: "Juan",
        },
        {
          id: 4,
          name: "Paulo",
        },
      ],
    },
  },
];