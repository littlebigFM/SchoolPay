export type StudentPaymentStatus =
  | "PAID"
  | "UNDERPAID"
  | "OVERPAID"
  | "PENDING";

export interface Student {
  id: string;
  admissionNumber: string;

  firstName: string;
  lastName: string;
  fullName: string;
  initials: string;

  class: string;
  gender: "Male" | "Female";

  parentName: string;
  parentPhone: string;

  virtualAccount: string;

  expectedFee: number;
  amountPaid: number;
  outstandingBalance: number;

  paymentStatus: StudentPaymentStatus;

  avatar?: string;
}
