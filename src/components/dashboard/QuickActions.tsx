import { useNavigate } from "react-router-dom";
import type { QuickAction } from "@/types/dashboard";
import Button from "../ui/Button";

interface QuickActionsProps {
  actions: QuickAction[];
}

const QuickActions = ({ actions }: QuickActionsProps) => {
  const navigate = useNavigate();

  const handleAction = (id: string) => {
    switch (id) {
      case "student":
        navigate("/students/new");
        break;

      case "payment":
        navigate("/payments");
        break;

      case "invoice":
        navigate("/invoices");
        break;

      case "reconciliation":
        navigate("/reconciliation");
        break;

      default:
        navigate("/coming-soon");
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <Button
          variant="secondary"
          key={action.id}
          onClick={() => handleAction(action.id)}
          // className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default QuickActions;
