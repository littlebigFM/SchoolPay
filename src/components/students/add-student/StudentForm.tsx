import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { studentSchema } from "@/schemas/studentSchema";
import type { StudentFormData } from "@/types/studentForm";

import StudentStepper from "./StudentStepper";
import StudentInformationStep from "./StudentInformationStep";
import ParentInformationStep from "./ParentInformationStep";
import ReviewStudentStep from "./ReviewStudentStep";
import StudentFormNavigation from "./StudentFormNavigation";
import LoadingOverlay from "@/components/feedback/LoadingOverlay";
import SuccessModal from "@/components/dialogs/SuccessModal";

const StudentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [successData, setSuccessData] = useState({
    studentId: "1",
    admissionNumber: "SP00002",
    accountNumber: "7420959563",
    bankName: "Nombank MFB",
  });

  const methods = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    mode: "onChange",
    defaultValues: {
      class_id: "",

      first_name: "",
      middle_name: "",
      last_name: "",

      gender: "",
      date_of_birth: "",

      email: "",
      phone: "",

      parent_name: "",
      parent_email: "",
      parent_phone: "",
      parent_address: "",

      photo: undefined,
    },
  });

  const { trigger, handleSubmit } = methods;

  const nextStep = async () => {
    console.log("NEXT");
    let fields: (keyof StudentFormData)[] = [];

    if (currentStep === 0) {
      fields = [
        "class_id",
        "first_name",
        "last_name",
        "gender",
        "date_of_birth",
        "phone",
      ];
    }

    if (currentStep === 1) {
      fields = ["parent_name", "parent_phone", "parent_address"];
    }

    const valid = await trigger(fields);

    if (!valid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleAddAnother = () => {
    methods.reset();

    setCurrentStep(0);

    setShowSuccess(false);
  };

  const onSubmit = async (data: StudentFormData) => {
    console.log("SUBMIT");
    console.log(data);

    setLoading(true);

    // Mock API call
    setTimeout(() => {
      setLoading(false);

      setSuccessData({
        studentId: "1",
        admissionNumber: "SP00002",
        accountNumber: "7420959563",
        bankName: "Nombank MFB",
      });

      setShowSuccess(true);
    }, 1500);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-8">
        <StudentStepper currentStep={currentStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            {currentStep === 0 && <StudentInformationStep />}
            {currentStep === 1 && <ParentInformationStep />}
            {currentStep === 2 && <ReviewStudentStep />}
          </motion.div>
        </AnimatePresence>

        <StudentFormNavigation
          currentStep={currentStep}
          totalSteps={3}
          onNext={nextStep}
          onPrevious={previousStep}
          onSubmit={handleSubmit(onSubmit)}
        />
      </form>

      <LoadingOverlay
        open={loading}
        title="Creating Student..."
        description="Please wait while we create the student record and generate a virtual account."
      />

      <SuccessModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        onAddAnother={handleAddAnother}
        studentId={successData.studentId}
        admissionNumber={successData.admissionNumber}
        accountNumber={successData.accountNumber}
        bankName={successData.bankName}
      />
    </FormProvider>
  );
};

export default StudentForm;
