import Input from "@/components/ui/Input";
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
    <Input
      type="date"
      label={label}
      required={required}
      error={error?.message}
      {...registration}
    />
  );
};

export default DateField;
