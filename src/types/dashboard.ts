export interface KPI {
  title: string;
  value: string;
  subtitle: string;
}

export interface ReconciliationStat {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface QuickAction {
  id: string;
  label: string;
}

export interface RecentPayment {
  id: number;
  student: string;
  accountNumber: string;
  class: string;
  amount: string;
  status: "PAID" | "UNDERPAID" | "OVERPAID" | "PENDING";
  date: string;
}

export interface OutstandingStudent {
  initials: string;
  name: string;
  class: string;
  progress: number;
  amount: string;
}

export interface Deadline {
  title: string;
  days: string;
}

export interface RevenueChartData {
  week: string;
  expected: number;
  collected: number;
  outstanding: number;
}

export interface RevenueSeries {
  key: keyof Omit<RevenueChartData, "week">;
  label: string;
  color: string;
  dashed: boolean;
}
