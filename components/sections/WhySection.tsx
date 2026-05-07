import Container from "@/components/Container";

const reasons = [
  {
    number: "01",
    title: "Integrated Tech + Marketing",
    description:
      "We build your digital product and your digital presence — in sync. Your website ranks on Google because the engineer and the SEO strategist talked before a single line of code was written.",
  },
  {
    number: "02",
    title: "Data at the Core",
    description:
      "Every decision — from tech stack choice to ad spend allocation — is driven by data and analytics, not gut feel or trend-chasing.",
  },
  {
    number: "03",
    title: "Own-IP Software Products",
    description:
      "We don't just consult — we build. SEED and our other products are proof of our technical capability and our ability to productize ideas.",
  },
  {
    number: "04",
    title: "Transparent, Measurable Outcomes",
    description:
      "No vanity metrics. We agree on KPIs upfront — revenue impact, traffic, rankings, or ROI — and report against them religiously.",
  },
];

const skills = [
  { label: "SEO / SEM", value: "96%" },
  { label: "Software Dev", value: "92%" },
  { label: "AI / ML", value: "88%" },
  { label: "Data Analytics", value: "94%" },
  { label: "Brand Strategy", value: "90%" },
  { label: "Content Mktg", value: "93%" },
];

export default function WhySection() {
  return (
    <section
      className="bg-(--nl-grey-light) py-24"
      id="about"
      aria-labelledby="why-heading"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <div className="reveal inline-flex items-center gap-2.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-(--nl-green)">
              <span
                className="h-0.5 w-6 rounded bg-(--nl-green)"
                aria-hidden="true"
              />
              Why NumerLett
            </div>
            <h2
              id="why-heading"
              className="reveal delay-1 mt-4 font-display text-[clamp(32px,4vw,52px)] font-bold leading-[1.1] tracking-[-1.5px]"
            >
              Not just another
              <br />
              agency.
            </h2>
            <p className="reveal delay-2 mt-4 text-[16px] font-light leading-[1.75] text-(--nl-text-secondary)">
              Most agencies do either tech or marketing. We do both — and we
              make them work together. That's the unfair advantage we give our
              clients.
            </p>
            <div className="reveal delay-2 mt-6 border-t border-(--nl-border)">
              {reasons.map((reason) => (
                <div
                  key={reason.number}
                  className="flex gap-5 border-b border-(--nl-border) py-6 transition-all hover:pl-3"
                >
                  <span className="font-mono text-[12px] font-medium text-(--nl-green)">
                    {reason.number}
                  </span>
                  <div>
                    <h4 className="font-display text-[17px] font-bold tracking-[-0.3px]">
                      {reason.title}
                    </h4>
                    <p className="mt-2 text-[14px] leading-[1.7] text-(--nl-text-secondary)">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right delay-2">
            <div
              className="rounded-(--nl-radius-xl) border border-(--nl-border) bg-white p-6 shadow-(--nl-shadow-md) sm:p-8 lg:p-10"
              data-skill-block
            >
              <div className="font-display text-[15px] font-bold text-(--nl-text-secondary)">
                NumerLett Capability Depth
              </div>
              <div className="mt-7 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.label} className="flex items-center gap-3">
                    <span className="min-w-25 text-[13px] font-semibold text-(--nl-text-secondary)">
                      {skill.label}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-(--nl-grey-mid)">
                      <div
                        className="h-full rounded-full bg-(--nl-green)"
                        data-skill={skill.value}
                      />
                    </div>
                    <span className="min-w-8 text-right font-mono text-[12px] font-bold text-(--nl-green)">
                      {skill.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col items-start gap-4 rounded-(--nl-radius-md) border border-(--nl-green-mid) bg-(--nl-green-light) px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-[14px] font-semibold text-(--nl-green-dark)">
                  Ready to see what's possible for your business?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-(--nl-radius-sm) border border-(--nl-green) bg-(--nl-green) px-4 py-2 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-(--nl-green-dark)"
                >
                  Let's Talk <span className="text-base">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
