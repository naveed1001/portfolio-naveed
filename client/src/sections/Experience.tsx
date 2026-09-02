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
    company: "TheCloudOps",
    role: "Senior MERN Stack Developer / Team Lead",
    period: "September 2025 — Present",
    location: "Lahore, Punjab",
    current: true,
    points: [
      "Leading a development team as the primary technical point of contact for clients — gathering requirements, translating business needs into technical solutions and owning delivery end to end.",
      "Leading the end-to-end development of a confidential full-stack aviation management platform built with the MERN stack, supporting a real-time flight booking and management system.",
      "Driving full-stack development of a confidential ad-supported music lyrics platform with an 11M+ document catalog, owning AI-powered ad targeting, header-bidding integration, SEO optimization and large-scale MongoDB migrations.",
      "Setting the technical direction across both platforms — architecture, payment and concurrency guarantees, and the AI capabilities layered on top — and taking each from concept to production.",
    ],
  },
  {
    company: "OIOI Group",
    role: "MERN Stack Developer",
    period: "October 2024 — August 2025",
    location: "Lahore, Punjab",
    current: false,
    points: [
      "Developed the Bike Inventory System to optimize warehouse operations with MySQL-backed inventory tracking, secure CRUD APIs and real-time transfer logging.",
      "Deployed and managed cloud-based solutions on AWS to ensure scalability and high availability.",
    ],
  },
  {
    company: "KOT Enterprises",
    role: "Junior MERN Stack Developer",
    period: "November 2023 — September 2024",
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
            3+ years building production web
            applications across aviation, music
            and inventory platforms — now leading
            a development team and owning
            delivery from requirements to
            production.
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
