import { Building2, CheckCircle2, CreditCard, Wallet } from "lucide-react";

import StatCard from "@/components/ui/StatCard";

import type { VirtualAccount } from "@/types/virtualAccount";

interface VirtualAccountStatsProps {
  accounts: VirtualAccount[];
}

const VirtualAccountStats = ({ accounts }: VirtualAccountStatsProps) => {
  const totalAccounts = accounts.length;

  const activeAccounts = accounts.filter(
    (account) => account.status === "Active",
  ).length;

  const totalCollected = accounts.reduce(
    (sum, account) => sum + account.amountPaid,
    0,
  );

  const totalOutstanding = accounts.reduce(
    (sum, account) => sum + account.outstandingBalance,
    0,
  );

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Accounts"
        value={totalAccounts.toString()}
        trend="Generated virtual accounts"
        icon={Building2}
      />

      <StatCard
        title="Active Accounts"
        value={activeAccounts.toString()}
        trend="Currently active"
        icon={CheckCircle2}
      />

      <StatCard
        title="Amount Collected"
        value={`₦${totalCollected.toLocaleString()}`}
        trend="Total received"
        icon={Wallet}
      />

      <StatCard
        title="Outstanding"
        value={`₦${totalOutstanding.toLocaleString()}`}
        trend="Pending payment"
        icon={CreditCard}
      />
    </div>
  );
};

export default VirtualAccountStats;
