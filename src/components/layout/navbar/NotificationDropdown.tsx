import { Bell } from "lucide-react";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

const notifications = [
  {
    id: 1,
    title: "12 new payments received",
  },
  {
    id: 2,
    title: "5 invoices overdue",
  },
  {
    id: 3,
    title: "Reconciliation completed",
  },
];

const NotificationDropdown = () => {
  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="sm">
          <Bell size={18} />
        </Button>
      }
    >
      {notifications.map((notification) => (
        <DropdownItem key={notification.id} onClick={() => {}}>
          {notification.title}
        </DropdownItem>
      ))}

      <DropdownItem
        onClick={() => toast.success("All notifications marked as read")}
      >
        Mark all as read
      </DropdownItem>
    </Dropdown>
  );
};

export default NotificationDropdown;
