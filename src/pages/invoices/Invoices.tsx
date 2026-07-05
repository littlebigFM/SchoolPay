import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";

import InvoiceStats from "@/components/invoices/InvoiceStats";
import InvoiceFilters from "@/components/invoices/InvoiceFilters";
import InvoiceTable from "@/components/invoices/InvoiceTable";

import { invoices } from "@/mock/invoices";

const ITEMS_PER_PAGE = 5;

const Invoices = () => {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const matchesSearch =
        invoice.studentName.toLowerCase().includes(search.toLowerCase()) ||
        invoice.invoiceNumber.toLowerCase().includes(search.toLowerCase());

      const matchesClass = !selectedClass || invoice.class === selectedClass;

      const matchesStatus =
        !selectedStatus || invoice.status === selectedStatus;

      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [search, selectedClass, selectedStatus]);

  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);

  const paginatedInvoices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredInvoices.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredInvoices, currentPage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <InvoiceStats />

      <InvoiceFilters
        search={search}
        selectedClass={selectedClass}
        selectedStatus={selectedStatus}
        onSearchChange={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
        onClassChange={(value) => {
          setSelectedClass(value);
          setCurrentPage(1);
        }}
        onStatusChange={(value) => {
          setSelectedStatus(value);
          setCurrentPage(1);
        }}
      />

      <p className="text-sm text-slate-500">
        Showing <span className="font-semibold">{filteredInvoices.length}</span>{" "}
        of <span className="font-semibold">{invoices.length}</span> invoices
      </p>

      {filteredInvoices.length ? (
        <>
          <InvoiceTable invoices={paginatedInvoices} />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </>
      ) : (
        <EmptyState
          title="No invoices found"
          description="Try changing your search or filters."
        />
      )}
    </motion.div>
  );
};

export default Invoices;
