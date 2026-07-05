import type { Invoice } from "@/types/invoice";

export const invoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-0001",
    studentId: "1",
    studentName: "Emeka Nwosu",
    initials: "EN",
    class: "SS2A",
    feeType: "School Fees",
    amount: 120000,
    amountPaid: 120000,
    outstandingBalance: 0,
    dueDate: "2026-07-31",
    status: "PAID",
  },
  {
    id: "2",
    invoiceNumber: "INV-0002",
    studentId: "2",
    studentName: "Fatima Al-Hassan",
    initials: "FA",
    class: "JSS3B",
    feeType: "School Fees",
    amount: 120000,
    amountPaid: 85000,
    outstandingBalance: 35000,
    dueDate: "2026-07-31",
    status: "UNDERPAID",
  },
  {
    id: "3",
    invoiceNumber: "INV-0003",
    studentId: "3",
    studentName: "Chukwuemeka Eze",
    initials: "CE",
    class: "SS1C",
    feeType: "School Fees",
    amount: 120000,
    amountPaid: 150000,
    outstandingBalance: 0,
    dueDate: "2026-07-31",
    status: "OVERPAID",
  },
  {
    id: "4",
    invoiceNumber: "INV-0004",
    studentId: "4",
    studentName: "Ngozi Okafor",
    initials: "NO",
    class: "JSS1A",
    feeType: "School Fees",
    amount: 120000,
    amountPaid: 0,
    outstandingBalance: 120000,
    dueDate: "2026-07-31",
    status: "PENDING",
  },
  {
    id: "5",
    invoiceNumber: "INV-0005",
    studentId: "5",
    studentName: "Yusuf Bello",
    initials: "YB",
    class: "SS3A",
    feeType: "Exam Fees",
    amount: 40000,
    amountPaid: 40000,
    outstandingBalance: 0,
    dueDate: "2026-08-15",
    status: "PAID",
  },
  {
    id: "6",
    invoiceNumber: "INV-0006",
    studentId: "6",
    studentName: "Femi Oyeleke",
    initials: "FO",
    class: "SS3A",
    feeType: "PTA Levy",
    amount: 15000,
    amountPaid: 0,
    outstandingBalance: 15000,
    dueDate: "2026-08-10",
    status: "PENDING",
  },
];

export const invoiceStats = {
  totalInvoices: invoices.length,

  totalExpected: invoices.reduce((total, invoice) => total + invoice.amount, 0),

  totalCollected: invoices.reduce(
    (total, invoice) => total + invoice.amountPaid,
    0,
  ),

  totalOutstanding: invoices.reduce(
    (total, invoice) => total + invoice.outstandingBalance,
    0,
  ),

  paidInvoices: invoices.filter((invoice) => invoice.status === "PAID").length,

  underpaidInvoices: invoices.filter(
    (invoice) => invoice.status === "UNDERPAID",
  ).length,

  overpaidInvoices: invoices.filter((invoice) => invoice.status === "OVERPAID")
    .length,

  pendingInvoices: invoices.filter((invoice) => invoice.status === "PENDING")
    .length,
};
