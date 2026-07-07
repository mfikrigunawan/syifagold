import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={twMerge(clsx("mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10", className))}
      {...props}
    >
      {children}
    </div>
  );
}
