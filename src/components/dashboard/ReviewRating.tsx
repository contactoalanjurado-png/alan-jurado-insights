import { X } from "lucide-react";

const emojis = ["😁", "😊", "😐", "😟", "😢"];

const ReviewRating = () => (
  <div className="card-surface h-full flex flex-col justify-between">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-primary" />
        <div className="w-6 h-1 bg-foreground rounded" />
      </div>
      <button className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
        <X size={12} />
      </button>
    </div>
    <div>
      <p className="text-label mb-1">Review rating</p>
      <h3 className="text-base font-bold text-foreground leading-snug">
        How is your business management going?
      </h3>
    </div>
    <div className="flex items-center justify-between mt-4">
      {emojis.map((e, i) => (
        <button
          key={i}
          className="text-2xl hover:scale-125 transition-transform grayscale hover:grayscale-0"
        >
          {e}
        </button>
      ))}
    </div>
  </div>
);

export default ReviewRating;
