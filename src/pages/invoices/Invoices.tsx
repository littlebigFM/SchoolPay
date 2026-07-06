import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { Invoice } from "@/types/invoice";

import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";
import DeleteModal from "@/components/dialogs/DeleteModal";

import InvoiceStats from "@/components/invoices/InvoiceStats";
import InvoiceFilters from "@/components/invoices/InvoiceFilters";
import InvoiceTable from "@/components/invoices/InvoiceTable";

import { invoices as mockInvoices } from "@/mock/invoices";

const ITEMS_PER_PAGE = 5;

const Invoices = () => {
  const [invoiceList, setInvoiceList] = useState(mockInvoices);

  const [invoiceToDelete, setInvoiceToDelete] = useState<Invoice | null>(null);

  const [deleting, setDeleting] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredInvoices = useMemo(() => {
    return invoiceList.filter((invoice) => {
      const matchesSearch =
        invoice.studentName.toLowerCase().includes(search.toLowerCase()) ||
        invoice.invoiceNumber.toLowerCase().includes(search.toLowerCase());

      const matchesClass = !selectedClass || invoice.class === selectedClass;

      const matchesStatus =
        !selectedStatus || invoice.status === selectedStatus;

      return matchesSearch && matchesClass && matchesStatus;
    });
  }, [invoiceList, search, selectedClass, selectedStatus]);

  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);

  const paginatedInvoices = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;

    return filteredInvoices.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredInvoices, currentPage]);

  const handleDeleteInvoice = async () => {
    if (!invoiceToDelete) return;

    setDeleting(true);

    setTimeout(() => {
      setInvoiceList((prev) =>
        prev.filter((invoice) => invoice.id !== invoiceToDelete.id),
      );

      setDeleting(false);
      setInvoiceToDelete(null);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <InvoiceStats invoices={invoiceList} />

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
        of <span className="font-semibold">{invoiceList.length}</span> invoices
      </p>

      {filteredInvoices.length ? (
        <>
          <InvoiceTable
            invoices={paginatedInvoices}
            onDelete={setInvoiceToDelete}
          />

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

      <DeleteModal
        open={!!invoiceToDelete}
        onOpenChange={(open) => {
          if (!open) setInvoiceToDelete(null);
        }}
        title="Delete Invoice"
        itemName={invoiceToDelete?.invoiceNumber ?? ""}
        itemType="invoice"
        onConfirm={handleDeleteInvoice}
        loading={deleting}
      />
    </motion.div>
  );
};

export default Invoices;
