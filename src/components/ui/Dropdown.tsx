import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const Dropdown = ({
  trigger,
  children,
  align = "end",
  sideOffset = 8,
}: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content asChild align={align} sideOffset={sideOffset}>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: -8,
            }}
            transition={{
              duration: 0.18,
            }}
            className="z-50 min-w-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
          >
            {children}
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;

export { DropdownMenu };
