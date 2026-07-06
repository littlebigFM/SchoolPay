import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import StatusBadge from "@/components/ui/StatusBadge";

import InvoiceActions from "./InvoiceActions";

import type { Invoice } from "@/types/invoice";
import ComingSoonModal from "@/components/dialogs/ComingSoonModal";
import Button from "../ui/Button";

interface InvoiceMobileCardProps {
  invoice: Invoice;
  onDelete: (invoice: Invoice) => void;
}

const InvoiceMobileCard = ({ invoice, onDelete }: InvoiceMobileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState<
    "view" | "download" | "edit" | "reminder" | null
  >(null);

  // const navigate = useNavigate();

  return (
    <motion.div layout transition={{ duration: 0.25 }}>
      <Card>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar initials={invoice.initials} />

              <div>
                <h3 className="font-semibold">{invoice.studentName}</h3>

                <p className="text-sm text-slate-500">{invoice.feeType}</p>

                <p className="mt-1 text-sm font-medium text-emerald-600">
                  ₦{invoice.amountPaid.toLocaleString()} Paid
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <StatusBadge status={invoice.status} />

              {isOpen ? (
                <ChevronUp size={18} className="text-slate-500" />
              ) : (
                <ChevronDown size={18} className="text-slate-500" />
              )}
            </div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-100 px-5 py-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-xs text-slate-500">Invoice No.</p>

                    <p className="mt-1 font-medium">{invoice.invoiceNumber}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Class</p>

                    <p className="mt-1">{invoice.class}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Amount</p>

                    <p className="mt-1">₦{invoice.amount.toLocaleString()}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Paid</p>

                    <p className="mt-1 font-medium text-emerald-600">
                      ₦{invoice.amountPaid.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Outstanding</p>

                    <p className="mt-1 font-semibold text-rose-600">
                      ₦{invoice.outstandingBalance.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Due Date</p>

                    <p className="mt-1">{invoice.dueDate}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  {/* <button
                    onClick={() => navigate(`/invoices/${invoice.id}`)}
                    className="flex-1 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
                  >
                    View Invoice
                  </button> */}
                  <Button
                    className="flex-1"
                    onClick={() =>
                      requestAnimationFrame(() => {
                        setComingSoon("view");
                      })
                    }
                  >
                    View Invoice
                  </Button>

                  <InvoiceActions invoice={invoice} onDelete={onDelete} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ComingSoonModal
          open={comingSoon !== null}
          onOpenChange={() => setComingSoon(null)}
          title={
            comingSoon === "view"
              ? "View Invoice"
              : comingSoon === "download"
                ? "Download Invoice"
                : comingSoon === "edit"
                  ? "Edit Invoice"
                  : "Send Reminder"
          }
          description={
            comingSoon === "view"
              ? "Invoice details will be available after backend integration."
              : comingSoon === "download"
                ? "Invoice download will be available after backend integration."
                : comingSoon === "edit"
                  ? "Invoice editing will be available after backend integration."
                  : "Reminder notifications will be available after backend integration."
          }
        />
      </Card>
    </motion.div>
  );
};

export default InvoiceMobileCard;
