import { ChevronDown, Clock } from "lucide-react";

const TotalIncomeCard = () => (
  <div className="card-surface h-full flex flex-col justify-between">
    <div className="flex items-center justify-between mb-4">
      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
        <Clock size={16} className="text-muted-foreground" />
      </div>
      <div className="flex items-center gap-1 bg-secondary rounded-full px-3 py-1 text-xs text-muted-foreground">
        Weekly <ChevronDown size={12} />
      </div>
    </div>
    <div className="mb-3">
      <p className="text-label mb-1">Total Income</p>
      <p className="text-3xl text-metric">$ 23,194.80</p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 bg-secondary rounded-full px-3 py-1 text-xs text-muted-foreground">
        Weekly <ChevronDown size={12} />
      </div>
    </div>
    <div className="mt-3 pt-3 border-t border-border">
      <p className="text-label mb-1">Total paid</p>
      <div className="flex items-center justify-between">
        <p className="text-xl text-metric">$ 8,145.20</p>
        <button className="text-primary text-xs font-medium flex items-center gap-1">
          👁 View on chart mode
        </button>
      </div>
    </div>
  </div>
);

export default TotalIncomeCard;
