import type { QuickAction } from "@/types/dashboard";

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action.id}
          className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};
export default QuickActions;
