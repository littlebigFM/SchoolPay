import { CheckCircle2, Clock3, FileText, Wallet } from "lucide-react";

import StatCard from "@/components/ui/StatCard";

import type { Invoice } from "@/types/invoice";

interface InvoiceStatsProps {
  invoices: Invoice[];
}

const InvoiceStats = ({ invoices }: InvoiceStatsProps) => {
  const totalInvoices = invoices.length;

  const totalExpected = invoices.reduce(
    (sum, invoice) => sum + invoice.amount,
    0,
  );

  const totalOutstanding = invoices.reduce(
    (sum, invoice) => sum + invoice.outstandingBalance,
    0,
  );

  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "PAID",
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Invoices"
        value={totalInvoices.toString()}
        icon={FileText}
      />

      <StatCard
        title="Expected Revenue"
        value={`₦${totalExpected.toLocaleString()}`}
        icon={Wallet}
      />

      <StatCard
        title="Outstanding"
        value={`₦${totalOutstanding.toLocaleString()}`}
        icon={Clock3}
      />

      <StatCard
        title="Paid Invoices"
        value={paidInvoices.toString()}
        icon={CheckCircle2}
      />
    </div>
  );
};

export default InvoiceStats;
