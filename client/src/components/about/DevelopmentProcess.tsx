import {
  Code2,
  Database,
  GitBranch,
  Rocket,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import Container from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Plan",
    description:
      "Understand the requirements, define the application structure and break the project into manageable modules.",
    icon: Code2,
  },

  {
    number: "02",
    title: "Build",
    description:
      "Develop reusable React components, REST APIs, database models and the core application functionality.",
    icon: Database,
  },

  {
    number: "03",
    title: "Refine",
    description:
      "Improve responsiveness, validation, error handling, authentication, UI interactions and overall user experience.",
    icon: GitBranch,
  },

  {
    number: "04",
    title: "Deploy",
    description:
      "Connect the frontend and backend, configure environment variables and deploy the application for real-world use.",
    icon: Rocket,
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-violet-500" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                My Approach
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              How I build
              <br />
              web applications.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
              I focus on building applications that
              are not only functional, but also
              maintainable, responsive and ready for
              real users.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map(
              (
                step,
                index
              ) => {
                const Icon =
                  step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.08,
                    }}
                    className="group flex gap-5 rounded-2xl border border-[var(--border)] bg-white/[0.02] p-5 transition hover:border-violet-500/20 sm:gap-6 sm:p-6"
                  >
                    <div className="flex shrink-0 flex-col items-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10">
                        <Icon
                          size={19}
                          className="text-violet-400"
                        />
                      </div>

                      {index !==
                        steps.length -
                          1 && (
                        <div className="mt-3 h-full w-px bg-[var(--border)]" />
                      )}
                    </div>

                    <div className="pb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-violet-400">
                          {
                            step.number
                          }
                        </span>

                        <h3 className="font-bold">
                          {step.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                        {
                          step.description
                        }
                      </p>
                    </div>
                  </motion.div>
                );
              }
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DevelopmentProcess;