import SearchInput from "@/components/ui/SearchInput";
import Select from "@/components/ui/Select";

interface InvoiceFiltersProps {
  search: string;
  selectedClass: string;
  selectedStatus: string;

  onSearchChange: (value: string) => void;
  onClassChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const InvoiceFilters = ({
  search,
  selectedClass,
  selectedStatus,
  onSearchChange,
  onClassChange,
  onStatusChange,
}: InvoiceFiltersProps) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <SearchInput
        placeholder="Search invoice..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <Select
        value={selectedClass}
        onChange={(e) => onClassChange(e.target.value)}
      >
        <option value="">All Classes</option>
        <option value="JSS1A">JSS1A</option>
        <option value="JSS2A">JSS2A</option>
        <option value="JSS3B">JSS3B</option>
        <option value="SS1C">SS1C</option>
        <option value="SS2A">SS2A</option>
        <option value="SS3A">SS3A</option>
      </Select>

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

export default InvoiceFilters;
