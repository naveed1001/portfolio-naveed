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
      "Building responsive, SEO-friendly interfaces with React and Next.js.",
    icon: Layers3,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Backend",
    description:
      "Designing REST APIs and server-side services in Node, Express and NestJS.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT Authentication",
      "BullMQ",
    ],
  },

  {
    title: "Databases",
    description:
      "Modeling, indexing and querying data across MongoDB, MySQL and PostgreSQL.",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Mongoose",
      "Schema Design",
      "Indexing",
    ],
  },

  {
    title: "Caching & Messaging",
    description:
      "Keeping responses fast and moving heavy work into background queues.",
    icon: Terminal,
    skills: [
      "Redis",
      "RabbitMQ",
      "BullMQ",
      "Caching Strategies",
    ],
  },

  {
    title: "DevOps & Cloud",
    description:
      "Shipping and running applications on AWS with Docker and CI/CD.",
    icon: GitBranch,
    skills: [
      "AWS",
      "Docker",
      "CI/CD Pipelines",
      "Git",
      "GitHub",
      "Cloudinary",
    ],
  },

  {
    title: "Tools & Practice",
    description:
      "The day-to-day workflow behind planning, testing and reviewing code.",
    icon: Braces,
    skills: [
      "Postman",
      "JIRA",
      "ClickUp",
      "Cursor",
      "Claude",
      "Code Review",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative py-12 sm:py-16"
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
            The stack I use day to day to take products
            from interface and API design through to
            databases, caching and cloud deployment.
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