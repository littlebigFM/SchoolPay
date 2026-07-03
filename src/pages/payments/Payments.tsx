import { useMemo, useState } from "react";

import PageHeader from "@/components/ui/PageHeader";

import PaymentFilters from "@/components/payments/PaymentFilters";
import PaymentStats from "@/components/payments/PaymentStats";
import PaymentTable from "@/components/payments/PaymentTable";

import { payments } from "@/mock/payments";

const Payments = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const matchesSearch =
        payment.studentName.toLowerCase().includes(search.toLowerCase()) ||
        payment.transactionReference
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        !selectedStatus || payment.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [search, selectedStatus]);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Payments"
        description="Track every payment made into student virtual accounts."
      />

      <PaymentStats />

      <PaymentFilters
        search={search}
        selectedStatus={selectedStatus}
        onSearchChange={setSearch}
        onStatusChange={setSelectedStatus}
      />

      <PaymentTable payments={filteredPayments} />
    </div>
  );
};

export default Payments;
