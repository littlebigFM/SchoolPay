import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
}

const PasswordInput = ({ label, registration, error }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <div className="relative">
        <input
          {...registration}
          type={showPassword ? "text" : "password"}
          className={`w-full rounded-xl border px-4 py-3 pr-12 outline-none transition

          ${
            error
              ? "border-red-500"
              : "border-slate-300 focus:border-violet-500"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default PasswordInput;
