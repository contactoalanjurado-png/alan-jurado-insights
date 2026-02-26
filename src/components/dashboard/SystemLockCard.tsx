import { Lock, ChevronDown } from "lucide-react";

const SystemLockCard = () => (
  <div className="card-surface h-full flex flex-col items-center justify-center text-center">
    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
      <Lock size={20} className="text-muted-foreground" />
    </div>
    <p className="text-sm font-semibold text-foreground">System Lock</p>
    <ChevronDown size={14} className="text-muted-foreground mt-1" />
  </div>
);

export default SystemLockCard;
