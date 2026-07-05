import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const AuthInput = ({
  label,
  registration,
  error,
  ...props
}: AuthInputProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <input
        {...registration}
        {...props}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition

        ${
          error ? "border-red-500" : "border-slate-300 focus:border-violet-500"
        }`}
      />

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default AuthInput;
