import {
  ArrowUp,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

const BackToTop = () => {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(
        window.scrollY > 500
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)]/80 text-[var(--foreground)] shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};

export default BackToTop;