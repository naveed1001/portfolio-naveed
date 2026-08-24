import {
  Braces,
  Database,
  GitBranch,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

import type {
  ElementType,
} from "react";

import {
  motion,
} from "framer-motion";

import Container from "../ui/Container";

interface SkillGroup {
  title: string;
  description: string;
  icon: ElementType;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces.",
    icon: Layers3,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
    ],
  },

  {
    title: "Backend",
    description:
      "Developing REST APIs and server-side application logic.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Middleware",
      "API Integration",
    ],
  },

  {
    title: "Database",
    description:
      "Designing and working with application data.",
    icon: Database,
    skills: [
      "MongoDB",
      "PostgreSql",
      "MySql",
      "Mongoose",
      "Schema Design",
      "CRUD Operations",
      "Data Modeling",
    ],
  },

  {
    title: "Programming",
    description:
      "Strong foundations for solving programming problems.",
    icon: Braces,
    skills: [
      "TypeScript",
      "JavaScript",
      "C++",
      "OOP",
      "DSA",
    ],
  },

  {
    title: "Tools & Deployment",
    description:
      "Development workflow and application deployment.",
    icon: GitBranch,
    skills: [
      "GitHub",
      "Git",
      "Vercel",
      "Render",
      "Cloudinary",
      "Postman",
    ],
  },

  {
    title: "Development",
    description:
      "Engineering practices used across projects.",
    icon: Terminal,
    skills: [
      "Reusable Components",
      "Responsive Design",
      "Authentication",
      "Error Handling",
      "API Architecture",
      "Clean Code",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              Technical Skills
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Technologies I work with
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            A practical toolkit built through hands-on
            projects, academic foundations and continuous
            development.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map(
            (
              group,
              index
            ) => {
              const Icon =
                group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                  }}
                  className="group rounded-3xl border border-[var(--border)] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/20 hover:bg-white/[0.035] sm:p-7"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                      <Icon
                        size={20}
                        className="text-violet-400"
                      />
                    </div>

                    <span className="text-xs font-medium text-[var(--muted)]">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold">
                    {group.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {group.description}
                  </p>

                  {/* Skill pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map(
                      (
                        skill
                      ) => (
                        <span
                          key={
                            skill
                          }
                          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium text-[var(--muted)] transition group-hover:text-[var(--foreground)]"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;