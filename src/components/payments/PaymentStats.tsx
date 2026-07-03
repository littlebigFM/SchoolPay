import { CreditCard, Wallet, Clock3, CircleAlert } from "lucide-react";

import StatCard from "../ui/StatCard";

const PaymentStats = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Today's Payments"
        value="48"
        icon={CreditCard}
        // color="violet"
      />

      <StatCard
        title="Revenue Today"
        value="₦2,450,000"
        icon={Wallet}
        // color="emerald"
      />

      <StatCard
        title="Pending"
        value="9"
        icon={Clock3}
        //   color="amber"
      />

      <StatCard
        title="Underpaid"
        value="14"
        icon={CircleAlert}
        //   color="rose"
      />
    </div>
  );
};

export default PaymentStats;
