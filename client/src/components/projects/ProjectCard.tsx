import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import type { Project } from "../../types/project";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({
  project,
  index = 0,
}: ProjectCardProps) => {
  return (
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden p-0">

       {/* Project Preview */}
<div className="relative h-56 overflow-hidden border-b border-[var(--border)] bg-black/20 sm:h-64">
  {project.image ? (
    <div className="flex h-full w-full items-center justify-center p-2 sm:p-3">
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="block max-h-full max-w-full object-contain transition duration-700 group-hover:scale-[1.02]"
      />
    </div>
  ) : (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="text-5xl font-black tracking-tight text-white/5">
          {project.title
            .slice(0, 2)
            .toUpperCase()}
        </div>

        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
          {project.category}
        </p>
      </div>
    </div>
  )}

  {/* Overlay */}
  <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

  {/* Featured */}
  {project.featured && (
    <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
      <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium text-violet-300 backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
        Featured
      </span>
    </div>
  )}

  {/* Year */}
  <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
    <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] text-white/70 backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-xs">
      {project.year}
    </span>
  </div>
</div>

        {/* =========================
            CONTENT
        ========================== */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">

          {/* Title */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-violet-400 sm:text-xs">
                {project.category}
              </p>

              <h3 className="mt-2 break-words text-lg font-bold sm:text-xl">
                {project.title}
              </h3>
            </div>

            <ArrowUpRight
              size={19}
              className="
                shrink-0
                text-[var(--muted)]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-violet-400
              "
            />
          </div>

          {/* Description */}
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--muted)]">
            {project.description}
          </p>

          {/* =========================
              TECHNOLOGIES
          ========================== */}

          <div className="mt-5 flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies
              .slice(0, 6)
              .map((technology) => (
                <Badge key={technology}>
                  {technology}
                </Badge>
              ))}

            {project.technologies.length > 6 && (
              <Badge>
                +{project.technologies.length - 6}
              </Badge>
            )}
          </div>

          {/* =========================
              ACTIONS
          ========================== */}

          <div className="mt-auto pt-6">
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-2.5 border-t border-[var(--border)] pt-5 sm:gap-3">

                {/* Live Demo */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/button
                      inline-flex
                      min-w-0
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[var(--foreground)]
                      px-3
                      py-2.5
                      text-xs
                      font-semibold
                      text-[var(--background)]
                      transition
                      hover:opacity-90
                      sm:px-4
                      sm:text-sm
                    "
                  >
                    <ExternalLink
                      size={15}
                      className="shrink-0 sm:size-4"
                    />

                    <span className="truncate">
                      Live Demo
                    </span>
                  </a>
                )}

                {/* GitHub */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-[var(--border)]
                      px-3
                      py-2.5
                      text-xs
                      font-medium
                      transition
                      hover:border-violet-500/40
                      hover:bg-white/5
                      sm:px-4
                      sm:text-sm
                    "
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub
                      size={17}
                      className="shrink-0"
                    />

                    <span className="hidden sm:inline">
                      GitHub
                    </span>
                  </a>
                )}
              </div>
            )}

            {/* Case Study */}
            <Link
              to={`/projects/${project.slug}`}
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                py-2
                text-xs
                font-medium
                text-violet-400
                transition
                hover:bg-violet-500/5
                hover:text-violet-300
                sm:text-sm
              "
            >
              View Case Study

              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;