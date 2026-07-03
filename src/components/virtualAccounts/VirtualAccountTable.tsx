import Card from "@/components/ui/Card";

import VirtualAccountMobileCard from "./VirtualAccountMobileCard";
import VirtualAccountRow from "./VirtualAccountRow";

import type { VirtualAccount } from "@/types/virtualAccount";

interface VirtualAccountTableProps {
  accounts: VirtualAccount[];
}

const VirtualAccountTable = ({ accounts }: VirtualAccountTableProps) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden space-y-4 p-6 min-[1200px]:block">
        {/* Header */}
        <div className="px-6 grid grid-cols-[2.2fr_1.1fr_1.2fr_1fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <p>Student</p>

          <p>Bank</p>

          <p>Account</p>

          <p>Expected</p>

          <p>Paid</p>

          <p>Outstanding</p>

          <p>Status</p>

          <p className="text-right">Action</p>
        </div>

        {/* Rows */}
        <div className="mt-4 space-y-4">
          {accounts.map((account) => (
            <VirtualAccountRow key={account.id} account={account} />
          ))}
        </div>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 min-[1200px]:hidden">
        {accounts.map((account) => (
          <VirtualAccountMobileCard key={account.id} account={account} />
        ))}
      </div>
    </>
  );
};

export default VirtualAccountTable;
