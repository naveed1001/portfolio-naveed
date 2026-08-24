import {
  ArrowUpRight,
  Heart,
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
                UH
              </div>

              <div>
                <p className="text-sm font-bold">
                  Umar Hashir
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  MERN Stack Developer
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-[var(--muted)]">
              Building modern, scalable and
              user-focused full-stack web
              applications with the MERN stack
              and TypeScript.
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
                href="https://github.com/UmarHashir"
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
                href="https://www.linkedin.com/in/umar-hashir-171218280/"
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
                href="https://www.upwork.com/freelancers/~01d487c5d5c5f92840"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                Upwork

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
            © {new Date().getFullYear()} Umar
            Hashir. All rights reserved.
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