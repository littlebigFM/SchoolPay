import Card from "@/components/ui/Card";

import type { Student } from "@/types/student";
import { motion } from "framer-motion";

// const MotionCard = motion(Card);

interface FeeSummaryCardProps {
  student: Student;
}

const FeeSummaryCard = ({ student }: FeeSummaryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15,
        duration: 0.3,
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card className="h-full p-6">
        <h2 className="mb-6 text-lg font-semibold">Fee Summary</h2>

        <div className="space-y-5">
          <Summary
            label="Expected Fee"
            value={`₦${student.expectedFee.toLocaleString()}`}
          />
          <Summary
            label="Amount Paid"
            value={`₦${student.amountPaid.toLocaleString()}`}
            valueClassName="text-emerald-600"
          />
          <Summary
            label="Outstanding Balance"
            value={`₦${student.outstandingBalance.toLocaleString()}`}
            valueClassName="text-rose-600"
          />
        </div>
      </Card>
    </motion.div>
  );
};
interface SummaryProps {
  label: string;
  value: string;
  valueClassName?: string;
}

const Summary = ({ label, value, valueClassName = "" }: SummaryProps) => (
  <div className="flex items-center justify-between">
    <span className="text-slate-500">{label}</span>

    <span className={`font-semibold ${valueClassName}`}>{value}</span>
  </div>
);

export default FeeSummaryCard;
