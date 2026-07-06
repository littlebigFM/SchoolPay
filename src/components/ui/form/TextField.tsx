import Input from "@/components/ui/Input";
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
    <Input
      label={label}
      placeholder={placeholder}
      type={type}
      required={required}
      error={error?.message}
      {...registration}
    />
  );
};

export default TextField;
