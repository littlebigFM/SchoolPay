import type { PaymentStatus } from "@/types/payment";

import type {
  KPI,
  QuickAction,
  ReconciliationStat,
  RecentPayment,
  OutstandingStudent,
  Deadline,
} from "@/types/dashboard";

export const kpis: KPI[] = [
  {
    title: "Expected Revenue",
    value: "₦24.5M",
    subtitle: "Current Term",
  },
  {
    title: "Collected Revenue",
    value: "₦18.2M",
    subtitle: "74.3% Collected",
  },
  {
    title: "Outstanding Balance",
    value: "₦6.3M",
    subtitle: "342 Students",
  },
  {
    title: "Collection Rate",
    value: "74.3%",
    subtitle: "+8.2% vs Last Term",
  },
  {
    title: "Reconciliation Accuracy",
    value: "98.4%",
    subtitle: "Matched Payments",
  },
];

export const quickActions: QuickAction[] = [
  {
    id: "student",
    label: "Add Student",
  },
  // {
  //   id: "account",
  //   label: "Generate Account",
  // },
  {
    id: "invoice",
    label: "Create Invoice",
  },
  {
    id: "reconcile",
    label: "Reconcile Now",
  },
];

export const recentTransactions: {
  id: number;
  student: string;
  expected: string;
  received: string;
  variance: string;
  status: PaymentStatus;
}[] = [
  {
    id: 1,
    student: "John Doe",
    expected: "₦120,000",
    received: "₦120,000",
    variance: "₦0",
    status: "PAID",
  },
  {
    id: 2,
    student: "Mary James",
    expected: "₦120,000",
    received: "₦80,000",
    variance: "-₦40,000",
    status: "UNDERPAID",
  },
  {
    id: 3,
    student: "James David",
    expected: "₦120,000",
    received: "₦150,000",
    variance: "+₦30,000",
    status: "OVERPAID",
  },
  {
    id: 4,
    student: "Sarah Daniel",
    expected: "₦120,000",
    received: "₦0",
    variance: "-₦120,000",
    status: "PENDING",
  },
];

export const outstandingStudents: OutstandingStudent[] = [
  {
    initials: "AO",
    name: "Adaora Obiora",
    class: "SS 2B",
    progress: 65,
    amount: "₦30,625",
  },
  {
    initials: "BM",
    name: "Babatunde Mustapha",
    class: "SS 3C",
    progress: 20,
    amount: "₦70,000",
  },
  {
    initials: "CE",
    name: "Chiamaka Eze-Obi",
    class: "JSS 3A",
    progress: 45,
    amount: "₦46,750",
  },
  {
    initials: "IA",
    name: "Ifeanyi Achebe",
    class: "SS 1B",
    progress: 80,
    amount: "₦17,500",
  },
];

export const recentPayments: RecentPayment[] = [
  {
    id: 1,
    student: "Emeka Nwosu",
    accountNumber: "0115 2847 3301",
    class: "SS 2A",
    amount: "₦87,500",
    status: "PAID",
    date: "Jun 24, 10:31",
  },
  {
    id: 2,
    student: "Fatima Al-Hassan",
    accountNumber: "0115 2847 7722",
    class: "JSS 3B",
    amount: "₦45,000",
    status: "UNDERPAID",
    date: "Jun 24, 09:14",
  },
  {
    id: 3,
    student: "Chukwuemeka Eze",
    accountNumber: "0115 2847 5519",
    class: "SS 1C",
    amount: "₦95,200",
    status: "OVERPAID",
    date: "Jun 23, 16:45",
  },
  {
    id: 4,
    student: "Ngozi Okafor",
    accountNumber: "0115 2847 1103",
    class: "JSS 1A",
    amount: "₦72,000",
    status: "PAID",
    date: "Jun 23, 14:22",
  },
  {
    id: 5,
    student: "Yusuf Bello",
    accountNumber: "0115 2847 9988",
    class: "SS 3A",
    amount: "₦0",
    status: "PENDING",
    date: "Awaiting",
  },
];
export const upcomingDeadlines: Deadline[] = [
  {
    title: "Term 1 Final Deadline",
    days: "8 days",
  },
  {
    title: "SS3 Exam Fee",
    days: "6 days",
  },
  {
    title: "Activity Fee (JSS)",
    days: "16 days",
  },
  {
    title: "Second Term Registration",
    days: "42 days",
  },
];

export const reconciliationStats: ReconciliationStat[] = [
  {
    label: "Paid",
    count: 840,
    percentage: 70,
    color: "bg-emerald-500",
  },
  {
    label: "Underpaid",
    count: 210,
    percentage: 18,
    color: "bg-amber-500",
  },
  {
    label: "Overpaid",
    count: 54,
    percentage: 6,
    color: "bg-sky-500",
  },
  {
    label: "Pending",
    count: 180,
    percentage: 15,
    color: "bg-slate-400",
  },
];
