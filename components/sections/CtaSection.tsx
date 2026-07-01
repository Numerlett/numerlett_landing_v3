import Container from "@/components/Container";

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-24 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="cta-pattern absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <h2
          id="cta-heading"
          className="reveal font-display text-[clamp(36px,5vw,60px)] font-black tracking-[-2px] text-primary-foreground"
        >
          Ready to Build Something
          <br />
          That Actually Ranks?
        </h2>
        <p className="reveal delay-1 mx-auto mt-4 max-w-130 text-[18px] font-light leading-[1.7] text-primary-foreground/80">
          Let&apos;s talk tech, marketing, or SEED. No commitment needed — just a 30-minute strategy call
          to see where we can help.
        </p>
        <div className="reveal delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-brand-sm border-2 border-primary-foreground bg-primary-foreground px-9 py-4 text-[15.5px] font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-primary-foreground"
          >
            Book a Free Strategy Call <span className="text-base">→</span>
          </a>
          <a
            href="#seed"
            className="inline-flex items-center gap-2 rounded-brand-sm border-2 border-primary-foreground/40 px-9 py-4 text-[15.5px] font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            See SEED Demo
          </a>
        </div>
      </Container>
    </section>
  );
}
