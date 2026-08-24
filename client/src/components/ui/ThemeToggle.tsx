import {
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        text-[var(--foreground)]
        transition-all
        duration-300
        hover:bg-[var(--card-hover)]
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;