import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Modal from "./Modal";

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  onAddAnother: () => void;

  studentId: string;

  admissionNumber: string;
  accountNumber: string;
  bankName: string;
}

const SuccessModal = ({
  open,
  onOpenChange,
  onAddAnother,
  studentId,
  admissionNumber,
  accountNumber,
  bankName,
}: SuccessModalProps) => {
  const navigate = useNavigate();

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="md"
      showCloseButton={false}
    >
      <div className="flex flex-col items-center text-center">
        <CheckCircle2 size={70} className="text-emerald-500" />

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Student Created Successfully
        </h2>

        <p className="mt-3 text-slate-500">
          A virtual account has been generated automatically.
        </p>

        <div className="mt-8 w-full space-y-4 rounded-2xl border border-slate-200 p-5 text-left">
          <Info label="Admission Number" value={admissionNumber} />

          <Info label="Virtual Account" value={accountNumber} />

          <Info label="Bank" value={bankName} />
        </div>

        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            variant="secondary"
            fullWidth
            onClick={onAddAnother}
          >
            Add Another Student
          </Button>

          <Button
            type="button"
            fullWidth
            onClick={() => {
              navigate(`/students/${studentId}`);
            }}
          >
            View Student Profile
          </Button>
        </div>
      </div>
    </Modal>
  );
};

interface InfoProps {
  label: string;
  value: string;
}

const Info = ({ label, value }: InfoProps) => (
  <div className="flex items-center justify-between">
    <span className="text-sm text-slate-500">{label}</span>

    <span className="font-semibold text-slate-900">{value}</span>
  </div>
);

export default SuccessModal;
