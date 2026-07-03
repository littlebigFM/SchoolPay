import { Check } from "lucide-react";

import { motion } from "framer-motion";

interface StudentStepperProps {
  currentStep: number;
}

const steps = ["Student Information", "Parent Information", "Review"];

const StudentStepper = ({ currentStep }: StudentStepperProps) => {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-max items-center">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  layout
                  transition={{
                    duration: 0.25,
                  }}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 font-semibold transition-all
                    ${
                      completed
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : active
                          ? "border-violet-600 bg-violet-600 text-white"
                          : "border-slate-300 bg-white text-slate-500"
                    }
                  `}
                >
                  {completed ? <Check size={18} /> : index + 1}
                </motion.div>

                <p
                  className={`mt-3 text-center text-sm font-medium ${
                    active
                      ? "text-violet-700"
                      : completed
                        ? "text-emerald-700"
                        : "text-slate-500"
                  }`}
                >
                  {step}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <div className="mx-4 h-[2px] w-20 rounded-full bg-slate-200 lg:w-36">
                  <motion.div
                    initial={false}
                    animate={{
                      width: completed ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="h-full rounded-full bg-emerald-600"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentStepper;
