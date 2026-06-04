import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "border-2 border-gold bg-gold text-navy shadow-sm hover:border-gold-light hover:bg-gold-light focus-visible:ring-gold",
  secondary:
    "border-2 border-white/35 bg-white/5 text-white backdrop-blur-sm hover:border-gold-light hover:bg-white/10 hover:text-gold-light focus-visible:ring-gold-light",
  outline:
    "border-2 border-gold bg-transparent text-navy hover:bg-gold-muted focus-visible:ring-gold",
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
    "inline-flex min-h-touch min-w-touch items-center justify-center rounded-card px-5 py-3 text-center text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-6";

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
