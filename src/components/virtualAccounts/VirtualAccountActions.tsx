import {
  Check,
  Copy,
  Eye,
  MoreHorizontal,
  RefreshCw,
  UserRound,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/DropdownItem";

interface VirtualAccountActionsProps {
  onViewDetails?: () => void;
  onViewStudent?: () => void;
  onCopyAccount?: () => void;
  onRegenerate?: () => void;
  isCopied?: boolean;
}

const VirtualAccountActions = ({
  onViewDetails,
  onViewStudent,
  onCopyAccount,
  onRegenerate,
  isCopied = false,
}: VirtualAccountActionsProps) => {
  return (
    <Dropdown
      trigger={
        <Button variant="ghost" size="md">
          <MoreHorizontal size={18} />
        </Button>
      }
    >
      <DropdownItem icon={Eye} onClick={onViewDetails}>
        View Details
      </DropdownItem>

      <DropdownItem icon={UserRound} onClick={onViewStudent}>
        View Student
      </DropdownItem>

      <DropdownItem icon={isCopied ? Check : Copy} onClick={onCopyAccount}>
        {isCopied ? "Copied" : "Copy Account Number"}
      </DropdownItem>

      {/* <DropdownDivider /> */}

      <DropdownItem icon={RefreshCw} onClick={onRegenerate}>
        Regenerate Account
      </DropdownItem>
    </Dropdown>
  );
};

export default VirtualAccountActions;
