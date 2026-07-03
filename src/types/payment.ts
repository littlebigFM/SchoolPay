export type PaymentStatus = "PAID" | "UNDERPAID" | "OVERPAID" | "PENDING";

export interface Payment {
  id: string;
  studentId: string;
  studentName: string;
  initials: string;
  class: string;
  transactionReference: string;
  virtualAccount: string;
  amountPaid: number;
  expectedAmount: number;
  paymentMethod: string;
  bankName: string;
  paymentDate: string;
  paymentTime: string;
  status: PaymentStatus;
}
