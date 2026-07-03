import StatusBadge from "@/components/ui/StatusBadge";

import type { PaymentStatus } from "@/types/payment";

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
}

const PaymentStatusBadge = ({ status }: PaymentStatusBadgeProps) => {
  return <StatusBadge status={status} />;
};

export default PaymentStatusBadge;
