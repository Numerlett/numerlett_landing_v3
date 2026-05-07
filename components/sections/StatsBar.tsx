import Container from "@/components/Container";

const stats = [
  { value: 50, suffix: "+", label: "Clients Served Globally" },
  { value: 10, suffix: "+", label: "Years Combined Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" },
  { value: 4, suffix: "x", label: "Average ROI Delivered" },
];

export default function StatsBar() {
  return (
    <section
      className="bg-black py-14"
      aria-label="NumerLett key statistics"
      data-stats
    >
      <Container>
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`reveal ${index ? `delay-${index}` : ""} border-r border-white/10 px-6 text-center last:border-r-0`}
            >
              <div className="font-display text-[52px] font-black leading-none tracking-[-2.5px] text-white">
                <span className="text-(--nl-green)" data-count={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="mt-2 text-[13px] tracking-[0.04em] text-(--nl-grey)">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
