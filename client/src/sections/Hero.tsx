import {
  ArrowDown,
  ArrowRight,
  Code2,
  Download,
  Sparkles,
} from "lucide-react";

import { FaLinkedin,FaGithub } from "react-icons/fa";

import {
  motion,
} from "framer-motion";

import Container from "../components/ui/Container";
import Badge from "../components/ui/Badge";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container>
        <div className="grid items-center gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Availability */}
            <div className="mb-6">
              <Badge className="border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
                <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />

                Available for opportunities
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
              Building modern
              <span className="block">
                web experiences with{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  MERN & TypeScript.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              I'm Umar Hashir, a MERN Stack Developer focused on
              building scalable, responsive and user-friendly web
              applications using modern technologies and clean
              architecture.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "Express",
                "MongoDB",
              ].map((technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all hover:bg-violet-500 hover:shadow-violet-500/30"
              >
                View My Projects

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/Umar-Hashir-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--card-hover)]"
              >
                Download CV

                <Download size={17} />
              </a>
            </div>

            {/* Social */}
            <div className="mt-8 flex items-center gap-3">
              <span className="mr-2 text-sm text-[var(--muted)]">
                Connect:
              </span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all hover:-translate-y-1 hover:text-[var(--foreground)]"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all hover:-translate-y-1 hover:text-[var(--foreground)]"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square">
              {/* Outer Glow */}
              <div className="absolute inset-8 rounded-full bg-violet-600/10 blur-3xl" />

              {/* Main Card */}
              <div className="absolute inset-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-xl">
                {/* Top */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>

                  <Code2
                    size={18}
                    className="text-zinc-500"
                  />
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm leading-7">
                  <p className="text-purple-400">
                    const
                    <span className="text-cyan-400">
                      {" "}
                      developer
                    </span>{" "}
                    = {"{"}
                  </p>

                  <p className="pl-5 text-zinc-400">
                    name:
                    <span className="text-emerald-400">
                      {" "}“Umar Hashir”
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-zinc-400">
                    role:
                    <span className="text-emerald-400">
                      {" "}“MERN Developer”
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-zinc-400">
                    stack:
                    <span className="text-emerald-400">
                      {" "}“TypeScript”
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-zinc-400">
                    passion:
                    <span className="text-emerald-400">
                      {" "}“Building”
                    </span>
                  </p>

                  <p className="text-zinc-500">{"}"};</p>

                  <div className="mt-5 border-t border-white/5 pt-5">
                    <p className="text-zinc-500">
                      // Always learning.
                    </p>

                    <p className="text-zinc-500">
                      // Always building.
                    </p>

                    <p className="mt-2 text-violet-400">
                      developer.build();
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-12 rounded-2xl border border-white/10 bg-zinc-900/80 p-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Sparkles size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      Clean Code
                    </p>

                    <p className="text-[11px] text-zinc-500">
                      Scalable architecture
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-16 left-0 rounded-2xl border border-white/10 bg-zinc-900/80 p-3 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Code2 size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-white">
                      TypeScript
                    </p>

                    <p className="text-[11px] text-zinc-500">
                      Type-safe development
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mx-auto mb-8 flex w-fit flex-col items-center gap-2 text-[var(--muted)]"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Explore
          </span>

          <ArrowDown size={16} />
        </motion.a>
      </Container>
    </section>
  );
};

export default Hero;