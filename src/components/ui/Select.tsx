import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select = ({ className, children, ...props }: SelectProps) => {
  return (
    <select
      className={clsx(
        "h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none",
        "focus:border-violet-500 focus:ring-2 focus:ring-violet-100",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
