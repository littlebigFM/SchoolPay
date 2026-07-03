import type { PaymentStatus } from "@/types/payment";
import type { VirtualAccountStatus } from "@/types/virtualAccount";

export type Status = PaymentStatus | VirtualAccountStatus;

interface StatusBadgeProps {
  status: PaymentStatus | VirtualAccountStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    PAID: "bg-emerald-100 text-emerald-700",
    UNDERPAID: "bg-amber-100 text-amber-700",
    OVERPAID: "bg-sky-100 text-sky-700",
    PENDING: "bg-slate-100 text-slate-700",
    Active: "bg-emerald-100 text-emerald-700",
    Inactive: "bg-slate-100 text-slate-700",
    Suspended: "bg-rose-100 text-rose-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-slate-100 text-slate-700"}`}
    >
      {status}
    </span>
  );
}
