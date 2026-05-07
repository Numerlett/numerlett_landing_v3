import Container from "@/components/Container";

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden bg-(--nl-green) py-24 text-center"
      aria-labelledby="cta-heading"
    >
      <div className="cta-pattern absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <h2
          id="cta-heading"
          className="reveal font-display text-[clamp(36px,5vw,60px)] font-black tracking-[-2px] text-white"
        >
          Ready to Build Something
          <br />
          That Actually Ranks?
        </h2>
        <p className="reveal delay-1 mx-auto mt-4 max-w-130 text-[18px] font-light leading-[1.7] text-white/80">
          Let's talk tech, marketing, or SEED. No commitment needed — just a
          30-minute strategy call to see where we can help.
        </p>
        <div className="reveal delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-(--nl-radius-sm) border-2 border-white bg-white px-9 py-4 text-[15.5px] font-bold text-(--nl-green) transition-all hover:-translate-y-0.5 hover:bg-transparent hover:text-white"
          >
            Book a Free Strategy Call <span className="text-base">→</span>
          </a>
          <a
            href="#seed"
            className="inline-flex items-center gap-2 rounded-(--nl-radius-sm) border-2 border-white/40 px-9 py-4 text-[15.5px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            See SEED Demo
          </a>
        </div>
      </Container>
    </section>
  );
}
