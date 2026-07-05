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

interface InvoiceActionsProps {
  invoiceId: string;
  studentId: string;
}

const InvoiceActions = ({ invoiceId, studentId }: InvoiceActionsProps) => {
  const navigate = useNavigate();

  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="sm">
          <MoreHorizontal size={18} />
        </Button>
      }
    >
      <DropdownItem
        icon={FileText}
        onClick={() => navigate(`/invoices/${invoiceId}`)}
      >
        View Invoice
      </DropdownItem>

      <DropdownItem
        icon={User}
        onClick={() => navigate(`/students/${studentId}`)}
      >
        View Student
      </DropdownItem>

      <DropdownItem icon={Bell} onClick={() => console.log("Send Reminder")}>
        Send Reminder
      </DropdownItem>

      <DropdownItem icon={Pencil} onClick={() => console.log("Edit Invoice")}>
        Edit Invoice
      </DropdownItem>

      <DropdownItem
        destructive
        icon={Trash2}
        onClick={() => console.log("Delete Invoice")}
      >
        Delete Invoice
      </DropdownItem>
    </Dropdown>
  );
};

export default InvoiceActions;
