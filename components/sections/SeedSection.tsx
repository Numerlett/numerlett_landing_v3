import { BarChart3, Brain, Link2, Signal, Users2 } from "lucide-react";
import Container from "@/components/Container";

const features = [
  {
    title: "Real-Time Inventory Tracking",
    description:
      "Monitor stock levels, movement, and valuation across all warehouses and locations in real time — no delays, no blind spots.",
    icon: Signal,
  },
  {
    title: "AI Demand Forecasting",
    description:
      "Machine learning models predict demand patterns and automatically trigger reorder alerts before you run out of stock.",
    icon: Brain,
  },
  {
    title: "ERP & POS Integration",
    description:
      "Seamlessly connects with Tally, SAP, Zoho, Shopify, and custom ERPs via REST API. Zero manual data entry.",
    icon: Link2,
  },
  {
    title: "Analytics & Profitability Reports",
    description:
      "Turnover ratios, dead stock alerts, carrying cost analysis, and supplier performance — all in one actionable dashboard.",
    icon: BarChart3,
  },
  {
    title: "Multi-Warehouse & Multi-User",
    description:
      "Manage unlimited warehouses and locations with role-based access control — from warehouse staff to C-suite executives.",
    icon: Users2,
  },
];

export default function SeedSection() {
  return (
    <section
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-32"
      id="seed"
      aria-labelledby="seed-heading"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <span
        className="pointer-events-none absolute -bottom-6 -right-6 font-display text-[160px] font-black leading-none tracking-[-10px] text-white/5 sm:-bottom-10 sm:-right-10 sm:text-[220px] lg:text-[280px]"
        aria-hidden="true"
      >
        SEED
      </span>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[rgba(51,175,145,0.3)] bg-[rgba(51,175,145,0.15)] px-4 py-1 text-[12px] font-mono uppercase tracking-[0.06em] text-(--nl-green)">
              <span
                className="pulse-dot h-2 w-2 rounded-full bg-(--nl-green)"
                aria-hidden="true"
              />
              Product · Now Live
            </div>
            <h2
              id="seed-heading"
              className="reveal delay-1 mt-6 font-display text-[clamp(38px,5vw,64px)] font-black leading-[1.05] tracking-[-2px]"
              itemProp="name"
            >
              Meet <span className="text-(--nl-green)">SEED</span>
              <br />
              Smart Inventory.
              <br />
              Smarter Business.
            </h2>
            <p
              className="reveal delay-2 mt-4 max-w-115 text-[17px] font-light leading-[1.8] text-(--nl-grey)"
              itemProp="description"
            >
              <strong className="text-white">SEED</strong> (Smart Enterprise
              Efficiency & Distribution) is NumerLett's flagship AI-powered
              Inventory Management System — built to eliminate stockouts, reduce
              overhead, and give you complete supply chain visibility.
            </p>
            <div className="reveal delay-2 mt-8 border-t border-white/10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`flex gap-4 border-b border-white/10 py-4 ${index === 0 ? "pt-6" : ""}`}
                  >
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md border border-[rgba(51,175,145,0.2)] bg-[rgba(51,175,145,0.12)]">
                      <Icon
                        className="h-4 w-4 text-(--nl-green)"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-[15px] font-semibold text-white">
                        {feature.title}
                      </h5>
                      <p className="mt-1 text-[13.5px] leading-[1.65] text-(--nl-grey)">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="reveal delay-3 mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-(--nl-radius-sm) border-2 border-(--nl-green) bg-(--nl-green) px-9 py-4 text-[15.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-(--nl-green-dark) sm:w-auto"
              >
                Request a Demo <span className="text-base">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-(--nl-radius-sm) border-2 border-(--nl-green) px-9 py-4 text-[15.5px] font-semibold text-(--nl-green) transition-all hover:-translate-y-0.5 hover:bg-(--nl-green) hover:text-white sm:w-auto"
              >
                Get Pricing
              </a>
            </div>
          </div>

          <div className="reveal-right delay-2">
            <div
              className="overflow-hidden rounded-(--nl-radius-lg) border border-white/10 bg-white/5"
              role="img"
              aria-label="SEED inventory management system interface preview"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-[13px] font-semibold text-white/60">
                  SEED — Inventory Management System
                </span>
                <span className="ml-auto font-mono text-[11px] text-(--nl-green)">
                  ● LIVE
                </span>
              </div>
              <div className="p-5">
                <div className="mb-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  <div className="rounded-[10px] border border-white/10 bg-white/5 p-3">
                    <div className="font-mono text-[10px] tracking-[0.04em] text-white/40">
                      Total SKUs
                    </div>
                    <div className="font-display text-[22px] font-extrabold text-white">
                      4,821
                    </div>
                    <div className="font-mono text-[10px] font-semibold text-(--nl-green)">
                      ↑ 12 today
                    </div>
                  </div>
                  <div className="rounded-[10px] border border-white/10 bg-white/5 p-3">
                    <div className="font-mono text-[10px] tracking-[0.04em] text-white/40">
                      Stock Value
                    </div>
                    <div className="font-display text-[22px] font-extrabold text-(--nl-green)">
                      ₹38.4L
                    </div>
                    <div className="font-mono text-[10px] font-semibold text-(--nl-green)">
                      ↑ 4.2%
                    </div>
                  </div>
                  <div className="rounded-[10px] border border-white/10 bg-white/5 p-3">
                    <div className="font-mono text-[10px] tracking-[0.04em] text-white/40">
                      Low Stock
                    </div>
                    <div className="font-display text-[22px] font-extrabold text-[#ffa032]">
                      23
                    </div>
                    <div className="font-mono text-[10px] font-semibold text-[#ffa032]">
                      Needs reorder
                    </div>
                  </div>
                  <div className="rounded-[10px] border border-white/10 bg-white/5 p-3">
                    <div className="font-mono text-[10px] tracking-[0.04em] text-white/40">
                      Orders Today
                    </div>
                    <div className="font-display text-[22px] font-extrabold text-white">
                      142
                    </div>
                    <div className="font-mono text-[10px] font-semibold text-(--nl-green)">
                      ↑ 18%
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-[10px] border border-white/10 bg-white/5">
                  <div className="min-w-160">
                    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] border-b border-white/10 bg-white/5 px-4 py-2">
                      {"Product,SKU,Stock,Value,Status"
                        .split(",")
                        .map((header) => (
                          <span
                            key={header}
                            className="font-mono text-[10px] uppercase tracking-[0.06em] text-white/40"
                          >
                            {header}
                          </span>
                        ))}
                    </div>
                    {[
                      {
                        name: "Premium Widget A",
                        sku: "NL-0041",
                        stock: "1,240",
                        value: "₹4.8L",
                        status: "In Stock",
                        color: "text-(--nl-green)",
                        bg: "bg-[rgba(51,175,145,0.2)]",
                      },
                      {
                        name: "Component Pack B",
                        sku: "NL-0088",
                        stock: "38",
                        value: "₹12.4K",
                        status: "Low",
                        color: "text-[#ffa032]",
                        bg: "bg-[rgba(255,160,50,0.2)]",
                      },
                      {
                        name: "Industrial Kit C",
                        sku: "NL-0124",
                        stock: "892",
                        value: "₹2.1L",
                        status: "In Stock",
                        color: "text-(--nl-green)",
                        bg: "bg-[rgba(51,175,145,0.2)]",
                      },
                      {
                        name: "Module XR-9",
                        sku: "NL-0201",
                        stock: "0",
                        value: "₹0",
                        status: "Out of Stock",
                        color: "text-[#ff5050]",
                        bg: "bg-[rgba(255,80,80,0.2)]",
                      },
                      {
                        name: "Smart Sensor Pro",
                        sku: "NL-0312",
                        stock: "312",
                        value: "₹9.8L",
                        status: "In Stock",
                        color: "text-(--nl-green)",
                        bg: "bg-[rgba(51,175,145,0.2)]",
                      },
                    ].map((row) => (
                      <div
                        key={row.sku}
                        className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] items-center border-b border-white/5 px-4 py-2 last:border-b-0"
                      >
                        <span className="font-mono text-[12px] font-semibold text-white/90">
                          {row.name}
                        </span>
                        <span className="font-mono text-[12px] text-white/70">
                          {row.sku}
                        </span>
                        <span className="font-mono text-[12px] text-white/70">
                          {row.stock}
                        </span>
                        <span className="font-mono text-[12px] text-white/70">
                          {row.value}
                        </span>
                        <span
                          className={`inline-flex w-fit items-center rounded px-2 py-0.5 font-mono text-[10px] font-bold ${row.bg} ${row.color}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
