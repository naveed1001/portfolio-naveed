import {
  ArrowUpRight,
  Code2,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../ui/Container";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 sm:py-16"
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
        <div className="mt-14">
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
                Senior MERN Stack Developer & Team Lead
              </h3>
            </div>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
              <p>
                I'm Naveed Ahmed, a Senior MERN Stack
                Developer and Team Lead at TheCloudOps
                with 3+ years of professional
                experience building scalable web
                applications across React, Node.js,
                NestJS, MongoDB and MySQL.
              </p>

              <p>
                I build production platforms end to
                end — a private jet charter
                marketplace with a concurrency-safe
                booking engine and full Stripe
                payments, and an ad-supported lyrics
                platform serving an 11M+ document
                catalog.
              </p>

              <p>
                Day to day I lead the development team
                and act as the primary technical
                contact for clients, translating
                business requirements into technical
                solutions and tuning systems for
                performance and scale — including
                cutting API query times from 300ms to
                50ms.
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
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
