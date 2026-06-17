import Image from "next/image";
import Container from "@/components/Container";

type Metric = { value: string; label: string };

type CaseStudy = {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  metrics: Metric[];
};

const cases: CaseStudy[] = [
  {
    tag: "SEO · Content Marketing",
    title: "D2C Fashion Brand: From Page 5 to Position #1",
    description:
      "A Bengaluru-based fashion D2C brand approached us with near-zero organic traffic. In 8 months, we rewrote their content architecture, built 200+ backlinks, and optimized 1,200+ pages.",
    imageSrc: "/images/globe-with-laptop.jpeg",
    metrics: [
      { value: "148%", label: "Organic traffic growth" },
      { value: "#1", label: "Target keyword ranking" },
      { value: "3.4x", label: "Revenue from organic" },
    ],
  },
  {
    tag: "Software Dev · AI",
    title: "Manufacturing Co: SEED Deployment Cuts Inventory Cost by 31%",
    description:
      "A mid-size manufacturer in Pune deployed SEED across 4 warehouses. AI demand forecasting eliminated ₹12L in overstock annually while reducing stockouts by 78%.",
    imageSrc: "/images/tech-brain.jpeg",
    metrics: [
      { value: "31%", label: "Inventory cost reduction" },
      { value: "78%", label: "Stockout reduction" },
      { value: "4.1x", label: "ROI in Year 1" },
    ],
  },
  {
    tag: "PPC · Performance Marketing",
    title: "EdTech Startup: 4.2x ROAS on Google Ads in 90 Days",
    description:
      "An edtech startup burning money on unoptimized Google Ads came to us. We rebuilt the campaign architecture, tightened audience targeting, and introduced dynamic search ads.",
    imageSrc: "/images/business-strategy.jpeg",
    metrics: [
      { value: "4.2x", label: "Return on Ad Spend" },
      { value: "60%", label: "CPA reduction" },
      { value: "2,100", label: "New enrollments / month" },
    ],
  },
  {
    tag: "Mobile Dev · UX Design",
    title: "FinTech App: 0 to 50K Users in 6 Months",
    description:
      "We designed and developed a cross-platform investment tracking app from scratch. Combined with an aggressive ASO and content marketing strategy, it hit 50K downloads in 6 months.",
    imageSrc: "/images/human-with-dog.jpeg",
    metrics: [
      { value: "50K", label: "App downloads" },
      { value: "4.8★", label: "App Store rating" },
      { value: "6mo", label: "Time to market" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-background py-24" id="cases" aria-labelledby="cases-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
              Proven Results
            </div>
            <h2
              id="cases-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Results That
              <br />
              Speak Louder.
            </h2>
          </div>
          <a
            href="#contact"
            className="reveal delay-2 inline-flex items-center gap-2 rounded-brand-sm border border-border-dark px-6 py-3 text-[14px] font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            View All Case Studies <span className="text-base">→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`reveal ${index ? `delay-${(index % 2) + 1}` : ""} overflow-hidden rounded-brand-lg border border-border transition-all hover:-translate-y-1 hover:border-primary hover:shadow-brand-md`}
              itemScope
              itemType="https://schema.org/Article"
            >
              <div className="relative aspect-4/3 flex items-center justify-center bg-muted">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 sm:p-7">
                <span
                  className="inline-block rounded bg-accent px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.06em] text-primary"
                  itemProp="keywords"
                >
                  {item.tag}
                </span>
                <h4
                  className="mt-3 font-display text-[18px] font-bold tracking-[-0.4px]"
                  itemProp="headline"
                >
                  {item.title}
                </h4>
                <p
                  className="mt-2 text-[14px] leading-[1.7] text-muted-foreground"
                  itemProp="description"
                >
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-6">
                  {item.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="font-display text-[24px] font-extrabold tracking-[-0.8px] text-primary">
                        {metric.value}
                      </div>
                      <div className="text-[11.5px] text-text-muted">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
