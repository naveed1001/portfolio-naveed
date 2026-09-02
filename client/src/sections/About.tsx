import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Terminal,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

const highlights = [
  {
    icon: Code2,
    title: "Team Leadership",
    description:
      "Leading end-to-end delivery at TheCloudOps as the primary technical contact for clients, translating their requirements into shipped solutions.",
  },
  {
    icon: Layers3,
    title: "MERN + TypeScript",
    description:
      "Building production applications with React, Next.js, TypeScript, Node.js, NestJS and Express.js.",
  },
  {
    icon: Database,
    title: "Large-Scale Data",
    description:
      "Consolidating a 7M+ document catalog into 3 core MongoDB collections and cutting API query times from 300ms to 50ms.",
  },
  {
    icon: Terminal,
    title: "Payments & Cloud",
    description:
      "Stripe checkout, Connect payouts and invoicing, shipped on AWS with Docker, Redis and CI/CD pipelines.",
  },
];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Left */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Building with code,
              <span className="block text-[var(--muted)]">
                thinking beyond it.
              </span>
            </h2>

            <div className="mt-7 h-px w-20 bg-gradient-to-r from-violet-500 to-transparent" />
          </motion.div>

          {/* Right */}
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-base leading-8 text-[var(--muted)] sm:text-lg">
              I'm Naveed Ahmed, a Senior MERN Stack
              Developer and Team Lead at TheCloudOps
              with 3+ years of professional experience
              building scalable web applications and
              enterprise software solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              My primary stack is React, Node.js,
              Express.js, NestJS, MongoDB and MySQL,
              with TypeScript throughout. I work across
              the complete application lifecycle — from
              architecting backend systems and designing
              REST APIs to database modeling and
              deployment on AWS with Docker and Redis.
            </p>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Right now I lead development on Private
              Jet One Ways, an aviation booking platform
              with end-to-end Stripe payments, and
              a confidential ad-supported music platform
              serving an 11M+ document catalog. I'm also
              the primary technical contact for clients,
              turning business needs into technical
              solutions.
            </p>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]"
            >
              Explore my projects

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2">
          {highlights.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-2xl border border-[var(--border)] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-violet-500/[0.03]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </motion.div>
              );
            }
          )}
        </div>
      </Container>
    </Section>
  );
};

export default About;
