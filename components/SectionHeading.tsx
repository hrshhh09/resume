type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-sky-300">{eyebrow}</p>
      <h2 className="gradient-text text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}