import Card from "@/components/ui/Card";

import type { Deadline } from "@/types/dashboard";

interface UpcomingDeadlinesProps {
  deadlines: Deadline[];
}

const UpcomingDeadlines = ({ deadlines }: UpcomingDeadlinesProps) => {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-slate-100 px-5 py-4">
        <h3 className="font-semibold">Upcoming Deadlines</h3>
      </div>

      {deadlines.map((deadline) => (
        <div
          key={deadline.title}
          className="flex items-center justify-between border-b border-slate-100 px-5 py-4 last:border-none"
        >
          <span className="text-sm font-medium">{deadline.title}</span>

          <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
            {deadline.days}
          </span>
        </div>
      ))}
    </Card>
  );
};

export default UpcomingDeadlines;
