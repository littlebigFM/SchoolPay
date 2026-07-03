import { useFormContext } from "react-hook-form";

import FormSection from "@/components/ui/form/FormSection";
import TextField from "@/components/ui/form/TextField";

import type { StudentFormData } from "@/types/studentForm";

const ParentInformationStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<StudentFormData>();

  return (
    <FormSection
      title="Parent Information"
      description="Provide the parent's or guardian's details."
    >
      <TextField
        label="Parent Name"
        required
        placeholder="Mr Daniel"
        registration={register("parent_name")}
        error={errors.parent_name}
      />

      <TextField
        label="Parent Email"
        placeholder="parent@email.com"
        type="email"
        registration={register("parent_email")}
        error={errors.parent_email}
      />

      <TextField
        label="Parent Phone"
        required
        placeholder="08012345678"
        registration={register("parent_phone")}
        error={errors.parent_phone}
      />

      <div className="md:col-span-2">
        <TextField
          label="Home Address"
          required
          placeholder="Enter home address"
          registration={register("parent_address")}
          error={errors.parent_address}
        />
      </div>
    </FormSection>
  );
};

export default ParentInformationStep;
