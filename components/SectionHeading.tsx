type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="label">{index}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-stone-400">{description}</p> : null}
    </div>
  );
}
