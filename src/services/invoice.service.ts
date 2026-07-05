import { invoices } from "@/mock/invoices";

export const invoiceService = {
  getInvoices: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return invoices;
  },

  getInvoiceById: async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return invoices.find((invoice) => invoice.id === id) ?? null;
  },

  createInvoice: async () => {
    await new Promise((resolve) => setTimeout(resolve, 300));
  },
};
