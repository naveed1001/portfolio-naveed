import type {
  HTMLAttributes,
} from "react";

interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = ({
  children,
  className = "",
  ...props
}: SectionProps) => {
  return (
    <section
      className={`relative py-12 sm:py-16 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;