import {
  kpis,
  quickActions,
  recentTransactions,
  outstandingStudents,
  recentPayments,
  upcomingDeadlines,
  reconciliationStats,
} from "@/mock/dashboard";

export const dashboardService = {
  getKPIs: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return kpis;
  },

  getQuickActions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return quickActions;
  },

  getRecentTransactions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return recentTransactions;
  },

  getOutstandingStudents: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return outstandingStudents;
  },

  getRecentPayments: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return recentPayments;
  },

  getUpcomingDeadlines: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return upcomingDeadlines;
  },

  getReconciliationStats: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return reconciliationStats;
  },
};
