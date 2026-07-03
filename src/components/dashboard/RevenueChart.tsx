import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { RevenueChartData, RevenueSeries } from "@/types/dashboard";

type ChartTooltipEntry = {
  dataKey?: string;
  value?: number;
};

interface RevenueChartProps {
  data: RevenueChartData[];
  series: RevenueSeries[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: ChartTooltipEntry[];
  label?: string | number;
  series: RevenueSeries[];
}

const CustomTooltip = ({
  active,
  payload,
  label,
  series,
}: CustomTooltipProps) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
      <p className="mb-3 text-sm font-semibold text-slate-900">{label}</p>

      <div className="space-y-2">
        {series.map(({ key, label: name, color }) => {
          const entry = payload.find((item) => item.dataKey === key);

          return (
            <div key={key} className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: color }}
                />

                <span className="text-xs text-slate-600">{name}</span>
              </div>

              <span className="text-xs font-semibold text-slate-900">
                ₦{entry?.value}M
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RevenueChart = ({ data, series }: RevenueChartProps) => {
  return (
    <div className="mt-6">
      {/* Legend */}
      <div className="mb-5 flex flex-wrap gap-5">
        {series.map(({ key, label, color, dashed }) => (
          <div key={key} className="flex items-center gap-2">
            <span
              className="w-4"
              style={{
                borderTop: `2px ${dashed ? "dashed" : "solid"} ${color}`,
              }}
            />

            <span className="text-xs text-slate-500">{label}</span>
          </div>
        ))}
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="fillCollected" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.08} />

                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#F1F5F9" />

            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 11,
                fill: "#94A3B8",
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              width={55}
              tick={{
                fontSize: 11,
                fill: "#94A3B8",
              }}
              tickFormatter={(value) => `₦${value}M`}
            />

            <Tooltip
              cursor={{
                stroke: "#E2E8F0",
                strokeWidth: 1,
              }}
              content={<CustomTooltip series={series} />}
            />

            {series.map((item) => (
              <Area
                key={item.key}
                type="monotone"
                dataKey={item.key}
                stroke={item.color}
                strokeWidth={item.key === "collected" ? 2.5 : 1.5}
                strokeDasharray={item.dashed ? "6 4" : undefined}
                fill={
                  item.key === "collected"
                    ? "url(#fillCollected)"
                    : "transparent"
                }
                fillOpacity={item.key === "collected" ? 0.5 : 0}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: item.color,
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
