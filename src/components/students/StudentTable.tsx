import Card from "@/components/ui/Card";

import StudentMobileCard from "./StudentMobileCard";
import StudentRow from "./StudentRow";

import type { Student } from "@/types/student";

interface StudentTableProps {
  students: Student[];
}

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden p-6 min-[1200px]:block">
        {/* Header */}
        <div className="px-6 grid grid-cols-[2.2fr_0.8fr_1.3fr_1fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-200 pb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>Student</span>
          <span>Class</span>
          <span>Account</span>
          <span>Expected</span>
          <span>Paid</span>
          <span>Outstanding</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>

        {/* Rows */}
        <div className="mt-4 space-y-4">
          {students.map((student) => (
            <StudentRow key={student.id} student={student} />
          ))}
        </div>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 min-[1200px]:hidden">
        {students.map((student) => (
          <StudentMobileCard key={student.id} student={student} />
        ))}
      </div>
    </>
  );
};

export default StudentTable;
