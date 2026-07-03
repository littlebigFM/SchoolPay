import { motion } from "framer-motion";

import Avatar from "@/components/ui/Avatar";

import PaymentActions from "./PaymentActions";
import PaymentStatusBadge from "./PaymentStatusBadge";

import type { Payment } from "@/types/payment";

interface PaymentRowProps {
  payment: Payment;
}

const PaymentRow = ({ payment }: PaymentRowProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-[2.2fr_1.2fr_1fr_1fr_1fr_1fr_0.9fr_60px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Student */}
      <div className="flex items-center gap-4">
        <Avatar initials={payment.initials} />

        <div>
          <p className="font-semibold text-slate-900">{payment.studentName}</p>

          <p className="text-sm text-slate-500">{payment.class}</p>
        </div>
      </div>

      {/* Transaction */}
      <div>
        <p className="font-medium text-slate-800">
          {payment.transactionReference}
        </p>

        <p className="text-xs text-slate-400">Transaction Ref.</p>
      </div>

      {/* Amount */}
      <div>
        <p className="font-semibold text-emerald-600">
          ₦{payment.amountPaid.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">Amount Paid</p>
      </div>

      {/* Bank */}
      <div>
        <p className="font-medium">{payment.bankName}</p>

        <p className="text-xs text-slate-400">{payment.paymentMethod}</p>
      </div>

      {/* Date */}
      <div>
        <p className="font-medium">{payment.paymentDate}</p>

        <p className="text-xs text-slate-400">{payment.paymentTime}</p>
      </div>

      {/* Account */}
      <div>
        <p className="font-medium">{payment.virtualAccount}</p>

        <p className="text-xs text-slate-400">Virtual Account</p>
      </div>

      {/* Status */}
      <PaymentStatusBadge status={payment.status} />

      {/* Actions */}
      <div className="flex justify-end">
        <PaymentActions paymentId={payment.id} />
      </div>
    </motion.div>
  );
};

export default PaymentRow;
