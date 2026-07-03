import { GraduationCap, Wallet, AlertCircle, CheckCircle } from "lucide-react";
import StatCard from "@/components/ui/StatCard";
import { studentStats } from "@/mock/students";

const stats = [
  {
    title: "Total Students",
    value: studentStats.totalStudents.toString(),
    trend: "Registered",
    icon: GraduationCap,
  },
  {
    title: "Expected Revenue",
    value: `₦${studentStats.expectedRevenue.toLocaleString()}`,
    trend: "Current Term",
    icon: Wallet,
  },
  {
    title: "Outstanding",
    value: `₦${studentStats.outstandingRevenue.toLocaleString()}`,
    trend: `${studentStats.pendingStudents} Pending`,
    icon: AlertCircle,
  },
  {
    title: "Paid Students",
    value: studentStats.paidStudents.toString(),
    trend: "Fully Paid",
    icon: CheckCircle,
  },
];

export default function StudentStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <StatCard
          key={item.title}
          title={item.title}
          value={item.value}
          trend={item.trend}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
