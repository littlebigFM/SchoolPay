import Input from "@/components/ui/Input";
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
    <Input label={label} error={error?.message} {...registration} {...props} />
  );
};

export default AuthInput;
