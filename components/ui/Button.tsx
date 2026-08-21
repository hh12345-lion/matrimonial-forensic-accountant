import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "border border-accent bg-accent text-parchment shadow-sm hover:border-accent-light hover:bg-accent-light focus-visible:ring-accent",
  secondary:
    "border border-parchment/35 bg-transparent text-parchment hover:border-parchment hover:bg-parchment/10 focus-visible:ring-parchment",
  outline:
    "border border-accent bg-transparent text-accent hover:bg-accent-muted focus-visible:ring-accent",
};

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex min-h-touch min-w-touch items-center justify-center px-5 py-3 text-center text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-6";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
