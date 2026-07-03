import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface VirtualAccountFiltersProps {
  search: string;
  selectedBank: string;
  selectedStatus: string;

  onSearchChange: (value: string) => void;
  onBankChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const VirtualAccountFilters = ({
  search,
  selectedBank,
  selectedStatus,
  onSearchChange,
  onBankChange,
  onStatusChange,
}: VirtualAccountFiltersProps) => {
  return (
    <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-sm lg:grid-cols-3">
      <Input
        placeholder="Search student..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Select
        value={selectedBank}
        onChange={(e) => onBankChange(e.target.value)}
      >
        <option value="">All Banks</option>
        <option value="Wema Bank">Wema Bank</option>
        <option value="Providus Bank">Providus Bank</option>
        <option value="Moniepoint MFB">Moniepoint MFB</option>
      </Select>

      <Select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Inactive">Inactive</option>
        <option value="Suspended">Suspended</option>
      </Select>
    </div>
  );
};

export default VirtualAccountFilters;
