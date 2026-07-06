import { useState } from "react";
import { Bell, FileText, MoreHorizontal, Pencil, Trash2 } from "lucide-react";

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
  const [comingSoon, setComingSoon] = useState<
    "view" | "download" | "edit" | "reminder" | null
  >(null);

  return (
    <>
      <Dropdown
        trigger={
          <Button variant="ghost" size="md">
            <MoreHorizontal size={18} />
          </Button>
        }
      >
        <DropdownItem
          icon={FileText}
          onClick={() => requestAnimationFrame(() => setComingSoon("view"))}
        >
          View Invoice
        </DropdownItem>

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
          onClick={() => requestAnimationFrame(() => setComingSoon("edit"))}
        >
          Edit Invoice
        </DropdownItem>

        <DropdownItem
          destructive
          icon={Trash2}
          onClick={() => requestAnimationFrame(() => onDelete(invoice))}
        >
          Delete Invoice
        </DropdownItem>
      </Dropdown>

      <ComingSoonModal
        open={comingSoon !== null}
        onOpenChange={() => setComingSoon(null)}
        title={
          comingSoon === "view"
            ? "View Invoice"
            : comingSoon === "download"
              ? "Download Invoice"
              : comingSoon === "edit"
                ? "Edit Invoice"
                : "Send Reminder"
        }
        description={
          comingSoon === "view"
            ? "Invoice details will be available after backend integration."
            : comingSoon === "download"
              ? "Invoice download will be available after backend integration."
              : comingSoon === "edit"
                ? "Invoice editing will be available after backend integration."
                : "Reminder notifications will be available after backend integration."
        }
      />
    </>
  );
};

export default InvoiceActions;
