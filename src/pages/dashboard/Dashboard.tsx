import { motion } from "framer-motion";

import Card from "@/components/ui/Card";
import PageHeader from "@/components/ui/PageHeader";

import DashboardKPIs from "@/components/dashboard/DashboardKPIs";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentPayments from "@/components/dashboard/RecentPayments";
import OutstandingStudents from "@/components/dashboard/OutstandingStudents";
import ReconciliationCard from "@/components/dashboard/ReconciliationCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";

import {
  kpis,
  quickActions,
  recentPayments,
  reconciliationStats,
  outstandingStudents,
  upcomingDeadlines,
} from "@/mock/dashboard";

import { revenueChartData, revenueSeries } from "@/mock/chartData";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <PageHeader
        title="Dashboard"
        description="Monitor revenue, reconciliation, and payment activities."
      />

      <QuickActions actions={quickActions} />

      <DashboardKPIs kpis={kpis} />

      <div className="grid gap-6 xl:grid-cols-3">
        <Card className="p-6 xl:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">
            Revenue Reconciliation Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Expected vs collected revenue over time.
          </p>

          <RevenueChart data={revenueChartData} series={revenueSeries} />
        </Card>

        <ReconciliationCard stats={reconciliationStats} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <RecentPayments payments={recentPayments} />

        <div className="space-y-6">
          <OutstandingStudents students={outstandingStudents} />
          <UpcomingDeadlines deadlines={upcomingDeadlines} />
        </div>
      </div>
    </motion.div>
  );
}
