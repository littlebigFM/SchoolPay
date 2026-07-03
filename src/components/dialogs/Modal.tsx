import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import type { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  showCloseButton?: boolean;
}

const Modal = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  size = "md",
  showCloseButton = true,
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="fixed left-1/2 top-1/2 z-50 w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-2xl focus:outline-none"
                style={{
                  maxWidth: size === "sm" ? 420 : size === "md" ? 560 : 760,
                }}
              >
                {(title || description || showCloseButton) && (
                  <div className="mb-6 flex items-start justify-between">
                    <div>
                      {title && (
                        <Dialog.Title className="text-xl font-bold text-slate-900">
                          {title}
                        </Dialog.Title>
                      )}

                      {description && (
                        <Dialog.Description className="mt-2 text-sm text-slate-500">
                          {description}
                        </Dialog.Description>
                      )}
                    </div>

                    {showCloseButton && (
                      <button
                        type="button"
                        onClick={() => onOpenChange(false)}
                        className="rounded-lg p-2 transition hover:bg-slate-100"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                )}

                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Modal;
