import {
  Briefcase,
  Calendar,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  points: string[];
}

const roles: Role[] = [
  {
    company: "Leaders Performance",
    role: "Full Stack AI Engineer",
    period: "October 2026 — Present",
    location: "Dubai · Remote from Lahore",
    current: true,
    points: [
      "Building an AI executive assistant for the company's leadership across the full stack: React 19 and TypeScript on the frontend, Node.js, Express, Prisma and PostgreSQL on the backend, and Google Gemini for reasoning, document understanding and speech.",
      "Built document-grounded conversations: answers from uploaded PDFs, documents, sheets and images cite the source file and page, and user corrections are applied to later answers.",
      "Delivered bilingual voice conversation in English and Dutch, with transcription, check-before-send, read-aloud, and recordings that survive connection loss and can be retried.",
      "Engineered reliability for unstable networks: idempotent requests so a question is never answered twice, an offline outbox, draft sync across tabs and versioned records with conflict detection.",
      "Implemented access control on every read and write, scoped to owner, work area and case, with audited moves between areas, and designed a least-privilege tasks and calendar integration where writes need explicit approval.",
    ],
  },
  {
    company: "TheCloudOps",
    role: "Senior MERN Stack Developer / Full-Stack Developer / Team Lead",
    period: "December 2024 — September 2026",
    location: "Lahore, Punjab",
    current: false,
    points: [
      "Led a development team as the primary technical point of contact for clients — gathering requirements, translating business needs into technical solutions and owning delivery end to end.",
      "Led the end-to-end development of a full-stack aviation management platform built with the MERN stack, supporting a real-time flight booking and management system.",
      "Drove full-stack development of an ad-supported music lyrics platform with an 11M+ document catalog, owning AI-powered ad targeting, header-bidding integration, SEO optimization and large-scale MongoDB migrations.",
      "Set the technical direction across both platforms — architecture, payment and concurrency guarantees, and the AI capabilities layered on top — and took each from concept to production.",
    ],
  },
  {
    company: "OIOI Group (MARUI)",
    role: "MERN Stack Developer",
    period: "November 2023 — November 2024",
    location: "Lahore, Punjab",
    current: false,
    points: [
      "Led the complete development of the OIOI Bike Inventory System to improve inventory management and warehouse operations, with MySQL-backed inventory tracking, secure APIs and real-time transfer logging.",
      "Designed a microservices architecture in Node.js, connecting services over REST APIs and RabbitMQ for event-driven communication.",
      "Packaged services in Docker containers and built API gateways with service discovery for efficient routing.",
      "Deployed on AWS (EC2, S3, Lambda) for high availability and scale, and added Redis caching and real-time data processing to cut latency.",
    ],
  },
  {
    company: "KOT Enterprises",
    role: "Junior MERN Stack Developer",
    period: "September 2022 — October 2023",
    location: "Lahore, Punjab",
    current: false,
    points: [
      "Developed backend systems using Node.js, Express.js and MongoDB, designing RESTful APIs for scalable web applications.",
      "Assisted in frontend development using React.js, Tailwind CSS and JavaScript.",
    ],
  },
];

const Experience = () => {
  return (
    <Section id="experience">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Where I've worked
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            4+ years building production web
            applications and AI systems across
            aviation, inventory management, digital
            media and AI — leading development
            teams, working directly with clients
            and owning delivery from requirements
            to production.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Timeline rail */}
          <div className="pointer-events-none absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent sm:block" />

          <div className="flex flex-col gap-8">
            {roles.map(
              (item, index) => (
                <motion.div
                  key={item.company}
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
                      index * 0.08,
                  }}
                  className="relative sm:pl-12"
                >
                  {/* Timeline dot */}
                  <span className="absolute left-0 top-8 hidden h-4 w-4 items-center justify-center rounded-full border border-violet-500/30 bg-[var(--card)] sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />
                  </span>

                  <div className="group rounded-3xl border border-[var(--border)] bg-white/[0.02] p-6 transition duration-300 hover:border-violet-500/20 hover:bg-white/[0.035] sm:p-8">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                          <Briefcase
                            size={19}
                          />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                              {
                                item.company
                              }
                            </h3>

                            {item.current && (
                              <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                                Current
                              </span>
                            )}
                          </div>

                          <p className="mt-1.5 text-sm font-medium text-violet-400">
                            {item.role}
                          </p>

                          <div className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                            <MapPin
                              size={15}
                              className="text-violet-400"
                            />

                            <span>
                              {
                                item.location
                              }
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="flex w-fit items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]">
                        <Calendar
                          size={13}
                          className="text-violet-400"
                        />

                        {item.period}
                      </span>
                    </div>

                    <ul className="mt-7 flex flex-col gap-4">
                      {item.points.map(
                        (point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-sm leading-7 text-[var(--muted)]"
                          >
                            <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400/70" />

                            <span>
                              {point}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
