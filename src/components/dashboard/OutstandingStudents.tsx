import Card from "@/components/ui/Card";

import type { OutstandingStudent } from "@/types/dashboard";

interface OutstandingStudentsProps {
  students: OutstandingStudent[];
}

const OutstandingStudents = ({ students }: OutstandingStudentsProps) => {
  return (
    <Card className="overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h3 className="font-semibold">Top Outstanding</h3>

        <span className="rounded-full bg-rose-100 px-2 py-1 text-xs font-medium text-rose-600">
          {students.length} Total
        </span>
      </div>

      {students.map((student) => (
        <div
          key={student.name}
          className="flex items-center justify-between border-b border-slate-100 px-5 py-4 last:border-none"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
              {student.initials}
            </div>

            <div>
              <p className="font-medium">{student.name}</p>

              <p className="text-sm text-slate-400">
                {student.class} • {student.progress}% paid
              </p>

              <div className="mt-2 h-1.5 w-20 rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-violet-600"
                  style={{
                    width: `${student.progress}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="font-semibold text-rose-600">{student.amount}</p>

            <p className="text-xs text-slate-400">owing</p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default OutstandingStudents;
