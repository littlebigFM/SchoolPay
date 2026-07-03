import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Avatar from "@/components/ui/Avatar";

import VirtualAccountActions from "./VirtualAccountActions";
import VirtualAccountStatusBadge from "./VirtualAccountStatusBadge";

import type { VirtualAccount } from "@/types/virtualAccount";

interface VirtualAccountRowProps {
  account: VirtualAccount;
}

const VirtualAccountRow = ({ account }: VirtualAccountRowProps) => {
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
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-[2.2fr_1.1fr_1.2fr_1fr_1fr_1fr_0.9fr_60px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Student */}
      <div className="flex items-center gap-4">
        <Avatar initials={account.initials} size="md" />

        <div>
          <p className="font-semibold text-slate-900">{account.studentName}</p>

          <p className="text-sm text-slate-500">{account.class}</p>
        </div>
      </div>

      {/* Bank */}
      <div>
        <p className="font-medium text-slate-800">{account.bankName}</p>

        <p className="text-xs text-slate-400">Bank</p>
      </div>

      {/* Account */}
      <div>
        <p className="font-medium text-slate-800">{account.accountNumber}</p>

        <p className="text-xs text-slate-400">Virtual Account</p>
      </div>

      {/* Expected */}
      <div>
        <p className="font-semibold">₦{account.expectedFee.toLocaleString()}</p>

        <p className="text-xs text-slate-400">Expected</p>
      </div>

      {/* Paid */}
      <div>
        <p className="font-semibold text-emerald-600">
          ₦{account.amountPaid.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">Paid</p>
      </div>

      {/* Outstanding */}
      <div>
        <p className="font-semibold text-rose-600">
          ₦{account.outstandingBalance.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">Outstanding</p>
      </div>

      {/* Status */}
      <VirtualAccountStatusBadge status={account.status} />

      {/* Actions */}
      <div className="flex justify-end">
        <VirtualAccountActions
          onCopyAccount={copyAccountNumber}
          isCopied={isCopied}
        />
      </div>
    </motion.div>
  );
};

export default VirtualAccountRow;
