import { useNavigate } from "react-router-dom";
import {
  Bell,
  CreditCard,
  FileText,
  MoreHorizontal,
  Pencil,
  Trash2,
  User,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

import type { Student } from "@/types/student";

import { useState } from "react";

import ComingSoonModal from "@/components/dialogs/ComingSoonModal";

interface StudentActionsProps {
  student: Student;
  onDelete: (student: Student) => void;
}

const StudentActions = ({ student, onDelete }: StudentActionsProps) => {
  const navigate = useNavigate();

  const [comingSoon, setComingSoon] = useState<
    "payments" | "receipt" | "reminder" | null
  >(null);

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
          icon={User}
          onClick={() => navigate(`/students/${student.id}`)}
        >
          View Profile
        </DropdownItem>

        <DropdownItem
          icon={CreditCard}
          onClick={() =>
            requestAnimationFrame(() => {
              setComingSoon("payments");
            })
          }
        >
          Payment History
        </DropdownItem>

        <DropdownItem
          icon={FileText}
          onClick={() => {
            requestAnimationFrame(() => {
              setComingSoon("receipt");
            });
          }}
        >
          Generate Receipt
        </DropdownItem>

        <DropdownItem
          icon={Bell}
          onClick={() => {
            requestAnimationFrame(() => {
              setComingSoon("reminder");
            });
          }}
        >
          Send Reminder
        </DropdownItem>

        <DropdownItem
          icon={Pencil}
          onClick={() => navigate(`/students/${student.id}/edit`)}
        >
          Edit Student
        </DropdownItem>

        <DropdownItem
          destructive
          icon={Trash2}
          onClick={() => {
            requestAnimationFrame(() => {
              onDelete(student);
            });
          }}
        >
          Delete Student
        </DropdownItem>
      </Dropdown>

      <ComingSoonModal
        open={comingSoon !== null}
        onOpenChange={() => setComingSoon(null)}
        title={
          comingSoon === "payments"
            ? "Payment History"
            : comingSoon === "receipt"
              ? "Generate Receipt"
              : "Send Reminder"
        }
        description={
          comingSoon === "payments"
            ? "Payment history will be available after backend integration."
            : comingSoon === "receipt"
              ? "Receipt generation will be available after backend integration."
              : "Reminder notifications will be available after backend integration."
        }
      />
    </>
  );
};

export default StudentActions;
