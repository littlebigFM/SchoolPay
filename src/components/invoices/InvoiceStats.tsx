import { FileText, Wallet, Clock3, CheckCircle2 } from "lucide-react";

import StatCard from "@/components/ui/StatCard";

import { invoiceStats } from "@/mock/invoices";

const InvoiceStats = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Invoices"
        value={invoiceStats.totalInvoices.toString()}
        icon={FileText}
      />

      <StatCard
        title="Expected Revenue"
        value={`₦${invoiceStats.totalExpected.toLocaleString()}`}
        icon={Wallet}
      />

      <StatCard
        title="Outstanding"
        value={`₦${invoiceStats.totalOutstanding.toLocaleString()}`}
        icon={Clock3}
      />

      <StatCard
        title="Paid Invoices"
        value={invoiceStats.paidInvoices.toString()}
        icon={CheckCircle2}
      />
    </div>
  );
};

export default InvoiceStats;
