import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({
  children,
  className = "",
}: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;