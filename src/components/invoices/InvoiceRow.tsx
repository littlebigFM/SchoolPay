import { motion } from "framer-motion";

import Avatar from "@/components/ui/Avatar";
import StatusBadge from "@/components/ui/StatusBadge";

import InvoiceActions from "./InvoiceActions";

import type { Invoice } from "@/types/invoice";

interface InvoiceRowProps {
  invoice: Invoice;
  onDelete: (invoice: Invoice) => void;
}

const InvoiceRow = ({ invoice, onDelete }: InvoiceRowProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_0.9fr_60px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Student */}
      <div className="flex items-center gap-4">
        <Avatar initials={invoice.initials} />

        <div>
          <p className="font-semibold text-slate-900">{invoice.studentName}</p>

          <p className="text-sm text-slate-500">{invoice.invoiceNumber}</p>
        </div>
      </div>

      {/* Fee Type */}
      <div>
        <p className="font-medium text-slate-700">{invoice.feeType}</p>
      </div>

      {/* Amount */}
      <div>
        <p className="font-semibold">₦{invoice.amount.toLocaleString()}</p>
      </div>

      {/* Due Date */}
      <div>
        <p>{invoice.dueDate}</p>
      </div>

      {/* Paid */}
      <div>
        <p className="font-semibold text-emerald-600">
          ₦{invoice.amountPaid.toLocaleString()}
        </p>
      </div>

      {/* Status */}
      <StatusBadge status={invoice.status} />

      {/* Action */}
      <div className="flex justify-end">
        <InvoiceActions invoice={invoice} onDelete={onDelete} />
      </div>
    </motion.div>
  );
};

export default InvoiceRow;
