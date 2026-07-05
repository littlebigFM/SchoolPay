import { useEffect, useState } from "react";

import type { Invoice } from "@/types/invoice";

import { invoiceService } from "@/services/invoice.service";

export const useInvoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await invoiceService.getInvoices();

      setInvoices(data);

      setLoading(false);
    };

    load();
  }, []);

  return {
    invoices,
    loading,
  };
};
