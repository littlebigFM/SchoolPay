import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface DateFieldProps {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  required?: boolean;
}

const DateField = ({
  label,
  registration,
  error,
  required,
}: DateFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>

      <input
        type="date"
        {...registration}
        className={`h-11 w-full rounded-xl border bg-white px-4 outline-none
        ${
          error
            ? "border-rose-500"
            : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
        }`}
      />

      {error && <p className="text-xs text-rose-500">{error.message}</p>}
    </div>
  );
};

export default DateField;
