import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

const Card = ({
  children,
  className = "",
  ...props
}: CardProps) => {
  return (
    <motion.div
      {...props}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-6
        backdrop-blur-xl
        transition-colors
        duration-300
        hover:bg-[var(--card-hover)]
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;