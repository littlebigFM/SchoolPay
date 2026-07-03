import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Card className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-slate-500">{title}</p>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">{value}</h3>

            {trend && <p className="mt-2 text-sm text-emerald-600">{trend}</p>}
          </div>

          <div className="rounded-2xl bg-violet-100 p-3 text-violet-700">
            <Icon size={22} />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
