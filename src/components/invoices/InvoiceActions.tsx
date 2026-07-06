import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  FileText,
  MoreHorizontal,
  Pencil,
  Trash2,
  User,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

import ComingSoonModal from "@/components/dialogs/ComingSoonModal";

import type { Invoice } from "@/types/invoice";

interface InvoiceActionsProps {
  invoice: Invoice;
  onDelete: (invoice: Invoice) => void;
}

const InvoiceActions = ({ invoice, onDelete }: InvoiceActionsProps) => {
  const navigate = useNavigate();

  const [comingSoon, setComingSoon] = useState<"download" | "reminder" | null>(
    null,
  );

  return (
    <>
      <Dropdown
        trigger={
          <Button variant="ghost" size="sm">
            <MoreHorizontal size={18} />
          </Button>
        }
      >
        <DropdownItem
          icon={FileText}
          onClick={() => navigate(`/students/${invoice.studentId}`)}
        >
          View Invoice
        </DropdownItem>

        {/* <DropdownItem
          icon={User}
          onClick={() => navigate(`/students/${invoice.studentId}`)}
        >
          View Student
        </DropdownItem> */}

        <DropdownItem
          icon={FileText}
          onClick={() => requestAnimationFrame(() => setComingSoon("download"))}
        >
          Download Invoice
        </DropdownItem>

        <DropdownItem
          icon={Bell}
          onClick={() => requestAnimationFrame(() => setComingSoon("reminder"))}
        >
          Send Reminder
        </DropdownItem>

        <DropdownItem
          icon={Pencil}
          onClick={() => navigate(`/invoices/${invoice.id}/edit`)}
        >
          Edit Invoice
        </DropdownItem>

        <DropdownItem
          destructive
          icon={Trash2}
          onClick={() => onDelete(invoice)}
        >
          Delete Invoice
        </DropdownItem>
      </Dropdown>

      <ComingSoonModal
        open={comingSoon !== null}
        onOpenChange={() => setComingSoon(null)}
        title={comingSoon === "download" ? "Download Invoice" : "Send Reminder"}
        description={
          comingSoon === "download"
            ? "Invoice download will be available after backend integration."
            : "Reminder notifications will be available after backend integration."
        }
      />
    </>
  );
};

export default InvoiceActions;
