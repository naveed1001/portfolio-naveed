import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "../components/ui/Container";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-180px] top-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-150px] left-[-120px] h-80 w-80 rounded-full bg-fuchsia-500/5 blur-[120px]" />

      <Container>
        {/* Section Heading */}
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
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              Contact
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Let's build something
            <span className="text-violet-400">
              {" "}
              meaningful.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I'm open to opportunities, freelance
            projects, and collaborations where I can
            contribute my skills as a MERN Stack
            Developer.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
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
            delay: 0.1,
          }}
          className="mt-12 overflow-hidden rounded-3xl border border-[var(--border)] bg-white/[0.02]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content */}
            <div className="relative p-7 sm:p-10 lg:p-12">
              {/* Glow */}
              <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-violet-500/10 blur-[100px]" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10">
                  <BriefcaseBusiness
                    size={22}
                    className="text-violet-400"
                  />
                </div>

                <h3 className="mt-7 text-2xl font-black sm:text-3xl">
                  Have a project or
                  opportunity?
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                  Whether you're looking for a
                  developer to build a web
                  application, improve an existing
                  product, or join your development
                  team, I'd be happy to connect.
                </p>

                {/* Email CTA */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rhashir87@gmail.com&su=Portfolio%20Inquiry"
                  target="_blank"
  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[var(--foreground)] px-5 py-3.5 text-sm font-semibold text-[var(--background)] transition hover:opacity-90"
                >
                  <Mail size={17} />

                  Send me an email

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Right Contact Links */}
            <div className="border-t border-[var(--border)] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-400">
                Connect with me
              </p>

              <div className="mt-6 space-y-3">
                {/* GitHub */}
                <a
                  href="https://github.com/UmarHashir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border)] p-4 transition hover:border-violet-500/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)] transition group-hover:text-[var(--foreground)]">
                      <FaGithub size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        GitHub
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        View my projects & code
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/umar-hashir-171218280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border)] p-4 transition hover:border-violet-500/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)] transition group-hover:text-[var(--foreground)]">
                      <FaLinkedin size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        LinkedIn
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        Connect professionally
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                  />
                </a>

                {/* Upwork */}
                <a
                  href="https://www.upwork.com/freelancers/~01d487c5d5c5f92840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-[var(--border)] p-4 transition hover:border-violet-500/30 hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[var(--muted)] transition group-hover:text-[var(--foreground)]">
                      <BriefcaseBusiness size={19} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        Upwork
                      </p>

                      <p className="mt-0.5 text-xs text-[var(--muted)]">
                        Hire me for freelance work
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="border-t border-[var(--border)] px-7 py-5 sm:px-10 lg:px-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm text-[var(--muted)]">
                  Open to new opportunities
                </span>
              </div>

              <span className="text-xs text-[var(--muted)]">
                MERN Stack Developer
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;