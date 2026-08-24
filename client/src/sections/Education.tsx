import {
  BookOpen,
  GraduationCap,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const Education = () => {
  return (
    <Section id="education">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Education
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Academic foundation
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Developing practical software engineering
            skills alongside a strong foundation in
            information technology and computer
            science.
          </p>
        </div>

        <motion.div
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
            duration: 0.6,
          }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-10"
        >
          {/* Decorative */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-start">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
              <GraduationCap size={27} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm font-medium text-violet-400">
                    Bachelor of Science
                  </p>

                  <h3 className="mt-1 text-2xl font-black">
                    Information Technology
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[var(--muted)]">
                    Ghazi University
                  </p>
                </div>

                <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                  2023 — 2027
                </span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4">
                  <MapPin
                    size={17}
                    className="text-violet-400"
                  />

                  <span className="text-sm text-[var(--muted)]">
                    Ghazi University
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4">
                  <BookOpen
                    size={17}
                    className="text-violet-400"
                  />

                  <span className="text-sm text-[var(--muted)]">
                    Information Technology
                  </span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Relevant Coursework
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Object-Oriented Programming",
                    "Data Structures",
                    "Algorithms",
                    "Design & Analysis of Algorithms",
                    "Database Systems",
                    "Web Programming",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--border)] px-3 py-2 text-xs text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Education;