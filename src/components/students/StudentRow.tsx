import { motion } from "framer-motion";

import Avatar from "@/components/ui/Avatar";
import StatusBadge from "@/components/ui/StatusBadge";

import StudentActions from "./StudentActions";

import type { Student } from "@/types/student";

interface StudentRowProps {
  student: Student;
}

const StudentRow = ({ student }: StudentRowProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="grid grid-cols-[2.2fr_0.8fr_1.3fr_1fr_1fr_1fr_0.9fr_60px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Student */}
      <div className="flex items-center gap-3">
        <Avatar initials={student.initials} />

        <div>
          <p className="font-semibold text-slate-900">{student.fullName}</p>

          <p className="text-sm text-slate-500">{student.admissionNumber}</p>
        </div>
      </div>

      {/* Class */}
      <p className="font-medium text-slate-700">{student.class}</p>

      {/* Account */}
      <div>
        <p className="text-sm font-medium text-slate-800">
          {student.virtualAccount}
        </p>

        <p className="text-xs text-slate-400">Virtual Account</p>
      </div>

      {/* Expected */}
      <div>
        <p className="font-semibold">₦{student.expectedFee.toLocaleString()}</p>

        <p className="text-xs text-slate-400">Expected</p>
      </div>

      {/* Paid */}
      <div>
        <p className="font-semibold text-emerald-600">
          ₦{student.amountPaid.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">Paid</p>
      </div>

      {/* Outstanding */}
      <div>
        <p className="font-semibold text-rose-600">
          ₦{student.outstandingBalance.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">Outstanding</p>
      </div>

      {/* Status */}
      <StatusBadge status={student.paymentStatus} />

      {/* Action */}
      <div className="flex justify-end">
        <StudentActions studentId={student.id} />
      </div>
    </motion.div>
  );
};

export default StudentRow;
