import { Search, Filter, MoreVertical, Settings2 } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

const barData = Array.from({ length: 12 }, (_, i) => ({ v: Math.random() * 60 + 20 }));

const ActivityManager = () => (
  <div className="card-surface h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-foreground">Activity manager</h3>
      <div className="flex items-center gap-2">
        <MoreVertical size={16} className="text-muted-foreground" />
        <Settings2 size={16} className="text-muted-foreground" />
        <button className="flex items-center gap-1 text-xs text-muted-foreground">
          <Filter size={12} /> Filters
        </button>
      </div>
    </div>

    {/* Search */}
    <div className="flex items-center gap-2 mb-4">
      <div className="flex-1 flex items-center gap-2 bg-secondary/60 rounded-full px-3 py-2">
        <Search size={14} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search in activities..."
          className="bg-transparent border-none outline-none text-xs text-foreground placeholder:text-muted-foreground w-full"
        />
      </div>
      <div className="flex items-center gap-1">
        {["Team", "Insights", "Today"].map((tag) => (
          <span key={tag} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
            {tag} ×
          </span>
        ))}
      </div>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-3 gap-3">
      {/* Amount with bar chart */}
      <div className="card-surface !bg-secondary/50 !p-3">
        <p className="text-2xl text-metric">$ 43.20 <span className="text-xs text-muted-foreground font-normal">USD</span></p>
        <div className="h-16 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <Bar dataKey="v" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Business plans */}
      <div className="card-surface !bg-secondary/50 !p-3">
        <p className="text-sm font-semibold text-foreground mb-2">Business plans</p>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-center gap-1">• Bank loans <ChevronIcon /></li>
          <li className="flex items-center gap-1">• Accounting</li>
          <li className="flex items-center gap-1">• HR management</li>
        </ul>
      </div>

      {/* Wallet Verification */}
      <div className="card-surface !bg-secondary/50 !p-3 flex flex-col items-center text-center">
        <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center mb-2">
          <span className="text-warning text-lg">✦</span>
        </div>
        <p className="text-sm font-semibold text-foreground">Wallet Verification</p>
        <p className="text-[10px] text-muted-foreground mt-1">Enable 2-step verification to secure your wallet</p>
        <button className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground text-xs px-4 py-1.5 rounded-full font-medium transition-colors">
          Enable
        </button>
      </div>
    </div>
  </div>
);

const ChevronIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-muted-foreground">
    <path d="M3 4L5 6L7 4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default ActivityManager;
