import Container from "@/components/Container";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep-dive audit of your business, market, competitors, and tech stack.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "Tailored roadmap with clear KPIs, timelines, and resource allocation.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Agile sprints with weekly demos. You see progress, not promises.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Go-live with full QA, SEO checklist, and performance benchmarking.",
  },
  {
    number: "05",
    title: "Optimize",
    description:
      "Continuous monitoring, A/B testing, and monthly strategy reviews.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24" aria-labelledby="process-heading">
      <Container>
        <div className="mx-auto max-w-150 text-center">
          <div className="reveal inline-flex items-center justify-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
            <span
              className="h-0.5 w-6 rounded bg-(--nl-green)"
              aria-hidden="true"
            />
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
          <p className="reveal delay-2 mt-3 text-[16px] font-light leading-[1.75] text-(--nl-text-secondary)">
            A structured yet agile methodology that takes you from idea to
            measurable impact.
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
                <div className="mx-auto mb-5 flex h-18 w-18 items-center justify-center rounded-full border-2 border-(--nl-green) bg-white font-display text-[22px] font-black text-(--nl-green) shadow-(--nl-shadow-green) transition-all hover:bg-(--nl-green) hover:text-white">
                  {step.number}
                </div>
                <h4 className="font-display text-[15px] font-bold">
                  {step.title}
                </h4>
                <p className="mt-2 text-[13px] leading-[1.6] text-(--nl-text-muted)">
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
