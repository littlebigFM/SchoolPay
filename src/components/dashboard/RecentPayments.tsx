import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";

import type { RecentPayment } from "@/types/dashboard";
import Button from "../ui/Button";

import { useNavigate } from "react-router-dom";

interface RecentPaymentsProps {
  payments: RecentPayment[];
}
const RecentPayments = ({ payments }: RecentPaymentsProps) => {
  const [expandedPayment, setExpandedPayment] = useState<number | null>(null);

  const navigate = useNavigate();

  const togglePayment = (id: number) => {
    setExpandedPayment((current) => (current === id ? null : id));
  };

  return (
    <Card className="xl:col-span-2 overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold">Recent Payments</h2>

        <Button variant="primary" onClick={() => navigate("/payments")}>
          View all →
        </Button>
      </div>

      {/* ================= Desktop Table ================= */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-212.5">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
              <th className="px-6 py-4">Student</th>
              <th className="py-4">Class</th>
              <th className="py-4">Amount</th>
              <th className="py-4">Status</th>
              <th className="py-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b border-slate-100 last:border-none hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-slate-900">
                      {payment.student}
                    </p>

                    <p className="text-sm text-slate-400">
                      VA: {payment.accountNumber}
                    </p>
                  </div>
                </td>

                <td>{payment.class}</td>

                <td className="font-medium">{payment.amount}</td>

                <td>
                  <StatusBadge status={payment.status} />
                </td>

                <td className="text-slate-500">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Mobile Accordion ================= */}
      <div className="divide-y divide-slate-100 md:hidden">
        {payments.map((payment) => {
          const expanded = expandedPayment === payment.id;

          return (
            <div key={payment.id}>
              <button
                onClick={() => togglePayment(payment.id)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <div>
                  <p className="font-medium text-slate-900">
                    {payment.student}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {payment.amount}
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 bg-slate-50 px-4 pb-4 pt-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Virtual Account</span>

                        <span>{payment.accountNumber}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Class</span>

                        <span>{payment.class}</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Amount</span>

                        <span className="font-medium">{payment.amount}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Status</span>

                        <StatusBadge status={payment.status} />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500">Date</span>

                        <span>{payment.date}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default RecentPayments;
