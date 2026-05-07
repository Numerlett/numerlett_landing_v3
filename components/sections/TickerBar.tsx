const items = [
  "Custom Software Development",
  "SEO & Digital Marketing",
  "AI & Machine Learning",
  "SEED Inventory System",
  "Cloud & DevOps",
  "Brand Strategy",
  "Data Analytics",
  "Mobile App Development",
  "Content Marketing",
  "Cybersecurity",
];

export default function TickerBar() {
  return (
    <div
      className="border-y border-(--nl-border) bg-(--nl-grey-light) py-4"
      aria-hidden="true"
    >
      <div className="ticker-track flex gap-14 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-2 text-[13px] font-semibold tracking-[-0.2px] text-(--nl-text-muted)"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-(--nl-green)" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
