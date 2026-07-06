import Card from "@/components/ui/Card";

import StudentMobileCard from "./StudentMobileCard";
import StudentRow from "./StudentRow";

import type { Student } from "@/types/student";

interface StudentTableProps {
  students: Student[];
  onDelete: (student: Student) => void;
}

const StudentTable = ({ students, onDelete }: StudentTableProps) => {
  return (
    <>
      {/* Desktop */}
      <Card className="hidden min-[1200px]:block p-6">
        {/* Header */}
        <div className="grid grid-cols-[2.2fr_0.8fr_1.3fr_1fr_1fr_1fr_0.9fr_60px] gap-4 border-b border-slate-100 pb-4 text-sm font-semibold text-slate-500">
          <p>Student</p>
          <p>Class</p>
          <p>Account</p>
          <p>Expected</p>
          <p>Paid</p>
          <p>Outstanding</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {/* Rows */}
        <div className="mt-4 space-y-4">
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))}
        </div>
      </Card>

      {/* Mobile */}
      <div className="space-y-4 min-[1200px]:hidden">
        {students.map((student) => (
          <StudentMobileCard
            key={student.id}
            student={student}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
};

export default StudentTable;
