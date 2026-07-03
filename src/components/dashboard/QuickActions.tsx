import { useNavigate } from "react-router-dom";
import type { QuickAction } from "@/types/dashboard";

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  const navigate = useNavigate();

  const handleAction = (id: string) => {
    if (id === "student") return navigate("/students/new");

    // fallback: log unhandled actions for now
    console.warn("Unhandled quick action:", id);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => handleAction(action.id)}
          className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
