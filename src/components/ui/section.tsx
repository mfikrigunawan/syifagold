import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={twMerge(clsx("px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28", className))} {...props}>
      {children}
    </section>
  );
}
