import Card from "@/components/ui/Card";

import InvoiceRow from "./InvoiceRow";
import InvoiceMobileCard from "./InvoiceMobileCard";

import type { Invoice } from "@/types/invoice";

interface Props {
  invoices: Invoice[];
}

const InvoiceTable = ({ invoices }: Props) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden p-6 min-[1200px]:block">
        <div className="grid grid-cols-[2fr_1.2fr_0.8fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-200 pb-4 text-sm font-semibold text-slate-500">
          <span>Student</span>
          <span>Invoice No.</span>
          <span>Class</span>
          <span>Amount</span>
          <span>Due Date</span>
          <span>Status</span>
          <span></span>
        </div>

        <div className="mt-4 space-y-4">
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
        </div>
      </Card>

      {/* Mobile */}

      <div className="space-y-4 min-[1200px]:hidden">
        {invoices.map((invoice) => (
          <InvoiceMobileCard key={invoice.id} invoice={invoice} />
        ))}
      </div>
    </>
  );
};

export default InvoiceTable;
