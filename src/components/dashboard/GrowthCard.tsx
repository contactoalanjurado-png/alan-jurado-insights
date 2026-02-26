import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { BarChart3 } from "lucide-react";

const data = [
  { value: 36 },
  { value: 64 },
];

const GrowthCard = () => (
  <div className="card-surface h-full flex flex-col items-center justify-between">
    <div className="flex items-center justify-between w-full mb-2">
      <BarChart3 size={16} className="text-muted-foreground" />
      <div className="flex items-center gap-2 text-xs">
        <span className="text-warning font-semibold">2023</span>
        <span className="text-muted-foreground">2022</span>
      </div>
    </div>
    <div className="relative w-24 h-24">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={30}
            outerRadius={42}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            <Cell fill="hsl(var(--accent))" />
            <Cell fill="hsl(var(--secondary))" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-bold text-foreground">36%</span>
        <span className="text-[10px] text-muted-foreground">Growth rate</span>
      </div>
    </div>
  </div>
);

export default GrowthCard;
