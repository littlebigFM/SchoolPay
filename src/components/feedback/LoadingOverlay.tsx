import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingOverlayProps {
  open: boolean;
  title?: string;
  description?: string;
}

const LoadingOverlay = ({
  open,
  title = "Please wait...",
  description = "We're processing your request.",
}: LoadingOverlayProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            className="w-[90%] max-w-md rounded-3xl bg-white p-8 shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <Loader2 size={42} className="animate-spin text-violet-600" />

              <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>

              <p className="mt-2 text-sm text-slate-500">{description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
