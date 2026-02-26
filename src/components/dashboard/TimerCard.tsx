import { Clock } from "lucide-react";

const TimerCard = () => (
  <div className="card-surface h-full flex flex-col items-center justify-center text-center">
    <Clock size={20} className="text-muted-foreground mb-2" />
    <p className="text-2xl font-bold text-foreground">13 Days</p>
    <p className="text-xs text-muted-foreground">109 hours, 23 minutes</p>
    {/* Mini dot calendar */}
    <div className="grid grid-cols-7 gap-1 mt-3">
      {Array.from({ length: 28 }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i % 5 === 0 ? "bg-warning" : i % 3 === 0 ? "bg-primary" : "bg-secondary"
          }`}
        />
      ))}
    </div>
  </div>
);

export default TimerCard;
