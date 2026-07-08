import Container from "@/components/Container";
import Image from "next/image";

export default function BuildingRoadSection() {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/building-road.jpeg"
        alt="Building and Road"
        fill
        className="object-cover"
        quality={90}
        priority={false}
      />
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 text-center">
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.05] font-black tracking-[-2px] text-white">
          Charting the Path Forward
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.8] font-light text-white/80">
          Our robust infrastructure and forward-thinking strategies pave the way for sustainable, long-term growth and success in a rapidly evolving digital landscape.
        </p>
      </Container>
    </section>
  );
}
