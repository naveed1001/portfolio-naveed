interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;