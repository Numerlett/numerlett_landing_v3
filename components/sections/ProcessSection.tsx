import Container from "@/components/Container";

type Step = { number: string; title: string; description: string };

const steps: Step[] = [
  {
    number: "01",
    title: "Discover",
    description: "Deep-dive audit of your business, market, competitors, and tech stack.",
  },
  {
    number: "02",
    title: "Strategize",
    description: "Tailored roadmap with clear KPIs, timelines, and resource allocation.",
  },
  {
    number: "03",
    title: "Build",
    description: "Agile sprints with weekly demos. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Go-live with full QA, SEO checklist, and performance benchmarking.",
  },
  {
    number: "05",
    title: "Optimize",
    description: "Continuous monitoring, A/B testing, and monthly strategy reviews.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-background py-24" aria-labelledby="process-heading">
      <Container>
        <div className="mx-auto max-w-150 text-center">
          <div className="reveal inline-flex items-center justify-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-primary">
            <span className="h-0.5 w-6 rounded bg-primary" aria-hidden="true" />
            How We Work
          </div>
          <h2
            id="process-heading"
            className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
          >
            Our Proven
            <br />
            5-Step Process
          </h2>
          <p className="reveal delay-2 mt-3 text-[16px] font-light leading-[1.75] text-muted-foreground">
            A structured yet agile methodology that takes you from idea to measurable impact.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="process-rail absolute left-[10%] right-[10%] top-9 hidden h-0.5 md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 text-center md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal ${index ? `delay-${index}` : ""} relative px-4`}
              >
                <div className="font-display mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background text-[20px] font-black text-primary shadow-brand-green transition-all hover:bg-primary hover:text-primary-foreground sm:h-18 sm:w-18 sm:text-[22px]">
                  {step.number}
                </div>
                <h4 className="font-display text-[15px] font-bold">{step.title}</h4>
                <p className="mt-2 text-[13px] leading-[1.6] text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
