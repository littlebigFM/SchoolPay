import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input = ({
  label,
  error,
  className,
  id,
  required,
  ...props
}: InputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-1 text-rose-500">*</span>}
        </label>
      )}

      <input
        id={id}
        className={clsx(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-all",
          "placeholder:text-slate-400",
          "focus:border-violet-500 focus:ring-2 focus:ring-violet-100",
          error && "border-red-500 focus:border-red-500 focus:ring-red-100",
          className,
        )}
        {...props}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
