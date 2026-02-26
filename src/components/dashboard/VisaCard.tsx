import { ChevronDown, Plus, Share2 } from "lucide-react";

const VisaCard = () => (
  <div className="card-surface h-full flex flex-col justify-between">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-bold tracking-wider text-foreground">VISA</span>
      <div className="flex items-center gap-1 bg-secondary rounded-full px-3 py-1 text-xs text-muted-foreground">
        Direct Debits <ChevronDown size={12} />
      </div>
    </div>
    <div className="mb-4">
      <p className="text-label mb-1">Linked to main account</p>
      <p className="text-foreground font-semibold text-lg tracking-widest">•••• 2719</p>
    </div>
    <div className="flex items-center gap-2 mb-4">
      <button className="bg-foreground text-background rounded-full px-5 py-2 text-xs font-semibold">Receive</button>
      <button className="border border-border rounded-full px-5 py-2 text-xs font-medium text-foreground">Send</button>
    </div>
    <div className="flex items-center justify-between">
      <button className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-muted-foreground">
        <Plus size={14} />
      </button>
      <div className="flex items-center gap-2">
        <Share2 size={14} className="text-muted-foreground" />
        <span className="text-metric text-lg">$ 25.00</span>
      </div>
    </div>
    <p className="text-label mt-1">Monthly regular fee</p>
    <button className="text-warning text-xs font-medium mt-1 flex items-center gap-1">
      ✏️ Edit cards limitation
    </button>
  </div>
);

export default VisaCard;
