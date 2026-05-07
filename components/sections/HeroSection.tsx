import Container from "@/components/Container";

export default function HeroSection() {
  return (
    <header
      className="relative overflow-hidden bg-white pb-16 pt-18 sm:pb-20 sm:pt-22 lg:pt-25"
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
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Technology · Marketing · Software
            </div>
            <h1
              id="hero-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(40px,8vw,84px)] font-black leading-none tracking-[-3px] text-(--nl-text-primary)"
            >
              Where <span className="text-(--nl-green)">Smart</span>
              <br />
              Business
              <br />
              <span className="outline-text">Begins.</span>
            </h1>
            <p className="reveal delay-2 mt-7 max-w-145 text-[18px] font-light leading-[1.75] text-(--nl-text-secondary)">
              End-to-end <strong>Technology Services</strong>,{" "}
              <strong>Performance Marketing</strong>, and proprietary{" "}
              <strong>Software Products</strong> — engineered to grow your
              business faster, smarter, and sustainably.
            </p>
            <div className="reveal delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-(--nl-radius-sm) border-2 border-(--nl-green) bg-(--nl-green) px-9 py-4 text-[15.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-(--nl-green-dark) hover:shadow-(--nl-shadow-green) sm:w-auto"
              >
                Explore Services <span className="text-base">→</span>
              </a>
              <a
                href="#seed"
                className="inline-flex w-full items-center justify-center gap-2 rounded-(--nl-radius-sm) border-2 border-(--nl-border-dark) px-9 py-4 text-[15.5px] font-semibold text-(--nl-text-primary) transition-all hover:-translate-y-0.5 hover:border-(--nl-green) hover:text-(--nl-green) sm:w-auto"
              >
                View SEED Product
              </a>
            </div>
            <div className="reveal delay-4 mt-12 flex flex-col gap-4 border-t border-(--nl-border) pt-8 sm:mt-16 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-(--nl-text-muted)">
                Trusted by
              </span>
              <div className="flex flex-wrap items-center gap-7">
                {"StartupIndia,D2C Brands,SaaS Cos.,Enterprises,SMEs"
                  .split(",")
                  .map((label) => (
                    <span
                      key={label}
                      className="font-display text-[13px] font-bold tracking-[-0.3px] text-(--nl-grey-dark) opacity-50 transition-opacity hover:opacity-100"
                    >
                      {label}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="reveal-right delay-2 flex justify-center lg:justify-end">
            <div
              className="float-y w-full max-w-full rounded-(--nl-radius-lg) border border-(--nl-border) bg-white p-6 shadow-(--nl-shadow-lg) sm:max-w-105"
              role="img"
              aria-label="NumerLett analytics dashboard preview"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="font-mono text-[12px] font-semibold text-(--nl-text-muted)">
                  NumerLett — Dashboard
                </span>
              </div>
              <div className="mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <div className="rounded-[10px] bg-(--nl-grey-light) p-3">
                  <div className="font-mono text-[10px] tracking-[0.04em] text-(--nl-text-muted)">
                    Revenue
                  </div>
                  <div className="font-display text-[18px] font-extrabold text-(--nl-green)">
                    ₹2.4M
                  </div>
                  <div className="text-[10px] font-semibold text-(--nl-green)">
                    ↑ 34%
                  </div>
                </div>
                <div className="rounded-[10px] bg-(--nl-grey-light) p-3">
                  <div className="font-mono text-[10px] tracking-[0.04em] text-(--nl-text-muted)">
                    Leads
                  </div>
                  <div className="font-display text-[18px] font-extrabold text-(--nl-text-primary)">
                    1,284
                  </div>
                  <div className="text-[10px] font-semibold text-(--nl-green)">
                    ↑ 21%
                  </div>
                </div>
                <div className="rounded-[10px] bg-(--nl-grey-light) p-3">
                  <div className="font-mono text-[10px] tracking-[0.04em] text-(--nl-text-muted)">
                    Rank
                  </div>
                  <div className="font-display text-[18px] font-extrabold text-(--nl-text-primary)">
                    #1
                  </div>
                  <div className="text-[10px] font-semibold text-(--nl-green)">
                    ↑ 6 pos
                  </div>
                </div>
              </div>
              <div className="mb-3.5 rounded-[10px] bg-(--nl-grey-light) p-3.5">
                <div className="mb-3 font-mono text-[11px] font-semibold text-(--nl-text-secondary)">
                  Growth vs Target — Q2 2025
                </div>
                <div className="flex h-15 items-end gap-1.5">
                  {[38, 52, 45, 68, 72, 85, 78, 95].map((value, index) => (
                    <div
                      key={`${value}-${index}`}
                      className={`w-full rounded-t ${index < 3 ? "bg-(--nl-grey-mid)" : index < 5 ? "bg-(--nl-green-mid)" : "bg-(--nl-green)"}`}
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between rounded-[8px] bg-(--nl-grey-light) px-2.5 py-2">
                  <span className="text-[11px] font-medium text-(--nl-text-secondary)">
                    SEO Organic Traffic
                  </span>
                  <span className="rounded bg-(--nl-green-light) px-2 py-0.5 text-[10px] font-bold text-(--nl-green)">
                    +148%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[8px] bg-(--nl-grey-light) px-2.5 py-2">
                  <span className="text-[11px] font-medium text-(--nl-text-secondary)">
                    Ad Campaign ROAS
                  </span>
                  <span className="rounded bg-(--nl-green-light) px-2 py-0.5 text-[10px] font-bold text-(--nl-green)">
                    4.2x
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-[8px] bg-(--nl-grey-light) px-2.5 py-2">
                  <span className="text-[11px] font-medium text-(--nl-text-secondary)">
                    Software Uptime
                  </span>
                  <span className="rounded bg-[#e8f4ff] px-2 py-0.5 text-[10px] font-bold text-[#2563eb]">
                    99.98%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
