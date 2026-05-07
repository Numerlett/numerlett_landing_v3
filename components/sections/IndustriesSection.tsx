import Container from "@/components/Container";

const industries = [
  {
    icon: "🛒",
    title: "E-commerce & D2C",
    description:
      "Full-stack e-commerce platforms, marketplace integrations, and performance marketing for direct-to-consumer brands.",
  },
  {
    icon: "💼",
    title: "B2B SaaS & Tech",
    description:
      "Product-led growth strategies, developer marketing, and enterprise software development for SaaS companies.",
  },
  {
    icon: "🏭",
    title: "Manufacturing & Supply Chain",
    description:
      "SEED inventory system, ERP integrations, and digital transformation for manufacturing businesses.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Wellness",
    description:
      "HIPAA-compliant apps, patient management systems, and digital marketing for healthcare providers.",
  },
  {
    icon: "🎓",
    title: "Education & EdTech",
    description:
      "LMS platforms, ed-tech app development, student acquisition marketing, and content strategies for educators.",
  },
  {
    icon: "🏦",
    title: "Finance & FinTech",
    description:
      "Regulatory-compliant fintech apps, investment analytics platforms, and performance marketing for financial services.",
  },
];

export default function IndustriesSection() {
  return (
    <section
      className="bg-(--nl-grey-light) py-24"
      aria-labelledby="industries-heading"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Industries We Serve
            </div>
            <h2
              id="industries-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Built for Every
              <br />
              Business Vertical
            </h2>
          </div>
          <p className="reveal delay-2 max-w-95 text-[16px] font-light leading-[1.75] text-(--nl-text-secondary)">
            Our tech and marketing expertise spans across industries with deep
            domain understanding.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`reveal ${index ? `delay-${(index % 3) + 1}` : ""} flex gap-5 rounded-(--nl-radius-md) border border-(--nl-border) bg-white p-6 transition-all hover:border-(--nl-green) hover:shadow-(--nl-shadow-md) sm:p-8`}
            >
              <div className="text-[32px]" aria-hidden="true">
                {industry.icon}
              </div>
              <div>
                <h4 className="font-display text-[16px] font-bold">
                  {industry.title}
                </h4>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-(--nl-text-secondary)">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
