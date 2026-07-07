import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "p";
  eyebrow?: string;
  children: React.ReactNode;
}

export default function Heading({
  as: Component = "h2",
  eyebrow,
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <div className={twMerge(clsx("space-y-3", className))} {...props}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A74E]">
          {eyebrow}
        </p>
      ) : null}
      <Component className="font-heading text-3xl font-semibold leading-tight text-stone-950 sm:text-4xl lg:text-5xl">
        {children}
      </Component>
    </div>
  );
}
