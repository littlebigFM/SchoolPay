import { useMemo, useState } from "react";

import PageHeader from "@/components/ui/PageHeader";

import VirtualAccountFilters from "@/components/virtualAccounts/VirtualAccountFilters";
// import VirtualAccountList from "@/components/virtualAccounts/VirtualAccountList";
import VirtualAccountStats from "@/components/virtualAccounts/VirtualAccountStats";

import { virtualAccounts } from "@/mock/virtualAccounts";
import VirtualAccountTable from "@/components/virtualAccounts/VirtualAccountTable";

const VirtualAccounts = () => {
  const [search, setSearch] = useState("");
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredAccounts = useMemo(() => {
    return virtualAccounts.filter((account) => {
      const matchesSearch =
        account.studentName.toLowerCase().includes(search.toLowerCase()) ||
        account.accountNumber.includes(search);

      const matchesBank = !selectedBank || account.bankName === selectedBank;

      const matchesStatus =
        !selectedStatus || account.status === selectedStatus;

      return matchesSearch && matchesBank && matchesStatus;
    });
  }, [search, selectedBank, selectedStatus]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Virtual Accounts"
        description="Monitor and manage every virtual account generated for students."
      />

      <VirtualAccountStats accounts={filteredAccounts} />

      <VirtualAccountFilters
        search={search}
        selectedBank={selectedBank}
        selectedStatus={selectedStatus}
        onSearchChange={setSearch}
        onBankChange={setSelectedBank}
        onStatusChange={setSelectedStatus}
      />

      <VirtualAccountTable accounts={filteredAccounts} />
    </div>
  );
};

export default VirtualAccounts;
