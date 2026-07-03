import Card from "@/components/ui/Card";
import type { ReconciliationStat } from "@/types/dashboard";

interface ReconciliationCardProps {
  stats: ReconciliationStat[];
}

const ReconciliationCard = ({ stats }: ReconciliationCardProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold text-slate-900">
        Reconciliation Breakdown
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Payment status distribution.
      </p>

      <div className="mt-8 space-y-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                {stat.label}
              </span>

              <span className="text-sm font-semibold text-slate-900">
                {stat.count}
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${stat.color}`}
                style={{
                  width: `${stat.percentage}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ReconciliationCard;
