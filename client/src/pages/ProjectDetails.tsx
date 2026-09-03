import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  LoaderCircle,
  Quote,
  Target,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import Container from "../components/ui/Container";

import ProjectGallery from "../components/projects/ProjectGallery";

import {
  getProjectBySlug,
} from "../services/projectService";

import type {
  Project,
} from "../types/project";

const ProjectDetails = () => {
  const { slug } =
    useParams<{
      slug: string;
    }>();

  const navigate = useNavigate();

  const [
    project,
    setProject,
  ] = useState<Project | null>(
    null
  );

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");

  useEffect(() => {
    if (!slug) {
      setError(
        "Invalid project."
      );

      setLoading(false);

      return;
    }

    const fetchProject =
      async () => {
        try {
          setLoading(true);

          const data =
            await getProjectBySlug(
              slug
            );

          setProject(data);
        } catch (error) {
          console.error(
            "Failed to fetch project:",
            error
          );

          setError(
            "Project could not be found."
          );
        } finally {
          setLoading(false);
        }
      };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-32">
        <Container>
          <div className="flex min-h-[60vh] items-center justify-center">
            <LoaderCircle
              size={32}
              className="animate-spin text-violet-400"
            />
          </div>
        </Container>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen pt-32">
        <Container>
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <Layers3
              size={42}
              className="text-[var(--muted)]"
            />

            <h1 className="mt-5 text-2xl font-black">
              Project not found
            </h1>

            <p className="mt-3 text-sm text-[var(--muted)]">
              The project you're looking for
              doesn't exist or is no longer
              available.
            </p>

            <button
              onClick={() => navigate(-1)}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]"
            >
              <ArrowLeft size={16} />

              Back to Projects
            </button>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-24 pt-28 sm:pt-36">
      <Container>
        {/* Back */}
        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to Projects
          </button>
        </motion.div>

        {/* Hero */}
        <div
          className={`mt-10 grid gap-12 ${
            project.liveUrl ||
            project.githubUrl
              ? "lg:grid-cols-[1fr_0.42fr] lg:items-end"
              : ""
          }`}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              <span>
                {project.category}
              </span>

              <span className="h-1 w-1 rounded-full bg-[var(--muted)]" />

              <span className="text-[var(--muted)]">
                {project.year}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-7 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-[var(--border)] bg-white/[0.02] px-3 py-2 text-xs font-medium text-[var(--muted)]"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Actions */}
          {(project.liveUrl || project.githubUrl) && (
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="flex flex-wrap gap-3 lg:justify-end"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
                >
                  <ExternalLink size={16} />

                  Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-semibold transition hover:border-violet-500/30 hover:bg-white/5"
                >
                  <FaGithub size={16} />

                  GitHub
                </a>
              )}
            </motion.div>
          )}
        </div>

        {/* Cover */}
        {project.image && (
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="mt-14 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.02]"
          >
            <img
              src={project.image}
              alt={`${project.title} cover`}
              className="block h-auto w-full"
            />
          </motion.div>
        )}

        {/* Overview */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_0.4fr]">
          <section>
            <SectionTitle>
              Project Overview
            </SectionTitle>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)]">
              {project.overview ||
                project.description}
            </p>
          </section>

          <div className="rounded-2xl border border-[var(--border)] bg-white/[0.02] p-6">
            <div className="flex items-center gap-3">
              <Target
                size={20}
                className="text-violet-400"
              />

              <h3 className="font-bold">
                Project Focus
              </h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              A production-style full-stack
              application focused on clean architecture,
              responsive UI, API integration and a
              practical user experience.
            </p>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery.length >
          0 && (
          <section className="mt-24">
            <SectionTitle>
              Project Screens
            </SectionTitle>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
              A closer look at the application's
              interface and functionality.
            </p>

            <div className="mt-8">
              <ProjectGallery
                images={
                  project.gallery
                }
                title={
                  project.title
                }
              />
            </div>
          </section>
        )}

        {/* Features */}
        {project.features.length >
          0 && (
          <section className="mt-24">
            <SectionTitle>
              Key Features
            </SectionTitle>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.features.map(
                (feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white/[0.02] p-5"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />

                    <span className="text-sm leading-6 text-[var(--muted)]">
                      {feature}
                    </span>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* What I Built */}
        {project.capabilities &&
          project.capabilities
            .length > 0 && (
            <section className="mt-24">
              <SectionTitle>
                What I Built
              </SectionTitle>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                A staged breakdown of what I built,
                each capability building on the stage
                before it.
              </p>

              <div className="mt-8 space-y-5">
                {project.capabilities.map(
                  (
                    capability,
                    index
                  ) => (
                    <motion.article
                      key={
                        capability.title
                      }
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
                      }}
                      transition={{
                        duration: 0.6,
                        delay:
                          index * 0.05,
                      }}
                      className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-6 sm:p-8"
                    >
                      <div className="grid gap-5 sm:grid-cols-[auto_1fr] sm:gap-7">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 text-sm font-black tracking-[0.08em] text-violet-400">
                          {String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <div>
                          <h3 className="text-lg font-bold tracking-tight sm:text-xl">
                            {
                              capability.title
                            }
                          </h3>

                          <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                            {
                              capability.summary
                            }
                          </p>

                          {capability
                            .points
                            .length >
                            0 && (
                            <ul className="mt-5 grid gap-2.5 lg:grid-cols-2">
                              {capability.points.map(
                                (
                                  point
                                ) => (
                                  <li
                                    key={
                                      point
                                    }
                                    className="flex items-start gap-3"
                                  >
                                    <CheckCircle2
                                      size={16}
                                      className="mt-0.5 shrink-0 text-violet-400"
                                    />

                                    <span className="text-sm leading-6 text-[var(--muted)]">
                                      {
                                        point
                                      }
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  )
                )}
              </div>
            </section>
          )}

        {/* Challenges + Solutions */}
        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {project.challenges.length >
            0 && (
            <section className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-9">
              <SectionTitle>
                Challenges
              </SectionTitle>

              <div className="mt-7 space-y-5">
                {project.challenges.map(
                  (challenge) => (
                    <div
                      key={challenge}
                      className="border-l-2 border-violet-500/30 pl-5"
                    >
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {challenge}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {project.solutions.length >
            0 && (
            <section className="rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-9">
              <SectionTitle>
                Solutions
              </SectionTitle>

              <div className="mt-7 space-y-5">
                {project.solutions.map(
                  (solution) => (
                    <div
                      key={solution}
                      className="border-l-2 border-blue-500/30 pl-5"
                    >
                      <p className="text-sm leading-7 text-[var(--muted)]">
                        {solution}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}
        </div>

        {/* Architecture */}
        {project.architecture && (
          <section className="mt-24">
            <SectionTitle>
              Architecture
            </SectionTitle>

            <div className="mt-7 rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-9">
              <p className="max-w-4xl text-sm leading-8 text-[var(--muted)]">
                {project.architecture}
              </p>
            </div>
          </section>
        )}

        {/* Client Feedback */}
        {project.testimonials &&
          project.testimonials
            .length > 0 && (
            <section className="mt-24">
              <SectionTitle>
                Client Feedback
              </SectionTitle>

              <div className="mt-7 grid gap-6">
                {project.testimonials.map(
                  (
                    testimonial,
                    index
                  ) => (
                    <motion.figure
                      key={
                        testimonial.quote
                      }
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
                      }}
                      transition={{
                        duration: 0.6,
                        delay:
                          index * 0.08,
                      }}
                      className="mx-auto w-full max-w-3xl rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 sm:p-9"
                    >
                      <Quote
                        size={20}
                        className="text-violet-400"
                      />

                      <blockquote className="mt-6 max-w-3xl border-l-2 border-violet-500/30 pl-5 text-base leading-relaxed text-[var(--foreground)] sm:text-lg">
                        {
                          testimonial.quote
                        }
                      </blockquote>

                      {testimonial.image && (
                        <figure className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.02]">
                          {testimonial.image.endsWith(".webm") ? (
                            <video
                              src={testimonial.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="block h-auto w-full"
                            />
                          ) : (
                            <img
                              src={
                                testimonial.image
                              }
                              alt={
                                testimonial.imageCaption ??
                                "Screenshot of the work this feedback refers to"
                              }
                              loading="lazy"
                              className="block h-auto w-full"
                            />
                          )}

                          {testimonial.imageCaption && (
                            <figcaption className="border-t border-[var(--border)] px-5 py-4 text-xs leading-6 text-[var(--muted)]">
                              {
                                testimonial.imageCaption
                              }
                            </figcaption>
                          )}
                        </figure>
                      )}

                      <figcaption className="mt-6 border-t border-[var(--border)] pt-5">
                        <p className="text-sm font-semibold">
                          {
                            testimonial.author
                          }
                        </p>

                        <p className="mt-1.5 text-sm text-[var(--muted)]">
                          {
                            testimonial.role
                          }
                        </p>
                      </figcaption>
                    </motion.figure>
                  )
                )}
              </div>
            </section>
          )}

        {/* Bottom CTA */}
        {project.liveUrl && (
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
            }}
            className="mt-24 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.05] p-8 text-center sm:p-12"
          >
            <p className="text-sm font-semibold text-violet-400">
              Want to explore it?
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl">
              Try the live application
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
              Explore the project yourself and see
              how the implemented features work in a
              real application.
            </p>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-[var(--background)]"
            >
              Open Live Demo

              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </Container>
    </main>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({
  children,
}: SectionTitleProps) => {
  return (
    <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
      {children}
    </h2>
  );
};

export default ProjectDetails;