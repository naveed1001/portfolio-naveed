import {
  ArrowUpRight,
  Heart,
  Mail,
} from "lucide-react";

import { FaGithub,FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-black text-white">
                NA
              </div>

              <div>
                <p className="text-sm font-bold">
                  Naveed Ahmed
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Senior MERN Developer · Team Lead
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              Building full-stack MERN and
              TypeScript applications, scalable
              backends and enterprise platforms
              from concept to production.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Navigation
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="/#about"
                className="block text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                About
              </a>

              <a
                href="/#experience"
                className="block text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Experience
              </a>

              <a
                href="/#skills"
                className="block text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Skills
              </a>

              <a
                href="/#projects"
                className="block text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Projects
              </a>

              <a
                href="/#contact"
                className="block text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Connect
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="https://github.com/naveed1001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <FaGithub size={17} />

                GitHub

                <ArrowUpRight
                  size={14}
                  className="ml-auto"
                />
              </a>

              <a
                href="https://linkedin.com/in/naveedahmed10001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <FaLinkedin size={17} />

                LinkedIn

                <ArrowUpRight
                  size={14}
                  className="ml-auto"
                />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=naveedmotha.dev@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <Mail size={17} />

                Email

                <ArrowUpRight
                  size={14}
                  className="ml-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Naveed
            Ahmed. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with
            <Heart
              size={13}
              className="fill-current text-violet-400"
            />
            React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;