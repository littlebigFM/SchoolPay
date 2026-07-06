import { useState } from "react";
import { Eye, Receipt, MoreHorizontal } from "lucide-react";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

import ComingSoonModal from "@/components/dialogs/ComingSoonModal";

interface PaymentActionsProps {
  paymentId: string;
}

const PaymentActions = ({ paymentId }: PaymentActionsProps) => {
  const [comingSoon, setComingSoon] = useState<"view" | "receipt" | null>(null);

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
          onClick={() =>
            requestAnimationFrame(() => {
              setComingSoon("view");
            })
          }
        >
          View Payment
        </DropdownItem>

        <DropdownItem
          icon={Receipt}
          onClick={() =>
            requestAnimationFrame(() => {
              setComingSoon("receipt");
            })
          }
        >
          Download Receipt
        </DropdownItem>
      </Dropdown>

      <ComingSoonModal
        open={comingSoon !== null}
        onOpenChange={() => setComingSoon(null)}
        title={comingSoon === "view" ? "View Payment" : "Download Receipt"}
        description={
          comingSoon === "view"
            ? "Payment details will be available after backend integration."
            : "Receipt download will be available after backend integration."
        }
      />
    </>
  );
};

export default PaymentActions;
