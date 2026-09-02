import {
  Quote,
} from "lucide-react";

import { motion } from "framer-motion";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";

import {
  projects,
} from "../data/projects";

const testimonials =
  projects.flatMap(
    (project) =>
      project.testimonials ?? []
  );

const Testimonials = () => {
  if (
    testimonials.length === 0
  ) {
    return null;
  }

  return (
    <Section id="testimonials">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            Client Feedback
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            What clients say
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            Feedback from the clients I build
            for, shared anonymously.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {testimonials.map(
            (item, index) => (
              <motion.figure
                key={item.quote}
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
                  delay: index * 0.08,
                }}
                className="mx-auto w-full max-w-3xl rounded-3xl border border-[var(--border)] bg-white/[0.02] p-7 transition duration-300 hover:border-violet-500/20 hover:bg-white/[0.035] sm:p-10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 text-violet-400">
                  <Quote size={19} />
                </div>

                <blockquote className="mt-7 border-l-2 border-violet-500/30 pl-5 text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
                  {item.quote}
                </blockquote>

                {item.image && (
                  <figure className="mt-7 overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.02]">
                    <img
                      src={item.image}
                      alt={
                        item.imageCaption ??
                        "Screenshot of the work this feedback refers to"
                      }
                      loading="lazy"
                      className="block h-auto w-full"
                    />

                    {item.imageCaption && (
                      <figcaption className="border-t border-[var(--border)] px-5 py-4 text-xs leading-6 text-[var(--muted)]">
                        {item.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}

                <figcaption className="mt-7 border-t border-[var(--border)] pt-6">
                  <p className="text-sm font-semibold text-[var(--foreground)]">
                    {item.author}
                  </p>

                  <p className="mt-1.5 text-sm text-[var(--muted)]">
                    {item.role}
                  </p>
                </figcaption>
              </motion.figure>
            )
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
