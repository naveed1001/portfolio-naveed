import {
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
      className="relative flex min-h-screen items-center overflow-hidden pt-18"
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
        <div className="grid items-center gap-14 pb-12 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:pb-16 lg:pt-12">
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
            <h1 className="max-w-4xl whitespace-nowrap text-3xl font-bold leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              Full-stack,{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                at scale.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              I'm Naveed Ahmed, a Full-Stack MERN Developer with 3+
              years of professional experience, currently a Senior MERN
              Stack Developer and Team Lead at TheCloudOps, architecting
              scalable web applications and enterprise platforms from
              concept to production.
            </p>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Node.js",
                "NestJS",
                "MongoDB",
                "AWS",
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
                href="/Naveed-Ahmed-CV.pdf"
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
                href="https://github.com/naveed1001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all hover:-translate-y-1 hover:text-[var(--foreground)]"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com/in/naveedahmed10001"
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
  className="relative mx-auto w-full max-w-md px-2 sm:px-4 lg:px-0"
>
  <div className="relative aspect-square">

    {/* Outer Glow */}
    <div className="absolute inset-8 rounded-full bg-violet-600/10 blur-3xl" />

    {/* =========================
        MAIN CODE CARD
    ========================== */}
  {/* Main Card */}
<div
  className="
    absolute
    inset-5
    overflow-hidden
    rounded-[1.5rem]
    border
    border-white/10
    bg-white/[0.03]
    shadow-2xl
    backdrop-blur-xl
    sm:inset-8
    sm:rounded-[2rem]
  "
>
  {/* Top */}
  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
    <div className="flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
      <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
      <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
    </div>

    <Code2
      size={16}
      className="text-zinc-500 sm:size-[18px]"
    />
  </div>

  {/* Code */}
  <div
    className="
      p-4
      font-mono
      text-[11px]
      leading-6
      sm:p-6
      sm:text-sm
      sm:leading-7
    "
  >
    <p className="text-purple-400">
      const
      <span className="text-cyan-400">
        {" "}developer
      </span>{" "}
      = {"{"}
    </p>

    <p className="pl-4 text-zinc-400 sm:pl-5">
      name:
      <span className="text-emerald-400">
        {" "}“Naveed Ahmed”
      </span>
      ,
    </p>

    <p className="pl-4 text-zinc-400 sm:pl-5">
      role:
      <span className="text-emerald-400">
        {" "}“Senior MERN Developer”
      </span>
      ,
    </p>

    <p className="pl-4 text-zinc-400 sm:pl-5">
      stack:
      <span className="text-emerald-400">
        {" "}“MERN + TypeScript”
      </span>
      ,
    </p>

    <p className="pl-4 text-zinc-400 sm:pl-5">
      focus:
      <span className="text-emerald-400">
        {" "}“Scalable Systems”
      </span>
    </p>

    <p className="text-zinc-500">
      {"}"};
    </p>

    {/* Learning */}
    <div className="mt-3 border-t border-white/5 pt-3 sm:mt-5 sm:pt-5">
      <p className="text-zinc-500">
        // Always learning.
      </p>

      <p className="text-zinc-500">
        // Always building.
      </p>

      <p className="mt-1.5 text-violet-400 sm:mt-2">
        developer.build();
      </p>
    </div>
  </div>
</div>

    {/* =========================
        FLOATING CARD 1
    ========================== */}
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -right-1
        top-4
        z-20
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/90
        p-2.5
        shadow-xl
        backdrop-blur-xl
        sm:-right-3
        sm:top-8
        sm:p-3
      "
    >
      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 sm:h-9 sm:w-9">
          <Sparkles size={17} />
        </div>

        <div>
          <p className="text-[11px] font-semibold text-white sm:text-xs">
            Team Lead
          </p>

          <p className="text-[9px] text-zinc-500 sm:text-[11px]">
            3+ years experience
          </p>
        </div>
      </div>
    </motion.div>

    {/* =========================
        FLOATING CARD 2
    ========================== */}
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        -bottom-1
        -left-1
        z-20
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/90
        p-2.5
        shadow-xl
        backdrop-blur-xl
        sm:-bottom-3
        sm:-left-3
        sm:p-3
      "
    >
      <div className="flex items-center gap-2 sm:gap-3">
  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 sm:h-9 sm:w-9">
    <Code2 size={16} className="sm:size-[18px]" />
  </div>

  <div>
    <p className="text-[11px] font-semibold text-white sm:text-xs">
      Cloud Native
    </p>

    <p className="text-[9px] text-zinc-500 sm:text-[11px]">
      AWS, Docker & Redis
    </p>
  </div>
</div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;