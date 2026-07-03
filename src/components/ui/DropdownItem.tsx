import type { LucideIcon } from "lucide-react";
import { DropdownMenu } from "./Dropdown";

import type { ReactNode } from "react";

interface DropdownItemProps {
  children: ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
}

const DropdownItem = ({
  children,
  icon,
  onClick,
  disabled = false,
  destructive = false,
}: DropdownItemProps) => {
  const Icon = icon;

  return (
    <DropdownMenu.Item
      disabled={disabled}
      onSelect={(event) => {
        event.preventDefault();

        if (!disabled && onClick) {
          onClick();
        }
      }}
      className={`
        flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium
        outline-none transition-colors
        ${
          destructive
            ? "text-rose-600 hover:bg-rose-50 focus:bg-rose-50"
            : "text-slate-700 hover:bg-slate-100 focus:bg-slate-100"
        }
        ${disabled ? "pointer-events-none opacity-50" : ""}
      `}
    >
      {Icon && (
        <span className="flex h-5 w-5 items-center justify-center">
          <Icon size={16} />
        </span>
      )}

      <span>{children}</span>
    </DropdownMenu.Item>
  );
};

export default DropdownItem;
