import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface SelectFieldProps {
  label: string;
  registration: UseFormRegisterReturn;
  options: Option[];
  error?: FieldError;
  required?: boolean;
}

const SelectField = ({
  label,
  registration,
  options,
  error,
  required,
}: SelectFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>

      <select
        {...registration}
        className={`h-11 w-full rounded-xl border bg-white px-4 outline-none
        ${
          error
            ? "border-rose-500"
            : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
        }`}
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-rose-500">{error.message}</p>}
    </div>
  );
};

export default SelectField;
