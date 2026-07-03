// import { MoreHorizontal } from "lucide-react";

// import Button from "@/components/ui/Button";

// const StudentActions = () => {
//   return (
//     <Button variant="ghost" size="sm" className="p-2">
//       <MoreHorizontal size={18} />
//     </Button>
//   );
// };

// export default StudentActions;

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

interface StudentActionsProps {
  studentId: string;
}

const StudentActions = ({ studentId }: StudentActionsProps) => {
  const navigate = useNavigate();

  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="md">
          <MoreHorizontal size={18} />
        </Button>
      }
    >
      <DropdownItem
        icon={User}
        onClick={() => navigate(`/students/${studentId}`)}
      >
        View Profile
      </DropdownItem>

      <DropdownItem
        icon={CreditCard}
        onClick={() => navigate(`/students/${studentId}/payments`)}
      >
        Payment History
      </DropdownItem>

      <DropdownItem
        icon={FileText}
        onClick={() => console.log("Generate Receipt")}
      >
        Generate Receipt
      </DropdownItem>

      <DropdownItem icon={Bell} onClick={() => console.log("Send Reminder")}>
        Send Reminder
      </DropdownItem>

      <DropdownItem icon={Pencil} onClick={() => console.log("Edit Student")}>
        Edit Student
      </DropdownItem>

      <DropdownItem
        destructive
        icon={Trash2}
        onClick={() => console.log("Delete Student")}
      >
        Delete Student
      </DropdownItem>
    </Dropdown>
  );
};

export default StudentActions;
