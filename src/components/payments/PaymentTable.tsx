import Card from "@/components/ui/Card";

import PaymentMobileCard from "./PaymentMobileCard";
import PaymentRow from "./PaymentRow";

import type { Payment } from "@/types/payment";

interface PaymentTableProps {
  payments: Payment[];
}

const PaymentTable = ({ payments }: PaymentTableProps) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden space-y-4 p-6 min-[1200px]:block">
        {/* Header */}
        <div className="flex px-3 grid grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <p>Student</p>

          <p>Transaction</p>

          <p>Amount</p>

          <p>Bank</p>

          <p>Date</p>

          <p>Account</p>

          <p>Status</p>

          <p className="text-right">Action</p>
        </div>

        {/* Rows */}
        <div className="mt-4 space-y-4">
          {payments.map((payment) => (
            <PaymentRow key={payment.id} payment={payment} />
          ))}
        </div>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 min-[1200px]:hidden">
        {payments.map((payment) => (
          <PaymentMobileCard key={payment.id} payment={payment} />
        ))}
      </div>
    </>
  );
};

export default PaymentTable;
