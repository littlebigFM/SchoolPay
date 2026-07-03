import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  Eye,
  MoreHorizontal,
  RefreshCw,
  UserRound,
} from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
// import Dropdown from "@/components/ui/dropdown/Dropdown";
// import DropdownItem from "@/components/ui/dropdown/DropdownItem";

import VirtualAccountStatusBadge from "./VirtualAccountStatusBadge";

import type { VirtualAccount } from "@/types/virtualAccount";
import Dropdown from "../ui/Dropdown";
import DropdownItem from "../ui/DropdownItem";

interface VirtualAccountCardProps {
  account: VirtualAccount;
}

const VirtualAccountCard = ({ account }: VirtualAccountCardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timer = window.setTimeout(() => setIsCopied(false), 1500);

    return () => window.clearTimeout(timer);
  }, [isCopied]);

  const copyAccountNumber = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber);
      setIsCopied(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-4">
          <Avatar initials={account.initials} size="lg" />

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              {account.studentName}
            </h3>

            <p className="mt-1 text-sm text-slate-500">{account.class}</p>

            <div className="mt-3">
              <VirtualAccountStatusBadge status={account.status} />
            </div>
          </div>
        </div>

        <Dropdown
          trigger={
            <Button variant="ghost" size="sm">
              <MoreHorizontal size={18} />
            </Button>
          }
        >
          <DropdownItem icon={Eye}>View Details</DropdownItem>

          <DropdownItem icon={UserRound}>View Student</DropdownItem>

          <DropdownItem
            icon={isCopied ? Check : Copy}
            onClick={copyAccountNumber}
          >
            {isCopied ? "Copied" : "Copy Account Number"}
          </DropdownItem>

          <DropdownItem icon={RefreshCw}>Regenerate Account</DropdownItem>
        </Dropdown>
      </div>

      {/* Details */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Info label="Bank" value={account.bankName} />

        <Info label="Account Name" value={account.accountName} />

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Account Number
          </p>

          <div className="mt-2 flex items-center gap-2">
            <span className="font-semibold">{account.accountNumber}</span>

            <button
              onClick={copyAccountNumber}
              aria-label={
                isCopied ? "Account number copied" : "Copy account number"
              }
              className="rounded-lg p-1 transition hover:bg-slate-100"
            >
              {isCopied ? (
                <Check size={15} className="text-emerald-600" />
              ) : (
                <Copy size={15} className="text-slate-500" />
              )}
            </button>
          </div>
        </div>

        <Info label="Created" value={account.createdAt} />
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-slate-100" />

      {/* Financial Summary */}
      <div className="grid gap-5 sm:grid-cols-3">
        <SummaryCard
          label="Expected Fee"
          value={`₦${account.expectedFee.toLocaleString()}`}
        />

        <SummaryCard
          label="Amount Paid"
          value={`₦${account.amountPaid.toLocaleString()}`}
          valueClass="text-emerald-600"
        />

        <SummaryCard
          label="Outstanding"
          value={`₦${account.outstandingBalance.toLocaleString()}`}
          valueClass="text-rose-600"
        />
      </div>
    </motion.div>
  );
};

interface InfoProps {
  label: string;
  value: string;
}

const Info = ({ label, value }: InfoProps) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>

    <p className="mt-2 font-semibold text-slate-900">{value}</p>
  </div>
);

interface SummaryCardProps {
  label: string;
  value: string;
  valueClass?: string;
}

const SummaryCard = ({ label, value, valueClass = "" }: SummaryCardProps) => (
  <div className="rounded-xl bg-slate-50 p-5">
    <p className="text-sm text-slate-500">{label}</p>

    <p className={`mt-2 text-xl font-bold ${valueClass}`}>{value}</p>
  </div>
);

export default VirtualAccountCard;
