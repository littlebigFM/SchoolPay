import { ChevronDown, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

import NavbarAvatar from "./NavbarAvatar";

import { useAuth } from "@/hooks/useAuth";

const ProfileDropdown = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  return (
    <Dropdown
      trigger={
        <Button variant="ghost" className="h-auto rounded-xl px-2 py-1">
          <NavbarAvatar />

          <ChevronDown size={16} />
        </Button>
      }
    >
      <DropdownItem icon={Settings} onClick={() => toast.info("Coming soon")}>
        Settings
      </DropdownItem>

      <DropdownItem
        destructive
        icon={LogOut}
        onClick={() => {
          logout();

          toast.success("Logged out successfully");

          navigate("/login", { replace: true });
        }}
      >
        Logout
      </DropdownItem>
    </Dropdown>
  );
};

export default ProfileDropdown;
