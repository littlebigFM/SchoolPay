import type { RevenueChartData, RevenueSeries } from "@/types/dashboard";

export const revenueChartData: RevenueChartData[] = [
  {
    week: "May 5",
    expected: 95,
    collected: 30,
    outstanding: 65,
  },
  {
    week: "May 12",
    expected: 95,
    collected: 35,
    outstanding: 60,
  },
  {
    week: "May 19",
    expected: 95,
    collected: 43,
    outstanding: 52,
  },
  {
    week: "May 26",
    expected: 95,
    collected: 51,
    outstanding: 44,
  },
  {
    week: "Jun 2",
    expected: 95,
    collected: 59,
    outstanding: 36,
  },
  {
    week: "Jun 9",
    expected: 95,
    collected: 64,
    outstanding: 31,
  },
  {
    week: "Jun 16",
    expected: 95,
    collected: 69,
    outstanding: 26,
  },
  {
    week: "Jun 24",
    expected: 95,
    collected: 72,
    outstanding: 23,
  },
];

export const revenueSeries: RevenueSeries[] = [
  {
    key: "expected",
    label: "Expected",
    color: "#6D5EF5",
    dashed: true,
  },
  {
    key: "collected",
    label: "Collected",
    color: "#10b981",
    dashed: false,
  },
  {
    key: "outstanding",
    label: "Outstanding",
    color: "#f59e0b",
    dashed: true,
  },
];
