import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import ScrollProgress from "../common/ScrollProgress";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Education",
    href: "#education",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const location = useLocation();

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  const [
    scrolled,
    setScrolled,
  ] = useState(false);

  const [
    activeSection,
    setActiveSection,
  ] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (location.pathname !== "/") {
        return;
      }

      const sections = navItems
        .map((item) =>
          document.getElementById(
            item.href.replace("#", "")
          )
        )
        .filter(
          (
            section
          ): section is HTMLElement =>
            Boolean(section)
        );

      const current = sections.find(
        (section) => {
          const rect =
            section.getBoundingClientRect();

          return (
            rect.top <= 150 &&
            rect.bottom >= 150
          );
        }
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleNavClick = (
    href: string
  ) => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      return;
    }

    const element =
      document.getElementById(
        href.replace("#", "")
      );

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <ScrollProgress />

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--background)]/75 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* =========================
              LOGO
          ========================== */}

          <Link
            to="/"
            className="group flex items-center gap-3"
          >
            <div
  className="
    group
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-xl
    border
    border-[var(--border)]
    bg-[var(--card)]
    shadow-sm
    transition-all
    duration-300
    hover:scale-105
    hover:border-violet-500/40
    hover:bg-violet-500/5
    hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]
  "
>
  <span
    className="
      text-sm
      font-black
      tracking-tight
      text-violet-600
      dark:text-violet-400
    "
  >
    &lt;/&gt;
  </span>
</div>

            <div className="block">
  <p className="text-xs font-bold sm:text-sm">
    Naveed Ahmed
  </p>

  <p className="text-[8px] uppercase tracking-[0.15em] text-[var(--muted)] sm:text-[10px] sm:tracking-[0.2em]">
    MERN Stack Developer
  </p>
</div>
          </Link>


          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div className="hidden items-center gap-1 lg:flex">
  {navItems.map((item) => {
    const active =
      location.pathname === "/" &&
      activeSection ===
        item.href.replace("#", "");

    return (
      <button
        key={item.href}
        type="button"
        onClick={() =>
          handleNavClick(item.href)
        }
        className={`relative rounded-lg px-3 py-2 text-sm transition ${
          active
            ? "text-[var(--foreground)]"
            : "text-[var(--muted)] hover:text-[var(--foreground)]"
        }`}
      >
        {item.label}

        {active && (
          <span className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-violet-400" />
        )}
      </button>
    );
  })}
</div>


          {/* =========================
              RIGHT ACTIONS
          ========================== */}

          <div className="hidden items-center gap-2 md:flex">

            {/* GitHub */}
            <a
              href="https://github.com/naveed1001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--muted)] transition hover:bg-[var(--card-hover)] hover:text-[var(--foreground)]"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>


            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/naveedahmed10001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--muted)] transition hover:bg-[var(--card-hover)] hover:text-[var(--foreground)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>


            {/* Theme Toggle */}
            <ThemeToggle />


            {/* Resume */}
            <a
              href="/Naveed-Ahmed-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition hover:border-violet-500/40 hover:bg-violet-500/5"
            >
              Resume

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>


          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen(
                (value) => !value
              )
            }
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] lg:hidden"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </nav>


        {/* =========================
            MOBILE MENU
        ========================== */}

        {mobileOpen && (
          <div className="border-t border-[var(--border)] bg-[var(--background)]/95 px-5 py-5 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto max-w-7xl">

              {/* Navigation */}
              <div className="space-y-1">
  {navItems.map((item) => {
    const active =
      location.pathname === "/" &&
      activeSection ===
        item.href.replace("#", "");

    return (
      <button
        key={item.href}
        type="button"
        onClick={() =>
          handleNavClick(item.href)
        }
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm ${
          active
            ? "bg-violet-500/10 text-violet-300"
            : "text-[var(--muted)]"
        }`}
      >
        {item.label}

        {active && (
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
        )}
      </button>
    );
  })}
</div>


              {/* Social Links */}
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-4">

                <a
                  href="https://github.com/naveed1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] py-3 text-sm"
                >
                  <FaGithub size={17} />

                  GitHub
                </a>

                <a
                  href="https://linkedin.com/in/naveedahmed10001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] py-3 text-sm"
                >
                  <FaLinkedin size={17} />

                  LinkedIn
                </a>

              </div>


              {/* Theme Toggle */}

              <div className="mt-3 flex items-center justify-center">
                <ThemeToggle />
              </div>


              {/* Resume */}

              <a
                href="/Naveed-Ahmed-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[var(--foreground)] py-3 text-sm font-semibold text-[var(--background)]"
              >
                Download Resume

                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;