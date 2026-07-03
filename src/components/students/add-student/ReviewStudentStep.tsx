import { useFormContext } from "react-hook-form";

import { CheckCircle2 } from "lucide-react";

import FormSection from "@/components/ui/form/FormSection";

import type { StudentFormData } from "@/types/studentForm";

const ReviewStudentStep = () => {
  const { watch } = useFormContext<StudentFormData>();

  const values = watch();

  const Row = ({ label, value }: { label: string; value?: string }) => (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
      <span className="text-sm text-slate-500">{label}</span>

      <span className="font-medium text-slate-900">{value || "-"}</span>
    </div>
  );

  return (
    <div className="space-y-8">
      <FormSection
        title="Review Information"
        description="Please confirm all information before creating the student."
      >
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-700">
            <CheckCircle2 size={22} />

            <p className="text-sm font-medium">
              A virtual account will be generated automatically after this
              student is created.
            </p>
          </div>

          <Row label="First Name" value={values.first_name} />

          <Row label="Middle Name" value={values.middle_name} />

          <Row label="Last Name" value={values.last_name} />

          <Row label="Gender" value={values.gender} />

          <Row label="Date of Birth" value={values.date_of_birth} />

          <Row label="Email" value={values.email} />

          <Row label="Phone" value={values.phone} />

          <Row label="Class" value={values.class_id} />

          <Row label="Parent Name" value={values.parent_name} />

          <Row label="Parent Email" value={values.parent_email} />

          <Row label="Parent Phone" value={values.parent_phone} />

          <Row label="Parent Address" value={values.parent_address} />
        </div>
      </FormSection>
    </div>
  );
};

export default ReviewStudentStep;
