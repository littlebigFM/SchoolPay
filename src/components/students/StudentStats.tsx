import { CheckCircle2, Users, Wallet, Clock3 } from "lucide-react";

import StatCard from "@/components/ui/StatCard";

import type { Student } from "@/types/student";

interface StudentStatsProps {
  students: Student[];
}

const StudentStats = ({ students }: StudentStatsProps) => {
  const totalStudents = students.length;

  const expectedRevenue = students.reduce(
    (sum, student) => sum + student.expectedFee,
    0,
  );

  const outstandingRevenue = students.reduce(
    (sum, student) => sum + student.outstandingBalance,
    0,
  );

  const paidStudents = students.filter(
    (student) => student.paymentStatus === "PAID",
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Students"
        value={totalStudents.toString()}
        icon={Users}
      />

      <StatCard
        title="Expected Revenue"
        value={`₦${expectedRevenue.toLocaleString()}`}
        icon={Wallet}
      />

      <StatCard
        title="Outstanding"
        value={`₦${outstandingRevenue.toLocaleString()}`}
        icon={Clock3}
      />

      <StatCard
        title="Paid Students"
        value={paidStudents.toString()}
        icon={CheckCircle2}
      />
    </div>
  );
};

export default StudentStats;
