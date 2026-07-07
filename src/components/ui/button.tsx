import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { cloneElement, isValidElement } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A74E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#C8A74E] text-stone-950 shadow-[0_10px_30px_rgba(200,167,78,0.2)] hover:-translate-y-0.5 hover:bg-[#d1b05d]",
        secondary:
          "border border-[#C8A74E]/40 bg-white/70 text-stone-900 backdrop-blur hover:border-[#C8A74E] hover:bg-white",
        ghost: "text-stone-700 hover:bg-stone-100",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm sm:px-7",
        lg: "px-8 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = twMerge(clsx(buttonVariants({ variant, size }), className));

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: twMerge(clsx(classes, (children.props as { className?: string }).className)),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
