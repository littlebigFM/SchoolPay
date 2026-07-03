import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import Avatar from "@/components/ui/Avatar";

import StudentActions from "./StudentActions";

import type { Student } from "@/types/student";

interface StudentMobileCardProps {
  student: Student;
}

const StudentMobileCard = ({ student }: StudentMobileCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div layout transition={{ duration: 0.25 }}>
      <Card className="overflow-hidden p-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 text-left"
        >
          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <Avatar initials={student.initials} />

              <div>
                <h3 className="font-semibold">{student.fullName}</h3>

                <p className="text-sm text-slate-500">{student.class}</p>

                <p className="mt-1 text-sm font-medium text-emerald-600">
                  ₦{student.amountPaid.toLocaleString()} Paid
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3">
              <StatusBadge status={student.paymentStatus} />

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
                    <p className="text-xs text-slate-500">Admission No.</p>

                    <p className="mt-1 font-medium">
                      {student.admissionNumber}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Virtual Account</p>

                    <p className="mt-1 font-medium">{student.virtualAccount}</p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Expected Fee</p>

                    <p className="mt-1">
                      ₦{student.expectedFee.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Amount Paid</p>

                    <p className="mt-1 font-medium text-emerald-600">
                      ₦{student.amountPaid.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Outstanding</p>

                    <p className="mt-1 font-semibold text-rose-600">
                      ₦{student.outstandingBalance.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Parent</p>

                    <p className="mt-1">{student.parentName}</p>
                  </div>

                  <div className="col-span-2">
                    <p className="text-xs text-slate-500">Parent Phone</p>

                    <p className="mt-1">{student.parentPhone}</p>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigate(`/students/${student.id}`)}
                    className="flex-1 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
                  >
                    View Profile
                  </button>

                  <StudentActions studentId={student.id} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default StudentMobileCard;
