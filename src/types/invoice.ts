import type { PaymentStatus } from "./payment";

export interface Invoice {
  id: string;

  invoiceNumber: string;

  studentId: string;

  studentName: string;

  initials: string;

  class: string;

  feeType: string;

  amount: number;

  amountPaid: number;

  outstandingBalance: number;

  dueDate: string;

  status: PaymentStatus;
}
