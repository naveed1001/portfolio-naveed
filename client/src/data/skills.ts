export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "CS";
  level: "Primary" | "Working Knowledge" | "Foundation";
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React.js",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Primary",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Primary",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Primary",
  },
  {
    name: "REST APIs",
    category: "Backend",
    level: "Primary",
  },
  {
    name: "JWT Authentication",
    category: "Backend",
    level: "Primary",
  },

  // Database
  {
    name: "MongoDB",
    category: "Database",
    level: "Primary",
  },
  {
    name: "Mongoose",
    category: "Database",
    level: "Primary",
  },

  // Tools
  {
    name: "GitHub",
    category: "Tools",
    level: "Primary",
  },
  {
    name: "Axios",
    category: "Tools",
    level: "Primary",
  },
  {
    name: "Vercel",
    category: "Tools",
    level: "Working Knowledge",
  },
  {
    name: "Render",
    category: "Tools",
    level: "Working Knowledge",
  },

  // Computer Science
  {
    name: "C++",
    category: "CS",
    level: "Foundation",
  },
  {
    name: "OOP",
    category: "CS",
    level: "Foundation",
  },
  {
    name: "Data Structures",
    category: "CS",
    level: "Foundation",
  },
  {
    name: "Algorithms",
    category: "CS",
    level: "Foundation",
  },
  {
    name: "DAA",
    category: "CS",
    level: "Foundation",
  },
];