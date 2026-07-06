import { useState } from "react";
import { Check, Copy, Eye, MoreHorizontal, RefreshCw } from "lucide-react";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

import ComingSoonModal from "@/components/dialogs/ComingSoonModal";

interface VirtualAccountActionsProps {
  onCopyAccount?: () => void;
  isCopied?: boolean;
}

const VirtualAccountActions = ({
  onCopyAccount,
  isCopied = false,
}: VirtualAccountActionsProps) => {
  const [comingSoon, setComingSoon] = useState<"details" | "regenerate" | null>(
    null,
  );

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
          icon={Eye}
          onClick={() => requestAnimationFrame(() => setComingSoon("details"))}
        >
          View Details
        </DropdownItem>

        <DropdownItem icon={isCopied ? Check : Copy} onClick={onCopyAccount}>
          {isCopied ? "Copied" : "Copy Account Number"}
        </DropdownItem>

        <DropdownItem
          icon={RefreshCw}
          onClick={() =>
            requestAnimationFrame(() => setComingSoon("regenerate"))
          }
        >
          Regenerate Account
        </DropdownItem>
      </Dropdown>

      <ComingSoonModal
        open={comingSoon !== null}
        onOpenChange={() => setComingSoon(null)}
        title={
          comingSoon === "details"
            ? "View Account Details"
            : "Regenerate Account"
        }
        description={
          comingSoon === "details"
            ? "Account details will be available after backend integration."
            : "Account regeneration will be available after backend integration."
        }
      />
    </>
  );
};

export default VirtualAccountActions;
