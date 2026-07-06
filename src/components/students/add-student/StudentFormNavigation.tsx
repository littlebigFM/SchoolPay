import Button from "@/components/ui/Button";

interface StudentFormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  isEdit?: boolean;
}

const StudentFormNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  onSubmit,
  isEdit,
}: StudentFormNavigationProps) => {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        {currentStep > 0 && (
          <Button variant="secondary" onClick={onPrevious} type="button">
            Previous
          </Button>
        )}
      </div>

      <div>
        {isLastStep ? (
          <Button type="button" onClick={onSubmit}>
            {isEdit ? "Update Student" : "Create Student"}
          </Button>
        ) : (
          <Button type="button" onClick={onNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default StudentFormNavigation;
