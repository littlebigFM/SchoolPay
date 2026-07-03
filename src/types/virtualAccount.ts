export type VirtualAccountStatus =
  | "Active"
  | "Pending"
  | "Inactive"
  | "Suspended";

export interface VirtualAccount {
  id: string;
  studentId: string;

  studentName: string;
  initials: string;
  class: string;

  bankName: string;
  accountNumber: string;
  accountName: string;

  status: VirtualAccountStatus;

  expectedFee: number;
  amountPaid: number;
  outstandingBalance: number;

  createdAt: string;
}
