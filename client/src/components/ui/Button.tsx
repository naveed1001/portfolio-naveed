import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-violet-600 text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 hover:shadow-violet-500/30",

    secondary:
      "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--card-hover)]",

    ghost:
      "text-[var(--muted)] hover:bg-[var(--card)] hover:text-[var(--foreground)]",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;