import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import PaymentActions from "./PaymentActions";
import PaymentStatusBadge from "./PaymentStatusBadge";

import type { Payment } from "@/types/payment";
import ComingSoonModal from "@/components/dialogs/ComingSoonModal";

interface PaymentMobileCardProps {
  payment: Payment;
}

const PaymentMobileCard = ({ payment }: PaymentMobileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comingSoon, setComingSoon] = useState<"view" | null>(null);

  const copyReference = async () => {
    await navigator.clipboard.writeText(payment.transactionReference);
  };

  return (
    <motion.div layout transition={{ duration: 0.25 }}>
      <Card className="overflow-hidden p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar initials={payment.initials} />

              <div>
                <h3 className="font-semibold">{payment.studentName}</h3>

                <p className="text-sm text-slate-500">{payment.class}</p>

                <p className="mt-1 text-sm font-medium text-emerald-600">
                  ₦{payment.amountPaid.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <PaymentStatusBadge status={payment.status} />

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
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="overflow-hidden"
            >
              <div className="border-t border-slate-100 px-5 py-5">
                <div className="grid grid-cols-2 gap-5">
                  <Info
                    label="Transaction"
                    value={payment.transactionReference}
                  />

                  <Info label="Bank" value={payment.bankName} />

                  <Info label="Method" value={payment.paymentMethod} />

                  <Info
                    label="Virtual Account"
                    value={payment.virtualAccount}
                  />

                  <Info
                    label="Expected"
                    value={`₦${payment.expectedAmount.toLocaleString()}`}
                  />

                  <Info
                    label="Amount Paid"
                    value={`₦${payment.amountPaid.toLocaleString()}`}
                    valueClassName="text-emerald-600"
                  />

                  <Info label="Date" value={payment.paymentDate} />

                  <Info label="Time" value={payment.paymentTime} />

                  <div className="col-span-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyReference}
                      className="w-full"
                    >
                      <Copy size={16} />
                      <span className="ml-2">Copy Transaction Reference</span>
                    </Button>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    className="flex-1"
                    onClick={() =>
                      requestAnimationFrame(() => {
                        setComingSoon("view");
                      })
                    }
                  >
                    View Payment
                  </Button>

                  <PaymentActions paymentId={payment.id} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ComingSoonModal
          open={comingSoon !== null}
          onOpenChange={() => setComingSoon(null)}
          title="View Payment"
          description="Payment details will be available after backend integration."
        />
      </Card>
    </motion.div>
  );
};

interface InfoProps {
  label: string;
  value: string;
  valueClassName?: string;
}

const Info = ({ label, value, valueClassName = "" }: InfoProps) => (
  <div>
    <p className="text-xs text-slate-500">{label}</p>

    <p className={`mt-1 font-medium ${valueClassName}`}>{value}</p>
  </div>
);

export default PaymentMobileCard;
