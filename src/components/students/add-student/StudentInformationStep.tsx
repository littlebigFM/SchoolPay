import { useFormContext } from "react-hook-form";

import FormSection from "@/components/ui/form/FormSection";
import TextField from "@/components/ui/form/TextField";
import SelectField from "@/components/ui/form/SelectField";
import DateField from "@/components/ui/form/DateField";
import ImageUploadField from "@/components/ui/form/ImageUploadField";

import type { StudentFormData } from "@/types/studentForm";

const StudentInformationStep = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<StudentFormData>();

  /**
   * Temporary data.
   * These will come from the backend later.
   */
  const classes = [
    {
      label: "JSS 1A",
      value: "46055fc3-73ae-4c6f-9d8f-cedbcf170344",
    },
    {
      label: "JSS 2B",
      value: "0a4e2d45-73bb-4f3a-9d9d-d5f1a1f1b234",
    },
    {
      label: "SS 3A",
      value: "ab9f1b4c-1d34-4f82-a95f-ded8e82d1234",
    },
  ];

  const genders = [
    {
      label: "Male",
      value: "MALE",
    },
    {
      label: "Female",
      value: "FEMALE",
    },
  ];

  return (
    <div className="space-y-8">
      <FormSection
        title="Student Information"
        description="Provide the student's personal information."
      >
        <div className="md:col-span-2">
          <ImageUploadField control={control} name="photo" />
        </div>

        <TextField
          label="First Name"
          required
          placeholder="Enter first name"
          registration={register("first_name")}
          error={errors.first_name}
        />

        <TextField
          label="Middle Name"
          placeholder="Enter middle name"
          registration={register("middle_name")}
          error={errors.middle_name}
        />

        <TextField
          label="Last Name"
          required
          placeholder="Enter last name"
          registration={register("last_name")}
          error={errors.last_name}
        />

        <SelectField
          label="Gender"
          required
          registration={register("gender")}
          options={genders}
          error={errors.gender}
        />

        <DateField
          label="Date of Birth"
          required
          registration={register("date_of_birth")}
          error={errors.date_of_birth}
        />

        <SelectField
          label="Class"
          required
          registration={register("class_id")}
          options={classes}
          error={errors.class_id}
        />

        <TextField
          label="Email Address"
          placeholder="student@email.com"
          type="email"
          registration={register("email")}
          error={errors.email}
        />

        <TextField
          label="Phone Number"
          required
          placeholder="08012345678"
          registration={register("phone")}
          error={errors.phone}
        />
      </FormSection>
    </div>
  );
};

export default StudentInformationStep;
