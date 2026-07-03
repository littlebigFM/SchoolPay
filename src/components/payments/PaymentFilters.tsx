import SearchInput from "@/components/ui/SearchInput";
import Select from "@/components/ui/Select";

interface PaymentFiltersProps {
  search: string;
  selectedStatus: string;

  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const PaymentFilters = ({
  search,
  selectedStatus,
  onSearchChange,
  onStatusChange,
}: PaymentFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm lg:flex-row">
      <SearchInput
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search student or transaction..."
        className="flex-1"
      />

      <Select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>

        <option value="PAID">Paid</option>

        <option value="UNDERPAID">Underpaid</option>

        <option value="OVERPAID">Overpaid</option>

        <option value="PENDING">Pending</option>
      </Select>
    </div>
  );
};

export default PaymentFilters;
