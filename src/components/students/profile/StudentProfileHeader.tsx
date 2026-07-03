import { Bell, FileText } from "lucide-react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ui/StatusBadge";

import type { Student } from "@/types/student";
import { motion } from "framer-motion";

interface StudentProfileHeaderProps {
  student: Student;
}

const StudentProfileHeader = ({ student }: StudentProfileHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <Avatar initials={student.initials} size="md" />

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-slate-900">
                {student.fullName}
              </h1>

              <StatusBadge status={student.paymentStatus} />
            </div>

            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>Admission: {student.admissionNumber}</span>
              <span>Class: {student.class}</span>
              <span>VA: {student.virtualAccount}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Button variant="outline">
              <Bell size={18} />
              Send Reminder
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
            <Button>
              <FileText size={18} />
              Generate Receipt
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentProfileHeader;
