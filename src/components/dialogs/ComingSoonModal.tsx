import { Sparkles } from "lucide-react";

import Modal from "./Modal";
import Button from "@/components/ui/Button";

interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
}

const ComingSoonModal = ({
  open,
  onOpenChange,
  title,
  description,
}: ComingSoonModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="sm"
      showCloseButton={false}
    >
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100">
          <Sparkles className="text-violet-600" size={28} />
        </div>

        <h2 className="mt-6 text-2xl font-bold">{title}</h2>

        <p className="mt-3 text-slate-500">
          {description ??
            "This feature will be available after backend integration."}
        </p>

        <Button className="mt-8 w-full" onClick={() => onOpenChange(false)}>
          Got it
        </Button>
      </div>
    </Modal>
  );
};

export default ComingSoonModal;
