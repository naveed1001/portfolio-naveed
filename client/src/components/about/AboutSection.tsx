import {
  ArrowUpRight,
  Code2,
  GraduationCap,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../ui/Container";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <Container>
        {/* Section heading */}
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              About Me
            </span>
          </div>

          <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Building modern web applications with{" "}
            <span className="text-violet-400">
              clean architecture
            </span>{" "}
            and purposeful design.
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Introduction */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <Code2
                size={22}
                className="text-violet-400"
              />

              <h3 className="text-lg font-bold">
                MERN Stack Developer
              </h3>
            </div>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
              <p>
                I'm a MERN Stack Developer focused on
                building modern, responsive and
                scalable web applications using
                MongoDB, Express.js, React and
                Node.js.
              </p>

              <p>
                I enjoy turning ideas into complete
                products — from designing responsive
                interfaces and reusable components to
                developing REST APIs, authentication
                systems, database structures and
                production-ready applications.
              </p>

              <p>
                Alongside web development, I have a
                strong foundation in programming
                concepts including Object-Oriented
                Programming and Data Structures &
                Algorithms. This helps me approach
                problems with structured thinking
                rather than only focusing on the UI.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]"
            >
              Let's work together

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
              <GraduationCap
                size={22}
                className="text-violet-400"
              />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
              Education
            </p>

            <h3 className="mt-3 text-xl font-black">
              BS Information Technology
            </h3>

            <p className="mt-2 text-sm font-medium text-[var(--muted)]">
              Ghazi University
            </p>

            <div className="mt-6 h-px bg-[var(--border)]" />

            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">
                Academic Period
              </span>

              <span className="font-semibold">
                2023 — 2027
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;