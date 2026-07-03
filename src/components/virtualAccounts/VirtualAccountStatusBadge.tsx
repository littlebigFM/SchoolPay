import StatusBadge from "@/components/ui/StatusBadge";

import type { VirtualAccountStatus } from "@/types/virtualAccount";

interface VirtualAccountStatusBadgeProps {
  status: VirtualAccountStatus;
}

const VirtualAccountStatusBadge = ({
  status,
}: VirtualAccountStatusBadgeProps) => {
  return <StatusBadge status={status} />;
};

export default VirtualAccountStatusBadge;
