import { Trash2 } from "lucide-react";

import Button from "@/components/ui/Button";
import Modal from "./Modal";

interface DeleteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  itemName: string;
  itemType?: string;
  onConfirm: () => void;
  loading?: boolean;
}

const DeleteModal = ({
  open,
  onOpenChange,
  title,
  itemName,
  itemType = "item",
  onConfirm,
  loading = false,
}: DeleteModalProps) => {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      size="sm"
      showCloseButton={false}
    >
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
          <Trash2 className="text-rose-600" size={28} />
        </div>

        <h2 className="mt-6 text-2xl font-bold">{title}</h2>

        <p className="mt-3 text-slate-500">
          Are you sure you want to delete{" "}
          <span className="font-semibold text-slate-800">{itemName}</span>?
        </p>

        <p className="mt-2 text-sm text-rose-500">
          This {itemType} cannot be recovered once deleted.
        </p>

        <div className="mt-8 flex gap-3">
          <Button
            variant="secondary"
            fullWidth
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
            variant="danger"
            fullWidth
            loading={loading}
            onClick={onConfirm}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
