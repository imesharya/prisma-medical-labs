import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "neutral";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-medium transition-all duration-200 " +
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none " +
      "active:scale-95 shadow-sm";

    const variantClasses: Record<Variant, string> = {
      primary:
        "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
      secondary:
        "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary",
      tertiary:
        "bg-tertiary text-white hover:bg-tertiary/90 focus-visible:ring-tertiary",
      neutral:
        "bg-neutral text-foreground border border-foreground/20 hover:bg-foreground/5 hover:border-foreground/30 focus-visible:ring-foreground/50",
    };

    const sizeClasses: Record<Size, string> = {
      sm: "h-9 px-4 text-sm",
      md: "h-10 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
