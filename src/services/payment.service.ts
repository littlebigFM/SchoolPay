import { payments } from "@/mock/payments";

export const paymentService = {
  getPayments: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return payments;
  },

  getPaymentById: async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return payments.find((payment) => payment.id === id) ?? null;
  },

  getStudentPayments: async (studentId: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return payments.filter((payment) => payment.studentId === studentId);
  },
};
