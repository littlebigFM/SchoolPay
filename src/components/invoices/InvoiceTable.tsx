import Card from "@/components/ui/Card";

import InvoiceRow from "./InvoiceRow";
import InvoiceMobileCard from "./InvoiceMobileCard";

import type { Invoice } from "@/types/invoice";

interface InvoiceTableProps {
  invoices: Invoice[];
  onDelete: (invoice: Invoice) => void;
}

const InvoiceTable = ({ invoices, onDelete }: InvoiceTableProps) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden min-[1200px]:block p-6">
        <div className="grid grid-cols-[2.2fr_1fr_1fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-200 pb-4 text-sm font-semibold text-slate-500">
          <p>Student</p>
          <p>Fee Type</p>
          <p>Amount</p>
          <p>Due Date</p>
          <p>Paid</p>
          <p>Status</p>
          <p></p>
        </div>

        <div className="mt-4 space-y-4">
          {invoices.map((invoice) => (
            <InvoiceRow
              key={invoice.id}
              invoice={invoice}
              onDelete={onDelete}
            />
          ))}
        </div>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 min-[1200px]:hidden">
        {invoices.map((invoice) => (
          <InvoiceMobileCard
            key={invoice.id}
            invoice={invoice}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default InvoiceTable;
