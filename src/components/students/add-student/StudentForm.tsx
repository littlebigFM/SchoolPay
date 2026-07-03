import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { studentSchema } from "@/schemas/studentSchema";
import type { StudentFormData } from "@/types/studentForm";

import StudentStepper from "./StudentStepper";
import StudentFormNavigation from "./StudentFormNavigation";

import StudentInformationStep from "./steps/StudentInformationStep";
import ParentInformationStep from "./steps/ParentInformationStep";
import ReviewStudentStep from "./steps/ReviewStudentStep";

const StudentForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

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

  const onSubmit = (data: StudentFormData) => {
    console.log(data);

    // TODO:
    // create student
    // upload image
    // generate virtual account
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <StudentStepper currentStep={currentStep} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -40,
            }}
            transition={{
              duration: 0.25,
            }}
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
        />
      </form>
    </FormProvider>
  );
};

export default StudentForm;
