import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navigation } from "@/constants/navigation";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed left-0 top-0 z-50 h-screen w-[280px] border-r border-slate-200 bg-white lg:hidden"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{
              type: "tween",
              duration: 0.25,
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">SchoolPay</h1>

                <p className="mt-1 text-sm text-slate-500">
                  Payment Infrastructure
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              {navigation.map((group) => (
                <div key={group.section} className="mb-6">
                  <p className="mb-3 px-4 text-xs font-semibold tracking-wider text-slate-400">
                    {group.section}
                  </p>

                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;

                      return (
                        <li key={item.path}>
                          <NavLink to={item.path} onClick={onClose}>
                            {({ isActive }) => (
                              <div
                                className={`relative flex items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 transition-all ${
                                  isActive
                                    ? "bg-violet-100 text-violet-700"
                                    : "text-slate-600 hover:bg-slate-100"
                                }`}
                              >
                                {isActive && (
                                  <motion.div
                                    layoutId="sidebar-indicator"
                                    className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-violet-600"
                                  />
                                )}

                                <Icon
                                  size={20}
                                  className={
                                    isActive
                                      ? "text-violet-700"
                                      : "text-slate-500"
                                  }
                                />

                                <span className="font-medium">
                                  {item.label}
                                </span>
                              </div>
                            )}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
