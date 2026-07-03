import { AlertCircle, Scale, TrendingUp, Users, Wallet } from "lucide-react";

import StatCard from "@/components/ui/StatCard";
import type { KPI } from "@/types/dashboard";

const icons = [Wallet, TrendingUp, AlertCircle, Users, Scale];

interface DashboardKPIsProps {
  kpis: KPI[];
}

const DashboardKPIs = ({ kpis }: DashboardKPIsProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {kpis.map((item, index) => {
        const Icon = icons[index];

        return (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            trend={item.subtitle}
            icon={Icon}
          />
        );
      })}
    </div>
  );
};

export default DashboardKPIs;
