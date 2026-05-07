import Container from "@/components/Container";

const trustedLabels = ["StartupIndia", "D2C Brands", "SaaS Cos.", "Enterprises", "SMEs"];

const chartBars = [38, 52, 45, 68, 72, 85, 78, 95];

const metrics = [
  { label: "Revenue", value: "₹2.4M", sub: "↑ 34%", valueCls: "text-primary", subCls: "text-primary" },
  { label: "Leads", value: "1,284", sub: "↑ 21%", valueCls: "text-foreground", subCls: "text-primary" },
  { label: "Rank", value: "#1", sub: "↑ 6 pos", valueCls: "text-foreground", subCls: "text-primary" },
];

const statRows = [
  { label: "SEO Organic Traffic", badge: "+148%", badgeCls: "bg-accent text-primary" },
  { label: "Ad Campaign ROAS", badge: "4.2x", badgeCls: "bg-accent text-primary" },
  { label: "Software Uptime", badge: "99.98%", badgeCls: "bg-[#e8f4ff] text-[#2563eb]" },
];

export default function HeroSection() {
  return (
    <header
      className="relative overflow-hidden bg-background pb-16 pt-18 sm:pb-20 sm:pt-22 lg:pt-25"
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="hero-pattern absolute inset-0" aria-hidden="true" />
      <div
        className="hero-grad absolute -right-24 -top-24 h-120 w-120 sm:-right-40 sm:-top-40 sm:h-150 sm:w-150 lg:-right-50 lg:-top-50 lg:h-175 lg:w-175"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="relative">
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
              Technology · Marketing · Software
            </div>
            <h1
              id="hero-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(40px,8vw,84px)] font-black leading-none tracking-[-3px] text-foreground"
            >
              Where <span className="text-primary">Smart</span>
              <br />
              Business
              <br />
              <span className="outline-text">Begins.</span>
            </h1>
            <p className="reveal delay-2 mt-7 max-w-145 text-[18px] font-light leading-[1.75] text-muted-foreground">
              End-to-end <strong>Technology Services</strong>,{" "}
              <strong>Performance Marketing</strong>, and proprietary{" "}
              <strong>Software Products</strong> — engineered to grow your business faster, smarter,
              and sustainably.
            </p>
            <div className="reveal delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-brand-sm border-2 border-primary bg-primary px-9 py-4 text-[15.5px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-brand-green sm:w-auto"
              >
                Explore Services <span className="text-base">→</span>
              </a>
              <a
                href="#seed"
                className="inline-flex w-full items-center justify-center gap-2 rounded-brand-sm border-2 border-border-dark px-9 py-4 text-[15.5px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:w-auto"
              >
                View SEED Product
              </a>
            </div>
            <div className="reveal delay-4 mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-text-muted">
                Trusted by
              </span>
              <div className="flex flex-wrap items-center gap-7">
                {trustedLabels.map((label) => (
                  <span
                    key={label}
                    className="font-display text-[13px] font-bold tracking-[-0.3px] opacity-50 transition-opacity hover:opacity-100"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right delay-2 flex justify-center lg:justify-end">
            <div
              className="float-y w-full max-w-full rounded-brand-lg border border-border bg-background p-6 shadow-brand-lg sm:max-w-105"
              role="img"
              aria-label="NumerLett analytics dashboard preview"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[12px] font-semibold text-text-muted">
                  NumerLett — Dashboard
                </span>
              </div>
              <div className="mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="rounded-[10px] bg-muted p-3">
                    <div className="font-mono text-[10px] tracking-[0.04em] text-text-muted">
                      {m.label}
                    </div>
                    <div className={`font-display text-[18px] font-extrabold ${m.valueCls}`}>
                      {m.value}
                    </div>
                    <div className={`text-[10px] font-semibold ${m.subCls}`}>{m.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mb-3.5 rounded-[10px] bg-muted p-3.5">
                <div className="mb-3 font-mono text-[11px] font-semibold text-muted-foreground">
                  Growth vs Target — Q2 2025
                </div>
                <div className="flex h-15 items-end gap-1.5">
                  {chartBars.map((value, index) => (
                    <div
                      key={`bar-${index}`}
                      className={`w-full rounded-t ${
                        index < 3
                          ? "bg-border"
                          : index < 5
                          ? "bg-primary-mid"
                          : "bg-primary"
                      }`}
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {statRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between rounded-[8px] bg-muted px-2.5 py-2"
                  >
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {row.label}
                    </span>
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${row.badgeCls}`}>
                      {row.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
