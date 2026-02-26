const layers = [
  { label: "$14K", size: 180, color: "bg-primary/20", text: "text-primary" },
  { label: "$9.3K", size: 150, color: "bg-primary/30", text: "text-primary" },
  { label: "$6.8K", size: 120, color: "bg-warning/30", text: "text-warning" },
  { label: "$4K", size: 90, color: "bg-warning/50", text: "text-warning" },
];

const AnnualProfitsCard = () => (
  <div className="card-surface h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-sm font-semibold text-foreground">Annual profits</h3>
      <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">2023</span>
    </div>
    <div className="flex items-end justify-center h-56 relative">
      {layers.map((l, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${l.color} flex items-center justify-center`}
          style={{
            width: l.size,
            height: l.size,
            bottom: 0,
            left: "50%",
            transform: `translateX(-50%) translateY(-${i * 10}px)`,
          }}
        >
          <span className={`text-sm font-bold ${l.text}`}>{l.label}</span>
        </div>
      ))}
    </div>
  </div>
);

export default AnnualProfitsCard;
