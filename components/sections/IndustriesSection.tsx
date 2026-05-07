import {
  Briefcase,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/Container";

type Industry = {
  Icon: LucideIcon;
  title: string;
  description: string;
};

const industries: Industry[] = [
  {
    Icon: ShoppingCart,
    title: "E-commerce & D2C",
    description:
      "Full-stack e-commerce platforms, marketplace integrations, and performance marketing for direct-to-consumer brands.",
  },
  {
    Icon: Briefcase,
    title: "B2B SaaS & Tech",
    description:
      "Product-led growth strategies, developer marketing, and enterprise software development for SaaS companies.",
  },
  {
    Icon: Factory,
    title: "Manufacturing & Supply Chain",
    description:
      "SEED inventory system, ERP integrations, and digital transformation for manufacturing businesses.",
  },
  {
    Icon: HeartPulse,
    title: "Healthcare & Wellness",
    description:
      "HIPAA-compliant apps, patient management systems, and digital marketing for healthcare providers.",
  },
  {
    Icon: GraduationCap,
    title: "Education & EdTech",
    description:
      "LMS platforms, ed-tech app development, student acquisition marketing, and content strategies for educators.",
  },
  {
    Icon: Landmark,
    title: "Finance & FinTech",
    description:
      "Regulatory-compliant fintech apps, investment analytics platforms, and performance marketing for financial services.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="bg-muted py-24" aria-labelledby="industries-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
              <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
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
          <p className="reveal delay-2 max-w-95 text-[16px] font-light leading-[1.75] text-muted-foreground">
            Our tech and marketing expertise spans across industries with deep domain understanding.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              className={`reveal ${index ? `delay-${(index % 3) + 1}` : ""} flex gap-5 rounded-brand-md border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-brand-md sm:p-8`}
            >
              <div className="text-primary" aria-hidden="true">
                <industry.Icon className="size-6" />
              </div>
              <div>
                <h4 className="font-display text-[16px] font-bold">{industry.title}</h4>
                <p className="mt-2 text-[13.5px] leading-[1.7] text-muted-foreground">
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
