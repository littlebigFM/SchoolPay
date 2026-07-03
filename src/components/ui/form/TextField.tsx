import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  required?: boolean;
}

const TextField = ({
  label,
  placeholder,
  type = "text",
  registration,
  error,
  required,
}: TextFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}

        {required && <span className="ml-1 text-rose-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...registration}
        className={`h-11 w-full rounded-xl border bg-white px-4 outline-none transition-all
        ${
          error
            ? "border-rose-500 focus:ring-2 focus:ring-rose-200"
            : "border-slate-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
        }`}
      />

      {error && <p className="text-xs text-rose-500">{error.message}</p>}
    </div>
  );
};

export default TextField;
