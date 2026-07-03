import { Eye, Receipt, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import DropdownItem from "@/components/ui/DropdownItem";

interface PaymentActionsProps {
  paymentId: string;
}

const PaymentActions = ({ paymentId }: PaymentActionsProps) => {
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
        icon={Eye}
        onClick={() => navigate(`/payments/${paymentId}`)}
      >
        View Payment
      </DropdownItem>

      <DropdownItem
        icon={Receipt}
        onClick={() => console.log("Download receipt")}
      >
        Download Receipt
      </DropdownItem>
    </Dropdown>
  );
};

export default PaymentActions;
