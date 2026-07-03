import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

const PageHeader = ({ title, description, action }: PageHeaderProps) => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

        {description && <p className="mt-2 text-slate-500">{description}</p>}
      </div>

      {action && <div className="flex shrink-0">{action}</div>}
    </div>
  );
};

export default PageHeader;
