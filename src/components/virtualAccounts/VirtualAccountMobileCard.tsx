import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import VirtualAccountActions from "./VirtualAccountActions";
import VirtualAccountStatusBadge from "./VirtualAccountStatusBadge";

import type { VirtualAccount } from "@/types/virtualAccount";
import ComingSoonModal from "../dialogs/ComingSoonModal";

interface VirtualAccountMobileCardProps {
  account: VirtualAccount;
}

const VirtualAccountMobileCard = ({
  account,
}: VirtualAccountMobileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timer = window.setTimeout(() => setIsCopied(false), 1500);

    return () => window.clearTimeout(timer);
  }, [isCopied]);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  const [comingSoon, setComingSoon] = useState<"details" | "regenerate" | null>(
    null,
  );

  return (
    <motion.div layout transition={{ duration: 0.25 }}>
      <Card className="overflow-hidden p-0">
        {/* Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar initials={account.initials} />

              <div>
                <h3 className="font-semibold">{account.studentName}</h3>

                <p className="text-sm text-slate-500">{account.bankName}</p>

                <p className="mt-1 text-sm font-medium text-emerald-600">
                  ₦{account.amountPaid.toLocaleString()} Paid
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <VirtualAccountStatusBadge status={account.status} />

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
                  <Info label="Class" value={account.class} />

                  <Info label="Bank" value={account.bankName} />

                  <div className="col-span-2">
                    <p className="text-xs text-slate-500">Account Number</p>

                    <div className="mt-1 flex items-center gap-2">
                      <p className="font-medium">{account.accountNumber}</p>

                      <button
                        onClick={copyAccount}
                        aria-label={
                          isCopied
                            ? "Account number copied"
                            : "Copy account number"
                        }
                        className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                      >
                        {isCopied ? (
                          <Check size={16} className="text-emerald-600" />
                        ) : (
                          <Copy size={16} className="text-slate-500" />
                        )}
                        <span>{isCopied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <Info
                    label="Expected"
                    value={`₦${account.expectedFee.toLocaleString()}`}
                  />

                  <Info
                    label="Paid"
                    value={`₦${account.amountPaid.toLocaleString()}`}
                    valueClassName="text-emerald-600"
                  />

                  <Info
                    label="Outstanding"
                    value={`₦${account.outstandingBalance.toLocaleString()}`}
                    valueClassName="text-rose-600"
                  />

                  <Info label="Created" value={account.createdAt} />
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    className="flex-1"
                    onClick={() =>
                      requestAnimationFrame(() => {
                        setComingSoon("details");
                      })
                    }
                  >
                    View Details
                  </Button>
                  <VirtualAccountActions
                    onCopyAccount={copyAccount}
                    isCopied={isCopied}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <ComingSoonModal
          open={comingSoon !== null}
          onOpenChange={() => setComingSoon(null)}
          title={
            comingSoon === "details"
              ? "View Account Details"
              : "Regenerate Account"
          }
          description={
            comingSoon === "details"
              ? "Account details will be available after backend integration."
              : "Account regeneration will be available after backend integration."
          }
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

export default VirtualAccountMobileCard;
