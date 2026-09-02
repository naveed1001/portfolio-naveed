export interface Skill {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Tools"
    | "CS";
  level: "Primary" | "Working Knowledge" | "Foundation";
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "React.js",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Primary",
  },
  {
    name: "Redux Toolkit",
    category: "Frontend",
    level: "Working Knowledge",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    level: "Working Knowledge",
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
    name: "NestJS",
    category: "Backend",
    level: "Primary",
  },
  {
    name: "REST APIs",
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
    name: "MySQL",
    category: "Database",
    level: "Primary",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Working Knowledge",
  },
  {
    name: "Redis",
    category: "Database",
    level: "Working Knowledge",
  },

  // DevOps & Cloud
  {
    name: "AWS",
    category: "DevOps",
    level: "Working Knowledge",
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Working Knowledge",
  },
  {
    name: "CI/CD Pipelines",
    category: "DevOps",
    level: "Working Knowledge",
  },
  {
    name: "RabbitMQ",
    category: "DevOps",
    level: "Working Knowledge",
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    level: "Primary",
  },
  {
    name: "GitHub",
    category: "Tools",
    level: "Primary",
  },
  {
    name: "Postman",
    category: "Tools",
    level: "Working Knowledge",
  },
  {
    name: "JIRA",
    category: "Tools",
    level: "Working Knowledge",
  },
  {
    name: "ClickUp",
    category: "Tools",
    level: "Working Knowledge",
  },
];
