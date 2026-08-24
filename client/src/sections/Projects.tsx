import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import {
  getProjects,
} from "../services/projectService";

import type {
  Project,
} from "../types/project";

const Projects = () => {
  const [
    projects,
    setProjects,
  ] = useState<Project[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  const [
    selectedTechnology,
    setSelectedTechnology,
  ] = useState("All");

  useEffect(() => {
    const fetchProjects =
      async () => {
        try {
          setLoading(true);

          const data =
            await getProjects();

          setProjects(data);
        } catch (error) {
          console.error(
            "Failed to fetch projects:",
            error
          );

          setError(
            "Unable to load projects right now."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchProjects();
  }, []);

  const technologies =
    useMemo(() => {
      const unique =
        new Set<string>();

      projects.forEach(
        (project) => {
          project.technologies.forEach(
            (technology) => {
              unique.add(
                technology
              );
            }
          );
        }
      );

      return [
        "All",
        ...Array.from(unique),
      ];
    }, [projects]);

  const filteredProjects =
    useMemo(() => {
      if (
        selectedTechnology ===
        "All"
      ) {
        return projects;
      }

      return projects.filter(
        (project) =>
          project.technologies.includes(
            selectedTechnology
          )
      );
    }, [
      projects,
      selectedTechnology,
    ]);

  const featuredProject =
    filteredProjects.find(
      (project) =>
        project.featured
    );

  const regularProjects =
    filteredProjects.filter(
      (project) =>
        project._id !==
        featuredProject?._id
    );

  return (
    <Section
      id="projects"
      className="overflow-hidden"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              <Sparkles size={16} />

              Selected Work
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Projects that turn
              <span className="text-[var(--muted)]">
                {" "}
                ideas into products.
              </span>
            </h2>

            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              A selection of full-stack applications
              I've designed and developed using
              modern web technologies.
            </p>
          </div>

          <Link
            to="/"
            className="hidden items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--foreground)] lg:inline-flex"
          >
            View all work

            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Technology Filter */}
        {!loading &&
          technologies.length > 1 && (
            <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {technologies.map(
                (technology) => {
                  const active =
                    selectedTechnology ===
                    technology;

                  return (
                    <button
                      key={technology}
                      type="button"
                      onClick={() =>
                        setSelectedTechnology(
                          technology
                        )
                      }
                      className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition ${
                        active
                          ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                          : "border-[var(--border)] text-[var(--muted)] hover:border-violet-500/20 hover:text-[var(--foreground)]"
                      }`}
                    >
                      {technology}
                    </button>
                  );
                }
              )}
            </div>
          )}

        {/* Loading */}
        {loading && (
          <div className="flex min-h-72 items-center justify-center">
            <LoaderCircle
              size={30}
              className="animate-spin text-violet-400"
            />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-12 rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="text-sm text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          filteredProjects.length ===
            0 && (
            <div className="mt-12 rounded-3xl border border-[var(--border)] p-10 text-center">
              <Layers3
                size={32}
                className="mx-auto text-[var(--muted)]"
              />

              <p className="mt-4 text-sm text-[var(--muted)]">
                No projects found for this
                technology.
              </p>
            </div>
          )}

        {/* Featured Project */}
        {!loading &&
          !error &&
          featuredProject && (
            <FeaturedProject
              project={featuredProject}
            />
          )}

        {/* Regular Projects */}
        {!loading &&
          !error &&
          regularProjects.length > 0 && (
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {regularProjects.map(
                (
                  project,
                  index
                ) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    index={index}
                  />
                )
              )}
            </div>
          )}
      </Container>
    </Section>
  );
};

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({
  project,
}: FeaturedProjectProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
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
        duration: 0.7,
      }}
      className="
  group
  mt-12
  overflow-hidden
  rounded-3xl
  border
  border-[var(--border)]
  bg-white/[0.02]
"
    >
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">

        {/* =========================
            PROJECT IMAGE
        ========================== */}

{/* Visual */}
<div
  className="
    relative
    flex
    items-center
    justify-center
    overflow-hidden
    border-b
    border-[var(--border)]
    bg-gradient-to-br
    from-violet-600/10
    via-fuchsia-500/5
    to-blue-500/10
    min-h-[260px]
    sm:min-h-[340px]
    md:min-h-[400px]
    lg:min-h-[520px]
    xl:min-h-[560px]
    lg:border-b-0
    lg:border-r
  "
>
  {project.image ? (
    <div
      className="
        flex
        h-full
        w-full
        items-center
        justify-center
        p-4
        sm:p-6
        md:p-8
        lg:p-10
        xl:p-12
      "
    >
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="
          block
          h-auto
          max-h-[230px]
          max-w-full
          rounded-xl
          object-contain
          shadow-2xl
          transition-transform
          duration-700
          group-hover:scale-[1.02]
          sm:max-h-[300px]
          md:max-h-[350px]
          lg:max-h-[460px]
          xl:max-h-[500px]
        "
      />
    </div>
  ) : (
    <ProjectVisual
      project={project}
      featured
    />
  )}

  {/* Featured Badge */}
  <div
    className="
      absolute
      left-4
      top-4
      rounded-full
      border
      border-white/10
      bg-black/40
      px-3
      py-1.5
      text-xs
      font-semibold
      text-white
      shadow-lg
      backdrop-blur-xl
      sm:left-5
      sm:top-5
    "
  >
    Featured Project
  </div>
</div>

        {/* =========================
            CONTENT
        ========================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            p-6
            sm:p-8
            lg:p-10
            xl:p-12
          "
        >
          <div>

            {/* Category + Year */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-violet-400
                "
              >
                {project.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />

              <span className="text-xs text-[var(--muted)]">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h3
              className="
                mt-4
                text-2xl
                font-black
                tracking-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              {project.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-4
                text-sm
                leading-7
                text-[var(--muted)]
                sm:text-base
              "
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-lg
                      border
                      border-[var(--border)]
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-[var(--muted)]
                    "
                  >
                    {technology}
                  </span>
                )
              )}
            </div>

            {/* Features */}
            {project.features.length > 0 && (
              <div className="mt-7 space-y-2">
                {project.features
                  .slice(0, 4)
                  .map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start
                        gap-2
                        text-sm
                        leading-6
                        text-[var(--muted)]
                      "
                    >
                      <span
                        className="
                          mt-2
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-violet-400
                        "
                      />

                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* =========================
              ACTIONS
          ========================== */}

          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">

            {/* Live Demo */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[var(--foreground)]
                px-4
                py-2.5
                text-xs
                font-semibold
                text-[var(--background)]
                transition
                hover:opacity-90
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              <ExternalLink size={16} />

              Live Demo
            </a>

            {/* GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                hover:border-violet-500/30
                hover:bg-white/5
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              <FaGithub size={16} />

              GitHub
            </a>

            {/* Case Study */}
            <Link
              to={`/projects/${project.slug}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[var(--border)]
                px-4
                py-2.5
                text-xs
                font-semibold
                transition
                hover:border-violet-500/30
                hover:bg-white/5
                sm:px-5
                sm:py-3
                sm:text-sm
              "
            >
              Case Study

              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  return (
    <motion.article
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
      className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-500/20"
    >
      {/* Visual */}
      <div className="relative h-64 overflow-hidden border-b border-[var(--border)] bg-gradient-to-br from-violet-500/10 to-blue-500/5">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectVisual
            project={project}
          />
        )}

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-xl">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-[var(--muted)]">
              {project.year}
            </p>

            <h3 className="mt-1 text-xl font-bold">
              {project.title}
            </h3>
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--muted)] transition hover:border-violet-500/30 hover:text-violet-400"
            aria-label={`View ${project.title} case study`}
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[var(--muted)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 4)
            .map((technology) => (
              <span
                key={technology}
                className="rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] font-medium text-[var(--muted)]"
              >
                {technology}
              </span>
            ))}
        </div>

        <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] px-3 py-2.5 text-xs font-semibold text-[var(--background)] transition hover:opacity-90"
          >
            <ExternalLink size={14} />

            Live Demo
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-xs font-semibold transition hover:border-violet-500/30"
            aria-label={`${project.title} GitHub repository`}
          >
            <FaGithub size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

interface ProjectVisualProps {
  project: Project;
  featured?: boolean;
}

const ProjectVisual = ({
  project,
  featured = false,
}: ProjectVisualProps) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[90px]" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize:
            "32px 32px",
        }}
      />

      <div className="relative text-center">
        <Layers3
          size={featured ? 58 : 44}
          className="mx-auto text-violet-400/30"
        />

        <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">
          {project.category}
        </p>

        <h4
          className={`mt-3 font-black text-white/[0.08] ${
            featured
              ? "text-5xl sm:text-7xl"
              : "text-4xl"
          }`}
        >
          {project.title}
        </h4>
      </div>
    </div>
  );
};

export default Projects;