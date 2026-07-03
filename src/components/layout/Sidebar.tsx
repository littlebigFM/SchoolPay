import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[280px] border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 p-6">
        <h1 className="text-2xl font-bold text-slate-900">SchoolPay</h1>

        <p className="mt-1 text-sm text-slate-500">Payment Infrastructure</p>
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
                    <NavLink to={item.path}>
                      {({ isActive }) => (
                        <motion.div
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.15 }}
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
                              isActive ? "text-violet-700" : "text-slate-500"
                            }
                          />

                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
