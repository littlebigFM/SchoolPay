import Card from "@/components/ui/Card";

import { paymentHistory } from "@/mock/paymentHistory";

const PaymentTimeline = () => {
  return (
    <Card className="p-6">
      <h2 className="mb-8 text-lg font-semibold">Payment Timeline</h2>

      <div className="relative ml-3 border-l-2 border-violet-200">
        {paymentHistory.map((payment) => (
          <div key={payment.id} className="relative mb-8 pl-8 last:mb-0">
            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-violet-600" />

            <p className="font-semibold">₦{payment.amount.toLocaleString()}</p>

            <p className="mt-1 text-sm text-slate-500">{payment.date}</p>

            <p className="mt-2 text-sm text-slate-600">
              Payment received via{" "}
              <span className="font-medium">{payment.method}</span>
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PaymentTimeline;
