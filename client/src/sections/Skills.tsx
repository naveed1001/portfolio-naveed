import {
  Braces,
  Database,
  GitBranch,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import {
  skills,
  type Skill,
} from "../data/skills";

type Category = Skill["category"];

const categories: {
  name: Category;
  description: string;
  icon: typeof Braces;
}[] = [
  {
    name: "Frontend",
    description:
      "Modern interfaces and responsive user experiences.",
    icon: Braces,
  },
  {
    name: "Backend",
    description:
      "Server-side applications and RESTful APIs.",
    icon: Server,
  },
  {
    name: "Database",
    description:
      "Data modeling and persistent application data.",
    icon: Database,
  },
  {
    name: "Tools",
    description:
      "Development, version control and deployment.",
    icon: Wrench,
  },
  {
    name: "CS",
    description:
      "Programming fundamentals and algorithmic thinking.",
    icon: Terminal,
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      className="relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/5 blur-[140px]" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Technical Expertise
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Tools I use to
            <span className="text-[var(--muted)]">
              {" "}
              build products.
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
            My core focus is full-stack JavaScript
            development with the MERN stack and
            TypeScript, supported by a solid computer
            science foundation.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-14 space-y-5">
          {categories.map(
            (category, categoryIndex) => {
              const Icon = category.icon;

              const categorySkills =
                skills.filter(
                  (skill) =>
                    skill.category ===
                    category.name
                );

              return (
                <motion.div
                  key={category.name}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      categoryIndex * 0.06,
                  }}
                  className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-5 sm:p-7"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                    {/* Category */}
                    <div className="flex shrink-0 items-center gap-4 lg:w-64">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {category.name === "CS"
                            ? "Computer Science"
                            : category.name}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-1 flex-wrap gap-2">
                      {categorySkills.map(
                        (skill) => (
                          <SkillBadge
                            key={skill.name}
                            skill={skill}
                          />
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Core Stack */}
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
          className="mt-16 overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.04] p-7 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-violet-400">
                <GitBranch size={17} />

                Core Stack
              </div>

              <h3 className="mt-3 text-2xl font-black sm:text-3xl">
                MERN + TypeScript
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                My primary stack for building
                full-stack web applications from
                interface to database and deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
              {[
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "TypeScript",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-xl border border-[var(--border)] bg-black/10 px-4 py-2 text-sm font-medium"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({
  skill,
}: SkillBadgeProps) => {
  return (
    <div className="group flex items-center gap-2 rounded-xl border border-[var(--border)] bg-black/5 px-3.5 py-2.5 transition hover:border-violet-500/30 hover:bg-violet-500/5">
      <span className="text-sm font-medium">
        {skill.name}
      </span>

      <span
        className={`hidden rounded-md px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide sm:inline ${
          skill.level === "Primary"
            ? "bg-violet-500/10 text-violet-400"
            : skill.level ===
                "Working Knowledge"
              ? "bg-blue-500/10 text-blue-400"
              : "bg-white/5 text-[var(--muted)]"
        }`}
      >
        {skill.level ===
        "Working Knowledge"
          ? "Working"
          : skill.level}
      </span>
    </div>
  );
};

export default Skills;