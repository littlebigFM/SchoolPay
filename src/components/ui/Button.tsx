import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "flex gap-1 cursor-pointer inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-60",

        {
          "bg-violet-600 text-white hover:bg-violet-700": variant === "primary",

          "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50":
            variant === "secondary",

          "border border-violet-600 text-violet-600 hover:bg-violet-50":
            variant === "outline",

          "bg-red-600 text-white hover:bg-red-700": variant === "danger",

          "text-slate-600 hover:bg-slate-100": variant === "ghost",

          "h-9 px-3 text-sm": size === "sm",

          "h-11 px-5 text-sm": size === "md",

          "h-12 px-6 text-base": size === "lg",

          "w-full": fullWidth,
        },

        className,
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
