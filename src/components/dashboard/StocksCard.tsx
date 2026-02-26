import { LineChart, Line, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

const data = [
  { v: 40 }, { v: 35 }, { v: 50 }, { v: 45 }, { v: 55 }, { v: 48 }, { v: 60 }, { v: 52 }, { v: 65 }, { v: 58 }, { v: 70 }, { v: 62 },
];

const StocksCard = () => (
  <div className="card-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <TrendingUp size={20} className="text-accent" />
      <div>
        <p className="text-2xl text-metric">$ 16,073.49</p>
        <p className="text-sm font-semibold text-foreground">Main Stocks</p>
        <p className="text-xs text-muted-foreground">Extended & Limited</p>
      </div>
      <span className="text-accent text-sm font-bold ml-2">+9.3%</span>
    </div>
    <div className="w-full md:w-64 h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="v" stroke="hsl(var(--warning))" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default StocksCard;
